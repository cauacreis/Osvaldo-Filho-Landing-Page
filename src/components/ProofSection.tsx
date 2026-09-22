'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'
import { FEEDBACK_REVIEWS } from '../config'

interface ProofSectionProps {
  onOpenTriage?: () => void
}

export const ProofSection: React.FC<ProofSectionProps> = () => {
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const reviews = FEEDBACK_REVIEWS

  const nextSlide = useCallback(() => {
    if (!reviews || reviews.length <= 1) return
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }, [reviews])

  const prevSlide = useCallback(() => {
    if (!reviews || reviews.length <= 1) return
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [reviews])

  // Auto-rotating timer with pause on hover/interaction
  useEffect(() => {
    if (isPaused || activeZoomImage !== null || !reviews || reviews.length <= 1) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused, activeZoomImage, nextSlide, reviews])

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveZoomImage(null)
      }
    }
    if (activeZoomImage) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeZoomImage])

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    touchStartX.current = null
  }

  if (!reviews || reviews.length === 0) {
    return null
  }

  const currentReview = reviews[currentIndex] || reviews[0]

  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-[#05070B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            A prova real de quem instala nossas peças no consultório.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            Sem depoimentos fabricados: veja o que cirurgiões parceiros mandam no nosso WhatsApp após a cimentação.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* AUTO-ROTATING FEEDBACK CAROUSEL (STANDARDIZED LOCKED SIZE)   */}
        {/* ============================================================ */}
        <div
          className="relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Controls bar */}
          <div className="flex items-center justify-center gap-3 mb-6 px-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/40 flex items-center justify-center text-slate-300 hover:text-amber-300 transition-colors focus:outline-none cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Progress / indicator dots */}
            <div className="flex items-center gap-1.5 px-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'w-6 bg-gradient-to-r from-amber-400 to-amber-500 shadow-gold-glow' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Ir para print ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/40 flex items-center justify-center text-slate-300 hover:text-amber-300 transition-colors focus:outline-none cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Active Carousel Card (Strict Standard Fixed Height on Desktop and Mobile) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-900 to-[#0b141a] border border-amber-500/30 p-6 sm:p-8 shadow-2xl h-[780px] sm:h-[760px] lg:h-[480px] flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentReview.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full h-full flex items-center"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center w-full">
                  
                  {/* WhatsApp Screenshot Showcase (Standardized Fixed Dimension Box) */}
                  <div className="lg:col-span-6 flex flex-col items-center justify-center">
                    <div
                      onClick={() => setActiveZoomImage(currentReview.image)}
                      className="group/print relative w-full max-w-sm rounded-2xl overflow-hidden bg-[#0b141a] border border-amber-500/30 shadow-2xl cursor-pointer transition-transform hover:scale-[1.02]"
                    >
                      {/* WhatsApp Window Header Bar */}
                      <div className="bg-[#1f2c34] px-3.5 py-2 flex items-center justify-between border-b border-[#2a3942] text-[11px] text-slate-300 shrink-0">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="font-semibold text-white">WhatsApp</span>
                        </div>
                        <span className="text-amber-400 text-[10px] flex items-center gap-1">
                          <ZoomIn className="w-3 h-3 text-amber-400" />
                          Toque p/ ampliar
                        </span>
                      </div>

                      {/* Image container with locked height preventing vertical layout shifts */}
                      <div className="relative p-2 bg-[#0b141a] flex items-center justify-center h-[300px] sm:h-[320px] w-full shrink-0 overflow-hidden">
                        <img
                          src={currentReview.image}
                          alt="Print da conversa real no WhatsApp"
                          className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-sm"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/print:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                          <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                            <ZoomIn className="w-4 h-4" />
                            Ver print em tamanho real
                          </span>
                        </div>
                      </div>

                      {/* Quick tap footer for mobile */}
                      <div className="bg-[#111b21] px-3 py-1.5 border-t border-[#2a3942] text-center text-[10px] text-slate-400 sm:hidden shrink-0">
                        Toque na imagem para ler a conversa completa
                      </div>
                    </div>
                  </div>

                  {/* Review Details & Clinical Takeaways (Locked Height & Flex Standard) */}
                  <div className="lg:col-span-6 flex flex-col justify-between text-left h-full lg:h-[360px]">
                    
                    <div className="flex flex-col gap-2.5 sm:gap-3">
                      {/* Stars */}
                      <div className="flex items-center gap-1 text-amber-400 shrink-0">
                        {[...Array(currentReview.stars || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>

                      {/* Highlight */}
                      {currentReview.highlight && (
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-snug min-h-[3rem] sm:min-h-[2.5rem] flex items-center shrink-0">
                          {currentReview.highlight}
                        </h3>
                      )}

                      {/* Excerpt quote */}
                      {currentReview.quote && (
                        <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800 h-[170px] sm:h-[150px] lg:h-[160px] flex flex-col overflow-y-auto scrollbar-none">
                          <p className="w-full my-auto">{currentReview.quote}</p>
                        </blockquote>
                      )}
                    </div>

                    {/* Dentist info footer */}
                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 mt-auto shrink-0">
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-white">
                          {currentReview.dentistType || 'Cirurgião-Dentista Parceiro'}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {currentReview.clinicCity || 'São Paulo - SP'} • Parceria ativa
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveZoomImage(currentReview.image)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                      >
                        <span>Ver original</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Selector Strip */}
          <div className="mt-5 flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {reviews.map((rev, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={rev.id}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className={`relative shrink-0 rounded-xl overflow-hidden border-2 transition-all p-1 bg-slate-900 ${
                    isActive
                      ? 'border-amber-400 scale-105 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                  }`}
                  aria-label={`Ver print ${idx + 1}`}
                >
                  <img
                    src={rev.image}
                    alt={`Miniatura print ${idx + 1}`}
                    className="w-16 h-12 object-cover object-top rounded-lg"
                  />
                  {isActive && (
                    <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Mobile swipe hint */}
          <p className="sm:hidden text-center mt-3 text-xs text-slate-400">
            ← Deslize para o lado para ver outros prints →
          </p>
        </div>
      </div>

      {/* Full Resolution Lightbox Modal */}
      <AnimatePresence>
        {activeZoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveZoomImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-xl w-full max-h-[92vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveZoomImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-amber-400 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="bg-[#0b141a] p-2 rounded-2xl border border-amber-500/40 shadow-2xl overflow-hidden max-h-[80vh] flex items-center justify-center">
                <img
                  src={activeZoomImage}
                  alt="Print completo da conversa no WhatsApp"
                  className="max-h-[76vh] w-auto max-w-full rounded-xl object-contain"
                />
              </div>

              <p className="mt-3 text-xs text-slate-400 text-center">
                Print autêntico de comunicação técnica no WhatsApp do Laboratório Lourenço
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

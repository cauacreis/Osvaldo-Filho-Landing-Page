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

          {/* Active Carousel Card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#0B0E14] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentReview.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 25 : -25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -25 : 25 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
                  
                  {/* WhatsApp Screenshot Showcase (Clean mobile frame presentation) */}
                  <div className="lg:col-span-6 flex items-center justify-center w-full">
                    <div
                      onClick={() => setActiveZoomImage(currentReview.image)}
                      className="group/print relative w-full max-w-md h-[340px] sm:h-[380px] lg:h-[400px] rounded-2xl overflow-hidden bg-[#05070B] border border-white/10 shadow-xl cursor-pointer transition-all hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] flex items-center justify-center p-2.5"
                    >
                      <img
                        src={currentReview.image}
                        alt="Print da conversa real com cirurgião-dentista"
                        className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl transition-transform duration-300 group-hover/print:scale-[1.02]"
                        loading="lazy"
                      />
                      
                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/print:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xl">
                          <ZoomIn className="w-4 h-4" />
                          Ampliar Depoimento
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Details & Editorial Flow */}
                  <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-5">
                    
                    {/* Top Row: Stars + Verified Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(currentReview.stars || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono text-amber-400/80 uppercase tracking-wider">
                        Depoimento Verificado
                      </span>
                    </div>

                    {/* Headline */}
                    {currentReview.highlight && (
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                        {currentReview.highlight}
                      </h3>
                    )}

                    {/* Editorial Pull Quote (Seamless & Harmonious) */}
                    {currentReview.quote && (
                      <div className="relative pl-4 sm:pl-5 border-l-2 border-amber-400/60 py-1">
                        <p className="text-sm sm:text-base text-slate-300 italic font-normal leading-relaxed">
                          {currentReview.quote}
                        </p>
                      </div>
                    )}

                    {/* Dentist info footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                          ★
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white">
                            {currentReview.dentistType || 'Cirurgião-Dentista Parceiro'}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {currentReview.clinicCity || 'Goiás - GO'} • Parceria ativa de bancada
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveZoomImage(currentReview.image)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 py-1.5 px-3 rounded-lg hover:bg-white/5 transition-all cursor-pointer shrink-0"
                      >
                        <span>Ver print original</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Selector Strip (Unclipped with proper padding & layout) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-2 px-1">
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
                  className={`group relative flex items-center gap-3 px-3.5 py-2 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-amber-400 bg-amber-500/15 shadow-[0_0_20px_rgba(245,158,11,0.25)] text-white ring-1 ring-amber-400/60'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                  aria-label={`Ver print ${idx + 1}`}
                >
                  <div className="w-8 h-10 rounded-lg overflow-hidden bg-slate-900 border border-slate-700/60 shrink-0 flex items-center justify-center">
                    <img
                      src={rev.image}
                      alt={`Miniatura print ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-white leading-tight">
                      {rev.dentistType || `Depoimento ${idx + 1}`}
                    </span>
                    <span className="block text-[10px] text-amber-400 font-medium mt-0.5">
                      Caso Concluído
                    </span>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)] shrink-0 ml-1" />
                  )}
                </button>
              )
            })}
          </div>
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

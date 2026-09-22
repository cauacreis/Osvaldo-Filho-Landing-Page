import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  MessageSquare,
  Star,
  ZoomIn,
  X,
  Send,
  Award,
  Users,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'
import { FEEDBACK_REVIEWS } from '../config'
import { TiltCard } from './ui/TiltCard'

interface ProofSectionProps {
  onOpenTriage: () => void
}

function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 1600,
}: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = performance.now()

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(updateCounter)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(updateCounter)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration, hasAnimated])

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onOpenTriage }) => {
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const reviews = FEEDBACK_REVIEWS

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }, [reviews.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [reviews.length])

  // Auto-rotating timer with pause on hover
  useEffect(() => {
    if (isPaused || reviews.length <= 1) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused, nextSlide, reviews.length])

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    touchStartX.current = null
  }

  const currentReview = reviews[currentIndex]

  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-[#06090e] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            <span>Resultados e Credibilidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            A confiança de quem instala nossas próteses todo dia.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Sem depoimentos fabricados: veja o que cirurgiões parceiros mandam no nosso WhatsApp após a cimentação no consultório.
          </p>
        </motion.div>

        {/* Counter Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TiltCard
              glowColor="rgba(20, 184, 166, 0.2)"
              className="bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-5 sm:p-7 border border-slate-800/80 hover:border-teal-500/40 text-center flex flex-col items-center justify-center shadow-lg h-full"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-3 shadow-md">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                <AnimatedCounter target={1000} prefix="+" />
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                Próteses entregues
              </p>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TiltCard
              glowColor="rgba(20, 184, 166, 0.2)"
              className="bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-5 sm:p-7 border border-slate-800/80 hover:border-teal-500/40 text-center flex flex-col items-center justify-center shadow-lg h-full"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-3 shadow-md">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                <AnimatedCounter target={30} prefix="+" />
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                Dentistas parceiros
              </p>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TiltCard
              glowColor="rgba(20, 184, 166, 0.2)"
              className="bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-5 sm:p-7 border border-slate-800/80 hover:border-teal-500/40 text-center flex flex-col items-center justify-center shadow-lg h-full"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-3 shadow-md">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Digital & Físico
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                Scanner STL ou moldagem
              </p>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TiltCard
              glowColor="rgba(20, 184, 166, 0.2)"
              className="bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-5 sm:p-7 border border-slate-800/80 hover:border-teal-500/40 text-center flex flex-col items-center justify-center shadow-lg h-full"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-3 shadow-md">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                <AnimatedCounter target={100} suffix="%" />
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                Suporte direto no WhatsApp
              </p>
            </TiltCard>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* AUTO-ROTATING FEEDBACK CAROUSEL WITH WHATSAPP PRINTS         */}
        {/* ============================================================ */}
        <div
          className="relative mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header row with badge and carousel controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Depoimentos Reais
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                O que dizem os dentistas parceiros
              </h3>
            </div>

            {/* Navigation buttons and pause indicator */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="text-xs text-slate-400 hidden md:inline">
                {isPaused ? 'Pausado ao passar o mouse' : 'Avanço automático'}
              </span>

              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-200 hover:text-white transition-colors focus:outline-none"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1)
                      setCurrentIndex(idx)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'w-6 bg-teal-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-200 hover:text-white transition-colors focus:outline-none"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Carousel Card with smooth transition */}
          <div className="relative min-h-[380px] sm:min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentReview.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="bg-gradient-to-br from-slate-900/90 via-slate-900 to-teal-950/40 rounded-3xl p-6 sm:p-10 border border-teal-500/30 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left: WhatsApp Screenshot preview with zoom action */}
                    <div className="lg:col-span-4 flex flex-col items-center">
                      <div
                        onClick={() => setActiveZoomImage(currentReview.image)}
                        className="group/print relative w-full max-w-[260px] aspect-[9/16] max-h-[340px] rounded-2xl overflow-hidden bg-slate-950 border border-teal-500/40 shadow-xl cursor-pointer"
                      >
                        <img
                          src={currentReview.image}
                          alt="Print da conversa real no WhatsApp"
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/print:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white opacity-0 group-hover/print:opacity-100 transition-opacity gap-2 p-4 text-center">
                          <span className="w-10 h-10 rounded-full bg-teal-500/90 text-slate-950 flex items-center justify-center shadow-lg">
                            <ZoomIn className="w-5 h-5" />
                          </span>
                          <span className="text-xs font-bold text-white bg-slate-950/80 px-3 py-1 rounded-full border border-white/20">
                            Clique para ler print completo
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-teal-500/30 flex items-center justify-between text-[11px] text-teal-300">
                          <span className="font-semibold flex items-center gap-1">
                            <ZoomIn className="w-3.5 h-3.5 text-teal-400" />
                            Toque para ampliar
                          </span>
                          <span className="text-[10px] text-slate-400">WhatsApp</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Detailed quote, clinical highlights and partner details */}
                    <div className="lg:col-span-8 flex flex-col justify-between text-left space-y-5">
                      
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold">
                          <span className="w-2 h-2 rounded-full bg-teal-400" />
                          <span>{currentReview.badge}</span>
                        </div>

                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(currentReview.stars || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* Main Quote */}
                      <blockquote className="text-base sm:text-xl font-medium text-slate-100 italic leading-relaxed bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 shadow-inner">
                        {currentReview.quote}
                      </blockquote>

                      {/* Key tags */}
                      <div className="flex flex-wrap gap-2">
                        {currentReview.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-950/60 border border-teal-500/25 text-xs text-teal-200 font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Dentist info footer */}
                      <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold text-white">
                            {currentReview.dentistType}
                          </p>
                          <p className="text-xs text-slate-400">
                            {currentReview.clinicCity || 'São Paulo - SP'} • Parceria ativa com o laboratório
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveZoomImage(currentReview.image)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors"
                        >
                          <span>Abrir imagem original</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Swipe indicator for mobile */}
          <div className="sm:hidden text-center mt-3 text-xs text-slate-400">
            ← Deslize para navegar entre os feedbacks →
          </div>
        </div>

        {/* Technical Responsible Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl mb-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-3 flex justify-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-950 border border-teal-500/30 shadow-lg">
                <img
                  src="/assets/osvaldo-portrait.webp"
                  alt="Osvaldo Lourenço Filho"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="sm:col-span-9 text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Supervisão Direta</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Osvaldo Lourenço Filho acompanha o seu caso de ponta a ponta.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Aqui você não fala com robôs ou atendentes que não entendem de odontologia. Dúvidas sobre preparo, término cervical e espaço oclusal são alinhadas diretamente com quem está na bancada.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Action Trigger */}
        <div className="text-center">
          <button
            type="button"
            onClick={onOpenTriage}
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-base rounded-2xl shadow-[0_0_25px_rgba(20,184,166,0.35)] active:scale-95 transition-all"
          >
            <span>Enviar caso para análise com o Osvaldo</span>
            <Send className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Full Screenshot Inspection */}
      <AnimatePresence>
        {activeZoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveZoomImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveZoomImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeZoomImage}
                alt="Print da conversa real no WhatsApp"
                className="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-slate-700"
              />
              <p className="mt-3 text-xs text-slate-400">
                Print autêntico de comunicação técnica no WhatsApp do Laboratório Lourenço
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

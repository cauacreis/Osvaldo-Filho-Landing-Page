import React from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, ShieldCheck, ArrowDownRight, Sparkles, Award } from 'lucide-react'

interface HeroProps {
  onOpenTriage: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenTriage }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center bg-[#06090e] overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* ========================================================================= */}
      {/* Full Width Edge-to-Edge Studio Background with Osvaldo on the right       */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/assets/osvaldo-studio.webp"
          alt="Osvaldo Lourenço Filho - Laboratório Lourenço"
          className="w-full h-full object-cover object-[78%_center] md:object-[82%_center] lg:object-[84%_center] opacity-90 transition-opacity duration-1000"
          loading="eager"
        />

        {/* Sophisticated Dark Gradient Overlays for Flawless Contrast */}
        {/* Left side deep dark gradient for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06090e] via-[#06090e]/90 to-transparent sm:via-[#06090e]/75 md:to-transparent" />
        
        {/* Top gradient for navbar transition */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#06090e] via-[#06090e]/80 to-transparent" />
        
        {/* Bottom gradient transitioning into PainPoints section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#06090e] via-[#06090e]/70 to-transparent" />

        {/* Ambient colored lighting glows */}
        <div className="absolute top-1/4 left-1/12 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: High Impact Headline & Action Area */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-6 sm:pt-0">
            
            {/* 1. Glowing Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/80 border border-teal-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(20,184,166,0.15)] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-teal-200 tracking-wide">
                Prótese Dental de Alta Precisão para Cirurgiões-Dentistas
              </span>
            </motion.div>

            {/* 2. Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance"
            >
              Seu planejamento merece uma prótese{' '}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-teal-400 bg-clip-text text-transparent">
                à altura do caso.
              </span>
            </motion.h1>

            {/* 3. Subheadline com a promessa principal */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Transformamos o planejamento do dentista em próteses com foco em{' '}
              <strong className="font-semibold text-white">adaptação</strong>,{' '}
              <strong className="font-semibold text-white">estética</strong> e{' '}
              <strong className="font-semibold text-white">previsibilidade</strong>.
            </motion.p>

            {/* 4. Action Area: Primary Button-in-Button + Secondary Link */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                type="button"
                onClick={onOpenTriage}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-4 bg-teal-500 hover:bg-teal-400 active:scale-[0.98] text-slate-950 font-bold text-base sm:text-lg rounded-2xl shadow-[0_0_30px_rgba(20,184,166,0.35)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>Enviar caso para análise</span>
                <span className="w-9 h-9 rounded-xl bg-slate-950/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <Send className="w-4 h-4 text-slate-950" />
                </span>
              </button>

              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 backdrop-blur-md rounded-2xl shadow-xs transition-colors"
              >
                <span>Ver casos clínicos reais</span>
                <ArrowDownRight className="w-4 h-4 text-teal-400" />
              </a>
            </motion.div>

            {/* 5. Microprova & Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 text-teal-300 text-[11px] font-bold border border-teal-500/40">
                    OL
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-900 text-white text-[11px] font-bold border border-teal-500/40">
                    LL
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-slate-950 text-[11px] font-bold">
                    ★
                  </span>
                </div>
                <span className="font-semibold text-white">
                  +1.000 próteses entregues • +30 dentistas parceiros
                </span>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  Fluxo Digital & Convencional
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  Coleta e Entrega na Região
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Floating Micro-Proof Badges overlaying the Osvaldo Studio visual */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex flex-col justify-end lg:h-[580px] pointer-events-none">
            
            {/* Floating Card 1: Coroa Cerâmica E.max */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:absolute lg:top-8 lg:right-4 pointer-events-auto mb-4 lg:mb-0"
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-slate-900/85 backdrop-blur-xl border border-teal-500/30 p-3 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.6)] flex items-center gap-3 max-w-[240px]"
              >
                <img
                  src="/assets/case-coroa-estetica.webp"
                  alt="Coroa Cerâmica E.max"
                  className="w-12 h-12 rounded-xl object-cover border border-teal-500/40 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-teal-300 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-teal-400" />
                    <span>Cerâmica Pura</span>
                  </div>
                  <p className="text-xs font-bold text-white leading-snug">Selamento Marginal Passivo</p>
                  <p className="text-[10px] text-slate-400">Adaptação em Troquel</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Card 2: Carga Imediata */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:absolute lg:bottom-28 lg:left-0 pointer-events-auto mb-4 lg:mb-0"
            >
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="bg-slate-900/85 backdrop-blur-xl border border-amber-500/30 p-3 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.6)] flex items-center gap-3 max-w-[260px]"
              >
                <img
                  src="/assets/case-protocolo-finalizado.webp"
                  alt="Protocolo de Carga Imediata"
                  className="w-12 h-12 rounded-xl object-cover border border-amber-500/40 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>Carga Imediata</span>
                  </div>
                  <p className="text-xs font-bold text-white leading-snug">Passividade Biomecânica</p>
                  <p className="text-[10px] text-slate-400">Reforço com Barra Metálica</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Card 3: Responsável Técnico Direct Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:absolute lg:bottom-4 lg:right-6 pointer-events-auto"
            >
              <div className="bg-slate-950/90 backdrop-blur-xl border border-white/15 px-4 py-3 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.7)] flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0">
                  <img
                    src="/assets/logo.webp"
                    alt="Laboratório Lourenço"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Osvaldo Lourenço Filho</p>
                  <p className="text-[10px] text-teal-400 font-medium">Responsável Técnico • Contato Direto</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}

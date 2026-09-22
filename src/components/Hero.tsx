import React from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, ShieldCheck, ArrowDownRight } from 'lucide-react'

interface HeroProps {
  onOpenTriage: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenTriage }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center bg-[#06090e] overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* ========================================================================= */}
      {/* Full Width Edge-to-Edge Studio Background with Osvaldo on the right       */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/assets/osvaldo-studio.webp"
          alt="Osvaldo Lourenço Filho - Laboratório Lourenço"
          className="w-full h-full object-cover object-[73%_top] sm:object-[73%_center] lg:object-[74%_center] opacity-90 transition-opacity duration-1000"
          loading="eager"
        />

        {/* Sophisticated Dark Gradient Overlays for Flawless Contrast */}
        {/* Responsive gradient: On mobile top-to-bottom protects text; on desktop left-to-right protects text while highlighting Osvaldo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06090e]/95 via-[#06090e]/85 to-[#06090e]/95 lg:bg-gradient-to-r lg:from-[#06090e] lg:via-[#06090e]/85 lg:to-transparent" />
        
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
              Sem ajuste exaustivo na cadeira e sem atraso na entrega. Próteses fixas, cerâmicas e protocolos com alinhamento direto no WhatsApp do responsável técnico.
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

          {/* Right Column: Clean area showcasing Osvaldo's studio portrait without badge obstructions */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" aria-hidden="true" />

        </div>
      </div>
    </section>
  )
}

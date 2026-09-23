'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, ShieldCheck, ArrowDownRight } from 'lucide-react'

import { LAB_CONFIG, getPricingTableWhatsAppLink } from '../config'

interface HeroProps {
  onOpenTriage: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenTriage }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center bg-[#05070B] overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070B]/95 via-[#05070B]/85 to-[#05070B]/95 lg:bg-gradient-to-r lg:from-[#05070B] lg:via-[#05070B]/85 lg:to-transparent" />
        
        {/* Top gradient for navbar transition */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#05070B] via-[#05070B]/80 to-transparent" />
        
        {/* Bottom gradient transitioning into PainPoints section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#05070B] via-[#05070B]/70 to-transparent" />

        {/* Ambient luxury gold lighting glows */}
        <div className="absolute top-1/4 left-1/12 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-yellow-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: High Impact Headline & Action Area */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-6 sm:pt-0">
            {/* Editorial Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold tracking-wide uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Prótese Dental de Alta Precisão • B2B Clínico</span>
            </motion.div>

            {/* Primary Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance"
            >
              Seu planejamento merece uma prótese{' '}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                à altura do caso.
              </span>
            </motion.h1>

            {/* Subheadline com a promessa principal */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Sem ajuste exaustivo na cadeira e sem atraso na entrega. Próteses fixas, cerâmicas e protocolos com alinhamento direto no WhatsApp do responsável técnico.
            </motion.p>

            {/* Action Area: Dual-Tier CTAs (Nível 1 Imediato vs Nível 2 Descoberta) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6"
            >
              {/* Nível 1: Decisão Imediata / Enviar Caso */}
              <button
                type="button"
                onClick={onOpenTriage}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-3 px-6 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] text-slate-950 font-bold text-sm sm:text-base rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <span>Enviar Caso / Arquivo STL</span>
                <span className="w-8 h-8 rounded-xl bg-slate-950/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <Send className="w-4 h-4 text-slate-950" />
                </span>
              </button>

              {/* Nível 2: Descoberta / Tabela de Preços (Baixa Fricção) */}
              <a
                href={getPricingTableWhatsAppLink('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-bold text-amber-300 hover:text-amber-200 bg-slate-900/80 hover:bg-slate-800/90 border border-amber-500/30 hover:border-amber-400/60 backdrop-blur-md rounded-2xl shadow-md transition-all cursor-pointer"
              >
                <span>Solicitar Tabela de Valores e Prazos</span>
                <ArrowDownRight className="w-4 h-4 text-amber-400" />
              </a>
            </motion.div>

            {/* Risk Reversal / Garantia de Entrada */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-8 p-3 px-4 rounded-xl bg-slate-900/60 border border-amber-500/25 flex items-center gap-2.5 text-xs text-amber-200/90 max-w-xl"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong className="text-amber-300 font-bold">Garantia Lourenço:</strong> {LAB_CONFIG.riskReversal}
              </span>
            </motion.div>

            {/* Microprova & Trust Metrics Bar with Clear Logistics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 text-amber-300 text-[11px] font-bold border border-amber-500/40">
                    OL
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-950 text-amber-200 text-[11px] font-bold border border-amber-500/40">
                    LL
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-400 text-slate-950 text-[11px] font-bold">
                    ★
                  </span>
                </div>
                <span className="font-semibold text-white">
                  {LAB_CONFIG.metrics.deliveredProstheses} próteses entregues • {LAB_CONFIG.metrics.partnerDentists} dentistas parceiros
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Fluxo Digital STL & Convencional
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Coleta Grande SP • Sedex Brasil
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

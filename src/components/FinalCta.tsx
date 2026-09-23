'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Send, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'

import { getPricingTableWhatsAppLink } from '../config'

interface FinalCtaProps {
  onOpenTriage: () => void
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTriage }) => {
  return (
    <section className="py-24 sm:py-36 bg-gradient-to-br from-[#05070B] via-amber-950/40 to-[#05070B] text-white relative overflow-hidden">
      {/* Glow rings & ambient lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/15 blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto mb-6"
        >
          Traga previsibilidade para o seu próximo caso.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal"
        >
          Chega de perder tempo desgastando peças ou remarcando pacientes. Envie o seu caso e alinhe tudo diretamente no WhatsApp com o Osvaldo.
        </motion.p>

        {/* Dual-Tier Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <button
            type="button"
            onClick={onOpenTriage}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 py-5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-base sm:text-lg rounded-2xl shadow-[0_0_35px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] active:scale-95 transition-all cursor-pointer"
          >
            <span>Enviar caso para o Osvaldo</span>
            <span className="w-8 h-8 rounded-xl bg-slate-950/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <Send className="w-4 h-4 text-slate-950" />
            </span>
          </button>

          <a
            href={getPricingTableWhatsAppLink('final_cta')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-sm font-bold shadow-md transition-all cursor-pointer"
          >
            <span>Solicitar Tabela de Valores e Prazos</span>
          </a>
        </motion.div>

        {/* Microcopy anti-anxiety guarantees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Sem compromisso inicial
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            Resposta técnica rápida
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Coleta Grande SP • Sedex Brasil
          </span>
        </motion.div>

      </div>
    </section>
  )
}

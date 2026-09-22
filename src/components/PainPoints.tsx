import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, MessageSquareOff, SlidersHorizontal, ArrowRight, ShieldCheck } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface PainPointsProps {
  onOpenTriage: () => void
}

export const PainPoints: React.FC<PainPointsProps> = ({ onOpenTriage }) => {
  const pains = [
    {
      icon: SlidersHorizontal,
      title: 'Retrabalho e desgaste na cadeira',
      description:
        'Perder 30 a 40 minutos desgastando ponto de contato ou refazendo oclusão em peça que deveria vir perfeitamente adaptada.',
      impact: 'Consome seu tempo clínico e atrasa todos os outros pacientes do dia.',
    },
    {
      icon: Clock,
      title: 'Atraso na entrega e paciente esperando',
      description:
        'A promessa de entrega não é cumprida. O paciente já está no consultório ou anestesiado e a prótese ainda não chegou.',
      impact: 'Gera estresse imediato e queima a confiança que você levou anos para construir.',
    },
    {
      icon: MessageSquareOff,
      title: 'Falta de comunicação quando surge dúvida',
      description:
        'Dúvida de preparo, término cervical ou espaço interoclusal que o laboratório decide sozinho ou demora para responder.',
      impact: 'Você só descobre o erro quando abre a caixa de entrega na frente do paciente.',
    },
  ]

  return (
    <section id="dores" className="py-20 sm:py-28 bg-[#080d17] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-300 text-xs font-bold tracking-wider uppercase mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>O Gargalo da Rotina Clínica</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Quando o laboratório falha, o prejuízo sobra para o seu consultório.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Na reabilitação oral, não há espaço para surpresas na hora de instalar. Cada ajuste inesperado custa horas de cadeira e desgasta a relação com o paciente.
          </p>
        </motion.div>

        {/* 3 Sharp Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {pains.map((pain, index) => {
            const Icon = pain.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard
                  glowColor="rgba(239, 68, 68, 0.15)"
                  className="h-full bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-red-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-red-200 transition-colors">
                      {pain.title}
                    </h3>
                    
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {pain.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-start gap-2 text-xs font-medium text-amber-300/90">
                    <span className="font-bold text-amber-400 shrink-0">Impacto:</span>
                    <span>{pain.impact}</span>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* The Solution Pivot Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl bg-gradient-to-r from-teal-950/80 via-slate-900 to-teal-950/80 border border-teal-500/35 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-1">
                A Alternativa Definitiva
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                No Laboratório Lourenço, você conversa direto com o Osvaldo.
              </h3>
              <p className="mt-1 text-sm text-slate-300 max-w-2xl font-normal">
                Alinhamos preparo, oclusão e cronograma antes de fresar. O trabalho entra com assentamento passivo e sem surpresas na cadeira.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenTriage}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] active:scale-95 whitespace-nowrap"
          >
            <span>Enviar caso para análise</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}

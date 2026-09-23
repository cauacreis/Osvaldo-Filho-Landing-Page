'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, MessageSquareOff, SlidersHorizontal, ShieldCheck } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface PainPointsProps {
  onOpenTriage?: () => void
}

export const PainPoints: React.FC<PainPointsProps> = () => {
  const painContrasts = [
    {
      icon: SlidersHorizontal,
      marketPain: 'Retrabalho e desgaste na cadeira',
      solutionTitle: 'Zero desgaste de cadeira',
      solutionText:
        'Peças com assentamento passivo e pontos de contato calibrados no troquel e articulador. É descer da bancada e cimentar.',
    },
    {
      icon: Clock,
      marketPain: 'Atraso na entrega e paciente esperando',
      solutionTitle: 'Cronograma de entrega rigoroso',
      solutionText:
        'Acompanhamento ativo da sua data clínica. O paciente senta na cadeira e o trabalho já está no consultório pronto para instalar.',
    },
    {
      icon: MessageSquareOff,
      marketPain: 'Dúvidas decididas sem falar com você',
      solutionTitle: 'Alinhamento direto no WhatsApp',
      solutionText:
        'Você conversa diretamente com o Osvaldo antes de qualquer fresagem para validar preparo, término e espaço interoclusal.',
    },
  ]

  return (
    <section id="dores" className="py-20 sm:py-28 bg-[#06090e] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Quando o laboratório falha, o prejuízo sobra para o consultório.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Na reabilitação oral, cada ajuste inesperado custa horas de cadeira. Veja como eliminamos essas fricções na bancada:
          </p>
        </motion.div>

        {/* 3 Sharp Contrast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {painContrasts.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard
                  glowColor="rgba(245, 158, 11, 0.2)"
                  className="h-full bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-amber-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group shadow-xl transition-all"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-200 transition-colors">
                      {item.solutionTitle}
                    </h3>
                    
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.solutionText}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-amber-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Padrão Lourenço de Bancada</span>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

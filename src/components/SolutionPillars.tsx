'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, Cpu, CheckCheck, Compass } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface SolutionPillarsProps {
  onOpenTriage?: () => void
}

export const SolutionPillars: React.FC<SolutionPillarsProps> = () => {
  const pillars = [
    {
      icon: PhoneCall,
      title: 'Conversa sem intermediários',
      description:
        'Você fala direto com quem está na bancada ou no software CAD. Dúvidas de preparo, término ou cor são resolvidas na hora pelo WhatsApp.',
    },
    {
      icon: CheckCheck,
      title: 'Checagem rigorosa em troquel',
      description:
        'Cada peça é conferida sob magnificação e em articulador. A prótese chega pronta para cimentar, sem desgaste exaustivo no consultório.',
    },
    {
      icon: Cpu,
      title: 'Digital ou convencional',
      description:
        'Recebemos arquivos STL e PLY de qualquer scanner do mercado, ou coletamos moldagens físicas de silicone e gesso no seu consultório.',
    },
    {
      icon: Compass,
      title: 'Prazo combinado é sagrado',
      description:
        'Acompanhamos sua data de atendimento. O paciente senta na cadeira e o trabalho já está pronto para ser instalado com tranquilidade.',
    },
  ]

  return (
    <section id="solucao" className="py-20 sm:py-28 bg-[#05070B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -left-20 w-[450px] h-[450px] bg-yellow-500/5 rounded-full blur-[140px]"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Mais do que entregar prótese: ser o braço técnico do seu consultório.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Trabalhamos lado a lado com você. O que foi planejado no diagnóstico chega perfeito para a consulta de instalação.
          </p>
        </motion.div>

        {/* 4 Pillars in a balanced 4-column or 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
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
                  className="h-full bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800/80 shadow-lg hover:border-amber-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-amber-400/40 transition-all mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-amber-200 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
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

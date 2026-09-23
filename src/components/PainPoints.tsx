'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PainPointsProps {
  onOpenTriage?: () => void
}

export const PainPoints: React.FC<PainPointsProps> = () => {
  const diferenciais = [
    {
      id: '01',
      badge: 'Adaptação Marginal',
      title: 'Zero desgaste de cadeira',
      desc: 'Peças com assentamento passivo e pontos de contato calibrados em troquel e articulador. É descer da bancada e cimentar sem retrabalho.',
      highlight: 'Ajuste oclusal conferido sob magnificação',
      metric: '0 min',
      metricLabel: 'desgaste de cadeira',
    },
    {
      id: '02',
      badge: 'Pontualidade Clínica',
      title: 'Cronograma rigoroso',
      desc: 'Acompanhamento ativo da sua data clínica. O paciente senta na cadeira e o trabalho já está no consultório pronto para instalar.',
      highlight: 'Entrega pré-consulta garantida',
      metric: '100%',
      metricLabel: 'previsibilidade de data',
    },
    {
      id: '03',
      badge: 'Suporte Técnico',
      title: 'Alinhamento direto no WhatsApp',
      desc: 'Você valida preparo, término cervical e espaço interoclusal diretamente com o Osvaldo antes de usinar ou injetar.',
      highlight: 'Canal exclusivo direto com o TPD',
      metric: 'Direto',
      metricLabel: 'com o responsável técnico',
    },
  ]

  return (
    <section id="dores" className="py-20 sm:py-28 bg-[#05070B] text-white relative overflow-hidden">
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
        
        {/* Section Header with Clinical Authority */}
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
            Na reabilitação oral, cada ajuste inesperado custa horas de cadeira. Veja como eliminamos essas fricções com rigor de bancada:
          </p>
        </motion.div>

        {/* Grid com bordas unificadas estilo Bento Box técnico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-10"
        >
          {diferenciais.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0B0E14] p-7 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-[#10141D]"
            >
              <div>
                {/* Topo: Numeração técnica + Badge */}
                <div className="flex items-center justify-between pb-5 border-b border-white/5">
                  <span className="font-mono text-xs font-semibold text-[#D4AF37] tracking-widest uppercase">
                    PROCESSO // {item.id}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                {/* Micro-métrica técnica de impacto */}
                <div className="mt-5 mb-3 flex items-baseline gap-2">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors">
                    {item.metric}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.metricLabel}
                  </span>
                </div>

                {/* Título & Descrição com hierarquia tipográfica */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Rodapé: Validação técnica de bancada */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                <span className="text-xs font-mono text-slate-400">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

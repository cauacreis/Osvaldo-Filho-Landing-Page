'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PainPointsProps {
  onOpenTriage?: () => void
}

export const PainPoints: React.FC<PainPointsProps> = () => {
  const diferenciais = [
    {
      code: '01',
      titleTag: 'CONTROLE MARGINAL',
      category: 'Bancada & Troquel',
      title: 'Assentamento Passivo Rigoroso',
      desc: 'Término cervical e pontos de contato calibrados sob magnificação óptica e articulador. A peça desce em boca com vedamento passivo imediato, poupando tempo de cadeira.',
      highlight: 'Ajuste oclusal e marginal conferido pré-entrega',
      metric: '0 min',
      metricLabel: 'desgaste em cadeira',
    },
    {
      code: '02',
      titleTag: 'PREVISIBILIDADE CLÍNICA',
      category: 'Logística de Entrega',
      title: 'Cumprimento do Cronograma Clínico',
      desc: 'Planejamento rigorosamente sincronizado com a sua data de consulta. O trabalho é entregue com antecedência para você atender seu paciente com total tranquilidade.',
      highlight: 'Entrega antecipada antes da sessão clínica',
      metric: '100%',
      metricLabel: 'compromisso de prazo',
    },
    {
      code: '03',
      titleTag: 'SUPORTE TÉCNICO DIRETO',
      category: 'Canal Exclusivo TPD',
      title: 'Alinhamento Clínico com o Osvaldo',
      desc: 'Você valida término, preparo, espaço interoclusal e substrato diretamente no WhatsApp com o Osvaldo Lourenço Filho antes de iniciar qualquer fresagem.',
      highlight: 'Comunicação direta com o responsável técnico',
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
              key={item.code}
              className="group relative bg-[#0B0E14] p-7 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-[#10141D]"
            >
              <div>
                {/* Topo: Numeração técnica e especialidade limpa sem pílula */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs font-bold text-[#D4AF37] tracking-wider uppercase">
                    {item.code} // {item.titleTag}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                    {item.category}
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

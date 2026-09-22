import React from 'react'
import { motion } from 'framer-motion'
import { FileUp, GitMerge, Settings, Truck, Send, CheckCircle, Sparkles } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface WorkflowTimelineProps {
  onOpenTriage: () => void
}

export const WorkflowTimeline: React.FC<WorkflowTimelineProps> = ({ onOpenTriage }) => {
  const steps = [
    {
      step: '01',
      title: 'Envie o Caso',
      subtitle: 'Digital ou Convencional',
      description:
        'Envie arquivos STL/PLY pelo WhatsApp ou agende a coleta física de moldagens e modelos no seu consultório.',
      details: ['Qualquer scanner intraoral', 'Coleta própria na região', 'Triagem rápida'],
      icon: FileUp,
    },
    {
      step: '02',
      title: 'Alinhamento Direto',
      subtitle: 'Com o Osvaldo',
      description:
        'Analisamos preparo, término, espaço oclusal e indicação do biomaterial antes de usinar ou injetar.',
      details: ['Conversa direta no WhatsApp', 'Sem decisões unilaterais', 'Previsibilidade clínica'],
      icon: GitMerge,
    },
    {
      step: '03',
      title: 'Produção com Rigor',
      subtitle: 'Controle de Bancada',
      description:
        'Fresagem CAD/CAM aliada à estratificação e textura anatômica. Teste de vedamento passivo no modelo.',
      details: ['Biomateriais de procedência', 'Adaptação marginal conferida', 'Acabamento natural'],
      icon: Settings,
    },
    {
      step: '04',
      title: 'Entrega Pontual',
      subtitle: 'Instalação Tranquila',
      description:
        'Entrega pontual para o dia agendado com seu paciente, pronta para cimentação com rapidez.',
      details: ['Cronograma rigoroso', 'Embalagem técnica protetora', 'Suporte contínuo'],
      icon: Truck,
    },
  ]

  return (
    <section id="fluxo" className="py-24 sm:py-32 bg-[#06090e] text-white relative overflow-hidden">
      {/* Background ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Passo a Passo Sem Fricção</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Como funciona: do envio à cimentação com total previsibilidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Um fluxo de trabalho pensado para eliminar retrabalhos, atrasos e surpresas no momento da consulta.
          </p>
        </motion.div>

        {/* Animated Timeline Grid */}
        <div className="relative">
          {/* Smooth Animated Connecting Line (Desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-slate-800/80 -translate-y-12 z-0 overflow-hidden rounded-full"
          >
            <div className="w-full h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_12px_rgba(20,184,166,0.5)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
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
                    glowColor="rgba(20, 184, 166, 0.2)"
                    className="h-full bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-7 border border-slate-800/80 hover:border-teal-500/40 shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Circle with Step Number and Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-teal-400/40 transition-all">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-3xl font-extrabold text-slate-700 group-hover:text-teal-400/40 transition-colors">
                          {item.step}
                        </span>
                      </div>

                      <p className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                        {item.subtitle}
                      </p>

                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-teal-200 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="pt-4 border-t border-slate-800/80 space-y-2">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenTriage}
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-base rounded-2xl shadow-[0_0_25px_rgba(20,184,166,0.35)] active:scale-95 transition-all"
          >
            <span>Enviar caso para análise</span>
            <Send className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import { FileUp, GitMerge, Settings, Truck, Send, CheckCircle } from 'lucide-react'

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
        'Envie arquivos STL/PLY diretamente pelo WhatsApp ou solicite nossa coleta física de moldagens e modelos no seu consultório.',
      details: ['Compatível com qualquer scanner', 'Coleta própria na região', 'Triagem ágil de caso'],
      icon: FileUp,
    },
    {
      step: '02',
      title: 'Alinhamos o Planejamento',
      subtitle: 'Comunicação Direta',
      description:
        'Analisamos preparos, espaço interoclusal, seleção de cor e indicação do biomaterial antes de iniciar qualquer corte ou injeção.',
      details: ['Contato direto de técnico para dentista', 'Sem decisões unilaterais', 'Previsibilidade biomecânica'],
      icon: GitMerge,
    },
    {
      step: '03',
      title: 'Produzimos com Rigor',
      subtitle: 'Controle de Bancada',
      description:
        'Usinagem CAD/CAM de precisão somada ao acabamento artesanal e estratificação anatômica. Teste triplo de assentamento passivo.',
      details: ['Materiais nobres certificados', 'Selamento marginal milimétrico', 'Textura e opalescência natural'],
      icon: Settings,
    },
    {
      step: '04',
      title: 'Entregamos com Acompanhamento',
      subtitle: 'Pontualidade e Suporte',
      description:
        'Entrega rápida e devidamente acondicionada. Ficamos à disposição caso necessite de algum ajuste fino ou acompanhamento clínico.',
      details: ['Cumprimento estrito de cronograma', 'Embalagem técnica protetora', 'Garantia de parceria ativa'],
      icon: Truck,
    },
  ]

  return (
    <section id="fluxo" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Passo a Passo Sem Fricção</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Como funciona: do envio à cimentação com total previsibilidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Um fluxo de trabalho pensado para eliminar retrabalhos, atrasos e surpresas no momento da consulta.
          </p>
        </div>

        {/* Animated Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-teal-200 via-teal-500 to-teal-200 -translate-y-12 z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-teal-500/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Circle with Step Number and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-lg shadow-teal-900/10 group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-extrabold text-slate-200 group-hover:text-teal-700/40 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                      {item.subtitle}
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="pt-4 border-t border-slate-200/60 space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenTriage}
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-800 hover:bg-teal-900 text-white font-semibold text-base rounded-2xl shadow-xl shadow-teal-900/20 active:scale-95 transition-all"
          >
            <span>Enviar caso para análise</span>
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import { AlertTriangle, Clock, MessageSquareOff, SlidersHorizontal, UserX, ArrowRight } from 'lucide-react'

interface PainPointsProps {
  onOpenTriage: () => void
}

export const PainPoints: React.FC<PainPointsProps> = ({ onOpenTriage }) => {
  const pains = [
    {
      icon: SlidersHorizontal,
      title: 'Retrabalhos e ajustes excessivos',
      description:
        'Perder tempo de cadeira desgastando pontos de contato, refazendo oclusão ou devolvendo peças para reembasamento que deveriam vir perfeitamente adaptadas.',
      impact: 'Consome horas clínicas e reduz a lucratividade do consultório.',
    },
    {
      icon: Clock,
      title: 'Atrasos que desmarcam consultas',
      description:
        'A promessa de entrega não é cumprida. O paciente já está na sala de espera ou anestesiado e a prótese ainda não chegou.',
      impact: 'Quebra a confiança do paciente e prejudica a reputação do cirurgião.',
    },
    {
      icon: MessageSquareOff,
      title: 'Falta de comunicação e sumiço',
      description:
        'Quando surge uma dúvida de término cervical, espaço interoclusal ou implante divergente, o laboratório decide sozinho ou simplesmente não responde.',
      impact: 'Você descobre o problema apenas quando abre a caixa de entrega.',
    },
    {
      icon: AlertTriangle,
      title: 'Adaptação e estética fora do esperado',
      description:
        'Cores que não batem com a escala acordada, espessuras sem naturalidade e falta de passividade biomecânica que colocam em risco o trabalho clínico.',
      impact: 'Frustração imediata e necessidade de refazer o caso do zero.',
    },
    {
      icon: UserX,
      title: 'Falta de acompanhamento técnico real',
      description:
        'Laboratórios que operam como linhas de produção impessoais, sem olhar clínico ou abertura para discutir os detalhes antes da usinagem ou injeção.',
      impact: 'O dentista fica sozinho para arcar com a responsabilidade do resultado.',
    },
  ]

  return (
    <section id="dores" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background dark textured glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>O Gargalo Silencioso da Odontologia</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Quando o laboratório não acompanha o seu planejamento, o prejuízo aparece no consultório.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            A rotina clínica de reabilitação e prótese não tem margem para imprevistos. Cada ajuste não planejado
            rouba minutos preciosos da sua agenda e enfraquece a percepção de excelência perante o seu paciente.
          </p>
        </div>

        {/* 5 Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain, index) => {
            const Icon = pain.icon
            return (
              <div
                key={index}
                className="group relative bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-teal-500/40 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                    {pain.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {pain.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/50 flex items-start gap-2 text-xs font-medium text-amber-300/90">
                  <span className="font-bold text-amber-400">Impacto:</span>
                  <span>{pain.impact}</span>
                </div>
              </div>
            )
          })}

          {/* Contrast Highlight Card (The Solution Pivot) */}
          <div className="relative bg-gradient-to-br from-teal-900 via-teal-950 to-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-400/30">
                Padrão Lourenço
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Parceria de técnico para cirurgião.
              </h3>
              <p className="text-sm text-teal-100/90 leading-relaxed">
                Nós alinhamos preparo, oclusão e cronograma antes de usinar ou estratificar. O resultado é cimentação passiva, sem surpresas e com total respeito ao seu tempo.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-800/60">
              <button
                type="button"
                onClick={onOpenTriage}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                <span>Enviar caso para análise</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

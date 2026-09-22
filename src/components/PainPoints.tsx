import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, MessageSquareOff, SlidersHorizontal, UserX, ArrowRight, ShieldCheck } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

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
    <section id="dores" className="py-24 sm:py-32 bg-[#080d17] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-300 text-xs font-bold tracking-wider uppercase mb-5">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>O Gargalo Silencioso da Odontologia</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Quando o laboratório não acompanha o seu planejamento, o prejuízo aparece no consultório.
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            A rotina clínica de reabilitação e prótese não tem margem para imprevistos. Cada ajuste não planejado
            rouba minutos preciosos da sua agenda e enfraquece a percepção de excelência perante o seu paciente.
          </p>
        </motion.div>

        {/* 6 Pain & Solution Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  className="h-full bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-red-500/40 rounded-3xl p-7 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
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

          {/* Contrast Highlight Card (The Solution Pivot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <TiltCard
              glowColor="rgba(20, 184, 166, 0.35)"
              className="h-full bg-gradient-to-br from-teal-950/80 via-slate-900 to-teal-900/40 border border-teal-500/40 rounded-3xl p-7 flex flex-col justify-between shadow-[0_0_40px_rgba(20,184,166,0.15)] group"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-5 border border-teal-400/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>Padrão Lourenço</span>
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  Parceria de técnico para cirurgião.
                </h3>
                
                <p className="text-sm text-teal-100/90 leading-relaxed font-normal">
                  Nós alinhamos preparo, oclusão e cronograma antes de usinar ou estratificar. O resultado é cimentação passiva, sem surpresas e com total respeito ao seu tempo clínico.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-teal-800/60">
                <button
                  type="button"
                  onClick={onOpenTriage}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] active:scale-95"
                >
                  <span>Enviar caso para análise</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

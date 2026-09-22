import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, Cpu, CheckCheck, Compass, Send, Sparkles } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface SolutionPillarsProps {
  onOpenTriage: () => void
}

export const SolutionPillars: React.FC<SolutionPillarsProps> = ({ onOpenTriage }) => {
  const pillars = [
    {
      icon: PhoneCall,
      badge: 'Contato Direto',
      title: 'Conversa sem intermediários',
      description:
        'Você fala direto com quem está na bancada ou no software CAD. Dúvidas de preparo, término ou cor são resolvidas na hora pelo WhatsApp.',
    },
    {
      icon: CheckCheck,
      badge: 'Assentamento Passivo',
      title: 'Checagem rigorosa em troquel',
      description:
        'Cada peça é conferida sob magnificação e em articulador. A prótese chega pronta para cimentar, sem desgaste exaustivo no consultório.',
    },
    {
      icon: Cpu,
      badge: 'Fluxo Híbrido',
      title: 'Digital ou convencional',
      description:
        'Recebemos arquivos STL e PLY de qualquer scanner do mercado, ou coletamos moldagens físicas de silicone e gesso no seu consultório.',
    },
    {
      icon: Compass,
      badge: 'Pontualidade',
      title: 'Prazo combinado é sagrado',
      description:
        'Acompanhamos sua data de atendimento. O paciente senta na cadeira e o trabalho já está pronto para ser instalado com tranquilidade.',
    },
  ]

  return (
    <section id="solucao" className="py-20 sm:py-28 bg-[#06090e] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -left-20 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px]"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Nosso Padrão de Trabalho</span>
          </div>
          
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
                  glowColor="rgba(20, 184, 166, 0.2)"
                  className="h-full bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800/80 shadow-lg hover:border-teal-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-teal-400/40 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400/90 group-hover:text-teal-300 transition-colors">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-teal-200 transition-colors">
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

        {/* Visual Anchor: Precision Milling & Material Technology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 text-white shadow-2xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 relative aspect-[16/10] lg:h-full overflow-hidden">
              <img
                src="/assets/zirconia-milling-disc.jpg"
                alt="Fresagem de zircônia multilayer de alta precisão"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  CAD / CAM 5 Eixos
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Biomateriais de Alta Resistência
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight">
                Zircônia Multilayer e Cerâmica Pura com Selamento Passivo
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Usinagem CNC de alta resolução aliada à textura e maquiagem feitas à mão. O resultado é estética natural, adaptação marginal micrométrica e durabilidade oclusal.
              </p>
              <div className="flex flex-wrap gap-2.5 text-xs font-semibold text-teal-300">
                <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800">
                  Dissilicato de Lítio (E.max)
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800">
                  Zircônia Translúcida 4Y/5Y
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800">
                  Conexões Ti-Base e Implantes
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compact CTA Trigger Strip */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/5">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Quer testar nosso padrão no seu próximo caso?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Faça a triagem técnica online em 1 minuto e envie arquivos ou solicite coleta no consultório.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenTriage}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm sm:text-base rounded-2xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Enviar caso para análise</span>
            <Send className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  )
}

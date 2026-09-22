import React from 'react'
import { motion } from 'framer-motion'
import { Award, PhoneCall, Cpu, CheckCheck, Compass, Send, Sparkles } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface SolutionPillarsProps {
  onOpenTriage: () => void
}

export const SolutionPillars: React.FC<SolutionPillarsProps> = ({ onOpenTriage }) => {
  const pillars = [
    {
      icon: Award,
      badge: 'Pilar 01',
      title: 'Experiência Técnica Especializada',
      description:
        'Domínio aprofundado em anatomia dental, biomecânica oclusal e comportamento dos materiais (zircônia, Emax, metalocerâmica, cerômeros e titânio). Não apenas reproduzimos formas: respeitamos a biologia do caso.',
    },
    {
      icon: PhoneCall,
      badge: 'Pilar 02',
      title: 'Comunicação Direta sem Intermediários',
      description:
        'Você fala diretamente com quem está com as mãos na bancada ou no software CAD. Dúvidas sobre preparo, término cervical, espaço interoclusal ou seleção de cor são sanadas de imediato.',
    },
    {
      icon: Cpu,
      badge: 'Pilar 03',
      title: 'Fluxo Híbrido: Digital & Convencional',
      description:
        'Liberdade total para a sua rotina: recepcionamos arquivos de qualquer scanner intraoral (STL / PLY) ou moldagens convencionais em silicone/gesso, mantendo a mesma precisão micrométrica.',
    },
    {
      icon: CheckCheck,
      badge: 'Pilar 04',
      title: 'Cuidado e Rigor em Cada Etapa',
      description:
        'Nenhuma prótese sai para entrega sem checagem tripla: adaptação cervical em troquel, passividade em análogos de implante, oclusão balanceada e acabamento polido de alto padrão.',
    },
    {
      icon: Compass,
      badge: 'Pilar 05',
      title: 'Previsibilidade Clínica e Pontualidade',
      description:
        'Prazo combinado é compromisso sagrado. Acompanhamos o cronograma clínico para que sua consulta de instalação ocorra com total tranquilidade para você e seu paciente.',
    },
  ]

  return (
    <section id="solucao" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background subtle light ambient effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Nosso Posicionamento de Parceria</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Mais do que produzir próteses: acompanhar o seu caso.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Não atuamos como fornecedores distantes. Somos a extensão técnica do seu consultório,
            garantindo que o que foi planejado no diagnóstico chegue impecável na cadeira do paciente.
          </p>
        </motion.div>

        {/* 5 Pillars with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pillars.slice(0, 3).map((pillar, index) => {
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
                  glowColor="rgba(20, 184, 166, 0.12)"
                  className="h-full bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-teal-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-teal-900 text-white flex items-center justify-center shadow-md shadow-teal-950/15 group-hover:scale-105 group-hover:bg-teal-800 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-teal-700 transition-colors">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-teal-900 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pillars.slice(3).map((pillar, index) => {
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
                  glowColor="rgba(20, 184, 166, 0.12)"
                  className="h-full bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-teal-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-teal-900 text-white flex items-center justify-center shadow-md shadow-teal-950/15 group-hover:scale-105 group-hover:bg-teal-800 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-teal-700 transition-colors">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-teal-900 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* Visual Technological Anchor Banner: 5-Axis Milling Precision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 text-white shadow-2xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:h-full overflow-hidden">
              <img
                src="/assets/zirconia-milling-disc.jpg"
                alt="Fresagem 5 eixos em zircônia multilayer de alta precisão"
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

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Rigor em Biomateriais
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Zircônia Multilayer & Cerâmicas Puras com Selamento Micrométrico
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Combinamos maquinário CNC de última geração com o acabamento artesanal de bancada.
                O resultado são estruturas rígidas, passividade biomecânica e fluorescência idêntica ao dente natural para garantir o sucesso das suas cimentações.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-teal-300">
                <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                  Dissilicato de Lítio (E.max)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                  Zircônia Monolítica Translúcida
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                  Usinagem em Titânio & Ti-Base
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action strip */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/5">
          <div className="max-w-xl text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Tem um caso em andamento ou quer testar nosso padrão?
            </h4>
            <p className="text-sm text-slate-300">
              Faça a triagem técnica online em menos de 1 minuto e envie fotos ou arquivos diretamente para análise.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenTriage}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm sm:text-base rounded-2xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Enviar caso para análise</span>
            <Send className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  )
}

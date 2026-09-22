import React from 'react'
import { Award, PhoneCall, Cpu, CheckCheck, Compass, Send } from 'lucide-react'

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
    <section id="solucao" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            <span>Nosso Posicionamento de Parceria</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Mais do que produzir próteses: acompanhar o seu caso.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Não atuamos como fornecedores distantes. Somos a extensão técnica do seu consultório,
            garantindo que o que foi planejado no diagnóstico chegue impecável na cadeira do paciente.
          </p>
        </div>

        {/* Pillars Layout: 3 on top, 2 on bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {pillars.slice(0, 3).map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className="group relative bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-teal-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-teal-700 transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pillars.slice(3).map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className="group relative bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-teal-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-teal-700 transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action strip */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base rounded-2xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Enviar caso para análise</span>
            <Send className="w-4 h-4 text-teal-700" />
          </button>
        </div>

      </div>
    </section>
  )
}

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Shield, Layers, Gem, Cpu, Activity, CircleDot } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void
}

interface ServiceCard {
  id: string
  title: string
  category: string
  tagline: string
  description: string
  highlights: string[]
  icon: React.ElementType
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>('todos')

  const services: ServiceCard[] = [
    {
      id: 'zirconia',
      title: 'Zircônia Multilayer',
      category: 'ceramica',
      tagline: 'Resistência mecânica e gradiente natural',
      description:
        'Para coroas unitárias e pontes fixas. Vedamento cervical rigoroso e polimento oclusal protetor.',
      highlights: ['Alta resistência à fratura', 'Degradê natural de cor', 'Assentamento em troquel'],
      icon: Gem,
    },
    {
      id: 'emax',
      title: 'Dissilicato de Lítio (E.max)',
      category: 'ceramica',
      tagline: 'Mimetismo óptico e adesão máxima',
      description:
        'Facetas, lentes de contato e coroas anteriores ultrafinas com reflexão idêntica ao esmalte dental.',
      highlights: ['Espessuras de 0.3mm a 0.5mm', 'Cimentação adesiva segura', 'Alta fidelidade de cor'],
      icon: Sparkles,
    },
    {
      id: 'metaloceramica',
      title: 'Metalocerâmica Precisa',
      category: 'ceramica',
      tagline: 'Solidez estrutural clássica',
      description:
        'Para dentes posteriores e pontes com pilares curtos ou espaço oclusal reduzido.',
      highlights: ['Ligas livres de berílio', 'Opacificação controlada', 'Previsibilidade oclusal'],
      icon: Layers,
    },
    {
      id: 'implantes',
      title: 'Prótese sobre Implante',
      category: 'implantes',
      tagline: 'Pilares anatômicos e passividade',
      description:
        'Compatível com as principais plataformas. Ti-Base com perfil de emergência anatômico.',
      highlights: ['Saúde peri-implantar', 'Assentamento sem tensão', 'Parafusadas e cimentadas'],
      icon: CircleDot,
    },
    {
      id: 'protocolos',
      title: 'Protocolos de Carga Imediata',
      category: 'implantes',
      tagline: 'Agilidade cirúrgica e reforço estrutural',
      description:
        'Provisórios rápidos para o dia cirúrgico e definitivos em zircônia sobre barra.',
      highlights: ['Entrega no dia da cirurgia', 'Barra interna reforçada', 'Caracterização realista'],
      icon: Activity,
    },
    {
      id: 'barras',
      title: 'Barras Fresadas e Fundidas',
      category: 'implantes',
      tagline: 'Rigidez para distribuição de cargas',
      description:
        'Usinadas em titânio ou Co-Cr por CAD/CAM com teste rigoroso de passividade.',
      highlights: ['Assentamento passivo', 'Distribuição harmônica', 'Usinagem micrométrica'],
      icon: Shield,
    },
    {
      id: 'ceromero',
      title: 'Cerômeros e Resinas',
      category: 'resinas',
      tagline: 'Amortecimento mastigatório protetor',
      description:
        'Para provisórios de longa duração, mockups diagnósticos e inlays/onlays resilientes.',
      highlights: ['Fácil ajuste e polimento', 'Módulo elástico protetor', 'Estabilidade de cor'],
      icon: Layers,
    },
    {
      id: 'placas',
      title: 'Placas de Bruxismo e Clareamento',
      category: 'placas',
      tagline: 'Acrílico cristal de alta densidade',
      description:
        'Placas miorrelaxantes prensadas e polidas com guias calibradas, além de moldeiras para clareamento.',
      highlights: ['Acrílico cristal sem bolhas', 'Retenção sem bascular', 'Desoclusão balanceada'],
      icon: Shield,
    },
    {
      id: 'digital',
      title: 'Fluxo Digital (STL / PLY)',
      category: 'digital',
      tagline: 'Compatível com qualquer scanner',
      description:
        'Envio ágil pelo WhatsApp ou nuvem. Desenho CAD 3D, fresagem CNC e modelo impresso com troquel.',
      highlights: ['Sem distorção de moldagem', 'Agilidade de bancada', 'Arquivo 3D salvo em nuvem'],
      icon: Cpu,
    },
  ]

  const categories = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'ceramica', label: 'Cerâmicas & Zircônia' },
    { id: 'implantes', label: 'Implantes & Protocolos' },
    { id: 'digital', label: 'Fluxo Digital' },
    { id: 'placas', label: 'Placas & Resinas' },
  ]

  const filteredServices =
    activeCategory === 'todos'
      ? services
      : services.filter((s) => s.category === activeCategory || (activeCategory === 'placas' && s.category === 'resinas'))

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#070c18] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A prótese certa para a necessidade do seu paciente.
            </h2>
            <p className="mt-3 text-base text-slate-300 font-normal">
              Do unitário anterior aos protocolos de carga imediata: biomateriais certificados e ajuste de bancada rigoroso.
            </p>
          </div>

          {/* Carousel Arrows for Tablet/Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 shadow-md text-slate-300 hover:text-white transition-colors"
              aria-label="Rolar para a esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 shadow-md text-slate-300 hover:text-white transition-colors"
              aria-label="Rolar para a direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-teal-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(20,184,166,0.35)]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Services Grid with 3D Tilt */}
        <div
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-x-visible pb-6 sm:pb-0 snap-x snap-mandatory scrollbar-none"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="w-[85vw] sm:w-auto shrink-0 snap-start"
                >
                  <TiltCard
                    glowColor="rgba(20, 184, 166, 0.2)"
                    className="h-full bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800/80 shadow-lg hover:border-teal-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header with Icon */}
                      <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center group-hover:scale-105 group-hover:border-teal-400/40 transition-all mb-4">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight group-hover:text-teal-200 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs font-medium text-teal-300 mb-2.5 leading-snug">
                        {service.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                        {service.description}
                      </p>

                      {/* Fast Highlights List */}
                      <div className="space-y-1.5 mb-5">
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preselect service in Triage Modal */}
                    <div className="pt-3 border-t border-slate-800/80">
                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-teal-400 text-slate-200 hover:text-slate-950 font-bold text-xs border border-slate-700/60 hover:border-teal-400 transition-all duration-200"
                      >
                        <span>Enviar este tipo de caso</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center mt-3 text-xs text-slate-400">
          ← Deslize para ver todos os serviços →
        </div>

      </div>
    </section>
  )
}

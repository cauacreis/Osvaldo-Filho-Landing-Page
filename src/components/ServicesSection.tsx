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
  badge?: string
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>('todos')

  const services: ServiceCard[] = [
    {
      id: 'zirconia',
      title: 'Zircônia Monolítica & Multilayer',
      category: 'ceramica',
      tagline: 'Resistência extrema com gradiente de translucidez natural',
      description:
        'Indicada para coroas unitárias, pontes extensas e reabilitações sobre dentes ou implantes. Excelente biocompatibilidade e acabamento oclusal que preserva dentes antagonistas.',
      highlights: ['Alta resistência à flexão', 'Estratificação anatômica', 'Adaptação cervical precisa'],
      icon: Gem,
      badge: 'Alta Demanda',
    },
    {
      id: 'emax',
      title: 'Dissilicato de Lítio (E.max)',
      category: 'ceramica',
      tagline: 'O ápice da mimetização óptica e selamento adesivo',
      description:
        'Ideal para lentes de contato dentais, facetas, inlays, onlays e coroas anteriores. Fluorescência e opalescência idênticas às estruturas dentárias hígidas.',
      highlights: ['Translucidez esmalte-dentina', 'Cimentação adesiva segura', 'Espessuras ultrafinas'],
      icon: Sparkles,
      badge: 'Estética Pura',
    },
    {
      id: 'metaloceramica',
      title: 'Metalocerâmica de Alta Precisão',
      category: 'ceramica',
      tagline: 'A solidez clássica da infraestrutura metálica com estratificação cerâmica',
      description:
        'Solução consagrada para dentes posteriores, pontes fixas com pilares reduzidos e casos clínicos com limitações de espaço interoclusal.',
      highlights: ['Ligas nobres e sem berílio', 'Opacificação controlada', 'Excelente custo-benefício'],
      icon: Layers,
    },
    {
      id: 'implantes',
      title: 'Prótese sobre Implante',
      category: 'implantes',
      tagline: 'Soluções parafusadas e cimentadas com perfil de emergência personalizado',
      description:
        'Trabalhamos com as principais marcas e plataformas do mercado nacional e importado. Pilares protéticos cônicos, UCLA calcináveis e bases de titânio (Ti-Base) de alta fidelidade.',
      highlights: ['Perfil de emergência biológico', 'Passividade micrométrica', 'Chaves e parafusos adequados'],
      icon: CircleDot,
      badge: 'Especialidade',
    },
    {
      id: 'protocolos',
      title: 'Protocolos (Carga Imediata & Definitivos)',
      category: 'implantes',
      tagline: 'Reabilitações totais com reforço estrutural e caracterização gengival',
      description:
        'Protocolos provisórios ágeis para o mesmo dia cirúrgico e protocolos definitivos em zircônia sobre barra ou híbridos metaloplásticos com retenção e fonética ideais.',
      highlights: ['Agilidade em carga imediata', 'Caracterização gengival realista', 'Oclusão balanceada bilateral'],
      icon: Activity,
      badge: 'Destaque Clínico',
    },
    {
      id: 'barras',
      title: 'Barras Metálicas Fresadas & Fundidas',
      category: 'implantes',
      tagline: 'Rigidez estrutural indispensável para distribuição de cargas mastigatórias',
      description:
        'Barras fresadas em titânio ou Co-Cr por tecnologia CAD/CAM ou fundições com assentamento passivo rigorosamente testado em bancada.',
      highlights: ['Assentamento 100% passivo', 'Distribuição harmônica de forças', 'Conexões rígidas'],
      icon: Shield,
    },
    {
      id: 'ceromero',
      title: 'Cerômeros & Resinas Estruturadas',
      category: 'resinas',
      tagline: 'Resiliência e amortecimento de impacto mastigatório',
      description:
        'Indicadas para coroas provisórias de longa permanência, mockups funcionais, inlays/onlays resilientes e reembasamentos parciais com excelente polimento.',
      highlights: ['Módulo de elasticidade próximo à dentina', 'Fácil ajuste e reparo', 'Estética satisfatória'],
      icon: Layers,
    },
    {
      id: 'placas',
      title: 'Placas de Bruxismo & Clareamento',
      category: 'placas',
      tagline: 'Acrílico cristalino de alta densidade e termoformagem a vácuo',
      description:
        'Placas miorrelaxantes rígidas prensadas e polidas com guias caninas e anterior balanceadas, além de moldeiras anatômicas confortáveis para clareamento caseiro.',
      highlights: ['Acrílico cristal de alta transparência', 'Retenção sem compressão excessiva', 'Desoclusão suave'],
      icon: Shield,
    },
    {
      id: 'digital',
      title: 'Fluxo Digital Integrado (STL/PLY)',
      category: 'digital',
      tagline: 'Compatibilidade total com qualquer scanner intraoral do mercado',
      description:
        'Recebemos seus arquivos digitais via nuvem ou WhatsApp. Desenho digital (CAD) de ponta, fresagem de alta precisão e impressão 3D de modelos troquelados.',
      highlights: ['Sem distorção de moldagem', 'Agilidade no tempo de bancada', 'Armazenamento dos arquivos'],
      icon: Cpu,
      badge: 'CAD / CAM',
    },
  ]

  const categories = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'ceramica', label: 'Cerâmicas & Zircônias' },
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
    <section id="servicos" className="py-24 sm:py-32 bg-[#070c18] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px]"
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Catálogo Técnico de Soluções</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Soluções protéticas para cada desafio clínico.
            </h2>
            <p className="mt-3 text-base text-slate-300 font-normal">
              Da reabilitação unitária anterior aos protocolos complexos de carga imediata, combinamos os melhores biomateriais à precisão artesanal e digital.
            </p>
          </div>

          {/* Desktop/Tablet Carousel Nav Buttons */}
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

        {/* Category Pills Filter */}
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

        {/* Services Horizontal Scroll on Mobile / Dynamic Grid on Desktop with 3D Tilt */}
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
                  transition={{ duration: 0.3 }}
                  className="w-[85vw] sm:w-auto shrink-0 snap-start"
                >
                  <TiltCard
                    glowColor="rgba(20, 184, 166, 0.2)"
                    className="h-full bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-7 border border-slate-800/80 shadow-lg hover:border-teal-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top line with Icon and Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center group-hover:scale-105 group-hover:border-teal-400/40 transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        {service.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 shadow-xs">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-200 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs font-semibold text-teal-300 mb-3 leading-snug">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      {/* Highlights list */}
                      <div className="space-y-2 mb-6">
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Button: Triggers Triage with service pre-selected */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-teal-400 text-slate-200 hover:text-slate-950 font-bold text-xs sm:text-sm border border-slate-700/60 hover:border-teal-400 transition-all duration-200"
                      >
                        <span>Enviar caso para análise</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center mt-3 text-xs text-slate-400 flex items-center justify-center gap-2">
          <span>← Deslize lateralmente para explorar mais →</span>
        </div>

      </div>
    </section>
  )
}

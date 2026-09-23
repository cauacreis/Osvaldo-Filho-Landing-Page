'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Shield, Layers, Gem, Cpu, Activity, CircleDot } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'
import { getPricingTableWhatsAppLink } from '../config'

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void
}

interface ServiceCard {
  id: string
  title: string
  category: string
  biomaterial: string
  indication: string
  benchCheck: string
  leadTime: string
  icon: React.ElementType
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>('todos')

  const services: ServiceCard[] = [
    {
      id: 'emax',
      title: 'Dissilicato de Lítio (IPS e.max)',
      category: 'ceramica',
      biomaterial: 'Pastilhas Premium Ivoclar Vivadent',
      indication: 'Facetas, lentes de contato e coroas anteriores ultrafinas.',
      benchCheck: 'Estratificação refinada, fidelidade na escala e bordo incisal natural.',
      leadTime: '3 a 5 dias úteis',
      icon: Sparkles,
    },
    {
      id: 'zirconia',
      title: 'Zircônia Multilayer 3D',
      category: 'ceramica',
      biomaterial: 'Blocos Aidite / Katana Multilayer',
      indication: 'Coroas unitárias posteriores e pontes fixas de alta carga.',
      benchCheck: 'Polimento mecânico oclusal de bancada (protege o dente antagonista).',
      leadTime: '3 a 5 dias úteis',
      icon: Gem,
    },
    {
      id: 'metaloceramica',
      title: 'Metalocerâmica de Precisão',
      category: 'ceramica',
      biomaterial: 'Liga Co-Cr certificada livre de berílio',
      indication: 'Pilares curtos e reabilitações posteriores com espaço oclusal reduzido.',
      benchCheck: 'Opacificação controlada e assentamento testado em troquel.',
      leadTime: '4 a 6 dias úteis',
      icon: Layers,
    },
    {
      id: 'implantes',
      title: 'Prótese sobre Implante',
      category: 'implantes',
      biomaterial: 'Ti-Base / UCLA compatível com todas as plataformas',
      indication: 'Unitários e múltiplos parafusados ou cimentados.',
      benchCheck: 'Perfil de emergência anatômico para saúde peri-implantar e assentamento passivo.',
      leadTime: '4 a 6 dias úteis',
      icon: CircleDot,
    },
    {
      id: 'protocolos',
      title: 'Protocolo de Carga Imediata',
      category: 'implantes',
      biomaterial: 'Barra usinada em Titânio ou Co-Cr + Zircônia/Acrílico',
      indication: 'Provisório rápido para o dia cirúrgico e definitivo estratificado.',
      benchCheck: 'Passividade milimétrica para proteger implantes em osseointegração.',
      leadTime: 'Dia cirúrgico (sob agendamento) / 7 dias (definitivo)',
      icon: Activity,
    },
    {
      id: 'barras',
      title: 'Barras Fresadas CAD/CAM',
      category: 'implantes',
      biomaterial: 'Titânio Grau Médico / Co-Cr Fresado CNC',
      indication: 'Estruturas para overdentures e protocolos sobre implantes.',
      benchCheck: 'Usinagem micrométrica para distribuição uniforme de forças mastigatórias.',
      leadTime: '5 a 7 dias úteis',
      icon: Shield,
    },
    {
      id: 'placas',
      title: 'Placa Miorrelaxante de Bruxismo',
      category: 'placas',
      biomaterial: 'Resina Acrílica Cristal Prensada a Vácuo',
      indication: 'Proteção oclusal, DTM e contenção pós-reabilitação.',
      benchCheck: 'Alta densidade sem bolhas, guias caninas balanceadas e retenção estável.',
      leadTime: '2 a 3 dias úteis',
      icon: Shield,
    },
    {
      id: 'ceromero',
      title: 'Cerômeros e Resinas Laboratoriais',
      category: 'placas',
      biomaterial: 'Micropartículas de cerâmica em matriz polimérica',
      indication: 'Inlays, onlays, mockups diagnósticos e provisórios de longa duração.',
      benchCheck: 'Módulo de elasticidade próximo à dentina e fácil ajuste clínico.',
      leadTime: '2 a 4 dias úteis',
      icon: Layers,
    },
    {
      id: 'digital',
      title: 'Fluxo Digital Integrado (STL / PLY)',
      category: 'digital',
      biomaterial: 'Modelos impressos em 3D + Fresagem CNC de alta resolução',
      indication: 'Recepção de escaneamento de qualquer scanner (iTero, Trios, Medit, etc.).',
      benchCheck: 'Elimina distorção de moldagem física e acelera o tempo de bancada.',
      leadTime: 'Agilidade direta no WhatsApp',
      icon: Cpu,
    },
  ]

  const categories = [
    { id: 'todos', label: 'Todos os Biomateriais' },
    { id: 'ceramica', label: 'Cerâmicas & Estética' },
    { id: 'implantes', label: 'Implantes & Protocolos' },
    { id: 'placas', label: 'Placas & Resinas' },
    { id: 'digital', label: 'Fluxo Digital STL' },
  ]

  const filteredServices =
    activeCategory === 'todos'
      ? services
      : services.filter((s) => s.category === activeCategory)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#06090e] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Soluções de bancada com dados técnicos claros.
            </h2>
            <p className="mt-3 text-base text-slate-300 font-normal">
              Biomateriais certificados, usinagem CAD/CAM e checagem em troquel. Sem aula teórica: apenas o que você precisa prescrever.
            </p>
          </div>

          {/* Quick Actions & Carousel Navigation */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            <a
              href={getPricingTableWhatsAppLink('servicos_topo')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              <span>Receber Tabela Completa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Rolar para a esquerda"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('right')}
                className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 transition-all cursor-pointer shadow-md active:scale-95"
                aria-label="Rolar para a direita"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Category Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Services Dedicated Horizontal Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="w-[300px] sm:w-[350px] lg:w-[370px] shrink-0 snap-start flex flex-col"
                  >
                    <TiltCard
                      glowColor="rgba(245, 158, 11, 0.18)"
                      className="h-full bg-slate-900/70 hover:bg-slate-900 rounded-3xl p-6 border border-slate-800/80 shadow-lg hover:border-amber-500/40 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Top Header with Icon */}
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-105 group-hover:border-amber-400/40 transition-all">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-amber-200 transition-colors">
                          {service.title}
                        </h3>

                        {/* Technical Bench Sheet */}
                        <div className="space-y-2.5 mb-5 text-xs">
                          <div className="text-slate-300 leading-relaxed">
                            <strong className="text-amber-400 font-bold">Biomaterial:</strong>{' '}
                            <span className="text-slate-200">{service.biomaterial}</span>
                          </div>

                          <div className="text-slate-300 leading-relaxed">
                            <strong className="text-amber-400 font-bold">Indicação:</strong>{' '}
                            <span className="text-slate-300">{service.indication}</span>
                          </div>

                          <div className="text-slate-300 leading-relaxed">
                            <strong className="text-amber-400 font-bold">Controle:</strong>{' '}
                            <span className="text-slate-300">{service.benchCheck}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Area */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectService(service.title)}
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
                        >
                          <span>Enviar este tipo de caso</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </TiltCard>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}

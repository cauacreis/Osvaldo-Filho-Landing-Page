'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, CheckCircle2 } from 'lucide-react'
import { BeforeAfterSlider } from './ui/BeforeAfterSlider'
import { TiltCard } from './ui/TiltCard'

interface CaseGalleryProps {
  onOpenTriage?: () => void
}

interface CaseItem {
  id: string
  title: string
  category: string
  image: string
  techSheet: {
    material: string
    system: string
    indication: string
    precision: string
  }
}

export const CaseGallery: React.FC<CaseGalleryProps> = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'todos' | 'protocolo' | 'unitario' | 'implantes' | 'placas'>('todos')

  const cases: CaseItem[] = [
    {
      id: 'coroa-estetica',
      title: 'Coroa Unitária em E.max',
      category: 'unitario',
      image: '/assets/case-coroa-estetica.webp',
      techSheet: {
        material: 'Dissilicato de Lítio (IPS e.max)',
        system: 'Modelo troquelado & magnificação ótica',
        indication: 'Linha anterior e pré-molares estéticos',
        precision: 'Término em chanfro com vedamento micrométrico passivo',
      },
    },
    {
      id: 'emax-macro',
      title: 'Lentes e Facetas Ultrafinas',
      category: 'unitario',
      image: '/assets/emax-ceramic-macro.jpg',
      techSheet: {
        material: 'Cerâmica vítrea estratificada 0.3mm',
        system: 'Estratificação em bancada & texturização',
        indication: 'Facetas e reanatomização estética com preservação dental',
        precision: 'Cimentação adesiva com reflexão de esmalte natural',
      },
    },
    {
      id: 'zirconia-macro',
      title: 'Ponte Fixa em Zircônia 3D',
      category: 'unitario',
      image: '/assets/dental-zirconia-macro.jpg',
      techSheet: {
        material: 'Zircônia Multilayer translúcida (Aidite / Katana)',
        system: 'Fresagem CNC CAD/CAM',
        indication: 'Reabilitação posterior de alta carga mastigatória',
        precision: 'Polimento mecânico oclusal de bancada (zero desgaste do antagonista)',
      },
    },
    {
      id: 'ponte-implante',
      title: 'Prótese Fixa sobre Implantes',
      category: 'implantes',
      image: '/assets/case-ponte-implante.webp',
      techSheet: {
        material: 'Estrutura aparafusada sobre análogos',
        system: 'Ti-Base calibrada / UCLA',
        indication: 'Espaço edêntulo múltiplo sobre implantes',
        precision: 'Assentamento passivo livre de tensões e perfil de emergência biológico',
      },
    },
    {
      id: 'reabilitacao-anterior',
      title: 'Reabilitação Múltipla Anterior',
      category: 'implantes',
      image: '/assets/case-reabilitacao-anterior.webp',
      techSheet: {
        material: 'Zircônia + Estratificação cerâmica',
        system: 'Pilares transmucosos cônicos',
        indication: 'Reabilitação estética do setor anterior',
        precision: 'Harmonia do zênite gengival e vedamento cervical rigoroso',
      },
    },
    {
      id: 'placa-bruxismo',
      title: 'Placa Miorrelaxante Cristal',
      category: 'placas',
      image: '/assets/case-placa-bruxismo.webp',
      techSheet: {
        material: 'Resina Acrílica Cristalina de alta densidade',
        system: 'Prensagem a vácuo com polimento mecânico',
        indication: 'Controle de bruxismo, DTM e proteção de facetas/implantes',
        precision: 'Guias de desoclusão canina e anterior balanceadas sem basculamento',
      },
    },
  ]

  const filteredCases = activeTab === 'todos' ? cases : cases.filter((c) => c.category === activeTab)

  return (
    <section id="cases" className="py-24 sm:py-32 bg-[#05070B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[140px]"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Precisão que se comprova no modelo e na boca.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Fotografias autênticas de próteses produzidas na nossa bancada para cirurgiões-dentistas parceiros. Sem maquiagem excessiva, com foco no rigor técnico, ajuste passivo e qualidade de acabamento.
          </p>
        </motion.div>

        {/* ============================================================ */}
        {/* SPOTLIGHT CASE: Protocolo Provisório de Carga Imediata        */}
        {/* WITH INTERACTIVE BEFORE/AFTER SLIDER                         */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Before/After Comparison */}
            <div className="w-full lg:w-1/2">
              <BeforeAfterSlider
                beforeImage="/assets/protocolo-oclusal.png"
                afterImage="/assets/protocolo-frontal.png"
                beforeLabel="Vista Oclusal & Acessos"
                afterLabel="Vista Frontal & Estética"
                className="aspect-[4/3] sm:aspect-[16/11] border border-slate-700/80"
              />
            </div>

            {/* Right Column: Responsible, Simple Technical Analysis */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Protocolo Provisório de Carga Imediata
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Carga imediata exige precisão total entre cirurgião e técnico. Focamos em <strong>assentamento passivo</strong> para proteger os implantes recém-instalados, além de suporte labial e fonética ideais.
                </p>

                {/* Technical Points */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Barra Interna Rígida:</strong> Distribuição uniforme de carga durante a osseointegração.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Gengiva Caracterizada:</strong> Estética facial harmônica e zênite gengival natural.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Oclusão Balanceada:</strong> Contatos posteriores bilaterais para proteção dos componentes.
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

        {/* ============================================================ */}
        {/* OTHER CASES GALLERY (Crowns, Bridges, Splints)               */}
        {/* ============================================================ */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Outros Trabalhos Entregues
          </h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'todos', label: 'Todos os Casos' },
              { id: 'unitario', label: 'Coroas & Cerâmicas' },
              { id: 'implantes', label: 'Sobre Implantes' },
              { id: 'placas', label: 'Placas & Oclusão' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Other Real Cases with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard
                  glowColor="rgba(245, 158, 11, 0.15)"
                  className="h-full bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Image Container with click to zoom */}
                    <div
                      onClick={() => setActiveImage(item.image)}
                      className="relative aspect-[4/3] bg-black/50 cursor-pointer overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-slate-950/90 text-white text-xs font-semibold flex items-center gap-1.5 border border-amber-500/30">
                          <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                          Ampliar Detalhes
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h4>

                      {/* Ficha Técnica Compacta de Bancada */}
                      <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                        <div className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold shrink-0">Material:</span>
                          <span className="text-slate-200">{item.techSheet.material}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold shrink-0">Sistema:</span>
                          <span className="text-slate-300">{item.techSheet.system}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold shrink-0">Indicação:</span>
                          <span className="text-slate-300">{item.techSheet.indication}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal for High Resolution Inspection with AnimatePresence */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-amber-400 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeImage}
                alt="Ampliação do caso clínico"
                className="max-h-[85vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-amber-500/30"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, CheckCircle2, Eye, Send, MoveHorizontal } from 'lucide-react'
import { BeforeAfterSlider } from './ui/BeforeAfterSlider'
import { TiltCard } from './ui/TiltCard'

interface CaseGalleryProps {
  onOpenTriage: () => void
}

interface CaseItem {
  id: string
  title: string
  category: string
  image: string
  caption: string
  description: string
  technicalNotes: string[]
}

export const CaseGallery: React.FC<CaseGalleryProps> = ({ onOpenTriage }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'todos' | 'protocolo' | 'unitario' | 'implantes' | 'placas'>('todos')

  const cases: CaseItem[] = [
    {
      id: 'coroa-estetica',
      title: 'Coroa Unitária em Cerâmica Pura',
      category: 'unitario',
      image: '/assets/case-coroa-estetica.webp',
      caption: 'Adaptação marginal em modelo troquelado',
      description:
        'Adaptação cervical conferida sob magnificação. Sulcos oclusais anatômicos e vedamento passivo para saúde periodontal.',
      technicalNotes: [
        'Término em chanfro com vedamento passivo',
        'Textura superficial e halo incisal natural',
        'Ajuste oclusal verificado em articulador',
      ],
    },
    {
      id: 'emax-macro',
      title: 'Lentes e Facetas em Dissilicato (E.max)',
      category: 'unitario',
      image: '/assets/emax-ceramic-macro.jpg',
      caption: 'Fluorescência e translucidez natural',
      description:
        'Cerâmica pura vítrea com estética anterior refinada. Espessuras finas que preservam estrutura dental sadia.',
      technicalNotes: [
        'Espessuras ultrafinas de 0.3mm a 0.5mm',
        'Cimentação adesiva com selamento micrométrico',
        'Reflexão de luz idêntica ao esmalte dental',
      ],
    },
    {
      id: 'zirconia-macro',
      title: 'Ponte Fixa em Zircônia Multilayer',
      category: 'unitario',
      image: '/assets/dental-zirconia-macro.jpg',
      caption: 'Degradê natural e anatomia oclusal funcional',
      description:
        'Usinagem precisa com polimento mecânico glazeado que preserva dentes antagonistas e garante resistência mastigatória.',
      technicalNotes: [
        'Zircônia multilayer de alta translucidez',
        'Pigmentação e caracterização anatômica',
        'Assentamento passivo testado no troquel',
      ],
    },
    {
      id: 'ponte-implante',
      title: 'Prótese Fixa sobre Implantes',
      category: 'implantes',
      image: '/assets/case-ponte-implante.webp',
      caption: 'Assentamento passivo sobre análogos',
      description:
        'Prótese parafusada com assentamento livre de tensões mecânicas. Perfil de emergência desenhado para facilitar a higienização.',
      technicalNotes: [
        'Aparafusamento sem tensões mecânicas',
        'Ponto de contato proximal calibrado',
        'Emergência biológica para saúde peri-implantar',
      ],
    },
    {
      id: 'reabilitacao-anterior',
      title: 'Reabilitação Múltipla Anterior sobre Implantes',
      category: 'implantes',
      image: '/assets/case-reabilitacao-anterior.webp',
      caption: 'Pilares protéticos e harmonia gengival',
      description:
        'Harmonia do zênite gengival e proporção dentofacial. Vedamento adequado nos intermediários transmucosos.',
      technicalNotes: [
        'Compatibilidade com pilares cônicos e Ti-Base',
        'Eixo de inserção planejado para evitar sobrecarga',
        'Contorno estético de zênite gengival',
      ],
    },
    {
      id: 'placa-bruxismo',
      title: 'Placa Miorrelaxante de Alta Densidade',
      category: 'placas',
      image: '/assets/case-placa-bruxismo.webp',
      caption: 'Acrílico cristalino com polimento refinado',
      description:
        'Resina acrílica prensada com alta transparência e estabilidade dimensional. Guias funcionais balanceadas para proteção oclusal.',
      technicalNotes: [
        'Transparência óptica sem bolhas',
        'Retenção sem basculamento',
        'Desoclusão suave nos movimentos mandibulares',
      ],
    },
  ]

  const filteredCases = activeTab === 'todos' ? cases : cases.filter((c) => c.category === activeTab)

  return (
    <section id="cases" className="py-24 sm:py-32 bg-[#06090e] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px]"
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
          className="mb-20 bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 border border-teal-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(20,184,166,0.1)] relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Before/After Comparison */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              
              <BeforeAfterSlider
                beforeImage="/assets/case-protocolo-barra.webp"
                afterImage="/assets/case-protocolo-finalizado.webp"
                beforeLabel="Estrutura / Barra Metálica"
                afterLabel="Protocolo Finalizado"
                className="aspect-[4/3] sm:aspect-[16/11] border border-slate-700/80"
              />

              <div className="flex items-center justify-between text-xs text-slate-400 px-2 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveImage('/assets/case-protocolo-finalizado.webp')}
                  className="flex items-center gap-1.5 hover:text-teal-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-teal-400" />
                  <span>Clique para ampliar imagem completa</span>
                </button>
                <span className="text-teal-400 font-semibold flex items-center gap-1">
                  <MoveHorizontal className="w-3.5 h-3.5" />
                  Slider Interativo
                </span>
              </div>
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
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Barra Interna Rígida:</strong> Distribuição uniforme de carga durante a osseointegração.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Gengiva Caracterizada:</strong> Estética facial harmônica e zênite gengival natural.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Oclusão Balanceada:</strong> Contatos posteriores bilaterais para proteção dos componentes.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenTriage}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] active:scale-95"
                >
                  <span>Enviar caso para análise</span>
                  <Send className="w-4 h-4 text-slate-950" />
                </button>
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  Planejamento conjunto com o técnico antes da cirurgia
                </span>
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
                    ? 'bg-teal-400 text-slate-950 shadow-md font-bold'
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
                  glowColor="rgba(20, 184, 166, 0.15)"
                  className="h-full bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-teal-500/40 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl"
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
                        <span className="px-3 py-1.5 rounded-full bg-slate-950/90 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                          <ZoomIn className="w-3.5 h-3.5 text-teal-400" />
                          Ampliar Detalhes
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-teal-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-teal-400 mb-3">
                        {item.caption}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed mb-5 font-normal">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-4 border-t border-slate-800">
                        {item.technicalNotes.map((note, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={onOpenTriage}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-teal-500 hover:text-slate-950 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Enviar caso para análise</span>
                    </button>
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
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
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeImage}
                alt="Ampliação do caso clínico"
                className="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-slate-700"
              />
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setActiveImage(null)
                    onOpenTriage()
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all"
                >
                  <span>Enviar caso para análise</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import React, { useState } from 'react'
import { ZoomIn, X, CheckCircle2, Eye, Sparkles, Send } from 'lucide-react'

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
  badge?: string
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
      caption: 'Adaptação marginal micrométrica em modelo troquelado',
      description:
        'Trabalho de alta fidelidade anatômica com esmalte estratificado, sulcos oclusais funcionais e selamento cervical rigoroso para preservação periodontal.',
      technicalNotes: [
        'Término em chanfro com vedamento passivo',
        'Texturização superficial e mimetismo óptico',
        'Controle oclusal em articulador semi-ajustável',
      ],
      badge: 'Cerâmica Pura',
    },
    {
      id: 'placa-bruxismo',
      title: 'Placa Miorrelaxante de Alta Densidade',
      category: 'placas',
      image: '/assets/case-placa-bruxismo.webp',
      caption: 'Acrílico cristalino com polimento mecânico avançado',
      description:
        'Confeccionada em resina acrílica termopolimerizável com alto índice de transparência e estabilidade dimensional. Guias funcionais balanceadas para alívio muscular.',
      technicalNotes: [
        'Transparência óptica sem bolhas',
        'Retenção calibrada sem basculamento',
        'Desoclusão suave nos movimentos excursivos',
      ],
      badge: 'Acrílico Cristal',
    },
    {
      id: 'ponte-implante',
      title: 'Prótese Fixa sobre Implantes',
      category: 'implantes',
      image: '/assets/case-ponte-implante.webp',
      caption: 'Análogos e pilares protéticos com assentamento passivo',
      description:
        'Solução protética aparafusada sobre análogos em modelo de gesso especial. Perfil de emergência projetado para facilitar a higienização interproximal pelo paciente.',
      technicalNotes: [
        'Aparafusamento sem tensões mecânicas',
        'Ponto de contato proximal calibrado',
        'Emergência biológica para saúde peri-implantar',
      ],
      badge: 'Sobre Implante',
    },
    {
      id: 'reabilitacao-anterior',
      title: 'Reabilitação Múltipla Anterior sobre Implantes',
      category: 'implantes',
      image: '/assets/case-reabilitacao-anterior.webp',
      caption: 'Pilares protéticos cônicos e harmonia do zênite gengival',
      description:
        'Alinhamento estético do setor anterior com respeito à proporção áurea dentofacial e vedamento adequado nos intermediários transmucosos.',
      technicalNotes: [
        'Compatibilidade com pilares cônicos e Ti-Base',
        'Eixo de inserção planejado para evitar sobrecargas',
        'Contorno de zênite gengival harmônico',
      ],
      badge: 'Estética Anterior',
    },
  ]

  const filteredCases = activeTab === 'todos' ? cases : cases.filter((c) => c.category === activeTab)

  return (
    <section id="cases" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Casos Reais do Laboratório</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Precisão que se comprova no modelo e na boca.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Fotografias autênticas de próteses produzidas na nossa bancada para cirurgiões-dentistas parceiros. Sem filtros excessivos, com foco no rigor técnico e na qualidade de acabamento.
          </p>
        </div>

        {/* ============================================================ */}
        {/* SPOTLIGHT CASE: Protocolo Provisório de Carga Imediata        */}
        {/* ============================================================ */}
        <div className="mb-20 bg-gradient-to-br from-slate-800 via-slate-800/90 to-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Visual Case Presentation (Internal Structure vs Final Protocol) */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Foto da Estrutura / Barra Metálica */}
                <div
                  onClick={() => setActiveImage('/assets/case-protocolo-barra.webp')}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-black/40 border border-slate-700/80 aspect-[4/5] flex items-center justify-center"
                >
                  <img
                    src="/assets/case-protocolo-barra.webp"
                    alt="Barra metálica interna para protocolo"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider mb-1">
                      Fase Estrutural
                    </span>
                    <p className="text-xs text-white font-medium">
                      Barra metálica para dissipação de cargas
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* 2. Foto da Peça Finalizada */}
                <div
                  onClick={() => setActiveImage('/assets/case-protocolo-finalizado.webp')}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-black/40 border border-teal-500/40 aspect-[4/5] flex items-center justify-center ring-2 ring-teal-500/20"
                >
                  <img
                    src="/assets/case-protocolo-finalizado.webp"
                    alt="Protocolo de carga imediata finalizado"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                      Resultado Protético
                    </span>
                    <p className="text-xs text-white font-medium">
                      Caracterização gengival e alinhamento
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 px-2">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-teal-400" />
                  Clique nas fotos para ampliar em alta resolução
                </span>
                <span className="text-teal-400 font-semibold">Caso Real Lourenço</span>
              </div>
            </div>

            {/* Right Column: Responsible, Simple Technical Analysis */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase mb-4">
                  <span>Estudo de Caso Clínico</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Protocolo Provisório de Carga Imediata
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Reabilitações totais de carga imediata exigem sincronia milimétrica entre cirurgião e técnico.
                  Nosso foco principal neste caso foi assegurar o <strong>assentamento passivo</strong> absoluto para não introduzir forças de torção sobre os implantes recém-instalados, além de garantir sustentação labial e conforto fonético ao paciente.
                </p>

                {/* Technical Points */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Reforço Estrutural Rígido:</strong> Barra interna confeccionada para distribuição uniforme do impacto mastigatório durante o período crítico de osseointegração.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Caracterização Gengival Anatômica:</strong> Resina com pigmentação e estrias fisiológicas sutis para devolver a estética facial e o zênite natural.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Oclusão Balanceada Bilateral:</strong> Contatos posteriores simultâneos para proteger os intermediários e propiciar estabilidade mastigatória imediata.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenTriage}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  <span>Enviar caso para análise</span>
                  <Send className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  Planejamento conjunto com o técnico antes da cirurgia
                </span>
              </div>

            </div>

          </div>

        </div>

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
              { id: 'unitario', label: 'Coroas Cerâmicas' },
              { id: 'implantes', label: 'Sobre Implantes' },
              { id: 'placas', label: 'Placas & Oclusão' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Other Real Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with click to zoom */}
                <div
                  onClick={() => setActiveImage(item.image)}
                  className="relative aspect-square bg-black/50 cursor-pointer overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Ampliar Detalhes
                    </span>
                  </div>
                  {item.badge && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-teal-300 border border-teal-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-teal-400 mb-3">
                    {item.caption}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-700/60">
                    {item.technicalNotes.map((note, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={onOpenTriage}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-700/60 hover:bg-teal-600 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Enviar caso para análise</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for High Resolution Inspection */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all"
              >
                <span>Enviar caso para análise</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

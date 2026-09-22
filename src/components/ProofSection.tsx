import React, { useState } from 'react'
import { CheckCircle2, MessageSquare, Star, ZoomIn, X, Send, Award, Users, ShieldCheck } from 'lucide-react'
import { LAB_CONFIG } from '../config'

interface ProofSectionProps {
  onOpenTriage: () => void
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onOpenTriage }) => {
  const [activeZoomImage, setActiveZoomImage] = useState<string | null>(null)

  const reviews = [
    {
      id: 'review-1',
      image: '/assets/review-1.webp',
      badge: 'Feedback no WhatsApp',
      dentistType: 'Cirurgião-Dentista Parceiro',
      quote:
        '“Já entregou e eu já instalei. Parabéns pelo seu trabalho! Gostei bastante! Vamos alinhar pra eu poder mandar mais trabalhos pra você...”',
      highlight: 'Instalação imediata & elogio ao trabalho',
      topics: ['Prótese entregue', 'Instalação sem retrabalho', 'Alinhamento de logística'],
    },
    {
      id: 'review-2',
      image: '/assets/review-2.webp',
      badge: 'Depoimento Verificado',
      dentistType: 'Cirurgiã-Dentista Parceira',
      quote:
        '“Quero deixar meu agradecimento a toda a equipe do laboratório Lourenço pelo excelente atendimento! Fiquei muito satisfeita com todo o processo, desde o atendimento, até a qualidade final do trabalho. As peças ficaram excelentes e superou às expectativas. E gostaria de destacar, principalmente, a agilidade na execução e na entrega do serviço...”',
      highlight: 'Superou expectativas & agilidade na entrega',
      topics: ['Excelente atendimento', 'Peças acima da expectativa', 'Agilidade e cuidado'],
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Resultados e Credibilidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A confiança de quem instala nossas próteses no consultório.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Números comprovados e conversas reais com dentistas que vivem a rotina clínica e contam com o Laboratório Lourenço diariamente.
          </p>
        </div>

        {/* ============================================================ */}
        {/* ANIMATED COUNTERS GRID                                       */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center mb-4 shadow-md shadow-teal-900/10">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {LAB_CONFIG.metrics.deliveredProstheses}
            </p>
            <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
              Próteses entregues com sucesso
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center mb-4 shadow-md shadow-teal-900/10">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {LAB_CONFIG.metrics.partnerDentists}
            </p>
            <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
              Dentistas parceiros ativos
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center mb-4 shadow-md shadow-teal-900/10">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Digital & Convencional
            </p>
            <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
              Integração completa de fluxos
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center mb-4 shadow-md shadow-teal-900/10">
              <MessageSquare className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              100%
            </p>
            <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
              Acompanhamento técnico direto
            </p>
          </div>

        </div>

        {/* ============================================================ */}
        {/* AUTHENTIC WHATSAPP PRINTS & DENTIST TESTIMONIALS             */}
        {/* ============================================================ */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Comprovado no Dia a Dia
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                O que os cirurgiões dizem no WhatsApp
              </h3>
            </div>
            <span className="hidden sm:inline-flex text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Mensagens Autênticas Verificadas
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full">
                      {rev.badge}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Transcript quote */}
                  <blockquote className="text-sm sm:text-base font-normal text-slate-700 italic leading-relaxed mb-6 bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
                    {rev.quote}
                  </blockquote>

                  {/* Key highlights tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {rev.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-slate-600 bg-slate-200/60 px-2.5 py-1 rounded-lg flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-teal-700" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Print Visual Attachment with click to zoom */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div
                    onClick={() => setActiveZoomImage(rev.image)}
                    className="flex items-center gap-3 cursor-pointer group/print"
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border border-slate-300 shadow-xs shrink-0">
                      <img
                        src={rev.image}
                        alt="Print da conversa real do WhatsApp"
                        className="w-full h-full object-cover group-hover/print:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white opacity-0 group-hover/print:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover/print:text-teal-700 transition-colors flex items-center gap-1">
                        <span>Ver print original</span>
                        <ZoomIn className="w-3 h-3 text-teal-700" />
                      </p>
                      <p className="text-[11px] text-slate-500">Clique para abrir imagem original</p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-slate-500">
                    {rev.dentistType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="text-center pt-6">
          <button
            type="button"
            onClick={onOpenTriage}
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-teal-900 text-white font-semibold text-base rounded-2xl shadow-xl shadow-slate-900/10 active:scale-95 transition-all"
          >
            <span>Enviar caso para análise</span>
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>

      {/* Lightbox for WhatsApp review prints */}
      {activeZoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveZoomImage(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveZoomImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeZoomImage}
              alt="Print real ampliado"
              className="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-slate-700"
            />
            <p className="mt-3 text-xs text-slate-400">
              Registro real de comunicação técnica do Laboratório Lourenço
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

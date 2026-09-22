import React from 'react'
import { Send, CheckCircle2, ShieldCheck, ArrowDownRight, FileCheck } from 'lucide-react'

interface HeroProps {
  onOpenTriage: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenTriage }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50/60 to-white">
      {/* Background ambient lighting effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-teal-500/10 via-cyan-400/5 to-transparent blur-3xl rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-20 w-96 h-96 bg-amber-400/5 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Persuasive Copy & Conversion Trigger */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Selo oficial */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-xs mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 animate-ping" />
              <span className="text-xs sm:text-sm font-semibold text-teal-900 tracking-wide">
                Prótese dental para dentistas da região
              </span>
            </div>

            {/* 2. Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5">
              Seu planejamento merece uma prótese à altura do caso.
            </h1>

            {/* 3. Subheadline com a promessa principal */}
            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Transformamos o planejamento do dentista em próteses com foco em{' '}
              <strong className="font-semibold text-slate-900">adaptação</strong>,{' '}
              <strong className="font-semibold text-slate-900">estética</strong> e{' '}
              <strong className="font-semibold text-slate-900">previsibilidade</strong>.
            </p>

            {/* 4. Action Area: Primary CTA with Button-in-Button */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onOpenTriage}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-4 bg-teal-800 hover:bg-teal-900 active:scale-[0.98] text-white font-semibold text-base sm:text-lg rounded-2xl shadow-xl shadow-teal-900/20 hover:shadow-teal-900/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                <span>Enviar caso para análise</span>
                <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <Send className="w-4 h-4 text-white" />
                </span>
              </button>

              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-slate-700 hover:text-teal-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-xs transition-colors"
              >
                <span>Ver casos clínicos reais</span>
                <ArrowDownRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* 5. Microprova & Trust Elements */}
            <div className="pt-4 border-t border-slate-200/80 w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white text-[11px] font-bold">
                    OL
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-700 text-white text-[11px] font-bold">
                    LL
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white text-[11px] font-bold">
                    ★
                  </span>
                </div>
                <span className="font-semibold text-slate-900">
                  +1.000 próteses entregues • +30 dentistas parceiros
                </span>
              </div>

              <div className="flex items-center gap-4 text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  Fluxo Digital & Convencional
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  Coleta e Entrega na Região
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Stage with Real Photos & Machined Double-Bezel */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            
            {/* Background geometric decorative halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-amber-500/10 to-transparent rounded-3xl -rotate-2 transform scale-95" />

            {/* Main Outer Machined Frame */}
            <div className="relative w-full max-w-md double-bezel">
              <div className="double-bezel-inner overflow-hidden p-4 sm:p-6 bg-gradient-to-b from-white to-slate-50/80">
                
                {/* Header tag */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/logo.webp"
                      alt="Laboratório Lourenço"
                      className="w-7 h-7 object-contain"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Responsável Técnico</p>
                      <p className="text-[11px] text-teal-700 font-medium">Osvaldo Lourenço Filho</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                    Especialista
                  </span>
                </div>

                {/* Real High-Resolution Portrait with black uniform */}
                <div className="relative mt-4 rounded-2xl bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 overflow-hidden flex items-end justify-center aspect-[4/4.5] shadow-inner">
                  <img
                    src="/assets/osvaldo-transparent.webp"
                    alt="Osvaldo Lourenço Filho - Responsável Técnico do Laboratório Lourenço"
                    className="w-[90%] max-h-full object-contain filter drop-shadow-xl transform transition-transform duration-500 hover:scale-105"
                    loading="eager"
                  />

                  {/* Floating Micro Card 1: Prótese Entregue Real */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2.5 max-w-[170px] animate-fade-in">
                    <img
                      src="/assets/case-coroa-estetica.webp"
                      alt="Coroa estética de alta precisão"
                      className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                    />
                    <div className="leading-tight">
                      <p className="text-[10px] font-bold text-slate-900">Coroa Cerâmica</p>
                      <p className="text-[9px] text-emerald-700 font-semibold">Selamento Perfeito</p>
                    </div>
                  </div>

                  {/* Floating Micro Card 2: Protocolo Provisório */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2.5 max-w-[190px]">
                    <img
                      src="/assets/case-protocolo-finalizado.webp"
                      alt="Protocolo de Carga Imediata"
                      className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                    />
                    <div className="leading-tight">
                      <p className="text-[10px] font-bold text-slate-900">Carga Imediata</p>
                      <p className="text-[9px] text-teal-700 font-semibold">Passividade Estrutural</p>
                    </div>
                  </div>
                </div>

                {/* Bottom trust caption */}
                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <FileCheck className="w-3.5 h-3.5 text-teal-600" />
                    Atendimento Direto com o Técnico
                  </span>
                  <span className="text-slate-400">São Paulo & Região</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

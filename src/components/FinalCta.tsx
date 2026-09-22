import React from 'react'
import { Send, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'

interface FinalCtaProps {
  onOpenTriage: () => void
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTriage }) => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      {/* Glow rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-500/15 blur-3xl rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>Parceria Clínica Segura</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto mb-6">
          Seu próximo caso merece previsibilidade desde o planejamento.
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Elimine o receio de retrabalhos, desajustes e atrasos. Conte com um laboratório que entende a responsabilidade do cirurgião-dentista e acompanha cada detalhe do caso.
        </p>

        {/* Big Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={onOpenTriage}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 py-5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-base sm:text-lg rounded-2xl shadow-2xl shadow-teal-500/30 active:scale-95 transition-all"
          >
            <span>Enviar caso para análise</span>
            <span className="w-8 h-8 rounded-xl bg-slate-950/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <Send className="w-4 h-4 text-slate-950" />
            </span>
          </button>
        </div>

        {/* Microcopy anti-anxiety guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Sem compromisso inicial
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-400" />
            Resposta técnica rápida
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            Coleta e entrega na região
          </span>
        </div>

      </div>
    </section>
  )
}

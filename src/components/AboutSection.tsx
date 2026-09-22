import React from 'react'
import { motion } from 'framer-motion'
import { HeartHandshake, ShieldCheck, Send, CheckCircle2 } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface AboutSectionProps {
  onOpenTriage: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTriage }) => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#070c18] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Studio Photography with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <TiltCard
              glowColor="rgba(20, 184, 166, 0.25)"
              className="relative w-full max-w-md rounded-3xl bg-slate-950 p-3.5 shadow-2xl border border-slate-800/80"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 flex items-center justify-center border border-white/5">
                <img
                  src="/assets/osvaldo-portrait.webp"
                  alt="Osvaldo Lourenço Filho - Responsável Técnico do Laboratório Lourenço"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Responsável Técnico
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Osvaldo Lourenço Filho
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Especialista em Prótese Dental & Reabilitação Oral
                  </p>
                </div>
              </div>

              <div className="mt-4 px-3 pb-2 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium text-teal-300">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  Responsabilidade Técnica Direta
                </span>
                <span className="text-slate-400 text-[11px]">Laboratório Lourenço</span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Human Story & Professional Positioning */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-400" />
              <span>Sobre o Laboratório Lourenço</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Um parceiro de bancada para o seu consultório.
            </h2>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed mb-8 font-normal">
              <p>
                O <strong className="text-white font-semibold">Laboratório Lourenço</strong> nasceu para acabar com a distância entre o dentista e o técnico. Aqui, seu caso não cai numa linha de produção anônima.
              </p>
              
              <p>
                Liderado por <strong className="text-white font-semibold">Osvaldo Lourenço Filho</strong>, aliamos a anatomia dental clássica à precisão do fluxo digital CAD/CAM. Quando você envia um caso, é o próprio responsável técnico quem confere o troquel, a oclusão e alinha os detalhes com você no WhatsApp.
              </p>

              <p>
                O compromisso é direto: peças com assentamento passivo na primeira prova, entrega no dia certo e suporte técnico rápido sempre que você precisar.
              </p>
            </div>

            {/* Direct Trust Proof Line */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-teal-300 mb-8">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                Responsabilidade técnica direta
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Atendimento em São Paulo e região
              </span>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onOpenTriage}
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-base rounded-2xl shadow-[0_0_25px_rgba(20,184,166,0.35)] active:scale-95 transition-all"
            >
              <span>Enviar caso para análise com o Osvaldo</span>
              <Send className="w-4 h-4 text-slate-950" />
            </button>


          </motion.div>

        </div>

      </div>
    </section>
  )
}


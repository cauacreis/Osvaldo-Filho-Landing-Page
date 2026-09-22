import React from 'react'
import { motion } from 'framer-motion'
import { HeartHandshake, ShieldCheck, Send, CheckCircle2 } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface AboutSectionProps {
  onOpenTriage: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTriage }) => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
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
              glowColor="rgba(20, 184, 166, 0.2)"
              className="relative w-full max-w-md rounded-3xl bg-slate-950 p-3 shadow-2xl border border-slate-800"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 flex items-center justify-center">
                <img
                  src="/assets/osvaldo-studio.webp"
                  alt="Osvaldo Lourenço Filho - Responsável Técnico do Laboratório Lourenço"
                  className="w-full h-full object-cover object-[82%_20%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Responsável Técnico
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Osvaldo Lourenço Filho
                  </h3>
                  <p className="text-xs text-slate-300">
                    Especialista em Prótese Dental & Reabilitação Oral
                  </p>
                </div>
              </div>

              <div className="mt-4 px-3 pb-2 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
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
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
              <span>Sobre o Laboratório Lourenço</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Um parceiro especialista ao lado do seu consultório.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8 font-normal">
              <p>
                O <strong className="text-slate-900 font-semibold">Laboratório Lourenço</strong> nasceu com uma convicção inegociável: 
                o laboratório de prótese não deve ser uma linha de montagem anônima e impessoal, mas sim uma extensão clínica do consultório odontológico.
              </p>
              
              <p>
                Liderado por <strong className="text-slate-900 font-semibold">Osvaldo Lourenço Filho</strong>, nossa bancada une a sensibilidade artística da anatomia dental clássica à precisão tecnológica dos fluxos digitais CAD/CAM. Cada peça é tratada com rigor individual — respeitando espaço biológico, término cervical, oclusão funcional e harmonia facial.
              </p>

              <p>
                Sabemos o valor do seu tempo e o peso da sua responsabilidade perante o paciente. Por isso, oferecemos canal de comunicação direto, logística ágil para consultórios da região e o compromisso real de entregar próteses previsíveis, que entram passivas e encantam na cimentação.
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Diálogo Aberto</h4>
                  <p className="text-xs text-slate-500">Sem burocracia ou intermediários para tirar dúvidas clínicas.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rigor Artesanal & Digital</h4>
                  <p className="text-xs text-slate-500">Escaneamento digital e estratificação cerâmica cuidadosa.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Logística Alinhada</h4>
                  <p className="text-xs text-slate-500">Coleta e entrega estruturada para dentistas da região.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Previsibilidade Real</h4>
                  <p className="text-xs text-slate-500">Prazos respeitados para garantir a sua tranquilidade de agenda.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onOpenTriage}
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal-800 hover:bg-teal-900 text-white font-semibold text-base rounded-2xl shadow-xl shadow-teal-900/20 active:scale-95 transition-all"
            >
              <span>Enviar caso para análise</span>
              <Send className="w-4 h-4 text-white" />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

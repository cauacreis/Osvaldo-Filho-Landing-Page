'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TiltCard } from './ui/TiltCard'

interface AboutSectionProps {
  onOpenTriage?: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#06090e] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] bg-yellow-500/5 rounded-full blur-[140px]"
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
              glowColor="rgba(245, 158, 11, 0.2)"
              className="relative w-full max-w-md rounded-3xl bg-slate-950 p-3.5 shadow-2xl border border-amber-500/20"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 flex items-center justify-center border border-white/5">
                <img
                  src="/assets/osvaldo-portrait.webp"
                  alt="Osvaldo Lourenço Filho - Responsável Técnico do Laboratório Lourenço"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Osvaldo Lourenço Filho
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-300/90 font-medium mt-0.5">
                    Especialista em Prótese Dental & Reabilitação Oral
                  </p>
                </div>
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

            <div className="pt-2 flex items-center gap-3 text-xs text-amber-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              <span>Atendimento direto e personalizado para cada cirurgião-dentista parceiro</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

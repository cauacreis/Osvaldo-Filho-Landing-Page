'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TiltCard } from './ui/TiltCard'
import { LAB_CONFIG, getDirectWhatsAppLink } from '../config'
import { PhoneCall, CheckCheck, Cpu, Clock, ArrowRight, Instagram } from 'lucide-react'

interface AboutSectionProps {
  onOpenTriage?: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTriage }) => {
  const benchPillars = [
    {
      icon: PhoneCall,
      title: 'Conversa Direta no WhatsApp',
      desc: 'Sem atendentes anônimos. Dúvidas de preparo, término cervical e espaço oclusal alinhadas direto com o Osvaldo antes de fresar.',
    },
    {
      icon: CheckCheck,
      title: 'Checagem Rigorosa em Troquel',
      desc: 'Peças conferidas sob magnificação ótica e articulador. Assentamento passivo para cimentar sem desgaste na cadeira.',
    },
    {
      icon: Cpu,
      title: 'Fluxo Digital & Físico',
      desc: 'Compatível com qualquer scanner intraoral (STL/PLY) ou coleta física de moldagens e modelos no seu consultório.',
    },
    {
      icon: Clock,
      title: 'Pontualidade de Bancada',
      desc: 'Acompanhamos a data agendada com seu paciente. O trabalho é entregue antes da consulta de instalação.',
    },
  ]

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#05070B] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] bg-yellow-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Portrait & Authority Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
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
              className="relative w-full max-w-md rounded-3xl bg-slate-950 p-3.5 shadow-2xl border border-amber-500/25"
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
                    {LAB_CONFIG.founder}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-300 font-medium mt-0.5">
                    {LAB_CONFIG.founderRole} • {LAB_CONFIG.croTpd}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              O responsável técnico que confere seu caso antes da entrega.
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              <p>
                No <strong className="text-white font-semibold">Laboratório Lourenço</strong>, seu caso não cai em uma linha de produção anônima. Aliamos anatomia dental clássica à precisão da fresagem CAD/CAM.
              </p>
              
              <p>
                Quando você envia um caso, é o próprio <strong className="text-white font-semibold">Osvaldo Lourenço Filho</strong> quem confere o troquel, a oclusão e alinha com você no WhatsApp: sem retrabalho na cimentação e com prazo rigorosamente cumprido.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getDirectWhatsAppLink('Olá Osvaldo, gostaria de conversar sobre um caso clínico.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:from-amber-300 transition-all cursor-pointer"
              >
                <span>Conversar direto com o Osvaldo</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {LAB_CONFIG.instagramUrl && (
                <a
                  href={LAB_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 text-xs sm:text-sm font-semibold border border-slate-800 hover:border-amber-500/30 transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-amber-400" />
                  <span>Instagram</span>
                </a>
              )}

              {onOpenTriage && (
                <button
                  type="button"
                  onClick={onOpenTriage}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 text-xs sm:text-sm font-semibold border border-slate-800 transition-colors cursor-pointer"
                >
                  <span>Iniciar Triagem de Caso</span>
                </button>
              )}
            </div>
          </motion.div>

        </div>

        {/* 4 Bench Pillars Grid (Merged from SolutionPillars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benchPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <TiltCard
                  glowColor="rgba(245, 158, 11, 0.15)"
                  className="h-full bg-slate-900/60 hover:bg-slate-900/90 rounded-2xl p-5 border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-md"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5 tracking-tight group-hover:text-amber-200 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

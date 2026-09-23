'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TiltCard } from './ui/TiltCard'
import { LAB_CONFIG, getDirectWhatsAppLink } from '../config'
import { PhoneCall, CheckCheck, Cpu, Clock, ArrowRight, Instagram, MessageSquare, ExternalLink, Send, X } from 'lucide-react'

interface AboutSectionProps {
  onOpenTriage?: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTriage }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
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

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Conversar direto com o Osvaldo</span>
                <span className="w-6 h-6 rounded-lg bg-slate-950/15 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Contact Channel Popup Modal */}
        <AnimatePresence>
          {isContactModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsContactModalOpen(false)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative w-full max-w-md bg-[#0B0E14] border border-amber-500/30 rounded-3xl p-6 sm:p-7 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10"
              >
                {/* Ambient glow */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl" />

                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10 relative">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/osvaldo-portrait.webp"
                      alt="Osvaldo Lourenço Filho"
                      className="w-12 h-12 rounded-full object-cover border border-amber-500/40 shrink-0"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        {LAB_CONFIG.founder}
                      </h3>
                      <p className="text-xs text-amber-400 font-medium">
                        {LAB_CONFIG.founderRole} • {LAB_CONFIG.croTpd}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(false)}
                    className="p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label="Fechar modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Options List */}
                <div className="py-5 space-y-3">
                  <p className="text-xs text-slate-300 font-normal">
                    Selecione como prefere dar andamento ou falar sobre o seu caso:
                  </p>

                  {/* Option 1: WhatsApp Direto */}
                  <a
                    href={getDirectWhatsAppLink('Olá Osvaldo, gostaria de conversar sobre um caso clínico.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsContactModalOpen(false)}
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-400/10 to-amber-500/5 hover:from-amber-400/20 hover:to-amber-500/15 border border-amber-500/30 hover:border-amber-400/60 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 flex items-center justify-center text-slate-950 shrink-0 shadow-md">
                        <MessageSquare className="w-5 h-5 text-slate-950" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                          Conversar no WhatsApp
                        </h4>
                        <p className="text-[11px] text-slate-300 font-normal">
                          Mensagem pronta: "Olá Osvaldo, gostaria de conversar sobre um caso..."
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Option 2: Instagram Oficial */}
                  {LAB_CONFIG.instagramUrl && (
                    <a
                      href={LAB_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsContactModalOpen(false)}
                      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                          <Instagram className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                            Ver Instagram Oficial
                          </h4>
                          <p className="text-[11px] text-slate-400 font-normal">
                            {LAB_CONFIG.instagram} • Casos clínicos e bastidores de bancada
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}

                  {/* Option 3: Triagem de Caso Rápida */}
                  {onOpenTriage && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsContactModalOpen(false)
                        onOpenTriage()
                      }}
                      className="group w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/30 transition-all text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                          <Send className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                            Fazer Triagem de Caso (1 min)
                          </h4>
                          <p className="text-[11px] text-slate-400 font-normal">
                            Preencha os detalhes e receba orientação técnica sob medida
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Atendimento direto pelo laboratório</span>
                  <span className="font-semibold text-amber-400">{LAB_CONFIG.whatsappDisplay}</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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

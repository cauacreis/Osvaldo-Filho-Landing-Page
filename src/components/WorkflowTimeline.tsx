'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { TiltCard } from './ui/TiltCard'

interface WorkflowTimelineProps {
  onOpenTriage: () => void
}

// 3D Translucent Gold Icon Components with Transparent Backgrounds
const Icon3DUpload: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 drop-shadow-[0_10px_15px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
  >
    <defs>
      <linearGradient id="gold3d_grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="gold3d_glass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(254, 240, 138, 0.45)" />
        <stop offset="100%" stopColor="rgba(180, 83, 9, 0.15)" />
      </linearGradient>
      <linearGradient id="gold3d_accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    {/* 3D Glass Layer Base */}
    <rect x="8" y="14" width="48" height="42" rx="14" fill="url(#gold3d_glass)" stroke="url(#gold3d_grad1)" strokeWidth="1.5" />
    {/* Specular Rim */}
    <path d="M12 18C12 15.7909 13.7909 14 16 14H48C50.2091 14 52 15.7909 52 18V24C40 24 24 20 12 28V18Z" fill="white" fillOpacity="0.25" />
    {/* 3D Cloud/Document Upload Shape */}
    <path d="M32 44V26M32 26L25 33M32 26L39 33" stroke="url(#gold3d_accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 44H43" stroke="url(#gold3d_grad1)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="48" cy="18" r="3.5" fill="#FEF08A" className="animate-pulse" />
  </svg>
)

const Icon3DAlign: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 drop-shadow-[0_10px_15px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
  >
    <defs>
      <linearGradient id="gold3d_grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="gold3d_glass2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(254, 240, 138, 0.45)" />
        <stop offset="100%" stopColor="rgba(180, 83, 9, 0.15)" />
      </linearGradient>
    </defs>
    {/* 3D Glass Layer Base */}
    <circle cx="32" cy="32" r="24" fill="url(#gold3d_glass2)" stroke="url(#gold3d_grad2)" strokeWidth="1.5" />
    {/* Specular Highlight */}
    <path d="M16 24C20 16 44 16 48 24C40 22 24 22 16 24Z" fill="white" fillOpacity="0.3" />
    {/* Chat Bubble & Diagnostic Waves */}
    <path d="M24 26C24 22.6863 26.6863 20 30 20H38C41.3137 20 44 22.6863 44 26V32C44 35.3137 41.3137 38 38 38H33L27 43V38H30C26.6863 38 24 35.3137 24 32V26Z" fill="url(#gold3d_grad2)" />
    <circle cx="31" cy="29" r="1.5" fill="#040609" />
    <circle cx="35" cy="29" r="1.5" fill="#040609" />
    <circle cx="39" cy="29" r="1.5" fill="#040609" />
    <path d="M18 36C15 32 15 26 19 22" stroke="#FEF08A" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const Icon3DPrecision: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 drop-shadow-[0_10px_15px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
  >
    <defs>
      <linearGradient id="gold3d_grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="40%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#92400E" />
      </linearGradient>
      <linearGradient id="gold3d_glass3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(254, 240, 138, 0.4)" />
        <stop offset="100%" stopColor="rgba(217, 119, 6, 0.15)" />
      </linearGradient>
    </defs>
    {/* 3D Hexagonal Glass Badge */}
    <path d="M32 8L52 20V44L32 56L12 44V20L32 8Z" fill="url(#gold3d_glass3)" stroke="url(#gold3d_grad3)" strokeWidth="1.5" />
    {/* 3D Milling / Gear / Diamond Facet */}
    <circle cx="32" cy="32" r="12" stroke="url(#gold3d_grad3)" strokeWidth="3" />
    <path d="M32 14V20M32 44V50M14 32H20M44 32H50" stroke="#FEF08A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 32L30 36L38 28" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="46" cy="18" r="2.5" fill="#FEF08A" />
  </svg>
)

const Icon3DDelivery: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 drop-shadow-[0_10px_15px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
  >
    <defs>
      <linearGradient id="gold3d_grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="60%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="gold3d_glass4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(254, 240, 138, 0.4)" />
        <stop offset="100%" stopColor="rgba(180, 83, 9, 0.15)" />
      </linearGradient>
    </defs>
    {/* 3D Glass Shield Base */}
    <path d="M32 10C44 10 52 14 52 24C52 40 38 50 32 54C26 50 12 40 12 24C12 14 20 10 32 10Z" fill="url(#gold3d_glass4)" stroke="url(#gold3d_grad4)" strokeWidth="1.5" />
    {/* Fast Delivery Truck & Clock */}
    <path d="M20 28H34V40H20V28Z" fill="url(#gold3d_grad4)" />
    <path d="M34 32H40L44 36V40H34V32Z" fill="url(#gold3d_grad4)" />
    <circle cx="25" cy="41" r="3" fill="#FFFBEB" />
    <circle cx="39" cy="41" r="3" fill="#FFFBEB" />
    <path d="M15 24H23M17 20H26" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const WorkflowTimeline: React.FC<WorkflowTimelineProps> = ({ onOpenTriage }) => {
  const steps = [
    {
      step: '01',
      title: 'Envie o Caso',
      subtitle: 'Digital ou Convencional',
      description:
        'Envie arquivos STL/PLY pelo WhatsApp ou agende a coleta física de moldagens e modelos no seu consultório.',
      details: ['Qualquer scanner intraoral', 'Coleta própria na região', 'Triagem rápida'],
      iconComponent: Icon3DUpload,
    },
    {
      step: '02',
      title: 'Alinhamento Direto',
      subtitle: 'Com o Osvaldo',
      description:
        'Analisamos preparo, término, espaço oclusal e indicação do biomaterial antes de usinar ou injetar.',
      details: ['Conversa direta no WhatsApp', 'Sem decisões unilaterais', 'Previsibilidade clínica'],
      iconComponent: Icon3DAlign,
    },
    {
      step: '03',
      title: 'Produção com Rigor',
      subtitle: 'Controle de Bancada',
      description:
        'Fresagem CAD/CAM aliada à estratificação e textura anatômica. Teste de vedamento passivo no modelo.',
      details: ['Biomateriais de procedência', 'Adaptação marginal conferida', 'Acabamento natural'],
      iconComponent: Icon3DPrecision,
    },
    {
      step: '04',
      title: 'Entrega Pontual',
      subtitle: 'Instalação Tranquila',
      description:
        'Entrega pontual para o dia agendado com seu paciente, pronta para cimentação com rapidez.',
      details: ['Cronograma rigoroso', 'Embalagem técnica protetora', 'Suporte contínuo'],
      iconComponent: Icon3DDelivery,
    },
  ]

  return (
    <section id="fluxo" className="py-24 sm:py-32 bg-[#05070B] text-white relative overflow-hidden">
      {/* Background ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Como funciona: do envio à cimentação com total previsibilidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal">
            Um fluxo de trabalho pensado para eliminar retrabalhos, atrasos e surpresas no momento da consulta.
          </p>
        </motion.div>

        {/* 4 Clean Luxury Cards Grid without interfering lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((item, index) => {
            const Icon3D = item.iconComponent
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard
                  glowColor="rgba(245, 158, 11, 0.2)"
                  className="h-full bg-slate-900/60 hover:bg-slate-900/90 rounded-3xl p-7 border border-slate-800/80 hover:border-amber-500/40 shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Header with 3D Translucent Gold Icon & Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-md flex items-center justify-center group-hover:border-amber-400/50 transition-all shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                        <Icon3D />
                      </div>
                      <span className="text-3xl font-extrabold text-amber-500/30 group-hover:text-amber-400 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      {item.subtitle}
                    </p>

                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenTriage}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-base rounded-2xl shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-95 transition-all"
          >
            <span>Enviar caso para análise</span>
            <Send className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  )
}

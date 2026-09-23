'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FaqItem } from '../types'

interface FaqSectionProps {
  onOpenTriage?: () => void
}

export const FaqSection: React.FC<FaqSectionProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FaqItem[] = [
    {
      question: 'Quais trabalhos o laboratório realiza?',
      answer:
        'Prótese fixa, zircônia multilayer, cerâmica pura E.max (dissilicato de lítio), metalocerâmica, prótese sobre implante, protocolos de carga imediata, barras metálicas e placas de bruxismo.',
    },
    {
      question: 'O laboratório trabalha com fluxo digital e convencional?',
      answer:
        'Sim. Recebemos arquivos digitais (STL ou PLY) de qualquer scanner intraoral do mercado, e também coletamos moldagens físicas em silicone e modelos de gesso no seu consultório.',
    },
    {
      question: 'Como funciona a coleta e entrega?',
      answer:
        'Temos serviço de coleta e entrega próprio para Itaguaru e região de Goiás, além de envio seguro via Sedex/transportadora para todo o Brasil. O agendamento é feito direto pelo WhatsApp de forma rápida.',
    },
    {
      question: 'Como solicitar orçamento para um caso?',
      answer:
        'Basta preencher a triagem rápida aqui no site ou chamar no WhatsApp com as fotos e dados do caso. O Osvaldo analisa o substrato e envia a estimativa técnica de imediato.',
    },
    {
      question: 'Como é combinado o prazo de entrega?',
      answer:
        'Alinhamos o prazo com base na data agendada com o seu paciente. O cronograma combinado é cumprido com rigor para evitar qualquer atraso na sua clínica.',
    },
    {
      question: 'Posso tirar dúvidas com o técnico antes de moldar?',
      answer:
        'Com certeza. Você pode mandar fotos do preparo, radiografias ou escaneamentos para alinhar término cervical, espaço oclusal e material direto com o Osvaldo.',
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#05070B] text-white relative overflow-hidden">
      {/* Background subtle ambient lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-20 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-0 w-[450px] h-[450px] bg-yellow-500/5 rounded-full blur-[140px]"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Perguntas frequentes de cirurgiões-dentistas.
          </h2>
          <p className="mt-4 text-base text-slate-300 font-normal">
            Transparência técnica para construir uma parceria duradoura e previsível com o seu consultório.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-900/60 hover:bg-slate-900/90 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 overflow-hidden shadow-lg transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800 border border-slate-700/60 flex items-center justify-center shrink-0 text-slate-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500/20 text-amber-300 border-amber-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

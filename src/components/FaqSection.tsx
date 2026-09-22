import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Send } from 'lucide-react'
import { FaqItem } from '../types'

interface FaqSectionProps {
  onOpenTriage: () => void
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenTriage }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FaqItem[] = [
    {
      question: 'Quais trabalhos o laboratório realiza?',
      answer:
        'Confeccionamos soluções em prótese fixa e sobre implantes, incluindo zircônia (monolítica e multicamadas), cerâmica pura E.max (dissilicato de lítio), metalocerâmica, cerômeros e resinas, próteses sobre implantes unitárias e múltiplas, protocolos provisórios de carga imediata e definitivos, barras metálicas fresadas ou fundidas, além de placas miorrelaxantes de bruxismo e placas de clareamento.',
    },
    {
      question: 'O laboratório trabalha com fluxo digital e convencional?',
      answer:
        'Sim, temos total integração com ambos os fluxos. Você pode nos enviar arquivos digitais de escaneamento intraoral (formatos STL ou PLY) de qualquer marca de scanner do mercado, bem como moldagens convencionais de precisão (silicones de adição/condensação) e modelos em gesso especial.',
    },
    {
      question: 'Como funciona a coleta e entrega?',
      answer:
        'Para cirurgiões-dentistas e clínicas da nossa região de cobertura, disponibilizamos serviço de motoboy/coleta e entrega ágil. O agendamento da retirada da moldagem ou do trabalho pode ser solicitado diretamente pelo WhatsApp do laboratório de forma simples e rápida.',
    },
    {
      question: 'Como solicitar orçamento?',
      answer:
        'Como cada reabilitação protética possui particularidades biológicas e mecânicas (substrato dental, tipo de implante, espaço oclusal e material indicado), não trabalhamos com valores tabelados fixos sem avaliação. Para receber um orçamento detalhado para o seu caso, basta utilizar nosso formulário de triagem ou nos chamar no WhatsApp enviando os dados ou fotos do caso.',
    },
    {
      question: 'Como confirmar o prazo?',
      answer:
        'O prazo de confecção é alinhado de forma individualizada com você no momento do recebimento do caso, levando em consideração a complexidade do trabalho e a data agendada com o seu paciente. Dessa forma, garantimos que o cronograma seja cumprido com total pontualidade e rigor de controle.',
    },
    {
      question: 'Posso enviar um caso para orientação antes de decidir?',
      answer:
        'Com certeza! Esse é um dos nossos maiores diferenciais. Você pode nos enviar fotos clínicas, radiografias ou escaneamentos para discutir espaço interoclusal, término cervical ou viabilidade de material com o Osvaldo e nossa equipe técnica antes de iniciar o procedimento ou moldar.',
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#06090e] text-white relative overflow-hidden">
      {/* Background subtle ambient lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px]"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
            <span>Tire Suas Dúvidas</span>
          </div>
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
                className="bg-slate-900/60 hover:bg-slate-900/90 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 overflow-hidden shadow-lg transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-teal-200 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800 border border-slate-700/60 flex items-center justify-center shrink-0 text-slate-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-teal-500/20 text-teal-300 border-teal-500/40' : ''
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

        {/* Prompt to contact if still has questions */}
        <div className="mt-12 text-center bg-slate-900/70 rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold text-white">
              Tem alguma dúvida clínica específica sobre seu caso?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Converse diretamente com o responsável técnico do laboratório.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenTriage}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Enviar caso para análise</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  )
}

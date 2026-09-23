'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  X,
  ArrowRight,
  ArrowLeft,
  Send,
  CheckCircle,
  CheckCircle2,
  Building2,
  MapPin,
  Phone,
  User,
  AlertCircle,
  Clock,
  ShieldCheck,
  FileText,
  HelpCircle,
  RotateCcw,
  ExternalLink,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { TriageData, PartnerStatus } from '../types'
import { buildWhatsAppLink, getPricingTableWhatsAppLink } from '../config'

interface TriageModalProps {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

export const TriageModal: React.FC<TriageModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  // Step 0: Tela Inicial
  // Steps 1-7: Perguntas a) até g)
  // Step 8: Tela de Envio / Quase lá (Resumo)
  // Step 9: Tela de Sucesso / Concluída com opção de nova triagem
  const [currentStep, setCurrentStep] = useState<number>(0)
  const totalQuestions = 7
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<TriageData>({
    isPartner: '',
    name: '',
    clinic: '',
    city: '',
    whatsapp: '',
    workType: initialService || '',
    workflow: '',
    stage: '',
    deadline: '',
    notes: '',
  })

  const [errorMsg, setErrorMsg] = useState<string>('')

  // Sync initialService if provided
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, workType: initialService }))
    }
  }, [initialService])

  // Scroll to top inside modal content when step changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [currentStep])

  // Trigger confetti when arriving at Step 9 (Tela de Triagem Concluída)
  useEffect(() => {
    if (currentStep === 9) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#d4af37', '#f59e0b', '#10b981', '#fef08a', '#ffffff'],
        })
      } catch {
        // Fallback silently if canvas-confetti is not supported
      }
    }
  }, [currentStep])

  // Escape key listener & Prevent background scrolling when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
      setCurrentStep(0)
      setErrorMsg('')
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Reset form and start a new triage
  const handleResetTriage = () => {
    setFormData({
      isPartner: '',
      name: '',
      clinic: '',
      city: '',
      whatsapp: '',
      workType: '',
      workflow: '',
      stage: '',
      deadline: '',
      notes: '',
    })
    setErrorMsg('')
    setCurrentStep(1)
  }

  if (!isOpen) return null

  // Phone input formatting helper
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '')
    if (val.length > 11) val = val.slice(0, 11)
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`
    } else if (val.length > 0) {
      val = `(${val}`
    }
    setFormData((p) => ({ ...p, whatsapp: val }))
  }

  // Quick clinical notes chips helper
  const handleToggleNoteChip = (chip: string) => {
    setFormData((prev) => {
      const currentNotes = prev.notes.trim()
      if (currentNotes.includes(chip)) {
        return prev
      }
      const updated = currentNotes ? `${currentNotes}, ${chip}` : chip
      return { ...prev, notes: updated }
    })
  }

  const handleNext = () => {
    setErrorMsg('')

    // Step 0 -> Step 1 (Start)
    if (currentStep === 0) {
      setCurrentStep(1)
      return
    }

    // Validation for Question a (Step 1)
    if (currentStep === 1 && !formData.isPartner) {
      setErrorMsg('Por favor, selecione uma das opções acima para continuar.')
      return
    }

    // Validation for Question b (Step 2)
    if (currentStep === 2) {
      if (!formData.name.trim()) {
        setErrorMsg('Por favor, informe seu nome (Dr. / Dra.).')
        return
      }
      if (!formData.whatsapp.trim() || formData.whatsapp.replace(/\D/g, '').length < 10) {
        setErrorMsg('Por favor, informe um WhatsApp válido com DDD.')
        return
      }
    }

    // Validation for Question c (Step 3)
    if (currentStep === 3 && !formData.workType) {
      setErrorMsg('Por favor, selecione o tipo de trabalho protético.')
      return
    }

    // Validation for Question d (Step 4)
    if (currentStep === 4 && !formData.workflow) {
      setErrorMsg('Por favor, selecione o formato do fluxo de envio.')
      return
    }

    // Validation for Question e (Step 5)
    if (currentStep === 5 && !formData.stage) {
      setErrorMsg('Por favor, selecione a etapa atual do caso.')
      return
    }

    // Validation for Question f (Step 6)
    if (currentStep === 6 && !formData.deadline) {
      setErrorMsg('Por favor, selecione a expectativa de prazo.')
      return
    }

    // Step 7 (Observações) is optional, moves to Step 8 (Resumo Final)
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setErrorMsg('')
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  // Progress Bar computation
  let progressPercent = 0
  if (currentStep >= 1 && currentStep <= 7) {
    progressPercent = Math.round((currentStep / totalQuestions) * 85)
  } else if (currentStep === 8) {
    progressPercent = 95
  } else if (currentStep === 9) {
    progressPercent = 100
  }

  const workTypesList = [
    'Coroa / Unitário',
    'Zircônia',
    'Emax (Dissilicato de Lítio)',
    'Metalocerâmica',
    'Cerômero / Resina',
    'Prótese sobre Implante',
    'Protocolo (Carga Imediata / Definitivo)',
    'Barra Metálica',
    'Placa de Bruxismo (Miorrelaxante)',
    'Placa de Clareamento',
    'Outro tipo de reabilitação',
  ]

  const workflowOptions = [
    {
      id: 'Digital (Arquivo STL / Scanner)',
      title: 'Fluxo Digital',
      desc: 'Arquivo STL / PLY enviado de scanner intraoral',
    },
    {
      id: 'Convencional (Moldagem / Gesso)',
      title: 'Fluxo Convencional',
      desc: 'Moldagem em silicone/alginato ou modelo em gesso',
    },
    {
      id: 'Preciso de orientação',
      title: 'Preciso de Orientação',
      desc: 'Quero avaliar com o técnico a melhor abordagem',
    },
    {
      id: 'Quero falar antes',
      title: 'Quero Conversar Antes',
      desc: 'Alinhar detalhes clínicos antes de moldar ou escanear',
    },
  ]

  const stagesOptions = [
    { id: 'Planejamento inicial', label: 'Planejamento Inicial / Dúvida Clínica' },
    { id: 'Escaneamento / Moldagem pronta', label: 'Escaneamento ou Moldagem já realizada' },
    { id: 'Pronto para envio / Coleta', label: 'Pronto para envio ou solicitação de coleta' },
    { id: 'Urgente', label: 'Caso Urgente com paciente aguardando' },
    { id: 'Retrabalho de outro laboratório', label: 'Retrabalho / Correção de prótese anterior' },
  ]

  const deadlineOptions = [
    { id: 'Prazo normal de produção', label: 'Prazo normal de laboratório (sem pressa)' },
    { id: 'Tenho data agendada com paciente', label: 'Tenho data agendada para a consulta de instalação' },
    { id: 'Urgência clínica', label: 'Urgência clínica (consultar viabilidade técnica)' },
    { id: 'Ainda não sei / A alinhar', label: 'Ainda não sei / Vamos definir em conjunto' },
  ]

  const clinicalChips: string[] = [
    'Substrato escurecido',
    'Cor a definir',
    'Antagonista metálico',
    'Pouco espaço interoclusal',
    'Ti-Base / UCLA',
    'Sem molde antagonista ainda',
  ]

  const whatsappUrl = buildWhatsAppLink(formData)

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 rounded-3xl sm:rounded-[2rem] shadow-2xl border border-amber-500/30 overflow-hidden flex flex-col max-h-[92vh] animate-fade-in text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ============================================================ */}
        {/* MODAL HEADER WITH PROGRESS BAR                               */}
        {/* ============================================================ */}
        <div className="p-5 sm:p-6 pb-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
                <img
                  src="/assets/logo-gold.png"
                  alt="Laboratório Lourenço"
                  className="w-full h-full object-contain"
                  width="36"
                  height="36"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Triagem Técnica de Caso
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  Laboratório Lourenço • Prótese Dental
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
              aria-label="Fechar triagem"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prompt banner & step counter */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
            <span className="text-amber-300 font-bold">
              {currentStep === 0 && 'Vamos entender seu caso em menos de 1 minuto.'}
              {currentStep >= 1 && currentStep <= 7 && `Pergunta ${currentStep} de ${totalQuestions}`}
              {currentStep === 8 && 'Quase lá... Envie no WhatsApp agora!'}
              {currentStep === 9 && 'Triagem Concluída com Sucesso!'}
            </span>
            <span>
              {currentStep === 0 && 'Início'}
              {currentStep >= 1 && currentStep <= 7 && `${progressPercent}% concluído`}
              {currentStep === 8 && '95% concluído'}
              {currentStep === 9 && '100% Concluído'}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)] ${
                currentStep === 9
                  ? 'bg-gradient-to-r from-emerald-500 to-amber-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                  : 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* STEP CONTENT BODY                                            */}
        {/* ============================================================ */}
        <div ref={scrollContainerRef} className="p-5 sm:p-8 overflow-y-auto flex-1">
          {/* Error Message */}
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ============================================================ */}
          {/* TELA INICIAL: "Vamos entender seu caso em menos de 1 minuto"  */}
          {/* ============================================================ */}
          {currentStep === 0 && (
            <div className="space-y-6 py-2 animate-fade-in">
              <div className="text-center max-w-xl mx-auto">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                  Vamos entender seu caso em menos de 1 minuto.
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Responda a 7 etapas objetivas para que a equipe técnica do{' '}
                  <strong className="text-white font-semibold">Laboratório Lourenço</strong>{' '}
                  possa alinhar biomateriais, logística de coleta e prazos diretamente pelo WhatsApp.
                </p>

                {formData.workType && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
                    <span>Trabalho pré-selecionado:</span>
                    <span className="text-amber-400 underline">{formData.workType}</span>
                  </div>
                )}
              </div>

              {/* Guarantees Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-left">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-2.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-white">Menos de 1 Minuto</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">Fluxo otimizado para a rotina dinâmica do consultório.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-left">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-2.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-white">Sem Compromisso</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">Alinhamento e orientação técnica inicial sem custos.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-left">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-2.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs font-bold text-white">Direto no WhatsApp</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">Mensagem gerada e organizada pronta para envio com fotos.</p>
                </div>
              </div>

              {/* Start Button & Low Friction Pricing Option */}
              <div className="pt-4 space-y-2.5">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] text-slate-950 font-bold text-base rounded-2xl shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-200 cursor-pointer"
                >
                  <span>Iniciar Triagem de Caso (1 min)</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
                  <a
                    href={getPricingTableWhatsAppLink('modal_inicio')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-slate-950/80 hover:bg-slate-800 border border-amber-500/20 py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Quero apenas a Tabela de Valores e Prazos</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        workType: 'Pedido Personalizado / Caso Especial',
                      }))
                      setCurrentStep(1)
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-300 py-2 px-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span>Fazer pedido personalizado</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 1: Já é parceiro? (sim / não / quero conhecer)          */}
          {/* ============================================================ */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Etapa 01 de 07
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                  Você já é parceiro do Laboratório Lourenço?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Isso nos ajuda a direcionar seu caso para o canal adequado de atendimento e cadastro.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  { value: 'sim', label: 'Sim, já tenho trabalhos no laboratório', desc: 'Acesso rápido com seu cadastro ativo' },
                  { value: 'nao', label: 'Não, este é o meu primeiro caso', desc: 'Queremos conhecer sua preferência clínica e dar atenção especial' },
                  { value: 'conhecer', label: 'Quero conhecer o laboratório e os padrões de trabalho', desc: 'Entender valores, prazos e fluxo de coleta na região' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setFormData((p) => ({ ...p, isPartner: opt.value as PartnerStatus }))
                      setErrorMsg('')
                    }}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                      formData.isPartner === opt.value
                        ? 'border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-950/60'
                    }`}
                  >
                    <div>
                      <p className="text-sm sm:text-base font-bold text-white">{opt.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                        formData.isPartner === opt.value
                          ? 'border-amber-400 bg-amber-400 text-slate-950'
                          : 'border-slate-600'
                      }`}
                    >
                      {formData.isPartner === opt.value && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 2: Nome, clínica, cidade e WhatsApp                    */}
          {/* ============================================================ */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Etapa 02 de 07
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                  Dados do Cirurgião-Dentista
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Para identificarmos seu consultório e organizarmos o contato técnico e logística de coleta.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Seu Nome Completo (Dr. / Dra.) *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Ex: Dr. Marcelo Andrade"
                      value={formData.name}
                      autoFocus
                      autoComplete="name"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-sm text-white focus:bg-slate-900 focus:border-amber-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nome da Clínica ou Consultório
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Ex: Andrade Odontologia Integrada"
                      value={formData.clinic}
                      autoComplete="organization"
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-sm text-white focus:bg-slate-900 focus:border-amber-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Cidade / Bairro
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Ex: São Paulo - Moema"
                        value={formData.city}
                        autoComplete="address-level2"
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-sm text-white focus:bg-slate-900 focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="(11) 98765-4321"
                        value={formData.whatsapp}
                        autoComplete="tel"
                        onChange={handlePhoneChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-950 rounded-xl border border-slate-800 text-sm text-white focus:bg-slate-900 focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 3: Tipo de trabalho                                    */}
          {/* ============================================================ */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Etapa 03 de 07
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                  Qual é o tipo de trabalho protético?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Selecione a indicação principal. Se for um caso múltiplo, escolha a principal ou 'Outro'.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-h-[46vh] overflow-y-auto pr-1">
                {workTypesList.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, workType: type })
                      setErrorMsg('')
                    }}
                    className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      formData.workType === type
                        ? 'border-amber-400 bg-amber-500/15 text-amber-300 ring-1 ring-amber-400'
                        : 'border-slate-800 hover:border-slate-700 text-slate-300 bg-slate-950/60'
                    }`}
                  >
                    <span>{type}</span>
                    {formData.workType === type && (
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 4: Fluxo de envio (Digital, convencional, etc.)        */}
          {/* ============================================================ */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Etapa 04 de 07
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                  Qual o formato do fluxo de envio?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Trabalhamos de forma integrada com fluxos digitais e moldagens convencionais.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {workflowOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, workflow: opt.id })
                      setErrorMsg('')
                    }}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                      formData.workflow === opt.id
                        ? 'border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-950/60'
                    }`}
                  >
                    <div>
                      <p className="text-sm sm:text-base font-bold text-white">{opt.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                        formData.workflow === opt.id
                          ? 'border-amber-400 bg-amber-400 text-slate-950'
                          : 'border-slate-600'
                      }`}
                    >
                      {formData.workflow === opt.id && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 5: Etapa do caso                                        */}
          {/* ============================================================ */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Etapa 05 de 07
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                  Em qual etapa clínica o caso se encontra?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Ajuda a definir se você precisa de alinhamento prévio ou se já podemos agendar a coleta/usinagem.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {stagesOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, stage: opt.id })
                      setErrorMsg('')
                    }}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                      formData.stage === opt.id
                        ? 'border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-950/60'
                    }`}
                  >
                    <span className="text-sm font-semibold text-white">{opt.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                        formData.stage === opt.id
                          ? 'border-amber-400 bg-amber-400 text-slate-950'
                          : 'border-slate-600'
                      }`}
                    >
                      {formData.stage === opt.id && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 6: Prazo desejado                                       */}
          {/* ============================================================ */}
          {currentStep === 6 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Etapa 06 de 07
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                  Qual a expectativa de prazo para a instalação?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Planejamento e pontualidade são compromissos inegociáveis no Laboratório Lourenço.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {deadlineOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, deadline: opt.id })
                      setErrorMsg('')
                    }}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                      formData.deadline === opt.id
                        ? 'border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-950/60'
                    }`}
                  >
                    <span className="text-sm font-semibold text-white">{opt.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                        formData.deadline === opt.id
                          ? 'border-amber-400 bg-amber-400 text-slate-950'
                          : 'border-slate-600'
                      }`}
                    >
                      {formData.deadline === opt.id && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 7: Observações opcionais                                */}
          {/* ============================================================ */}
          {currentStep === 7 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Etapa 07 de 07 (Opcional)
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                  Observações e Detalhes Clínicos
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Deseja adiantar alguma informação técnica sobre o caso? (Substrato, cor desejada, fotos ou arquivos).
                </p>
              </div>

              {/* Quick Suggestion Chips */}
              <div>
                <p className="text-[11px] font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Atalhos rápidos (clique para incluir):
                </p>
                <div className="flex flex-wrap gap-2">
                  {clinicalChips.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => handleToggleNoteChip(chip)}
                      className="text-xs px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-400/50 border border-slate-700 text-slate-300 font-medium transition-colors cursor-pointer"
                    >
                      + {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Area */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Campo de Observações
                </label>
                <textarea
                  rows={4}
                  placeholder="Ex: Substrato 3M2, cor desejada BL3, antagonista com restauração metálica, paciente tem bruxismo..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-sm text-white focus:bg-slate-900 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Você poderá anexar fotos clínicas, radiografias e arquivos STL diretamente pelo WhatsApp na próxima tela.
                </span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 8: Tela de Envio / Quase lá com botão WhatsApp          */}
          {/* ============================================================ */}
          {currentStep === 8 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Tudo pronto, {formData.name || 'Doutor(a)'}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Confira o resumo das informações do seu caso. Clique no botão verde abaixo para enviar diretamente ao WhatsApp do Osvaldo:
                </p>
              </div>

              {/* Visual Summary Card */}
              <div className="bg-slate-950 rounded-2xl p-4 sm:p-5 border border-amber-500/30 text-xs sm:text-sm space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Cirurgião-Dentista:</span>
                    <strong className="text-white font-bold text-sm">{formData.name || '-'}</strong>
                    {formData.clinic && <span className="block text-slate-400 text-xs">{formData.clinic}</span>}
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Cidade & WhatsApp:</span>
                    <strong className="text-white font-bold text-sm">{formData.city || '-'}</strong>
                    <span className="block text-amber-400 text-xs font-medium">{formData.whatsapp || '-'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Tipo de Trabalho:</span>
                    <strong className="text-amber-300 font-bold text-sm">{formData.workType || '-'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Fluxo de Trabalho:</span>
                    <strong className="text-white font-semibold">{formData.workflow || '-'}</strong>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-slate-800">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Etapa Atual:</span>
                    <span className="text-slate-300 font-medium">{formData.stage || '-'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Expectativa de Prazo:</span>
                    <span className="text-slate-300 font-medium">{formData.deadline || '-'}</span>
                  </div>
                </div>

                {formData.notes && (
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase">Observações:</span>
                    <p className="text-slate-200 text-xs italic mt-0.5 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      {formData.notes}
                    </p>
                  </div>
                )}
              </div>

              {/* WhatsApp Trigger Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCurrentStep(9)}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-base rounded-2xl shadow-xl shadow-emerald-700/30 transition-all text-center cursor-pointer"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span>Enviar Caso no WhatsApp Agora</span>
                </a>

                <p className="mt-3 text-[11px] text-center text-slate-400 leading-relaxed">
                  🔒 Ao clicar, abriremos sua conversa com o Laboratório Lourenço com os dados organizados. Ao retornar a este site, sua triagem estará confirmada.
                </p>
              </div>

              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-amber-400 hover:text-amber-300 transition-colors underline cursor-pointer"
                >
                  Editar dados da triagem
                </button>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STEP 9: Tela de Triagem Concluída e Nova Triagem             */}
          {/* ============================================================ */}
          {currentStep === 9 && (
            <div className="space-y-6 py-2 animate-fade-in text-center">
              <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.35)]">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Caso Enviado com Sucesso!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Os dados do caso do(a) <strong className="text-white font-semibold">{formData.name || 'Cirurgião(ã)'}</strong> foram encaminhados para o WhatsApp do Laboratório Lourenço. O Osvaldo Lourenço Filho já irá analisar o planejamento.
                </p>
              </div>

              {/* Mini resumo do caso enviado */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 text-left text-xs text-slate-300 space-y-2 max-w-lg mx-auto">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 font-medium">Trabalho Triado:</span>
                  <span className="font-bold text-amber-300">{formData.workType || 'Prótese Dental'}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400 font-medium">Fluxo & Etapa:</span>
                  <span className="text-slate-200">{formData.workflow ? `${formData.workflow.split(' ')[0]} • ${formData.stage}` : 'Fluxo Direto'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Contato Registrado:</span>
                  <span className="text-slate-200">{formData.whatsapp || '-'}</span>
                </div>
              </div>

              {/* Helpful hint box */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-200 text-left max-w-lg mx-auto flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300">Arquivos e Fotos:</strong> Se você tiver fotos do preparo, escaneamento intraoral (.STL / .PLY) ou tomografia, envie diretamente na conversa aberta do WhatsApp.
                </span>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2 max-w-lg mx-auto">
                <button
                  type="button"
                  onClick={handleResetTriage}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] text-slate-950 font-bold text-sm sm:text-base rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-slate-950" />
                  <span>Fazer outra triagem de caso</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Concluir e Voltar ao Site</span>
                </button>

                <div className="pt-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>Não abriu o WhatsApp? Clique aqui para abrir a conversa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* FOOTER NAVIGATION (Back / Next)                              */}
        {/* ============================================================ */}
        {currentStep >= 1 && currentStep <= 7 && (
          <div className="p-4 sm:p-6 pt-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-xs sm:text-sm font-semibold text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>{currentStep === 7 ? 'Ver Resumo' : 'Continuar'}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

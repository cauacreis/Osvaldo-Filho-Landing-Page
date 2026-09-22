import React, { useState, useEffect } from 'react'
import {
  X,
  ArrowRight,
  ArrowLeft,
  Send,
  CheckCircle,
  Building2,
  MapPin,
  Phone,
  User,
  Sparkles,
  AlertCircle
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { TriageData, PartnerStatus } from '../types'
import { buildWhatsAppLink } from '../config'

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
  const [currentStep, setCurrentStep] = useState<number>(1)
  const totalSteps = 7

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

  // Trigger confetti when arriving at step 7 (Summary)
  useEffect(() => {
    if (currentStep === 7) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0d9488', '#d4af37', '#0f766e', '#1e293b'],
        })
      } catch {
        // Fallback silently if canvas is not supported
      }
    }
  }, [currentStep])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setCurrentStep(1)
      setErrorMsg('')
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleNext = () => {
    setErrorMsg('')

    // Validation for Step 1
    if (currentStep === 1 && !formData.isPartner) {
      setErrorMsg('Por favor, selecione uma das opções acima para continuar.')
      return
    }

    // Validation for Step 2
    if (currentStep === 2) {
      if (!formData.name.trim()) {
        setErrorMsg('Por favor, informe seu nome.')
        return
      }
      if (!formData.whatsapp.trim()) {
        setErrorMsg('Por favor, informe seu WhatsApp para alinharmos o caso.')
        return
      }
    }

    // Validation for Step 3
    if (currentStep === 3 && !formData.workType) {
      setErrorMsg('Por favor, selecione o tipo de trabalho.')
      return
    }

    // Validation for Step 4
    if (currentStep === 4 && !formData.workflow) {
      setErrorMsg('Por favor, selecione o fluxo de envio.')
      return
    }

    // Validation for Step 5
    if (currentStep === 5 && !formData.stage) {
      setErrorMsg('Por favor, selecione a etapa atual do caso.')
      return
    }

    // Validation for Step 6
    if (currentStep === 6 && !formData.deadline) {
      setErrorMsg('Por favor, selecione a expectativa de prazo.')
      return
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    setErrorMsg('')
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const progressPercent = Math.round((currentStep / totalSteps) * 100)

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

  const whatsappUrl = buildWhatsAppLink(formData)

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ============================================================ */}
        {/* MODAL HEADER WITH PROGRESS BAR                               */}
        {/* ============================================================ */}
        <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  Triagem Técnica de Caso
                </h3>
                <p className="text-xs text-teal-700 font-medium">
                  Laboratório Lourenço • Prótese Dental
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none"
              aria-label="Fechar triagem"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prompt banner & step counter */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span className="text-teal-900 font-bold">
              Vamos entender seu caso em menos de 1 minuto.
            </span>
            <span>
              Passo {currentStep} de {totalSteps} ({progressPercent}%)
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-700 to-teal-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* STEP CONTENT BODY                                            */}
        {/* ============================================================ */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          
          {/* Error Message */}
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: Já é parceiro? */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Etapa 01
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
                  Você já é parceiro do Laboratório Lourenço?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Isso nos ajuda a direcionar seu caso para o canal adequado de atendimento.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  { value: 'sim', label: 'Sim, já tenho trabalhos no laboratório', desc: 'Acesso rápido com seu cadastro ativo' },
                  { value: 'nao', label: 'Não, este é o meu primeiro caso', desc: 'Queremos conhecer sua preferência clínica e dar atenção especial' },
                  { value: 'conhecer', label: 'Quero conhecer o laboratório e os padrões de trabalho', desc: 'Entender valores, prazos e fluxo de coleta' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setFormData((p) => ({ ...p, isPartner: opt.value as PartnerStatus }))
                      setErrorMsg('')
                    }}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${
                      formData.isPartner === opt.value
                        ? 'border-teal-700 bg-teal-50/50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <p className="text-sm sm:text-base font-bold text-slate-900">{opt.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                        formData.isPartner === opt.value
                          ? 'border-teal-700 bg-teal-700 text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {formData.isPartner === opt.value && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Identificação do Cirurgião-Dentista */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Etapa 02
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
                  Dados do Cirurgião-Dentista
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Para que possamos identificar seu consultório e organizar a logística de coleta/entrega.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Seu Nome Completo (Dr. / Dra.) *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Ex: Dr. Marcelo Andrade"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nome da Clínica ou Consultório
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Ex: Andrade Odontologia Integrada"
                      value={formData.clinic}
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Cidade / Bairro
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Ex: São Paulo - Moema"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="Ex: (11) 98765-4321"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Tipo de Trabalho */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Etapa 03
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
                  Qual é o tipo de trabalho protético?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Selecione a indicação principal. Se for um caso múltiplo, escolha a principal ou selecione 'Outro'.
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
                    className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                      formData.workType === type
                        ? 'border-teal-700 bg-teal-50/70 text-teal-950 ring-1 ring-teal-700'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <span>{type}</span>
                    {formData.workType === type && (
                      <CheckCircle className="w-4 h-4 text-teal-700 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Fluxo de Trabalho */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Etapa 04
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
                  Qual o formato do fluxo de envio?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
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
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                      formData.workflow === opt.id
                        ? 'border-teal-700 bg-teal-50/50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <p className="text-sm sm:text-base font-bold text-slate-900">{opt.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                        formData.workflow === opt.id
                          ? 'border-teal-700 bg-teal-700 text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {formData.workflow === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Etapa do Caso */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Etapa 05
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
                  Em qual etapa clínica o caso se encontra?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Nos ajuda a saber se você precisa de orientação prévia ou se já podemos agendar a coleta/usinagem.
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
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                      formData.stage === opt.id
                        ? 'border-teal-700 bg-teal-50/50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-sm font-semibold text-slate-900">{opt.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                        formData.stage === opt.id
                          ? 'border-teal-700 bg-teal-700 text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {formData.stage === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: Prazo Desejado */}
          {currentStep === 6 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Etapa 06
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
                  Qual a expectativa de prazo para a instalação?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Planejamento e pontualidade são prioridades no Laboratório Lourenço.
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
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                      formData.deadline === opt.id
                        ? 'border-teal-700 bg-teal-50/50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="text-sm font-semibold text-slate-900">{opt.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                        formData.deadline === opt.id
                          ? 'border-teal-700 bg-teal-700 text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {formData.deadline === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 7: Observações e Resumo Interativo */}
          {currentStep === 7 && (
            <div className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Triagem Pronta para Envio</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Tudo pronto, {formData.name || 'Doutor(a)'}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Confira o resumo das informações antes de abrir o WhatsApp direto com o laboratório:
                </p>
              </div>

              {/* Observações Opcionais */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Observações Clínicas Opcionais (cor, substrato, dúvidas)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Substrato escurecido 3M2, cor desejada BL3, antagonista com restauração metálica..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Visual Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/90 text-xs sm:text-sm space-y-2.5">
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200/60">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Dentista / Clínica:</span>
                    <strong className="text-slate-900 font-semibold">{formData.name || '-'}</strong>
                    {formData.clinic && <span className="block text-slate-500 text-[11px]">{formData.clinic}</span>}
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Cidade & WhatsApp:</span>
                    <strong className="text-slate-900 font-semibold">{formData.city || '-'}</strong>
                    <span className="block text-slate-500 text-[11px]">{formData.whatsapp || '-'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Tipo de Trabalho:</span>
                    <strong className="text-teal-900 font-semibold">{formData.workType || '-'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Fluxo de Trabalho:</span>
                    <strong className="text-slate-900 font-semibold">{formData.workflow || '-'}</strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Etapa Atual:</span>
                    <span className="text-slate-700 font-medium">{formData.stage || '-'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Expectativa de Prazo:</span>
                    <span className="text-slate-700 font-medium">{formData.deadline || '-'}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Trigger Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-2xl shadow-xl shadow-emerald-700/20 active:scale-95 transition-all text-center"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span>Falar com o Laboratório no WhatsApp</span>
                </a>

                <p className="mt-2.5 text-[11px] text-center text-slate-500">
                  🔒 Ao clicar, abriremos sua conversa com a mensagem organizada. Você poderá anexar fotos, escaneamentos ou radiografias direto pelo WhatsApp.
                </p>
              </div>

            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* FOOTER NAVIGATION (Back / Next)                              */}
        {/* ============================================================ */}
        {currentStep < 7 && (
          <div className="p-4 sm:p-6 pt-3 border-t border-slate-100 bg-white flex items-center justify-between gap-3">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
            >
              <span>Continuar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export type PartnerStatus = 'sim' | 'nao' | 'conhecer' | ''

export type WorkType =
  | 'Coroa / Unitário'
  | 'Zircônia'
  | 'Emax (Dissilicato de Lítio)'
  | 'Metalocerâmica'
  | 'Cerômero / Resina'
  | 'Prótese sobre Implante'
  | 'Protocolo (Carga Imediata / Definitivo)'
  | 'Barra Metálica'
  | 'Placa de Bruxismo (Miorrelaxante)'
  | 'Placa de Clareamento'
  | 'Outro tipo de reabilitação'

export type WorkflowType =
  | 'Digital (Arquivo STL / Scanner)'
  | 'Convencional (Moldagem / Gesso)'
  | 'Preciso de orientação'
  | 'Quero falar antes'

export type CaseStage =
  | 'Planejamento inicial'
  | 'Escaneamento / Moldagem pronta'
  | 'Pronto para envio / Coleta'
  | 'Urgente'
  | 'Retrabalho de outro laboratório'

export type DesiredDeadline =
  | 'Prazo normal de produção'
  | 'Tenho data agendada com paciente'
  | 'Urgência clínica'
  | 'Ainda não sei / A alinhar'

export interface TriageData {
  isPartner: PartnerStatus
  name: string
  clinic: string
  city: string
  whatsapp: string
  workType: string
  workflow: string
  stage: string
  deadline: string
  notes: string
}

export interface FaqItem {
  question: string
  answer: string
  category?: string
}

export interface CaseStudy {
  id: string
  title: string
  category: string
  subtitle: string
  description: string
  materials: string[]
  technicalHighlights: string[]
  image: string
}

export interface FeedbackReview {
  id: string
  image: string
  dentistType?: string
  clinicCity?: string
  highlight?: string
  quote?: string
  topics?: string[]
  stars?: number
}


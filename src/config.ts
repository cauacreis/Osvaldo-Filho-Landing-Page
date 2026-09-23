import { TriageData, FeedbackReview } from './types'

export const LAB_CONFIG = {
  name: 'Laboratório Lourenço',
  subtitle: 'Prótese Dental',
  founder: 'Osvaldo Lourenço Filho',
  founderRole: 'Responsável Técnico & Especialista Protético',
  croTpd: 'Reg. TPD / CRO-GO',
  /**
   * WHATSAPP CONFIGURATION:
   * Formato internacional com DDI e DDD sem caracteres especiais.
   */
  whatsappNumber: '556295434004',
  whatsappDisplay: '(62) 9543-4004',
  instagram: '@lourenco_lab_protese',
  instagramUrl: 'https://www.instagram.com/lourenco_lab_protese/',
  location: 'Itaguaru e Região de Goiás',
  logisticsShort: 'Coleta em Itaguaru e Região GO • Envio Brasil',
  logisticsDetail: 'Coleta e entrega em Itaguaru e região de Goiás • Envio via Sedex / Transportadora para todo o Brasil',
  coletaHorario: 'Segunda a Sexta: 08h às 18h',
  riskReversal: 'Primeiro caso com alinhamento passo a passo por vídeo/WhatsApp para você testar nossa adaptação marginal sem risco.',
  metrics: {
    deliveredProstheses: '+1.000',
    partnerDentists: '+30',
    approvalRate: '99.4%',
    directSupport: '100% Direto',
  }
}

/**
 * Retorna o número de WhatsApp estritamente limpo com DDI para link wa.me
 */
export function getSanitizedWhatsAppNumber(): string {
  let clean = (LAB_CONFIG.whatsappNumber || '').replace(/\D/g, '')
  if (clean.length === 10 || clean.length === 11) {
    clean = `55${clean}`
  }
  return clean || '556295434004'
}

/**
 * Constrói o link oficial do WhatsApp com a mensagem formatada
 * estritamente segundo as diretrizes de triagem técnica.
 */
export function buildWhatsAppLink(data: Partial<TriageData>): string {
  const nome = data.name?.trim() || '[Não informado]'
  const clinica = data.clinic?.trim() || '[Não informada]'
  const cidade = data.city?.trim() || '[Não informada]'
  const tipo = data.workType || '[A definir]'
  const fluxo = data.workflow || '[A definir]'
  const etapa = data.stage || '[A definir]'
  const prazo = data.deadline || '[A definir]'
  const observacoes = data.notes?.trim() || 'Nenhuma observação adicional.'

  const message = `Olá, equipe do Laboratório Lourenço. Gostaria de analisar um caso.
Nome: ${nome}
Clínica: ${clinica}
Cidade: ${cidade}
Tipo de trabalho: ${tipo}
Fluxo: ${fluxo}
Etapa atual: ${etapa}
Prazo desejado: ${prazo}
Observações: ${observacoes}
Posso enviar fotos, arquivos ou mais detalhes do caso por aqui?`

  const encodedMessage = encodeURIComponent(message)
  const phone = getSanitizedWhatsAppNumber()
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

/**
 * Link Nível 2 (Descoberta / Baixa Fricção): Solicitar Tabela de Valores e Prazos
 */
export function getPricingTableWhatsAppLink(source = 'site'): string {
  const intro = `Olá Osvaldo, gostaria de receber a Tabela de Valores e Prazos do Laboratório Lourenço para cirurgiões-dentistas parceiros. [origem: ${source}]`
  const phone = getSanitizedWhatsAppNumber()
  return `https://wa.me/${phone}?text=${encodeURIComponent(intro)}`
}

/**
 * Link Nível 1 (Decisão Imediata / Envio de Arquivo STL ou Caso Direto)
 */
export function getCaseSubmissionWhatsAppLink(workType?: string, source = 'site'): string {
  const typeText = workType ? ` de ${workType}` : ''
  const intro = `Olá Osvaldo, tenho um caso${typeText} e gostaria de enviar os arquivos/fotos para alinhamento técnico de bancada. [origem: ${source}]`
  const phone = getSanitizedWhatsAppNumber()
  return `https://wa.me/${phone}?text=${encodeURIComponent(intro)}`
}

/**
 * Link genérico direto para o WhatsApp do laboratório
 */
export function getDirectWhatsAppLink(customIntro?: string): string {
  const intro = customIntro || 'Olá, equipe do Laboratório Lourenço. Gostaria de tirar dúvidas e alinhar um caso para análise.'
  const phone = getSanitizedWhatsAppNumber()
  return `https://wa.me/${phone}?text=${encodeURIComponent(intro)}`
}

/**
 * REVIEWS & PRINTS REAIS DO WHATSAPP COM DESTAQUES GRIFADOS
 */
export const FEEDBACK_REVIEWS: FeedbackReview[] = [
  {
    id: 'review-1',
    image: '/assets/review-1.webp',
    dentistType: 'Cirurgião-Dentista Parceiro',
    clinicCity: 'Itaguaru - GO',
    highlight: 'Instalação imediata sem nenhum retrabalho',
    quote: '“Já entregou e eu já instalei. Parabéns pelo seu trabalho! Gostei bastante! Vamos alinhar pra eu poder mandar mais trabalhos pra você...”',
    keyPhrases: ['já entregou e eu já instalei', 'gostei bastante', 'mandar mais trabalhos'],
    stars: 5,
  },
  {
    id: 'review-2',
    image: '/assets/review-2.webp',
    dentistType: 'Cirurgiã-Dentista Parceira',
    clinicCity: 'Goiás - GO',
    highlight: 'Superou expectativas e entrega no prazo certo',
    quote: '“Quero deixar meu agradecimento a toda a equipe do laboratório Lourenço pelo excelente atendimento! Fiquei muito satisfeita com todo o processo, desde o atendimento até a qualidade final. As peças ficaram excelentes e superou as expectativas. Destaco principalmente a agilidade na execução e na entrega...”',
    keyPhrases: ['excelente atendimento', 'peças ficaram excelentes', 'superou as expectativas', 'agilidade na execução e na entrega'],
    stars: 5,
  },
]


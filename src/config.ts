import { TriageData } from './types'

export const LAB_CONFIG = {
  name: 'Laboratório Lourenço',
  subtitle: 'Prótese Dental',
  founder: 'Osvaldo Lourenço Filho',
  founderRole: 'Responsável Técnico & Especialista Protético',
  /**
   * WHATSAPP CONFIGURATION:
   * Altere o número abaixo para o WhatsApp oficial do laboratório.
   * Formato internacional com DDI e DDD sem caracteres especiais (ex: 55 + DDD + 9 dígitos).
   */
  whatsappNumber: '5511999999999', // EDITÁVEL: Substitua pelo WhatsApp do Laboratório Lourenço
  whatsappDisplay: '(11) 99999-9999',
  instagram: '@laboratoriolourenco',
  location: 'São Paulo e Região Metropolitana',
  coletaHorario: 'Segunda a Sexta: 08h às 18h',
  metrics: {
    deliveredProstheses: '+1.000',
    partnerDentists: '+30',
    approvalRate: '99.4%',
    directSupport: '100% Direto',
  }
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
  return `https://wa.me/${LAB_CONFIG.whatsappNumber}?text=${encodedMessage}`
}

/**
 * Link genérico direto para o WhatsApp do laboratório (para o CTA principal rápido)
 */
export function getDirectWhatsAppLink(customIntro?: string): string {
  const intro = customIntro || 'Olá, equipe do Laboratório Lourenço. Gostaria de enviar um caso para análise e tirar algumas dúvidas.'
  return `https://wa.me/${LAB_CONFIG.whatsappNumber}?text=${encodeURIComponent(intro)}`
}

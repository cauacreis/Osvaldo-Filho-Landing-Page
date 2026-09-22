import React from 'react'
import { LAB_CONFIG } from '../config'
import { MapPin, Phone, Clock, Send } from 'lucide-react'

interface FooterProps {
  onOpenTriage: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenTriage }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center">
                <img
                  src="/assets/logo.webp"
                  alt="Laboratório Lourenço"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">Laboratório Lourenço</p>
                <p className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider">
                  Prótese Dental
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Transformamos o planejamento do dentista em próteses com foco em adaptação, estética e previsibilidade. Parceria especialista para consultórios da região.
            </p>

            <div className="pt-1">
              <span className="text-[11px] font-semibold text-slate-300 block">
                Responsável Técnico:
              </span>
              <span className="text-xs text-amber-300 font-bold">
                {LAB_CONFIG.founder}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#dores" className="hover:text-teal-400 transition-colors">
                  Diferenciais Clínicos
                </a>
              </li>
              <li>
                <a href="#solucao" className="hover:text-teal-400 transition-colors">
                  Nosso Padrão
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">
                  Catálogo de Próteses
                </a>
              </li>
              <li>
                <a href="#fluxo" className="hover:text-teal-400 transition-colors">
                  Como Funciona o Fluxo
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-teal-400 transition-colors">
                  Casos Clínicos & Protocolos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-teal-400 transition-colors">
                  Depoimentos no WhatsApp
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-teal-400 transition-colors">
                  Sobre o Laboratório
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Logistics */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Contato & Coleta
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{LAB_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{LAB_CONFIG.coletaHorario}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-semibold text-white">{LAB_CONFIG.whatsappDisplay}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Action */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Atendimento Imediato
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Inicie a triagem técnica do seu caso agora mesmo para receber orientações e suporte direto.
            </p>
            <button
              type="button"
              onClick={onOpenTriage}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-colors"
            >
              <span>Enviar caso para análise</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Laboratório Lourenço: Prótese Dental. Todos os direitos reservados.
          </p>
          <p className="max-w-xl text-center md:text-right">
            Imagens reais de trabalhos protéticos para fins técnico-científicos entre profissionais da odontologia (Cirurgiões-Dentistas e Técnicos em Prótese Dental), em estrita observância ao Código de Ética Odontológica.
          </p>
        </div>

      </div>
    </footer>
  )
}

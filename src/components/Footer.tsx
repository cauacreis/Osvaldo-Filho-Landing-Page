'use client'

import React from 'react'
import { LAB_CONFIG, getPricingTableWhatsAppLink } from '../config'
import { MapPin, Phone, Clock, Send, FileSpreadsheet, ShieldCheck, Instagram } from 'lucide-react'

interface FooterProps {
  onOpenTriage: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenTriage }) => {
  return (
    <footer className="bg-[#040609] text-slate-400 py-16 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <img
                  src="/assets/logo-gold.png"
                  alt="Laboratório Lourenço"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">Laboratório Lourenço</p>
                <p className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  Prótese Dental
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Transformamos o planejamento do dentista em próteses com foco em adaptação passiva, estética natural e previsibilidade clínica.
            </p>

            <div className="pt-1 space-y-0.5">
              <span className="text-[11px] font-semibold text-slate-300 block">
                Responsável Técnico:
              </span>
              <span className="text-xs text-amber-400 font-bold block">
                {LAB_CONFIG.founder}
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                {LAB_CONFIG.croTpd}
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
                <a href="#dores" className="hover:text-amber-400 transition-colors">
                  Diferenciais Clínicos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">
                  Catálogo & Biomateriais
                </a>
              </li>
              <li>
                <a href="#fluxo" className="hover:text-amber-400 transition-colors">
                  Como Funciona o Fluxo
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-amber-400 transition-colors">
                  Casos Clínicos & Protocolos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-amber-400 transition-colors">
                  Depoimentos no WhatsApp
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">
                  Responsável Técnico
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Logistics */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Logística & Atendimento
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{LAB_CONFIG.logisticsDetail}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{LAB_CONFIG.coletaHorario}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-white">{LAB_CONFIG.whatsappDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={LAB_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                >
                  {LAB_CONFIG.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Dual Action */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">
              Atendimento Técnico
            </h4>
            
            <button
              type="button"
              onClick={onOpenTriage}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
            >
              <span>Enviar Caso / Arquivo STL</span>
              <Send className="w-3.5 h-3.5 text-slate-950" />
            </button>

            <a
              href={getPricingTableWhatsAppLink('footer')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 border border-amber-500/30 text-xs font-semibold transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
              <span>Solicitar Tabela de Preços</span>
            </a>
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

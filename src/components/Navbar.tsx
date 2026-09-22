import React, { useState, useEffect } from 'react'
import { Send, Menu, X, Clock } from 'lucide-react'
import { LAB_CONFIG } from '../config'

interface NavbarProps {
  onOpenTriage: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTriage }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Navegação principal"
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/10'
                : 'bg-white/80 backdrop-blur-sm shadow-sm ring-1 ring-slate-900/5'
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-slate-900/5 flex items-center justify-center p-1 transition-transform group-hover:scale-105">
                <img
                  src="/assets/logo.webp"
                  alt="Laboratório Lourenço"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  width="44"
                  height="44"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 leading-tight">
                  Laboratório Lourenço
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-teal-700 tracking-wider uppercase">
                  Prótese Dental
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a
                href="#dores"
                className="hover:text-teal-700 transition-colors focus:outline-none focus:text-teal-700"
              >
                Diferenciais
              </a>
              <a
                href="#solucao"
                className="hover:text-teal-700 transition-colors focus:outline-none focus:text-teal-700"
              >
                Nosso Padrão
              </a>
              <a
                href="#servicos"
                className="hover:text-teal-700 transition-colors focus:outline-none focus:text-teal-700"
              >
                Serviços
              </a>
              <a
                href="#fluxo"
                className="hover:text-teal-700 transition-colors focus:outline-none focus:text-teal-700"
              >
                Como Funciona
              </a>
              <a
                href="#cases"
                className="hover:text-teal-700 transition-colors focus:outline-none focus:text-teal-700"
              >
                Casos Reais
              </a>
              <a
                href="#sobre"
                className="hover:text-teal-700 transition-colors focus:outline-none focus:text-teal-700"
              >
                Sobre
              </a>
              <a
                href="#faq"
                className="hover:text-teal-700 transition-colors focus:outline-none focus:text-teal-700"
              >
                FAQ
              </a>
            </div>

            {/* Live Status + Primary CTA */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium ring-1 ring-emerald-600/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Coleta na Região Ativa</span>
              </div>

              {/* Primary CTA button with button-in-button icon architecture */}
              <button
                type="button"
                onClick={onOpenTriage}
                className="group relative inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-full shadow-md hover:shadow-teal-950/20 transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                <span>Enviar caso para análise</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl ring-1 ring-slate-900/10 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                <span>{LAB_CONFIG.coletaHorario}</span>
              </div>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full ring-1 ring-emerald-600/20">
                Atendimento Ativo
              </span>
            </div>

            <div className="flex flex-col gap-3 text-base font-medium text-slate-800">
              <a
                href="#dores"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Diferenciais Clínicos
              </a>
              <a
                href="#solucao"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Nosso Padrão
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Catálogo de Próteses
              </a>
              <a
                href="#fluxo"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Como Funciona o Envio
              </a>
              <a
                href="#cases"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Casos Reais & Protocolos
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Sobre Osvaldo Lourenço
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Perguntas Frequentes
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenTriage()
                }}
                className="w-full py-3.5 px-4 bg-teal-800 hover:bg-teal-900 text-white font-semibold text-center rounded-2xl shadow-lg shadow-teal-900/20 flex items-center justify-center gap-2"
              >
                <span>Enviar caso para análise</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

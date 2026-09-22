import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  const navLinks = [
    { href: '#dores', label: 'Diferenciais' },
    { href: '#solucao', label: 'Nosso Padrão' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#fluxo', label: 'Como Funciona' },
    { href: '#cases', label: 'Casos Reais' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#faq', label: 'FAQ' },
  ]

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
                ? 'bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-black/40 border border-white/10'
                : 'bg-slate-900/60 backdrop-blur-md shadow-lg border border-white/10'
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center p-1 transition-transform group-hover:scale-105">
                <img
                  src="/assets/logo.webp"
                  alt="Laboratório Lourenço"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold tracking-tight text-white leading-tight">
                  Laboratório Lourenço
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-teal-400 tracking-wider uppercase">
                  Prótese Dental
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-teal-300 transition-colors focus:outline-none focus:text-teal-300 relative py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Live Status + Primary CTA */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-medium border border-teal-500/30">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>Coleta Ativa na Região</span>
              </div>

              {/* Primary CTA button with button-in-button icon architecture */}
              <button
                type="button"
                onClick={onOpenTriage}
                className="group relative inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-2 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.35)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <span>Enviar caso</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-950/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-950" />
                </span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden bg-black/70 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>{LAB_CONFIG.coletaHorario}</span>
                </div>
                <span className="text-xs font-medium text-teal-300 bg-teal-950/60 border border-teal-500/30 px-2.5 py-0.5 rounded-full">
                  Atendimento Ativo
                </span>
              </div>

              <div className="flex flex-col gap-2 text-base font-medium text-slate-200">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenTriage()
                  }}
                  className="w-full py-3.5 px-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-center rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-98"
                >
                  <span>Enviar caso para análise</span>
                  <Send className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

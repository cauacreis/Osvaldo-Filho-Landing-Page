import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Menu, X, Clock } from 'lucide-react'
import { LAB_CONFIG } from '../config'

interface NavbarProps {
  onOpenTriage: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTriage }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const hero = document.getElementById('hero')
          if (hero) {
            const rect = hero.getBoundingClientRect()
            // Navbar appears only strictly after the user leaves the initial Hero view
            // (when hero bottom scrolls past the top edge of the viewport)
            setIsVisible(rect.bottom <= 20)
          } else {
            setIsVisible(window.scrollY > (window.innerHeight || 800) * 0.85)
          }
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    window.addEventListener('hashchange', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('hashchange', handleScroll)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Automatically close mobile menu if user scrolls back into hero
  useEffect(() => {
    if (!isVisible) {
      setMobileMenuOpen(false)
    }
  }, [isVisible])

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '#dores', label: 'Diferenciais' },
    { href: '#solucao', label: 'Nosso Padrão' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#fluxo', label: 'Como Funciona' },
    { href: '#cases', label: 'Casos Reais' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#faq', label: 'FAQ' },
  ]

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            key="sticky-navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-40 py-2.5 sm:py-3"
          >
            <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
              <nav
                aria-label="Navegação principal"
                className="flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-black/50 border border-white/10"
              >
                {/* Logo */}
                <a
                  href="#hero"
                  onClick={handleScrollToTop}
                  className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none cursor-pointer shrink-0"
                >
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center p-1 transition-transform group-hover:scale-105 shrink-0">
                    <img
                      src="/assets/logo.webp"
                      alt="Laboratório Lourenço"
                      className="w-full h-full object-contain filter drop-shadow-sm"
                      width="36"
                      height="36"
                    />
                  </div>
                  <div className="flex flex-col whitespace-nowrap">
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight">
                      Laboratório Lourenço
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-teal-400 tracking-wider uppercase">
                      Prótese Dental
                    </span>
                  </div>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-slate-300">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="hover:text-teal-300 transition-colors focus:outline-none focus:text-teal-300 whitespace-nowrap py-1"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Primary CTA */}
                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  {/* Primary CTA button with button-in-button icon architecture */}
                  <button
                    type="button"
                    onClick={onOpenTriage}
                    className="group relative inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 sm:pl-4 sm:pr-1.5 sm:py-1.5 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.35)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Enviar caso</span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-950/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                      <Send className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-950" />
                    </span>
                  </button>

                  {/* Mobile Menu Hamburger */}
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none cursor-pointer shrink-0"
                    aria-label="Abrir menu de navegação"
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </nav>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {isVisible && mobileMenuOpen && (
          <motion.div
            key="mobile-drawer-backdrop"
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
              className="fixed top-18 sm:top-20 left-4 right-4 bg-slate-900 border border-slate-700 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>{LAB_CONFIG.coletaHorario}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Fechar menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1 sm:gap-2 text-sm sm:text-base font-medium text-slate-200">
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
                  className="w-full py-3.5 px-4 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-center rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer"
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

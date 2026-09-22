import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

interface FloatingWhatsAppProps {
  onOpenTriage: () => void
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenTriage }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 animate-fade-in">
      {/* Tooltip prompt (visible on sm+) */}
      <div
        onClick={onOpenTriage}
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/80 text-xs font-bold text-slate-800 cursor-pointer hover:bg-white transition-all transform hover:-translate-x-1"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Enviar caso para análise</span>
      </div>

      {/* Floating Button with ping effect */}
      <button
        type="button"
        onClick={onOpenTriage}
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-700/40 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Enviar caso para análise"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
        </span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
    </div>
  )
}

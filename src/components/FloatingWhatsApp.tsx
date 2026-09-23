'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-40"
        >

          {/* Floating Button with gold ping effect */}
          <button
            type="button"
            onClick={onOpenTriage}
            className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.45)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
            aria-label="Enviar caso para análise no WhatsApp"
          >
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 pointer-events-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400" />
            </span>
            {/* Iconic WhatsApp SVG (Black Silhouette Outline & Phone with Transparent Golden Interior) */}
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.24 3.68 16.31 4.54 17.86 6.1C19.42 7.65 20.27 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.41C16.31 14.28 15.09 13.68 14.86 13.6C14.63 13.52 14.47 13.48 14.3 13.73C14.14 13.98 13.67 14.53 13.53 14.7C13.39 14.86 13.24 14.88 12.99 14.76C12.74 14.63 11.94 14.37 10.99 13.52C10.25 12.86 9.75 12.04 9.6 11.79C9.46 11.54 9.59 11.4 9.71 11.28C9.82 11.17 9.96 10.99 10.09 10.84C10.21 10.69 10.25 10.59 10.34 10.42C10.42 10.25 10.38 10.11 10.32 9.98C10.25 9.86 9.76 8.65 9.56 8.16C9.36 7.67 9.15 7.74 9 7.73L8.52 7.72C8.35 7.72 8.08 7.78 7.85 8.03C7.62 8.28 6.98 8.88 6.98 10.1C6.98 11.32 7.87 12.5 8 12.67C8.12 12.83 9.75 15.34 12.24 16.42C12.83 16.68 13.29 16.83 13.65 16.95C14.25 17.14 14.79 17.11 15.22 17.05C15.7 16.98 16.7 16.45 16.91 15.86C17.12 15.27 17.12 14.77 17.05 14.66C16.99 14.54 16.82 14.48 16.56 14.41Z"
                fill="#05070B"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

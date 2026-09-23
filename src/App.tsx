'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PainPoints } from './components/PainPoints'
import { ServicesSection } from './components/ServicesSection'
import { WorkflowTimeline } from './components/WorkflowTimeline'
import { CaseGallery } from './components/CaseGallery'
import { ProofSection } from './components/ProofSection'
import { AboutSection } from './components/AboutSection'
import { FaqSection } from './components/FaqSection'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { TriageModal } from './components/TriageModal'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { PageSkeleton } from './components/PageSkeleton'

export function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [triageOpen, setTriageOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined)

  // Initial skeleton shimmer effect on page mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const handleOpenTriage = (serviceName?: string) => {
    setPreselectedService(serviceName)
    setTriageOpen(true)
  }

  const handleCloseTriage = () => {
    setTriageOpen(false)
    setPreselectedService(undefined)
  }

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Initial Skeleton Shimmer Loading Screen */}
      <AnimatePresence>
        {isLoading && <PageSkeleton key="page-skeleton-loader" />}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar onOpenTriage={() => handleOpenTriage()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenTriage={() => handleOpenTriage()} />

        {/* 2. Dores do Cirurgião-Dentista */}
        <PainPoints onOpenTriage={() => handleOpenTriage()} />

        {/* 3. Serviços & Soluções Protéticas */}
        <ServicesSection onSelectService={(service) => handleOpenTriage(service)} />

        {/* 5. Como Funciona (Linha do Tempo com Ícones 3D) */}
        <WorkflowTimeline onOpenTriage={() => handleOpenTriage()} />

        {/* 6. Cases Reais & Protocolo Carga Imediata */}
        <CaseGallery onOpenTriage={() => handleOpenTriage()} />

        {/* 7. Prova Social & Avaliações Reais no WhatsApp */}
        <ProofSection onOpenTriage={() => handleOpenTriage()} />

        {/* 8. Sobre o Laboratório & Osvaldo Lourenço */}
        <AboutSection onOpenTriage={() => handleOpenTriage()} />

        {/* 9. Perguntas Frequentes (FAQ) */}
        <FaqSection onOpenTriage={() => handleOpenTriage()} />

        {/* 10. CTA Final */}
        <FinalCta onOpenTriage={() => handleOpenTriage()} />
      </main>

      {/* Footer */}
      <Footer onOpenTriage={() => handleOpenTriage()} />

      {/* Totem Interativo em Modal (Triagem Técnica de Caso) */}
      <TriageModal
        isOpen={triageOpen}
        onClose={handleCloseTriage}
        initialService={preselectedService}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp onOpenTriage={() => handleOpenTriage()} />
    </div>
  )
}

export default App

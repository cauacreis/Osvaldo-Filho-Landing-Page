import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PainPoints } from './components/PainPoints'
import { SolutionPillars } from './components/SolutionPillars'
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

export function App() {
  const [triageOpen, setTriageOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined)

  const handleOpenTriage = (serviceName?: string) => {
    setPreselectedService(serviceName)
    setTriageOpen(true)
  }

  const handleCloseTriage = () => {
    setTriageOpen(false)
    setPreselectedService(undefined)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenTriage={() => handleOpenTriage()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenTriage={() => handleOpenTriage()} />

        {/* 2. Dores do Cirurgião-Dentista */}
        <PainPoints onOpenTriage={() => handleOpenTriage()} />

        {/* 3. Solução & Pilares */}
        <SolutionPillars onOpenTriage={() => handleOpenTriage()} />

        {/* 4. Serviços & Soluções Protéticas */}
        <ServicesSection onSelectService={(service) => handleOpenTriage(service)} />

        {/* 5. Como Funciona (Linha do Tempo) */}
        <WorkflowTimeline onOpenTriage={() => handleOpenTriage()} />

        {/* 6. Cases Reais & Protocolo Carga Imediata */}
        <CaseGallery onOpenTriage={() => handleOpenTriage()} />

        {/* 7. Prova Social & Avaliações Reais no WhatsApp */}
        <ProofSection onOpenTriage={() => handleOpenTriage()} />

        {/* 8. Sobre o Laboratório & Osvaldo Lourenço */}
        <AboutSection onOpenTriage={() => handleOpenTriage()} />

        {/* 10. Perguntas Frequentes (FAQ) */}
        <FaqSection onOpenTriage={() => handleOpenTriage()} />

        {/* 11. CTA Final */}
        <FinalCta onOpenTriage={() => handleOpenTriage()} />
      </main>

      {/* Footer */}
      <Footer onOpenTriage={() => handleOpenTriage()} />

      {/* 9. Totem Interativo em Modal (Triagem Técnica de Caso) */}
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

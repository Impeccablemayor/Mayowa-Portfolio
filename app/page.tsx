'use client'

import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { Projects } from '@/components/sections/Projects'
import { ArchitecturePhilosophy } from '@/components/sections/ArchitecturePhilosophy'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 selection:bg-purple-500/30 selection:text-purple-600 dark:selection:text-purple-300 transition-colors duration-300">
      <Navigation />
      <Hero />
      <ExperienceSection />
      <Projects />
      <ArchitecturePhilosophy />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

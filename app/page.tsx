"use client"
import { theme } from "@/lib/theme"
import { TransformationSection } from "@/components/sections/transformation-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BuildYourSiteSection } from "@/components/sections/build-your-site-section"
import { ScrollToContactButton } from "@/components/ui/scroll-to-contact-button" // Import the new button

// Componente Principal
export default function InovatumPortfolio() {
  return (
    <div className="bg-white overflow-x-hidden" style={{ color: theme.colors.primary.text }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TransformationSection />
      <BuildYourSiteSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToContactButton /> {/* Add the new button here */}
    </div>
  )
}

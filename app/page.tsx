"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import UseCasesSection from "@/components/use-cases-section"
import ConsultationForm from "@/components/consultation-form"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <UseCasesSection />
      <ConsultationForm />
      <ContactForm />
      <Footer />
    </main>
  )
}

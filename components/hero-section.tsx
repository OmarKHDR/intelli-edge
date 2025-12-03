"use client"

import GlowingPortalArch from "./glowing-portal-arch"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        {/* Subtle grid pattern - very minimal */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent),linear-gradient(-45deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:80px_80px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-4">
        <GlowingPortalArch />

        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-heading font-700 leading-[1.3] tracking-tight text-balance">
          Custom AI-Accelerated Silicon,
          <br />
          <span className="text-white/70">Engineered for Your Workloads</span>
        </h1>

        <p className="text-sm sm:text-base text-white/55 leading-relaxed max-w-3xl mx-auto text-balance font-light">
          Hardware–algorithm co-design delivering domain-specific, hardware-accelerated chips built for precision,
          speed, and your unique computational requirements.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6">
          {/* Primary CTA */}
          <button className="px-5 py-2.5 bg-white text-black font-heading font-600 text-sm rounded-sm hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
            Request a Custom Chip
          </button>

          {/* Secondary CTA */}
          <button className="px-5 py-2.5 border border-white/20 text-white font-heading font-600 text-sm rounded-sm hover:border-white/30 hover:bg-white/5 transition-all duration-200 whitespace-nowrap">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

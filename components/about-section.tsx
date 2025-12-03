export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-balance">
            About IntelliEdge Silicon
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            We build domain-specific AI-accelerated chips through rigorous hardware–algorithm co-design. Every chip is
            engineered from first principles to solve your specific computational challenges.
          </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {/* Mohamed Salah */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg">Mohamed Salah</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Hardware architect with 12+ years in silicon design and AI accelerator systems. Deep expertise in chip
              architecture and performance optimization.
            </p>
          </div>

          {/* Mahmoud Ezzat */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg">Mahmoud Ezzat</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Algorithm researcher specializing in hardware-algorithm co-optimization. Proven track record in
              domain-specific computing systems and low-level optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

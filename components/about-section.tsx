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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Mohamed Salah */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg">Mohamed Salah</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Senior engineering researcher specializing in advanced silicon architecture and AI acceleration frameworks. 
              Focused on pushing the boundaries of domain-specific chip design through innovative hardware-software integration 
              and rigorous performance optimization methodologies.
            </p>
          </div>

          {/* Mahmoud Ezzat */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg">Mahmoud Ezzat</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Senior engineering researcher with deep expertise in computational algorithms and hardware co-design. 
              Specializes in developing cutting-edge optimization techniques for custom silicon solutions, bridging 
              theoretical computer architecture with practical, high-performance implementations.
            </p>
          </div>

          {/* Omar Khaled */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg">Omar Khaled</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Software engineer with expertise in backend systems and low-level software development. 
              Passionate about open-source technologies and community-driven innovation, specializing in building 
              robust infrastructure and optimizing system-level performance for next-generation computing platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function UseCasesSection() {
  const useCases = [
    {
      title: "Edge AI",
      description: "Inference acceleration at the edge with minimal latency and power consumption.",
    },
    {
      title: "Robotics",
      description: "Real-time perception and control systems for autonomous robotic platforms.",
    },
    {
      title: "Autonomous Systems",
      description: "Low-latency decision-making for autonomous vehicles and UAVs.",
    },
    {
      title: "Datacenter Acceleration",
      description: "High-throughput AI model serving and training optimization.",
    },
  ]

  return (
    <section id="use-cases" className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-balance">
            Applications & Use Cases
          </h2>
          <p className="text-lg text-white/60">Proven solutions across industries and computational domains.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-8 rounded-sm border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-white/10 text-white font-heading font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <h3 className="text-xl font-heading font-bold">{useCase.title}</h3>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

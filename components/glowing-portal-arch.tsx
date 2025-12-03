"use client"

export default function GlowingPortalArch() {
  return (
    <div className="relative w-full h-16 flex items-center justify-center">
      <svg
        width="400"
        height="180"
        viewBox="0 0 400 180"
        className="w-full max-w-2xl h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glow filters for the arch lines */}
          <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glowBlueBright" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Linear gradient for center beam */}
          <linearGradient id="centerBeam" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: "#60a5fa", stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0.1 }} />
          </linearGradient>

          {/* Gradient for outer glow arches */}
          <linearGradient id="archGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" style={{ stopColor: "#1e40af", stopOpacity: 0 }} />
            <stop offset="30%" style={{ stopColor: "#3b82f6", stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: "#60a5fa", stopOpacity: 0.8 }} />
            <stop offset="70%" style={{ stopColor: "#3b82f6", stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: "#1e40af", stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {/* Center vertical beam - bright core */}
        <line x1="200" y1="0" x2="200" y2="180" stroke="url(#centerBeam)" strokeWidth="8" opacity="0.6" />

        {/* Outer concentric arches with increasing transparency */}
        {[80, 100, 120, 140].map((width, i) => (
          <g key={`arch-${i}`} opacity={1 - i * 0.18}>
            <path
              d={`M ${200 - width} 90 Q 200 ${90 - width * 0.6}, ${200 + width} 90`}
              stroke="url(#archGradient)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glowBlue)"
              className={`transition-opacity duration-500 ${i === 0 ? "animate-pulse" : ""}`}
              style={{
                animation: i === 0 ? "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" : "none",
              }}
            />
          </g>
        ))}
      </svg>

      {/* Keyframe animation for pulsing */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}

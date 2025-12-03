"use client"

import { useState } from "react"
import Link from "next/link"
import { useBasePath } from "@/lib/use-base-path"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const basePath = useBasePath()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src={`${basePath}/logo2.png`} alt="IntelliEdge Silicon" className="w-8 h-8" />
          <span className="font-heading font-bold text-lg tracking-tight hidden sm:inline">IntelliEdge</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
            About
          </a>
          <a href="#use-cases" className="text-sm text-white/70 hover:text-white transition-colors">
            Use Cases
          </a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#consultation"
            className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-sm hover:bg-gray-200 transition-colors"
          >
            Schedule Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 justify-center w-8 h-8"
          aria-label="Toggle menu"
        >
          <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-white/5 md:hidden">
            <div className="flex flex-col p-6 gap-6">
              <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
                About
              </a>
              <a href="#use-cases" className="text-sm text-white/70 hover:text-white transition-colors">
                Use Cases
              </a>
              <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
                Contact
              </a>
              <a
                href="#consultation"
                className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-sm hover:bg-gray-200 transition-colors text-center"
              >
                Schedule Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

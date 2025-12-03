export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-lg">IntelliEdge Silicon</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Hardware–algorithm co-design for domain-specific AI acceleration.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-white/80 mb-4">Contact</h4>
            <a href="mailto:hello@intelliedge.io" className="text-white/60 hover:text-white transition-colors text-sm">
              hello@intelliedge.io
            </a>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-white/80 mb-4">Legal</h4>
            <div className="space-y-3 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors block">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors block">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-white/40 text-sm">&copy; {currentYear} IntelliEdge Silicon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

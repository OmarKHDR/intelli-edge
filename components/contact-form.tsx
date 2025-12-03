"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Construct email content
      const subject = encodeURIComponent(`Contact Form: Message from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || 'N/A'}\n\n` +
        `Message:\n${formData.message}`
      )
      
      // Open email client without redirecting the page
      const mailtoLink = `mailto:support@intelliedgesilicon.systems?subject=${subject}&body=${body}`
      const link = document.createElement('a')
      link.href = mailtoLink
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Wait longer for user to see the status and handle email, then reset form
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
        setIsLoading(false)
      }, 5000)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-balance">Get in Touch</h2>
          <p className="text-white/60">Have questions about custom chip design? Reach out to our team.</p>
        </div>

        {isLoading ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-12 h-12 rounded-sm bg-white/10 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Opening Your Email Client</h3>
              <p className="text-white/60 text-sm">Preparing your message and opening your default email application...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Company (Optional)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Your company"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Tell us what you need..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 disabled:bg-white/50 transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

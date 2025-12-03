"use client"

import type React from "react"

import { useState } from "react"

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    note: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setSubmitted(true)
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          date: "",
          time: "",
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          note: "",
        })
        setSubmitted(false)
      }, 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="consultation" className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-balance">
            Schedule a Technical Consultation
          </h2>
          <p className="text-white/60">Let's discuss your chip design requirements and engineering goals.</p>
        </div>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-12 h-12 rounded-sm bg-white/10 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Consultation Requested</h3>
              <p className="text-white/60 text-sm">We will review your request and contact you within 48 hours.</p>
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

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>

            {/* Timezone */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Timezone</label>
              <input
                type="text"
                name="timezone"
                value={formData.timezone}
                disabled
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white/50 cursor-not-allowed"
              />
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Additional Notes</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Tell us about your project requirements..."
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
                  Submitting...
                </>
              ) : (
                "Schedule Consultation"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

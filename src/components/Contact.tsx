import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import FadeUp from './ui/FadeUp'

const CONTACT_INFO = [
  { icon: Phone,  label: 'Call Us',       text: '+91 62640 35911' },
  { icon: Mail,   label: 'Email Us',      text: 'sellersudaan@gmail.com' },
  { icon: MapPin, label: 'Our Location',  text: 'Indore, Madhya Pradesh, India' },
]

const PLATFORMS = ['Flipkart', 'Amazon', 'Meesho', 'Myntra', 'JioMart', 'Multiple Platforms']

interface FormState {
  name: string
  phone: string
  email: string
  platform: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', email: '', platform: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-blue-400 outline-none focus:ring-2 focus:ring-orange-400/50"
  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
  }

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #060d1f 0%, #0f1f4b 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — info */}
          <FadeUp>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{
                background: 'rgba(249,115,22,0.15)',
                color: '#fb923c',
                border: '1px solid rgba(249,115,22,0.3)',
              }}
            >
              Get In Touch
            </span>

            <h2
              className="text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Ready to{' '}
              <span style={{ color: '#fb923c' }}>Skyrocket</span>{' '}
              Your Marketplace Sales?
            </h2>

            <p className="text-blue-200 mb-10 leading-relaxed">
              Book a free 30-minute strategy call. Our experts will review your account, identify growth opportunities, and outline a custom plan — at no cost to you.
            </p>

            <div className="space-y-5">
              {CONTACT_INFO.map(({ icon: Icon, label, text }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(249,115,22,0.15)' }}
                  >
                    <Icon size={18} style={{ color: '#fb923c' }} />
                  </div>
                  <div>
                    <div className="text-xs text-blue-400">{label}</div>
                    <div className="text-white font-medium text-sm">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.2}>
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-blue-200 text-sm">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="text-xl font-bold text-white mb-6"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Get Free Consultation
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-blue-300 mb-1.5">Full Name</label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-blue-300 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="**********"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={inputClass}
                          style={inputStyle}
                        /> 
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-blue-300 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="Example@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                      /> 
                    </div>

                    <div>
                      <label className="block text-xs text-blue-300 mb-1.5">Which Platform Do You Sell On?</label>
                      <select
                        value={form.platform}
                        onChange={(e) => setForm({ ...form, platform: e.target.value })}
                        className={inputClass}
                        style={{ ...inputStyle, appearance: 'none' }}
                      >
                        <option value="" style={{ color: '#111' }}>Select Platform</option>
                        {PLATFORMS.map((p) => (
                          <option key={p} value={p} style={{ color: '#111' }}>{p}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-blue-300 mb-1.5">Message (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your business or any specific challenges..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        style={inputStyle}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(249,115,22,0.45)' }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #ea580c, #f97316)' }}
                    >
                      Book Free Consultation
                      <ArrowRight size={15} />
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}

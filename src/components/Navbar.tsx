import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import logoImg from '../imports/WhatsApp_Image_2026-07-28_at_21.45.05.jpeg'

const NAV_LINKS = ['Services', 'About', 'Process', 'Industries', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.93)' : 'rgba(255,255,255,0.76)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 2px 24px rgba(15,31,75,0.10)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,58,110,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        {/* ── Circular logo ── */}
        <a href="#" className="flex items-center gap-3 flex-shrink-0 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative"
          >
            {/* Pulsing orange ring */}
            <span
              className="absolute inset-0 rounded-full pulse-ring"
              style={{ background: 'transparent' }}
            />
            <img
              src={logoImg}
              alt="Sellers Udaan"
              className="w-11 h-11 lg:w-13 lg:h-13 rounded-full object-cover border-2 border-orange-400 shadow-md"
              style={{ objectPosition: 'center' }}
            />
          </motion.div>
          <span
            className="hidden sm:block font-bold text-base"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0f1f4b' }}
          >
            Sellers Udaan
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors group"
            >
              {link}
              <span
                className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.06, boxShadow: '0 6px 24px rgba(249,115,22,0.35)' }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #1a3a6e 0%, #f97316 100%)' }}
        >
          Get Free Consultation
          <ArrowRight size={14} />
        </motion.a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 rounded-lg text-gray-700"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 px-4 pb-4"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50"
              >
                {link}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #1a3a6e 0%, #f97316 100%)' }}
            >
              Get Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

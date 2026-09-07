import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { CheckCircle2, ChevronRight, Star, TrendingUp, Zap } from 'lucide-react'
import heroImg from '../imports/image-7.png'

const CHECKS = [
  'Product Listing',
  'Catalog Optimization',
  'Sales Growth',
  'Ads Management',
  'Account Health',
  'Daily Support',
]

const STATS = [
  { value: 5000, suffix: '+', label: 'Listings Managed' },
  { value: 200, suffix: '+', label: 'Happy Sellers' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

/* ── Animated number counter ── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const step = target / (duration / 16)
        let cur = 0
        const timer = setInterval(() => {
          cur += step
          if (cur >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(cur))
        }, 16)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ── Floating particle dots ── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 5,
}))

/* ── Typewriter for the subheadline ── */
const PHRASES = [
  'Complete Marketplace Management Under One Roof',
  'Your Growth, Our Priority',
  'Sell More, Stress Less',
]
function Typewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const phrase = PHRASES[phraseIdx]

  useEffect(() => {
    const speed = deleting ? 30 : 55
    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < phrase.length) {
          setDisplayed(phrase.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1600)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          setDeleting(false)
          setPhraseIdx((i) => (i + 1) % PHRASES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [displayed, deleting, phrase])

  return (
    <span>
      {displayed}
      <span className="animate-pulse" style={{ color: '#fb923c' }}>|</span>
    </span>
  )
}

export default function Hero() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060d1f 0%, #0f1f4b 45%, #1a3a6e 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Orange glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }}
      />

      {/* Blue glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? '#fb923c' : p.id % 3 === 1 ? '#60a5fa' : '#4ade80',
            opacity: 0.5,
          }}
          animate={{ y: [0, -24, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.4, 1] }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left column ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 glow-border"
              style={{
                background: 'rgba(249,115,22,0.15)',
                color: '#fb923c',
                border: '1px solid rgba(249,115,22,0.4)',
              }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}>
                <Star size={12} fill="currentColor" />
              </motion.div>
              India's Trusted Marketplace Partner
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Grow Your{' '}
              <span className="shimmer-text">E-commerce</span>{' '}
              Business with Sellers Udaan
            </motion.h1>

            {/* Typewriter subheadline */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="text-lg font-semibold mb-3 min-h-[1.75rem]"
              style={{ color: '#fbbf24' }}
            >
              <Typewriter />
            </motion.p>

            {/* Description */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="text-gray-300 mb-8 text-base leading-relaxed"
            >
              We manage your Flipkart, Amazon, Meesho, Myntra &amp; JioMart accounts so you can focus on growing your business.
            </motion.p>

            {/* Checklist */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-2 gap-2.5 mb-8"
            >
              {CHECKS.map((item) => (
                <motion.div
                  key={item}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-sm text-gray-200"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: Math.random() * 2 }}
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0" style={{ color: '#4ade80' }} />
                  </motion.div>
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(249,115,22,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)' }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  style={{ background: 'rgba(255,255,255,0.3)' }}
                />
                <Zap size={14} />
                Get Free Consultation
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.14)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-colors"
                style={{ border: '1.5px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.05)' }}
              >
                Our Services
                <ChevronRight size={15} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.4 } } }}
              className="flex gap-8 mt-10 pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              {STATS.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-2xl font-bold" style={{ color: '#fb923c' }}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column — hero image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            {/* Rotating ring behind image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute -inset-4 rounded-3xl opacity-30"
              style={{
                background: 'conic-gradient(from 0deg, #f97316, #1a3a6e, #f97316)',
                filter: 'blur(20px)',
              }}
            />

            <img
              src={heroImg}
              alt="E-commerce dashboard analytics"
              className="relative w-full rounded-2xl shadow-2xl object-cover"
              style={{ maxHeight: '520px' }}
            />

            {/* Floating sales badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-5 rounded-2xl p-4 shadow-xl"
              style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)' }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #1a3a6e, #f97316)' }}
                >
                  <TrendingUp size={18} className="text-white" />
                </motion.div>
                <div>
                  <div className="text-xs text-gray-500">Monthly Growth</div>
                  <div className="text-lg font-bold" style={{ color: '#1a3a6e' }}>+47% Sales</div>
                </div>
              </div>
            </motion.div>

            {/* Floating platform badge top-right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -right-4 rounded-xl px-3 py-2 shadow-lg text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #2874f0, #0f1f4b)' }}
            >
              5 Platforms ✓
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Lightbulb, Settings, Sparkles, TrendingUp, HeadphonesIcon } from 'lucide-react'
import FadeUp from './ui/FadeUp'

const STEPS = [
  { num: '01', title: 'Contact Us',               desc: 'Reach out via call, WhatsApp, or our form for a free consultation.', Icon: MessageCircle, color: '#3b82f6' },
  { num: '02', title: 'Understand Your Business', desc: "We learn your products, goals, and current marketplace challenges.",  Icon: Lightbulb,       color: '#f59e0b' },
  { num: '03', title: 'Marketplace Setup',         desc: 'Account creation, brand registration, and onboarding on all platforms.', Icon: Settings,   color: '#8b5cf6' },
  { num: '04', title: 'Optimization',              desc: 'Listings, SEO, images, pricing, and A+ content all polished to perfection.', Icon: Sparkles, color: '#ec4899' },
  { num: '05', title: 'Sales Growth',              desc: 'Ad campaigns launched, promotions activated, and sales start climbing.', Icon: TrendingUp,  color: '#10b981' },
  { num: '06', title: 'Regular Support',           desc: 'Daily monitoring, weekly reports, and a dedicated manager on speed dial.', Icon: HeadphonesIcon, color: '#f97316' },
]

function StepCard({ step, i }: { step: typeof STEPS[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { Icon, color } = step

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -8, boxShadow: `0 20px 48px ${color}33` }}
      className="relative rounded-2xl p-6 bg-white h-full group"
      style={{ border: '1px solid #e8eef7', boxShadow: '0 2px 12px rgba(15,31,75,0.05)' }}
    >
      {/* Animated top border on hover */}
      <motion.div
        className="absolute top-0 left-0 h-1 rounded-t-2xl"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.35 }}
        style={{ background: `linear-gradient(90deg, ${color}, #0f1f4b)` }}
      />

      {/* Ghost number */}
      <div
        className="text-5xl font-black mb-4 leading-none select-none"
        style={{ color: 'rgba(15,31,75,0.06)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        {step.num}
      </div>

      {/* Icon badge */}
      <motion.div
        whileHover={{ rotate: 15, scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${color}18` }}
      >
        <Icon size={22} style={{ color }} />
      </motion.div>

      <h3 className="text-base font-bold mb-2" style={{ color: '#0f1f4b' }}>{step.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>

      {/* Step number pill */}
      <div
        className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ background: `linear-gradient(135deg, #0f1f4b, ${color})` }}
      >
        {step.num.replace('0', '')}
      </div>
    </motion.div>
  )
}

export default function Process() {
  return (
    <section id="process" className="py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeUp className="text-center mb-16">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: '#fff7ed', color: '#ea580c' }}
          >
            Our Process
          </span>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0f1f4b' }}
          >
            From Sign-Up to Sales Growth
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A streamlined onboarding process designed to get you selling faster and smarter.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

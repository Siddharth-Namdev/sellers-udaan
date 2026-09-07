import { motion } from 'framer-motion'
import {
  Users, ShieldCheck, Zap, Clock, Search,
  TrendingUp, HeartHandshake, DollarSign, BarChart2,
  type LucideIcon,
} from 'lucide-react'
import FadeUp from './ui/FadeUp'
import StaggerChildren, { itemVariant } from './ui/StaggerChildren'
import img4 from '../imports/image-4.png'

interface WhyItem {
  icon: LucideIcon
  title: string
  desc: string
}

const WHY_ITEMS: WhyItem[] = [
  { icon: Users,         title: 'Experienced Marketplace Experts', desc: 'Our team knows every platform inside out.' },
  { icon: ShieldCheck,   title: 'Complete Account Handling',       desc: 'From setup to daily operations — we do it all.' },
  { icon: Zap,           title: 'Fast Listing Process',            desc: 'Products live on marketplaces in record time.' },
  { icon: Clock,         title: 'Daily Account Monitoring',        desc: '24/7 vigilance to catch issues early.' },
  { icon: Search,        title: 'Marketplace SEO',                 desc: 'Optimized titles, keywords, and descriptions.' },
  { icon: TrendingUp,    title: 'Sales Growth Strategy',           desc: 'Data-driven plans that convert browsers to buyers.' },
  { icon: HeartHandshake,title: 'Dedicated Support',               desc: 'A dedicated manager for every seller account.' },
  { icon: DollarSign,    title: 'Affordable Pricing',              desc: 'Premium services at prices that make business sense.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text + grid */}
          <div>
            <FadeUp>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: '#fff7ed', color: '#ea580c' }}
              >
                Why Sellers Choose Us
              </span>
              <h2
                className="text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0f1f4b' }}
              >
                Everything You Need to{' '}
                <span style={{ color: '#f97316' }}>Dominate</span>{' '}
                Your Market
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                We've built our processes around one goal: taking the complexity of multi-platform selling off your shoulders so you can focus on building your brand.
              </p>
            </FadeUp>

            <StaggerChildren className="grid sm:grid-cols-2 gap-4">
              {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={itemVariant}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,31,75,0.1)' }}
                  className="flex items-start gap-3 p-4 rounded-xl transition-shadow"
                  style={{ background: '#f8faff', border: '1px solid #e8eef7' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1a3a6e, #2563b0)' }}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: '#0f1f4b' }}>{title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>

          {/* Image side */}
          <FadeUp delay={0.2}>
            <div className="relative">
              <img
                src={img4}
                alt="Marketplace management platforms and tools"
                className="w-full rounded-2xl shadow-xl object-cover"
              />
              <div
                className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #0f1f4b, #1a3a6e)', maxWidth: '220px' }}
              >
                <BarChart2 size={22} className="mb-2" style={{ color: '#fb923c' }} />
                <div className="text-white text-sm font-semibold mb-1">Avg. Sales Increase</div>
                <div className="text-3xl font-bold" style={{ color: '#fb923c' }}>+65%</div>
                <div className="text-blue-300 text-xs mt-1">within first 3 months</div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}

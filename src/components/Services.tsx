import { motion } from 'framer-motion'
import { ShoppingBag, Star, Package, Award, LayoutGrid, HeartHandshake, ArrowRight } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import StaggerChildren from './ui/StaggerChildren'
import ServiceCard from './ServiceCard'
import img0 from '../imports/image.png'
import img1 from '../imports/image-1.png'
import img2 from '../imports/image-2.png'
import img3 from '../imports/image-3.png'
import img4 from '../imports/image-4.png'

const SERVICES = [
  {
    title: 'Flipkart Account Management',
    Icon: ShoppingBag,
    img: img0,
    color: '#2874f0',
    bg: '#eff6ff',
    items: [
      'Complete Account Setup',
      'Product Listing & Catalog Optimization',
      'Pricing & Inventory Management',
      'Sales Boost Strategy',
      'Sponsored Ads',
      'Daily Monitoring',
      'Account Health Management',
    ],
  },
  {
    title: 'Amazon Account Management',
    Icon: Star,
    img: img1,
    color: '#ff9900',
    bg: '#fffbeb',
    items: [
      'Amazon Listing & SEO Optimization',
      'A+ Content Guidance',
      'PPC Campaign Management',
      'Inventory Management',
      'Performance Monitoring',
      'Brand Support',
    ],
  },
  {
    title: 'Meesho Account Management',
    Icon: Package,
    img: img2,
    color: '#9c2d87',
    bg: '#fdf4ff',
    items: [
      'Product Upload & Catalog Creation',
      'Daily Monitoring',
      'Price Optimization',
      'Inventory Updates',
      'Order Management',
      'Sales Improvement',
    ],
  },
  {
    title: 'Myntra Management',
    Icon: Award,
    img: img4,
    color: '#ff3f6c',
    bg: '#fff1f4',
    items: [
      'Premium Catalog Management',
      'Product Listing',
      'Inventory Management',
      'Pricing Updates',
      'Sales Monitoring',
    ],
  },
  {
    title: 'JioMart Management',
    Icon: LayoutGrid,
    img: img3,
    color: '#0059a3',
    bg: '#eff6ff',
    items: [
      'Product Listing',
      'Catalog Optimization',
      'Inventory Control',
      'Order Management',
      'Performance Tracking',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeUp className="text-center mb-16">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: '#fff7ed', color: '#ea580c' }}
          >
            Our Services
          </span>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0f1f4b' }}
          >
            Complete Marketplace Management
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            End-to-end account management across all major Indian e-commerce platforms — handled by certified experts.
          </p>
        </FadeUp>

        {/* Card grid */}
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}

          {/* Custom CTA card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
            }}
            whileHover={{ y: -8 }}
            className="rounded-2xl flex flex-col items-center justify-center p-8 text-center text-white"
            style={{
              background: 'linear-gradient(135deg, #0f1f4b 0%, #1e4d91 50%, #f97316 150%)',
              boxShadow: '0 4px 20px rgba(15,31,75,0.2)',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <HeartHandshake size={28} className="text-white" />
            </div>
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Need a Custom Package?
            </h3>
            <p className="text-blue-200 text-sm mb-6 leading-relaxed">
              Talk to our experts and we'll build a plan tailored to your brand and budget.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, background: '#f97316' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors text-white"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1.5px solid rgba(255,255,255,0.4)',
              }}
            >
              Contact Us
              <ArrowRight size={13} />
            </motion.a>
          </motion.div>
        </StaggerChildren>

      </div>
    </section>
  )
}

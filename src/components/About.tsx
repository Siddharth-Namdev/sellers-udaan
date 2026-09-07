import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, TrendingUp, Users, Star } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import img5 from '../imports/image-5.png'

/* ── Animated counter ── */
function StatBadge({ value, label, icon: Icon, color }: {
  value: string; label: string; icon: typeof TrendingUp; color: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      className="flex items-center gap-3 p-3 rounded-xl"
      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}22` }}>
        <Icon size={16} style={{ color }} />
      </div>
      <div>
        <div className="font-bold text-white text-sm">{value}</div>
        <div className="text-blue-300 text-xs">{label}</div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <FadeUp>
            <div className="relative" ref={ref}>
              <motion.img
                src={img5}
                alt="Analytics dashboard showing total sales and listings"
                className="w-full rounded-2xl shadow-xl object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              {/* Animated overlay ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                className="absolute -inset-2 rounded-2xl opacity-20 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, #f97316, transparent, #1a3a6e, transparent, #f97316)',
                  filter: 'blur(8px)',
                }}
              />
              {/* Decorative dot */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)' }} />

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 rounded-xl p-4 shadow-xl"
                style={{ background: '#0f1f4b' }}
              >
                <div className="text-xs text-blue-200 mb-1">Total Sales</div>
                <div className="text-xl font-bold text-white">₹25,68,450</div>
                <div className="text-xs mt-1 flex items-center gap-1" style={{ color: '#4ade80' }}>
                  <TrendingUp size={10} /> ▲ 21% this month
                </div>
              </motion.div>

              {/* Mini stats row — appears on inView */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -right-4 top-1/3 flex flex-col gap-2"
                style={{ width: '160px' }}
              >
                <StatBadge value="5000+" label="Listings" icon={Star} color="#fb923c" />
                <StatBadge value="200+"  label="Sellers"  icon={Users} color="#60a5fa" />
              </motion.div>
            </div>
          </FadeUp>

          {/* Text side */}
          <div>
            <FadeUp delay={0.1}>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: '#fff7ed', color: '#ea580c' }}
              >
                About Us
              </span>

              <h2
                className="text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0f1f4b' }}
              >
                Why Choose{' '}
                <span style={{ color: '#f97316' }}>Sellers Udaan?</span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                At Sellers Udaan, we help brands and sellers grow on India's top marketplaces. From creating listings to managing orders, advertisements, and account health, we handle everything professionally.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                With a team of dedicated marketplace experts, we bring deep knowledge of every platform's algorithms, policies, and best practices — so your account always stays healthy and your sales keep climbing.
              </p>
            </FadeUp>

            {/* Goal box */}
            <FadeUp delay={0.25}>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 24px 60px rgba(15,31,75,0.3)' }}
                className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, #0f1f4b 0%, #1a3a6e 100%)' }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(249,115,22,0.2)' }}
                  >
                    <Target size={20} style={{ color: '#fb923c' }} />
                  </motion.div>
                  <div>
                    <div className="text-white font-semibold mb-1">Our Goal Is Simple</div>
                    <div className="text-blue-200 text-sm leading-relaxed italic">
                      "Increase your sales while reducing your workload."
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  )
}

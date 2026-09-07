import { motion } from 'framer-motion'
import FadeUp from './ui/FadeUp'

const INDUSTRIES = [
  'Fashion', 'Beauty', 'Home & Kitchen', 'Electronics', 'Footwear',
  'Jewellery', 'Kids', 'Grocery', 'Sports', 'Lifestyle',
  'Books', 'Mobiles', 'Appliances', 'Toys', 'Stationery',
]

// Duplicate for seamless infinite scroll
const DOUBLED = [...INDUSTRIES, ...INDUSTRIES]

function pillStyle(i: number): React.CSSProperties {
  if (i % 3 === 0) return { background: '#0f1f4b', color: 'white' }
  if (i % 3 === 1) return { background: '#fff7ed', color: '#ea580c', border: '1px solid #fed7aa' }
  return { background: '#f0f4ff', color: '#1a3a6e', border: '1px solid #c7d7f5' }
}

export default function Industries() {
  return (
    <section id="industries" className="py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeUp className="text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: '#fff7ed', color: '#ea580c' }}
          >
            Industries We Work With
          </span>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#0f1f4b' }}
          >
            Serving Every Category, Every Seller
          </h2>
        </FadeUp>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }}
        />

        <div className="flex animate-marquee whitespace-nowrap">
          {DOUBLED.map((industry, i) => (
            <motion.span
              key={`${industry}-${i}`}
              whileHover={{ scale: 1.08, y: -2 }}
              className="inline-flex items-center mx-3 px-5 py-2.5 rounded-full text-sm font-semibold cursor-default flex-shrink-0"
              style={pillStyle(i)}
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import logoImg from '../imports/WhatsApp_Image_2026-07-28_at_21.45.05.jpeg'

const FOOTER_LINKS: Record<string, string[]> = {
  Services: [
    'Flipkart Management',
    'Amazon Management',
    'Meesho Management',
    'Myntra Management',
    'JioMart Management',
  ],
  Company: ['About Us', 'Our Process', 'Industries', 'Case Studies', 'Blog'],
  Support: ['Free Consultation', 'Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'],
}

export default function Footer() {
  return (
    <footer style={{ background: '#060d1f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div>
            {/* Circular logo in footer */}
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ boxShadow: '0 0 14px rgba(249,115,22,0.55)' }}
                />
                <img
                  src={logoImg}
                  alt="Sellers Udaan"
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
                />
              </motion.div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Sellers Udaan
                </div>
                <div className="text-orange-400 text-xs">Your Growth, Our Priority</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's trusted partner for complete e-commerce marketplace management. We manage your accounts so you can focus on your business.
            </p>

            {/* Quick contact */}
            <div className="space-y-2.5 mb-6">
              {[
                { Icon: Phone,  text: '+91 62640 35911' },
                { Icon: Mail,   text: 'sellersudaan@gmail.com' },
                { Icon: MapPin, text: 'Indore, Madhya Pradesh, India' },
              ].map(({ Icon, text }) => (
                <motion.div
                  key={text}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <Icon size={13} style={{ color: '#fb923c' }} />
                  <span className="text-gray-400 text-xs">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(249,115,22,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #ea580c, #f97316)' }}
            >
              Get Free Consultation
              <ArrowRight size={13} />
            </motion.a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: '#fb923c' }}
                      className="text-gray-400 text-sm block transition-colors"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Sellers Udaan. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Made with <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} style={{ color: '#f97316' }}>♥</motion.span> for Indian Sellers
          </p>
        </div>

      </div>
    </footer>
  )
}

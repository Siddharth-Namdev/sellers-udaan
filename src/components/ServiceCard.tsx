import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight, type LucideIcon } from 'lucide-react'
import { itemVariant } from './ui/StaggerChildren'

interface ServiceCardProps {
  title: string
  Icon: LucideIcon
  img: string
  color: string
  bg: string
  items: string[]
}

export default function ServiceCard({ title, Icon, img, color, bg, items }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={itemVariant}
      whileHover={{ y: -10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-2xl overflow-hidden bg-white flex flex-col cursor-default"
      style={{
        boxShadow: hovered
          ? `0 28px 60px rgba(15,31,75,0.18), 0 0 0 2px ${color}33`
          : '0 4px 20px rgba(15,31,75,0.07)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Card image with zoom on hover */}
      <div className="relative h-44 overflow-hidden">
        <motion.img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(15,31,75,0.72) 100%)' }}
        />
        {/* Animated color accent bar */}
        <motion.div
          className="absolute top-0 left-0 h-1 rounded-b"
          animate={{ width: hovered ? '100%' : '40%' }}
          transition={{ duration: 0.4 }}
          style={{ background: color }}
        />
        <span
          className="absolute bottom-3 left-4 text-white text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ background: color }}
        >
          Platform Partner
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: hovered ? 360 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: bg }}
          >
            <Icon size={20} style={{ color }} />
          </motion.div>
          <h3 className="font-bold text-base" style={{ color: '#0f1f4b' }}>{title}</h3>
        </div>

        <ul className="space-y-2 flex-1">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03, boxShadow: `0 6px 20px ${color}55` }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-white"
          style={{ background: `linear-gradient(135deg, #0f1f4b, ${color})` }}
        >
          Get Started
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ x: -4, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 4, opacity: 0 }}
              >
                <ArrowRight size={13} />
              </motion.span>
            )}
          </AnimatePresence>
          {!hovered && <ArrowRight size={13} />}
        </motion.a>
      </div>
    </motion.div>
  )
}

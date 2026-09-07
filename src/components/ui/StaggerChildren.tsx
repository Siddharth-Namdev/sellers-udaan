import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
}

export const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: 'easeOut' as const },
  }),
}

export default function StaggerChildren({ children, className = '' }: StaggerChildrenProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

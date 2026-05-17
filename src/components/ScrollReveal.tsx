import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  duration?: number
}

function getInitial(direction: string, distance: number) {
  switch (direction) {
    case 'up':
      return { opacity: 0, y: distance }
    case 'down':
      return { opacity: 0, y: -distance }
    case 'left':
      return { opacity: 0, x: distance }
    case 'right':
      return { opacity: 0, x: -distance }
    default:
      return { opacity: 0, y: distance }
  }
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.6,
}: ScrollRevealProps) {
  const initial = getInitial(direction, distance)

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  )
}

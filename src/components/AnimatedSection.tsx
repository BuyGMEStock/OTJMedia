'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileInView?: any
  viewport?: any
  exit?: any
}

export default function AnimatedSection({
  children,
  className = '',
  initial,
  animate,
  transition,
  whileInView,
  viewport,
  exit,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
      exit={exit}
    >
      {children}
    </motion.div>
  )
} 
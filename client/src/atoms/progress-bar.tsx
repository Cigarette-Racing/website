import React from 'react'
import { motion } from 'framer-motion'

export interface ProgressBarProps {
  /** Number between 0 and 100 (inclusive) to display as progress */
  percentage: number
}

const normalizePercentage = (percentage: number) => {
  if (percentage < 0) return 0
  if (percentage > 100) return 100
  return percentage
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const percentageString = normalizePercentage(percentage) + '%'
  return (
    <div className="h-px w-full bg-white">
      <motion.div
        className="h-px bg-red"
        initial={false}
        animate={{ width: percentageString }}
      >
        <span className="sr-only">{percentageString}</span>
      </motion.div>
    </div>
  )
}

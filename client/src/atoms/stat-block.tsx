import React from 'react'
import { Typography } from './typography'
import { ProgressBar } from './progress-bar'

export interface StatBlockProps {
  /** Label to show below `text` */
  label: string
  /** Number between 0 and 100 (inclusive) to display as progress */
  percentage: number
  /** Primary text to display */
  text: string
}

export const StatBlock = ({ label, percentage, text }: StatBlockProps) => {
  return (
    <div className="w-full max-w-48 text-white">
      <ProgressBar percentage={percentage} />
      <Typography variant="h4" className="my-2">
        {text}
      </Typography>
      <Typography variant="e3">{label}</Typography>
    </div>
  )
}

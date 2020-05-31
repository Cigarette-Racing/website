import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'

export interface VerticalLabelProps {}

export const VerticalLabel: React.FC<VerticalLabelProps> = ({ children }) => {
  return (
    <div className="bg-black bg-opacity-25 blur-4 p-4 writing-mode-vertical transform rotate-180">
      <Typography variant="e3" theme="dark" className="whitespace-no-wrap">
        {children}
      </Typography>
    </div>
  )
}

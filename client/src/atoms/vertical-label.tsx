import React from 'react'
import { Typography } from './typography'
import clsx from 'clsx'

export interface VerticalLabelProps {
  className: string
}

export const VerticalLabel: React.FC<VerticalLabelProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        'bg-black bg-opacity-25 backdrop-blur-4 p-4 writing-mode-vertical transform rotate-180 pointer-events-none',
        className
      )}
    >
      <Typography variant="e3" theme="dark" className="whitespace-no-wrap">
        {children}
      </Typography>
    </div>
  )
}

import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import adornmentDark from '../images/vertical-header-dark.svg'
import adornmentLight from '../images/vertical-header-light.svg'
import { Theme } from './types'

export interface VerticalHeaderProps {
  className?: string
  theme: Theme
}

export const VerticalHeader: React.FC<VerticalHeaderProps> = ({
  children,
  className,
  theme,
}) => {
  const adornment = theme === 'dark' ? adornmentDark : adornmentLight
  return (
    <div
      className={clsx(
        'writing-mode-vertical transform rotate-180 pointer-events-none text-gray-3 flex',
        {
          'text-gray-3': theme === 'dark',
          'text-gray-4': theme === 'light',
        },
        className
      )}
    >
      <img src={adornment} alt="" className="transform rotate-180" />
      <Typography variant="h4" className="mt-8 whitespace-no-wrap">
        {children}
      </Typography>
    </div>
  )
}

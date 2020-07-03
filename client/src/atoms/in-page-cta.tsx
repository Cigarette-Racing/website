import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { Theme } from '../types/shared'

export interface InPageCtaProps {
  className?: string
  /** Visual variant to use */
  variant?: 'primary' | 'secondary'
  /** Light or dark theme */
  theme?: Theme
}

const baseClasses =
  'h-10 px-4 sm:px-10 border rounded-full transition-colors duration-150 ease-in-out'
const primaryClasses =
  'bg-white text-black border-white hover:bg-red hover:border-red hover:text-white'
const secondaryClasses = 'border-red hover:bg-red'

export const InPageCta: React.FC<
  InPageCtaProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ className, variant = 'primary', theme, children, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className={clsx(
        baseClasses,
        {
          [primaryClasses]: variant === 'primary',
          [secondaryClasses]: variant === 'secondary',
          'text-white': variant === 'secondary' && theme === 'dark',
          'text-black': variant === 'secondary' && theme === 'light',
        },
        className
      )}
    >
      <Typography variant="e2" as="span">
        {children}
      </Typography>
    </button>
  )
}

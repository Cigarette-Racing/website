import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { Theme } from './types'

export interface InPageCtaProps {
  /** Visual variant to use */
  variant?: 'primary' | 'secondary'
  /** Light or dark theme */
  theme?: Theme
}

const baseClasses =
  'h-10 px-4 sm:px-10 border rounded-full transition-colors duration-150 ease-in-out'
const primaryClasses =
  'bg-white text-black border-white hover:bg-black hover:border-red hover:text-red'
const secondaryClasses = 'border-red hover:bg-red'

export const InPageCta: React.FC<
  InPageCtaProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ variant = 'primary', theme, children, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className={clsx(baseClasses, {
        [primaryClasses]: variant === 'primary',
        [secondaryClasses]: variant === 'secondary',
        'text-white': variant === 'secondary' && theme === 'dark',
        'text-black': variant === 'secondary' && theme === 'light',
      })}
    >
      <Typography variant="e3" as="span">
        {children}
      </Typography>
    </button>
  )
}

import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { Theme } from './types'

export interface InPageCtaProps {
  /** Visual variant to use */
  variant: 'primary' | 'secondary'
  /** Light or dark theme */
  theme: Theme
}

const baseClasses = 'h-10 px-10 border rounded-full'
const primaryClasses = 'bg-white text-black border-white'
const secondaryClasses = 'border-red'

export const InPageCta: React.FC<
  InPageCtaProps & React.HTMLProps<HTMLButtonElement>
> = ({ variant, theme, children, ...rest }) => {
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
      <Typography variant="e2" as="span">
        {children}
      </Typography>
    </button>
  )
}

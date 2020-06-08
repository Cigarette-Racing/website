import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { ArrowIcon } from '../svgs/icons'
import { Theme } from './types'

export interface LinkCtaProps {
  /** Light or dark theme */
  theme?: Theme
  /** Visual variant to use */
  variant?: 'primary' | 'secondary'
}

const baseClasses = 'h-10 border-b flex items-center group'
const primaryClasses = 'border-current'
const secondaryClasses = 'border-transparent'
const typographyClasses =
  'transform transition-transform duration-300 ease-in-out group-hover:translate-x-1'

export const LinkCta: React.FC<
  LinkCtaProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ variant = 'primary', children, className, theme, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className={clsx(
        baseClasses,
        {
          [primaryClasses]: variant === 'primary',
          [secondaryClasses]: variant === 'secondary',
          'text-white': theme === 'dark',
          'text-black': theme === 'light',
        },
        className
      )}
    >
      <Typography variant="e3" as="span" className={typographyClasses}>
        {children}
      </Typography>
      <ArrowIcon className="ml-6 sm:ml-10" />
    </button>
  )
}

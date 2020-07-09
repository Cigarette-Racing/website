import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { ArrowIcon } from '../svgs/icons'
import { Theme } from '../types/shared'

export interface OptionsCtaProps {
  /** Light or dark theme */
  theme?: Theme
  /** Visual variant to use */
  variant?: 'primary' | 'secondary'
}

const baseClasses = 'border-b border-opacity-25 flex items-center group'
const primaryClasses = 'border-current border-opacity-50'
const secondaryClasses = 'border-transparent'
const typographyClasses =
  'transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 text-left'

export const OptionsCta: React.FC<
  OptionsCtaProps & React.HTMLAttributes<HTMLButtonElement>
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
          'text-white border-white': theme === 'dark',
          'text-black border-black': theme === 'light',
        },
        'justify-between',
        'h-24',
        className
      )}
    >
      <Typography variant="h4" as="span" className={typographyClasses}>
        {children}
      </Typography>
      <div className="border border-red rounded-full p-2">
        <ArrowIcon className="text-xl" />
      </div>
    </button>
  )
}

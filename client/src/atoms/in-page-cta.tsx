import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { Theme } from '../types/shared'

export interface InPageCtaProps {
  className?: string
  /** Make the button a link */
  link?: true
  /** Visual variant to use */
  variant?: 'primary' | 'secondary'
  /** Light or dark theme */
  theme?: Theme
}

const baseClasses =
  'inline-flex items-center h-10 px-4 sm:px-10 border rounded-full transition-colors duration-150 ease-in-out'
const primaryClasses =
  'bg-white text-black border-white hover:bg-red hover:border-red hover:text-white'
const secondaryClasses = 'border-red hover:bg-red'

export const InPageCta: React.FC<
  InPageCtaProps &
    (
      | React.HTMLAttributes<HTMLButtonElement>
      | React.AnchorHTMLAttributes<HTMLLinkElement>
    )
> = ({ className, variant = 'primary', theme, children, ...rest }) => {
  const classNames = clsx(
    baseClasses,
    {
      [primaryClasses]: variant === 'primary',
      [secondaryClasses]: variant === 'secondary',
      'bg-black text-white': variant === 'secondary' && theme === 'dark',
      'text-black': variant === 'secondary' && theme === 'light',
    },
    className
  )
  if (isLink(rest)) {
    return (
      <a {...rest} className={classNames}>
        <Typography variant="e2" as="span">
          {children}
        </Typography>
      </a>
    )
  }
  if (isButton(rest)) {
    return (
      <button {...rest} type="button" className={classNames}>
        <Typography variant="e2" as="span">
          {children}
        </Typography>
      </button>
    )
  }
  return null
}

function isLink(rest: any): rest is HTMLLinkElement {
  return !!rest.link
}

function isButton(rest: any): rest is HTMLButtonElement {
  return !rest.link
}

import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { ArrowIcon } from '../svgs/icons'
import { Theme } from '../types/shared'

export interface ReturnLinkProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /** Light or dark theme */
  theme?: Theme
}

export const ReturnLink: React.FC<ReturnLinkProps> = ({
  children,
  theme,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        'flex items-center',
        {
          'text-white': theme === 'dark',
          'text-black': theme === 'light',
        },
        className
      )}
    >
      <ArrowIcon className="mr-4 text-xl text-red transform rotate-180" />
      <Typography variant="e3">{children}</Typography>
    </button>
  )
}

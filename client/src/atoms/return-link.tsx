import React, { HTMLProps } from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { ArrowIcon } from '../svgs/icons'
import { Theme } from './types'

export interface ReturnLinkProps {
  /** Light or dark theme */
  theme: Theme
}

export const ReturnLink: React.FC<
  ReturnLinkProps & HTMLProps<HTMLAnchorElement>
> = ({ children, theme, ...rest }) => {
  return (
    <a
      {...rest}
      className={clsx('flex items-center', {
        'text-white': theme === 'dark',
        'text-black': theme === 'light',
      })}
    >
      <ArrowIcon className="mr-4 text-xl text-red transform rotate-180" />
      <Typography variant="e3">{children}</Typography>
    </a>
  )
}

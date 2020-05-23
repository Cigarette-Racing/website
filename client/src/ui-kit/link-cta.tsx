import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { ArrowIcon } from '../svgs/icons'

export interface LinkCtaProps {
  /** Visual variant to use */
  variant: 'primary' | 'secondary'
}

const baseClasses = 'h-10 border-b text-white flex items-center'
const primaryClasses = 'border-white'
const secondaryClasses = 'border-transparent'

export const LinkCta: React.FC<
  LinkCtaProps & React.HTMLProps<HTMLButtonElement>
> = ({ variant, children, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className={clsx(baseClasses, {
        [primaryClasses]: variant === 'primary',
        [secondaryClasses]: variant === 'secondary',
      })}
    >
      <Typography variant="e2" as="span">
        {children}
      </Typography>
      <ArrowIcon className="ml-10" />
    </button>
  )
}

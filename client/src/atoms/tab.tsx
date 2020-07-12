import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'

export interface TabProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  active?: boolean
  as?: keyof JSX.IntrinsicElements | React.ReactType
}

export function Tab({
  active,
  as: Comp = 'button',
  className,
  children,
  ...props
}: TabProps) {
  return (
    <Comp
      {...props}
      className={clsx(
        'block py-px border-b md:border-none border-transparent',
        className,
        {
          'text-red border-red': active,
        }
      )}
    >
      <Typography variant="e3" md="e2" as="span">
        {children}
      </Typography>
    </Comp>
  )
}

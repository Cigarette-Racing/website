import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'

export interface TabProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLInputElement
  > {
  active?: boolean
  as?: keyof JSX.IntrinsicElements | React.ReactType
}

export function Tab({
  active,
  as: Comp = 'div',
  className,
  children,
  ...props
}: TabProps) {
  return (
    <Comp
      {...props}
      className={clsx('block py-px border-b border-transparent', className, {
        'text-red border-red': active,
      })}
    >
      <Typography variant="e3" as="span">
        {children}
      </Typography>
    </Comp>
  )
}

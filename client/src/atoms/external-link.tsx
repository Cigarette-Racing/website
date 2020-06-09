import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'
import { ExternalLinkIcon } from '../svgs/icons'

export interface ExternalLinkProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement> {}

export const ExternalLink = ({
  children,
  className,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      {...props}
      className={clsx(
        'bg-white bg-opacity-25 rounded-full py-2 px-4 flex items-center backdrop-blur-3 text-white',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLinkIcon className="mr-2" />
      <Typography variant="p3" as="span">
        {children}
      </Typography>
    </a>
  )
}

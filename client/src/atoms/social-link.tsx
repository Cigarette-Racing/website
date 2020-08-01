import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'

export interface SocialLinkProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  icon: React.ElementType
  text: string
}

export const SocialLink = ({
  className,
  icon: Icon,
  text,
  ...props
}: SocialLinkProps) => {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'text-white flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6',
        className
      )}
    >
      <Icon className="w-6 h-6" />
      <Typography variant="e3">{text}</Typography>
    </a>
  )
}

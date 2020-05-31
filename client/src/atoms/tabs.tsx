import React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'
import { Typography } from './typography'

export interface TabProps extends GatsbyLinkProps<undefined> {}

export const Tab = ({ ref, children, ...props }: TabProps) => {
  return (
    <Link
      {...props}
      className="block py-px border-b border-transparent"
      activeClassName="border-red"
    >
      <Typography variant="e3" theme="dark" as="span">
        {children}
      </Typography>
    </Link>
  )
}

export const Tabs: React.FC = ({ children }) => (
  <div className="flex space-x-12">{children}</div>
)

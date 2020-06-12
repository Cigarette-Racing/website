import React from 'react'
import clsx from 'clsx'
import { AngleIcon } from '../svgs/icons'
import { Typography } from './typography'

export interface ContentHeaderProps {
  className?: string
  /** Additional red text to show above the primary text */
  subtitle?: string
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
  children,
  className,
  subtitle,
}) => {
  return (
    <div className={clsx('flex items-center', className)}>
      {/* 
        TODO: Figure out a better way to do this other than hard-coding the 
        font size via in-line styles
      */}
      <AngleIcon className="mr-1 text-red" style={{ fontSize: '40px' }} />
      <div>
        {!!subtitle && (
          <Typography variant="e2" className="text-red">
            {subtitle}
          </Typography>
        )}
        <Typography variant="e2" theme="dark">
          {children}
        </Typography>
      </div>
    </div>
  )
}

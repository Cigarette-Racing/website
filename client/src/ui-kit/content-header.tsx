import React from 'react'
import clsx from 'clsx'
import { AngleIcon } from '../svgs/icons'
import { Typography } from './typography'

export interface ContentHeaderProps {
  /** Additional red text to show above the primary text */
  subtitle: string
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
  children,
  subtitle,
}) => {
  return (
    <div className="flex items-center">
      {/* 
        TODO: Figure out a better way to do this other than hard-coding the 
        font size via in-line styles
      */}
      <AngleIcon className="text-red" style={{ fontSize: '40px' }} />
      <div>
        {!!subtitle && (
          <Typography variant="e3" className="text-red">
            {subtitle}
          </Typography>
        )}
        <Typography variant="e3" theme="dark">
          {children}
        </Typography>
      </div>
    </div>
  )
}

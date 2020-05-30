import React from 'react'
import { Typography } from './typography'
import { CloseIcon } from '../svgs/icons'

export interface PillProps {
  onRemove?: (event: React.MouseEvent) => void
}

export const Pill: React.FC<PillProps> = ({ children, onRemove }) => {
  return (
    <div className="bg-black rounded-full py-2 px-4 flex items-center">
      <Typography variant="p2" theme="dark" className="leading-none font-light">
        {children}
      </Typography>
      {!!onRemove && (
        <CloseIcon
          role="button"
          onClick={onRemove}
          className="ml-4 text-white"
        />
      )}
    </div>
  )
}

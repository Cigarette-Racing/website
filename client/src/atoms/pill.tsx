import React from 'react'
import { Typography } from './typography'
import { CloseIcon } from '../svgs/icons'

export interface PillProps {
  /**
   * Optional callback triggered when the close icon is clicked. If no callback
   * is provided, the close icon is hidden.
   */
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

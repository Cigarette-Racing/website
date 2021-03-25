import React from 'react'
import { ReturnLink } from '../../atoms/return-link'

import clsx from 'clsx'

export const MobileOurWorldMenu = ({
  onClose,
  onReturn,
}: {
  onClose: () => void
  onReturn: () => void
}) => {
  return (
    <div className="min-h-screen">
      <div className="h-16 flex items-center">
        <ReturnLink onClick={onReturn}>Back</ReturnLink>
      </div>
    </div>
  )
}

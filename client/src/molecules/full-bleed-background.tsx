import React, { Fragment } from 'react'
import clsx from 'clsx'

export interface FullBleedBackgroundProps {
  image: string
  variant?: 'grayscale'
}

const FullBleedBackground: React.FC<FullBleedBackgroundProps> = ({
  image,
  variant,
}) => {
  return (
    <Fragment>
      <img
        src={image}
        className={clsx(
          'absolute top-0 left-0 h-full w-full object-cover z-auto',
          { 'filter-grayscale': variant === 'grayscale' }
        )}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </Fragment>
  )
}

export default FullBleedBackground

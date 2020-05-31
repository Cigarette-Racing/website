import React, { useMemo } from 'react'
import clsx from 'clsx'

export interface ProgressDotsProps {
  /** Progress indicator to mark as active (one-based) */
  current: number
  /** Total number of progress indicators to show */
  total: number
  /** Direction in which to display the dots */
  variant: 'horizontal' | 'vertical'
}

export const ProgressDots = ({
  current,
  total,
  variant,
}: ProgressDotsProps) => {
  const array = useMemo(() => Array.from({ length: total }), [total])
  return (
    <div
      className={clsx('flex', {
        'flex-row': variant === 'horizontal',
        'flex-col': variant === 'vertical',
      })}
    >
      {array.map((_, index) => {
        const isCurrent = index + 1 === current
        return (
          <div
            className={clsx(
              'w-6 h-6 border rounded-full border-transparent flex justify-center items-center',
              { 'border-red': isCurrent }
            )}
          >
            <div className="w-1 h-1 bg-white rounded-full">
              <span className="sr-only">
                {index + 1} of {total}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

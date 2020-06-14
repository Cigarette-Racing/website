import React, { useMemo } from 'react'
import clsx from 'clsx'

export interface ProgressDotsProps {
  /** Progress indicator to mark as active (one-based) */
  current: number
  /** Total number of progress indicators to show */
  total: number
  /** Direction in which to display the dots */
  variant: 'horizontal' | 'vertical'
  /** Callback fired when a dot is clicked. Value is the one-based index of the dot. */
  onClick?(index: number): void
}

export const ProgressDots = ({
  current,
  total,
  variant,
  onClick,
}: ProgressDotsProps) => {
  const array = useMemo(() => Array.from({ length: total }), [total])
  return (
    <div
      className={clsx('flex', {
        'flex-row space-x-2': variant === 'horizontal',
        'flex-col space-y-2': variant === 'vertical',
      })}
    >
      {array.map((_, index) => {
        const oneBasedIndex = index + 1
        const isCurrent = oneBasedIndex === current
        return (
          <button
            key={index}
            className={clsx(
              'w-6 h-6 border rounded-full border-transparent flex justify-center items-center cursor-default',
              {
                'border-red': isCurrent,
                'cursor-pointer pointer-events-auto': !!onClick,
              }
            )}
            onClick={!!onClick ? () => onClick(oneBasedIndex) : undefined}
            disabled={!onClick}
          >
            <div className="w-1 h-1 bg-white rounded-full">
              <span className="sr-only">
                {oneBasedIndex} of {total}
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Checked state of the input */
  checked?: boolean
  alignment?: 'start' | 'center' | 'end'
}

export const Radio = ({
  checked,
  alignment,
  children,
  ...inputProps
}: RadioProps) => {
  return (
    <label
      className={clsx('flex cursor-pointer', {
        'items-left': alignment === 'start',
        'items-center': alignment === 'center',
        'items-right': alignment === 'end',
      })}
    >
      <input
        aria-checked={checked}
        checked={checked}
        type="radio"
        {...inputProps}
        className="sr-only"
      />
      <span
        className={clsx(
          'w-4 h-4 border border-white rounded-full mr-4 flex flex-shrink-0 items-center justify-center',
          alignment === 'start' && 'mt-2'
        )}
      >
        <span
          className={clsx(
            'inline-block w-2 h-2 bg-red rounded-full transition-transform duration-100 ease-in transform scale-0',
            { 'scale-100': checked }
          )}
        ></span>
      </span>
      <Typography variant="p2" theme="dark">
        {children}
      </Typography>
    </label>
  )
}

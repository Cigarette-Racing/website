import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Checked state of the input */
  checked: boolean
}

export const Radio = ({ checked, children, ...inputProps }: RadioProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        aria-checked={checked}
        checked={checked}
        type="radio"
        {...inputProps}
        className="sr-only"
      />
      <span className="w-4 h-4 border border-white rounded-full mr-4 flex items-center justify-center">
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

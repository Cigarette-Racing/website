import React from 'react'
import clsx from 'clsx'
import { Typography } from './typography'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = ({ children, ...inputProps }: TextInputProps) => {
  return (
    <div className="text-field required-field flex items-center">
      <input
        className="w-full bg-transparent text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 hover:border-opacity-100 outline-none py-4"
        {...inputProps}
      />
    </div>
  )
}

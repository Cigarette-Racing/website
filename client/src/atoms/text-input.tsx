import React from 'react'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = ({ ...inputProps }: TextInputProps) => {
  return (
    <div className="text-field required-field flex items-center">
      <input
        className="w-full text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 outline-none py-4"
        {...inputProps}
      />
    </div>
  )
}

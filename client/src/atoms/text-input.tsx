import React from 'react'
import clsx from 'clsx'
import { Field } from 'react-final-form'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const TextInput = ({
  name,
  children,
  ...inputProps
}: TextInputProps) => {
  return (
    <Field
      className="text-field required-field flex items-center"
      name={name}
      component="input"
    >
      {(props) => {
        console.log(props.someArbitraryOtherProp) // would print 42
        return (
          <input
            className="w-full bg-transparent text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 hover:border-opacity-100 outline-none py-4"
            autoComplete="off"
            {...props.input}
            {...inputProps}
          />
        )
      }}
    </Field>
  )
}

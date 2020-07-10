import React from 'react'
import clsx from 'clsx'
import { Field } from 'react-final-form'

import { Typography } from '../atoms/typography'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
  required: boolean
  validation?: (value: any) => undefined | 'Required'
}

export const requiredText = (value: any) => (value ? undefined : 'Required')

export const requiredEmail = (value: any) =>
  value && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ? undefined
    : 'Required'

export const requiredPhone = (value: any) =>
  value &&
  value.match(
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  )
    ? undefined
    : 'Required'

export const TextInput = ({
  name,
  placeholder,
  required,
  validation,
}: TextInputProps) => {
  const inputBorderStylesInactive =
    'border-b border-white border-solid border-opacity-25'
  const inputBorderStylesActive =
    'border-b border-white border-solid border-opacity-100'

  return (
    <Field
      name={name}
      validate={validation}
      render={({ input, meta }) => {
        return (
          <div className="relative">
            <div className="flex justify-start items-center text-white pt-8">
              <div
                className={clsx('text-red mr-2 pb-5', { invisible: !required })}
              >
                *
              </div>
              <div
                className={clsx(
                  'relative w-full pb-6',
                  { [inputBorderStylesInactive]: !meta.active },
                  { [inputBorderStylesActive]: meta.active }
                )}
              >
                <Typography
                  className={clsx(
                    'absolute opacity-0 transform -translate-y-4 transition duration-150',
                    {
                      'opacity-100 -translate-y-6':
                        meta.invalid && meta.touched,
                    }
                  )}
                  variant="p3"
                >
                  Enter required info to continue
                </Typography>
                <input
                  {...input}
                  autoComplete="off"
                  name={name}
                  placeholder={placeholder}
                  className={clsx(
                    'font-body appearance-none bg-transparent outline-none w-full',
                    { 'placeholder-white': !meta.invalid || !meta.touched },
                    { 'placeholder-red': meta.invalid && meta.touched }
                  )}
                />
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

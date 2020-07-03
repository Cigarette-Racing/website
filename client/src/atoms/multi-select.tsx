import React from 'react'
import clsx from 'clsx'
import Select, { components } from 'react-select'
import { Typography } from './typography'

import { Pill } from '../atoms/pill'

export interface SelectInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string
  options: any
  name: string
}

const MultiSelectComp = (props: any) => {
  console.log(props)

  return <Pill {...props}>{props.data.label}</Pill>
}

export const MultiSelect = ({ className, name, options }: SelectInputProps) => {
  return (
    <Select
      className={className}
      isMulti
      name={name}
      components={{ MultiValue: MultiSelectComp }}
      options={options}
      placeholder={
        <Typography variant="p2">Select which model interests you</Typography>
      }
      styles={{
        placeholder: (base) => ({
          ...base,
          color: '#fff',
        }),
        control: (base) => ({
          ...base,
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid #fff',
          borderRadius: 0,
        }),
        clearIndicator: () => ({
          display: 'none',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        valueContainer: (base) => ({
          ...base,
          padding: '10px 0',
        }),
        menu: (base) => ({
          ...base,
          background: '#242424',
        }),
        option: (base, state) => ({
          ...base,
          background: 'transparent',
          color: '#fff',
          '&:hover': {
            color: '#000',
            background: 'red',
          },
        }),
      }}
    />
  )
}

const CustomMultiValue = (props: any) => {
  console.log(props)

  return (
    <Pill
      onRemove={(e) => {
        e.stopPropagation()
        console.log('remove this')
        props.clearValue()
      }}
    >
      {props.data.label}
    </Pill>
  )
}

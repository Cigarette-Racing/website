import React from 'react'
import Select from 'react-select'
import { Typography } from '../atoms/typography'

export interface MultiSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}
const customStyles = {
  control: (provided) => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    background: 'transparent',
    border: 'none',
    borderBottom: 'solid 1px #fff',
    borderRadius: 0,
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  placeholder: (provided) => ({
    ...provided,
    color: '#fff',
  }),
}

export const MultiSelect = (props: any) => {
  return (
    <Select
      placeholder={
        <Typography variant="p2">Select which model interests you</Typography>
      }
      styles={customStyles}
      multiSelect
      {...props}
    />
  )
}

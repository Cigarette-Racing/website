import React from 'react'
import { MultiSelect } from '../../src/atoms/multi-select'

export default {
  title: 'Atoms/MultiSelect',
  component: MultiSelect,
}

export const Sandbox = () => {
  return (
    <div className="flex flex-col w-screen max-w-screen-sm">
      <MultiSelect
        name="boat-models"
        options={[
          { value: 'tirranna', label: 'Tirranna' },
          { value: 'nighthawk', label: 'Nighthawk' },
          { value: 'model 3', label: 'Model 3' },
        ]}
      />
    </div>
  )
}

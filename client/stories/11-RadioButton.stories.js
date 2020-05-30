import React, { useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Radio } from '../src/ui-kit/radio'

export default {
  title: 'Atoms/Radio',
  component: Radio,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const [selected, setSelected] = useState()
  const handleClick = (event) => {
    setSelected(event.target.value)
  }
  return (
    <div className="space-y-3">
      <Radio onClick={handleClick} value="asdf" checked={selected === 'asdf'}>
        Nighthawk
      </Radio>
      <Radio onClick={handleClick} value="qwer" checked={selected === 'qwer'}>
        Nighthawk
      </Radio>
    </div>
  )
}

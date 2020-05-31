import React, { useState } from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'
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
  const numberOfItems = number('Number of Items', 2, { min: 2, max: 5 })

  return (
    <div className="space-y-3">
      {Array.from({ length: numberOfItems }, (_, k) => k.toString()).map(
        (index) => (
          <Radio
            key={index}
            onClick={handleClick}
            value={index}
            checked={selected === index}
          >
            Nighthawk
          </Radio>
        )
      )}
    </div>
  )
}

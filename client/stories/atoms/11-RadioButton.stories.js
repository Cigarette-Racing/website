import React, { useState } from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'
import { Radio } from '../../src/atoms/radio'

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
            alignment="start"
          >
            I would like to receive marketing communications on products,
            services and events offered by Cigarette Racing Team. I understand
            these communications may be personalised to me based on my
            interests, preferences and use of products and services, including
            invitations to provide customer experience feedback.
          </Radio>
        )
      )}
    </div>
  )
}

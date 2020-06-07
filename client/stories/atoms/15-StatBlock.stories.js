import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { StatBlock } from '../../src/atoms/stat-block'

export default {
  title: 'Atoms/Stat Block',
  component: StatBlock,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const label = text('label', 'Length')
  const percentage = number('percentage', 75, { min: 0, max: 100, step: 5 })
  const primaryText = text('text', '59’')
  return <StatBlock label={label} percentage={percentage} text={primaryText} />
}

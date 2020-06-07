import React from 'react'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { ProgressDots } from '../../src/atoms/progress-dots'

export default {
  title: 'Atoms/Progress Dots',
  component: ProgressDots,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const total = number('total', 5, { min: 1 })
  const current = number('current', 2, { min: 1, max: total })
  const variant = select('variant', ['horizontal', 'vertical'], 'horizontal')
  return <ProgressDots total={total} current={current} variant={variant} />
}

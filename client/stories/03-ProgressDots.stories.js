import React from 'react'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { ProgressDots } from '../src/ui-kit/progress-dots'

export default {
  title: 'Progress Dots',
  component: ProgressDots,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const total = number('total', 5, { min: 1 })
  const current = number('current', 2, { min: 1, max: total })
  const variant = select('variant', ['horizontal', 'vertical'], 'horizontal')
  return <ProgressDots total={total} current={current} variant={variant} />
}

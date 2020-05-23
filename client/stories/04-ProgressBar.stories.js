import React from 'react'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { ProgressBar } from '../src/ui-kit/progress-bar'

const Container = ({ children }) => <div className="w-48">{children}</div>

export default {
  title: 'Progress Bar',
  component: ProgressBar,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const percentage = number('percentage', 30, { min: 0, max: 100, step: 10 })
  return (
    <Container>
      <ProgressBar percentage={percentage} />
    </Container>
  )
}

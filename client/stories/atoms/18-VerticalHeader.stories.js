import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { VerticalHeader } from '../../src/atoms/vertical-header'

export default {
  title: 'Atoms/VerticalHeader',
  component: VerticalHeader,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const theme = select('theme', ['dark', 'light'], 'dark')
  return (
    <div className="my-64">
      <VerticalHeader theme={theme}>Example</VerticalHeader>
    </div>
  )
}

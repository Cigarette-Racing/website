import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { VerticalLabel } from '../../src/atoms/vertical-label'

export default {
  title: 'Atoms/VerticalLabel',
  component: VerticalLabel,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const children = text('text', '4x Mercury 350 Verados')
  return <VerticalLabel>{children}</VerticalLabel>
}

export const Multiple = () => (
  <div className="flex items-start space-x-2">
    <VerticalLabel>Lorem ipsum dolor sit amet.</VerticalLabel>
    <VerticalLabel>Laudantium nemo enim, nulla culpa.</VerticalLabel>
    <VerticalLabel>Ratione cupiditate ex!</VerticalLabel>
  </div>
)

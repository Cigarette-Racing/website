import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Pill } from '../../src/atoms/pill'

export default {
  title: 'Atoms/Pill',
  component: Pill,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const children = text('text', 'Auroris')
  const isRemovable = boolean('Pill is Removable?', true)
  return <Pill onRemove={isRemovable ? () => {} : undefined}>{children}</Pill>
}

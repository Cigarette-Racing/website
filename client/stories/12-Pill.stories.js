import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Pill } from '../src/ui-kit/pill'

export default {
  title: 'Atoms/Pill',
  component: Pill,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  return <Pill onRemove={() => {}}>Auroris</Pill>
}

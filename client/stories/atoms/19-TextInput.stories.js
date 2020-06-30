import React, { useState } from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'
import { TextInput } from '../../src/atoms/text-input'

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  return <TextInput />
}

import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { ReturnLink } from '../../src/atoms/return-link'

export default {
  title: 'Atoms/Return Link',
  component: ReturnLink,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  return <ReturnLink theme="dark">Go Back</ReturnLink>
}

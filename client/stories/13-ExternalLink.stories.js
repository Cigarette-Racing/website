import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { ExternalLink } from '../src/ui-kit/external-link'

export default {
  title: 'Atoms/ExternalLink',
  component: ExternalLink,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  return (
    <ExternalLink href="https://example.com">speedthewater.com</ExternalLink>
  )
}

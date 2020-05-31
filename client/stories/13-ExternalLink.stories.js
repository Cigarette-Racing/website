import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { ExternalLink } from '../src/ui-kit/external-link'

export default {
  title: 'Atoms/ExternalLink',
  component: ExternalLink,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const href = text('href', 'https://example.com')
  const children = text('text', 'speedthewater.com')
  return <ExternalLink href={href}>{children}</ExternalLink>
}

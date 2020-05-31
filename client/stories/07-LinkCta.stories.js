import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { LinkCta } from '../src/atoms/link-cta'

export default {
  title: 'Atoms/Link CTA',
  component: LinkCta,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const variant = select('variant', ['primary', 'secondary'], 'primary')
  const children = text('text', 'Request Info')
  return <LinkCta variant={variant}>{children}</LinkCta>
}

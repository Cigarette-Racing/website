import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { LinkCta } from '../src/ui-kit/link-cta'

export default {
  title: 'Atoms/Link CTA',
  component: LinkCta,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const variant = select('variant', ['primary', 'secondary'], 'primary')
  return <LinkCta variant={variant}>Request Info</LinkCta>
}

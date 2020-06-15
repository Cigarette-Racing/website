import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { LinkCta } from '../../src/atoms/link-cta'

export default {
  title: 'Atoms/Link CTA',
  component: LinkCta,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const variant = select('variant', ['primary', 'secondary'], 'primary')
  const theme = select('theme', ['dark', 'light'], 'dark')
  const children = text('text', 'Request Info')
  return (
    <LinkCta variant={variant} theme={theme}>
      {children}
    </LinkCta>
  )
}

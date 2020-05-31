import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { InPageCta } from '../src/ui-kit/in-page-cta'

export default {
  title: 'Atoms/In Page CTA',
  component: InPageCta,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const variant = select('variant', ['primary', 'secondary'], 'primary')
  const theme = select('theme', ['light', 'dark'], 'dark')
  const children = text('text', 'Request Info')
  return (
    <InPageCta variant={variant} theme={theme}>
      {children}
    </InPageCta>
  )
}

export const Primary = () => {
  return <InPageCta variant="primary">Request Info</InPageCta>
}

export const SecondaryLight = () => {
  return (
    <InPageCta variant="secondary" theme="light">
      Request Info
    </InPageCta>
  )
}

export const SecondaryDark = () => {
  return (
    <InPageCta variant="secondary" theme="dark">
      Request Info
    </InPageCta>
  )
}

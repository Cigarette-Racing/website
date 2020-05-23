import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { InPageCta } from '../src/ui-kit/in-page-cta'

export default {
  title: 'In Page CTA',
  component: InPageCta,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const variant = select('variant', ['primary', 'secondary'], 'primary')
  return <InPageCta variant={variant}>Request Info</InPageCta>
}

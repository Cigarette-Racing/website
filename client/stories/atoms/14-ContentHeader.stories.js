import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { ContentHeader } from '../../src/atoms/content-header'

export default {
  title: 'Atoms/ContentHeader',
  component: ContentHeader,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const children = text('text', 'Tirranna 59 AMG Edition')
  const subtitle = text('subtitle', '')
  return <ContentHeader subtitle={subtitle}>{children}</ContentHeader>
}

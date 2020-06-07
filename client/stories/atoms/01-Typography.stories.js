import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Typography } from '../../src/atoms/typography'

const Divider = () => {
  return (
    <div
      style={{
        marginTop: '60px',
        marginBottom: '60px',
        borderBottom: '1px solid #4a4a4a',
      }}
    />
  )
}

export default {
  title: 'Atoms/Typography',
  component: Typography,
  decorators: [withKnobs],
}

export const All = () => {
  return (
    <div style={{ padding: '60px 0', minWidth: '600px' }}>
      <Typography variant="h1" theme="dark">
        headline 1
      </Typography>
      <Divider />
      <Typography variant="h2" theme="dark">
        headline 2
      </Typography>
      <Divider />
      <Typography variant="h3" theme="dark">
        headline 3
      </Typography>
      <Divider />
      <Typography variant="h4" theme="dark">
        headline 4
      </Typography>
      <Divider />
      <Typography variant="h5" theme="dark">
        headline 5
      </Typography>
      <Divider />
      <Typography variant="p1" theme="dark">
        paragraph 1
      </Typography>
      <Divider />
      <Typography variant="p2" theme="dark">
        paragraph 2
      </Typography>
      <Divider />
      <Typography variant="p3" theme="dark">
        paragraph 3
      </Typography>
      <Divider />
      <Typography variant="e1" theme="dark">
        eyebrow 1
      </Typography>
      <Divider />
      <Typography variant="e2" theme="dark">
        eyebrow 2
      </Typography>
      <Divider />
      <Typography variant="e3" theme="dark">
        eyebrow 3
      </Typography>
    </div>
  )
}

export const Headline1 = () => {
  const children = text('text', 'headline 1')
  return (
    <Typography variant="h1" theme="dark">
      {children}
    </Typography>
  )
}
export const Headline2 = () => {
  const children = text('text', 'headline 2')
  return (
    <Typography variant="h2" theme="dark">
      {children}
    </Typography>
  )
}
export const Headline3 = () => {
  const children = text('text', 'headline 3')
  return (
    <Typography variant="h3" theme="dark">
      {children}
    </Typography>
  )
}
export const Headline4 = () => {
  const children = text('text', 'headline 4')
  return (
    <Typography variant="h4" theme="dark">
      {children}
    </Typography>
  )
}
export const Headline5 = () => {
  const children = text('text', 'headline 5')
  return (
    <Typography variant="h5" theme="dark">
      {children}
    </Typography>
  )
}
export const Paragraph1 = () => {
  const children = text('text', 'paragraph 1')
  return (
    <Typography variant="p1" theme="dark">
      {children}
    </Typography>
  )
}
export const Paragraph2 = () => {
  const children = text('text', 'paragraph 2')
  return (
    <Typography variant="p2" theme="dark">
      {children}
    </Typography>
  )
}
export const Paragraph3 = () => {
  const children = text('text', 'paragraph 3')
  return (
    <Typography variant="p3" theme="dark">
      {children}
    </Typography>
  )
}
export const Eyebrow1 = () => {
  const children = text('text', 'eyebrow 1')
  return (
    <Typography variant="e1" theme="dark">
      {children}
    </Typography>
  )
}
export const Eyebrow2 = () => {
  const children = text('text', 'eyebrow 2')
  return (
    <Typography variant="e2" theme="dark">
      {children}
    </Typography>
  )
}
export const Eyebrow3 = () => {
  const children = text('text', 'eyebrow 3')
  return (
    <Typography variant="e3" theme="dark">
      {children}
    </Typography>
  )
}

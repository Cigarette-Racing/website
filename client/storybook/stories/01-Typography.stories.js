import React from 'react'
import { Typography } from '../../src/ui-kit/typography'

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
  title: 'Typography',
  component: Typography,
}

export const All = () => {
  return (
    <div style={{ padding: '60px 0', minWidth: '600px' }}>
      <Typography variant="h1">headline 1</Typography>
      <Divider />
      <Typography variant="h2">headline 2</Typography>
      <Divider />
      <Typography variant="h3">headline 3</Typography>
      <Divider />
      <Typography variant="h4">headline 4</Typography>
      <Divider />
      <Typography variant="h5">headline 5</Typography>
      <Divider />
      <Typography variant="p1">paragraph 1</Typography>
      <Divider />
      <Typography variant="p2">paragraph 2</Typography>
      <Divider />
      <Typography variant="p3">paragraph 3</Typography>
      <Divider />
      <Typography variant="e1">eyebrow 1</Typography>
      <Divider />
      <Typography variant="e2">eyebrow 2</Typography>
      <Divider />
      <Typography variant="e3">eyebrow 3</Typography>
    </div>
  )
}

export const Headline1 = () => <Typography variant="h1">headline 1</Typography>
export const Headline2 = () => <Typography variant="h2">headline 2</Typography>
export const Headline3 = () => <Typography variant="h3">headline 3</Typography>
export const Headline4 = () => <Typography variant="h4">headline 4</Typography>
export const Headline5 = () => <Typography variant="h5">headline 5</Typography>
export const Paragraph1 = () => (
  <Typography variant="p1">paragraph 1</Typography>
)
export const Paragraph2 = () => (
  <Typography variant="p2">paragraph 2</Typography>
)
export const Paragraph3 = () => (
  <Typography variant="p3">paragraph 3</Typography>
)
export const Eyebrow1 = () => <Typography variant="e1">eyebrow 1</Typography>
export const Eyebrow2 = () => <Typography variant="e2">eyebrow 2</Typography>
export const Eyebrow3 = () => <Typography variant="e3">eyebrow 3</Typography>

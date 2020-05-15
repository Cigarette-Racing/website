import React, { Fragment } from 'react'

const getStyles = (variant) => {
  if (variant === 'h1') {
    return ['72px', '0px', '88px']
  }
  if (variant === 'h2') {
    return ['56px', '0px', '88px']
  }
  if (variant === 'h3') {
    return ['40px', '0px', '48px']
  }
  if (variant === 'h4') {
    return ['32px', '0px', '40px']
  }
  if (variant === 'h5') {
    return ['24px', '0px', '32px']
  }
  if (variant === 'p1') {
    return ['18px', '1px', '24px']
  }
  if (variant === 'p2') {
    return ['16px', '1px', '24px']
  }
  if (variant === 'p3') {
    return ['14px', '1px', '18px']
  }
  if (variant === 'e1') {
    return ['16px', '2px', '18px']
  }
  if (variant === 'e2') {
    return ['14px', '2px', '18px']
  }
  if (variant === 'e3') {
    return ['12px', '2px', '18px']
  }
  throw new Error(`Invalid variant provided: ${variant}`)
}

const Typography = (props) => {
  const [fontSize, letterSpacing, lineHeight] = getStyles(props.variant)
  return (
    <div style={{ fontSize, letterSpacing, lineHeight, color: 'white' }}>
      {props.children}
    </div>
  )
}

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

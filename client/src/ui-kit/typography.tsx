import React from 'react'

const getStyles = (variant: TypographyVariant) => {
  if (variant === 'h1') {
    return ['text-6xl', 'tracking-normal', 'leading-10']
  }
  if (variant === 'h2') {
    return ['text-5xl', 'tracking-normal', 'leading-10']
  }
  if (variant === 'h3') {
    return ['text-4xl', 'tracking-normal', 'leading-9']
  }
  if (variant === 'h4') {
    return ['text-3xl', 'tracking-normal', 'leading-8']
  }
  if (variant === 'h5') {
    return ['text-2xl', 'tracking-normal', 'leading-7']
  }
  if (variant === 'p1') {
    return ['text-lg', 'tracking-wide', 'leading-6']
  }
  if (variant === 'p2') {
    return ['text-base', 'tracking-wide', 'leading-6']
  }
  if (variant === 'p3') {
    return ['text-sm', 'tracking-wide', 'leading-4']
  }
  if (variant === 'e1') {
    return ['text-base', 'tracking-wider', 'leading-4']
  }
  if (variant === 'e2') {
    return ['text-sm', 'tracking-wider', 'leading-4']
  }
  if (variant === 'e3') {
    return ['text-xs', 'tracking-wider', 'leading-4']
  }
  return []
  // throw new Error(`Invalid variant provided: ${variant}`)
}

type TypographyVariant =
  | 'h1' // Heading 1
  | 'h2' // Heading 2
  | 'h3' // Heading 3
  | 'h4' // Heading 4
  | 'h5' // Heading 5
  | 'p1' // Paragraph 1
  | 'p2' // Paragraph 2
  | 'p3' // Paragraph 3
  | 'e1' // Eyebrow 1
  | 'e2' // Eyebrow 2
  | 'e3' // Eyebrow 3

export interface TypographyProps {
  variant: TypographyVariant // Eyebrow 3
}

export const Typography: React.FC<TypographyProps> = (props) => {
  const classes = getStyles(props.variant)
  return (
    <div className={['font-serif', 'text-white', classes].flat().join(' ')}>
      {props.children}
    </div>
  )
}

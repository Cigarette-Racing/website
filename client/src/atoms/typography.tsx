import React from 'react'
import clsx from 'clsx'
import { Theme } from './types'

const getStyles = (variant: TypographyVariant) => {
  if (variant === 'h1') {
    return ['text-6xl', 'tracking-normal', 'leading-10', 'font-heading']
  }
  if (variant === 'h2') {
    return ['text-5xl', 'tracking-normal', 'leading-10', 'font-heading']
  }
  if (variant === 'h3') {
    return ['text-4xl', 'tracking-normal', 'leading-9', 'font-heading']
  }
  if (variant === 'h4') {
    return ['text-3xl', 'tracking-normal', 'leading-8', 'font-heading']
  }
  if (variant === 'h5') {
    return ['text-2xl', 'tracking-normal', 'leading-7', 'font-heading']
  }
  if (variant === 'p1') {
    return ['text-lg', 'tracking-wide', 'leading-6', 'font-body']
  }
  if (variant === 'p2') {
    return ['text-base', 'tracking-wide', 'leading-6', 'font-body']
  }
  if (variant === 'p3') {
    return ['text-sm', 'tracking-wide', 'leading-4', 'font-body']
  }
  if (variant === 'e1') {
    return [
      'text-base',
      'tracking-wider',
      'leading-4',
      'font-body',
      'uppercase',
    ]
  }
  if (variant === 'e2') {
    return ['text-sm', 'tracking-wider', 'leading-4', 'font-body', 'uppercase']
  }
  if (variant === 'e3') {
    return ['text-xs', 'tracking-wider', 'leading-4', 'font-body', 'uppercase']
  }
  return []
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
  /** Typographic variant to use */
  variant: TypographyVariant
  /** Light or dark theme */
  theme?: Theme
  /** HTML element to use */
  as?: keyof JSX.IntrinsicElements
  /** Additional classes to apply */
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({
  as: Component = 'div',
  variant,
  theme,
  className,
  children,
}) => {
  const variantClasses = getStyles(variant)
  return (
    <Component
      className={clsx(
        variantClasses,
        {
          'text-white': theme === 'dark',
          'text-black': theme === 'light',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}

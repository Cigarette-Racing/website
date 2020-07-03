import React from 'react'
import clsx from 'clsx'
import { Theme } from '../types/shared'

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
  /** Variant to apply at the `sm` breakpoint */
  sm?: TypographyVariant
  /** Variant to apply at the `md` breakpoint */
  md?: TypographyVariant
  /** Variant to apply at the `lg` breakpoint */
  lg?: TypographyVariant
  /** Variant to apply at the `xl` breakpoint */
  xl?: TypographyVariant
}

export const Typography: React.FC<TypographyProps> = ({
  as: Component = 'div',
  variant,
  sm,
  md,
  lg,
  xl,
  theme,
  className,
  children,
}) => {
  return (
    <Component
      className={clsx(
        `type-${variant}`,
        {
          'text-white': theme === 'dark',
          'text-black': theme === 'light',
          [`sm:type-${sm}`]: !!sm,
          [`md:type-${md}`]: !!md,
          [`lg:type-${lg}`]: !!lg,
          [`xl:type-${xl}`]: !!xl,
        },
        className
      )}
    >
      {children}
    </Component>
  )
}

import React from 'react'
import clsx from 'clsx'

type Ratios = 'none' | '1:1' | '3:2' | '2:3' | '4:3' | '3:4' | '16:9' | '21:9'

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ratio to apply */
  ratio: Ratios
  /** Additional classes to apply */
  className?: string
  /** Ratio to apply at the `sm` breakpoint */
  sm?: Ratios
  /** Ratio to apply at the `md` breakpoint */
  md?: Ratios
  /** Ratio to apply at the `lg` breakpoint */
  lg?: Ratios
  /** Ratio to apply at the `xl` breakpoint */
  xl?: Ratios
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  children,
  className,
  ratio,
  sm,
  md,
  lg,
  xl,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        'h-0',
        `aspect-ratio-${ratio}`,
        {
          [`sm:aspect-ratio-${sm}`]: !!sm,
          [`md:aspect-ratio-${md}`]: !!md,
          [`lg:aspect-ratio-${lg}`]: !!lg,
          [`xl:aspect-ratio-${xl}`]: !!xl,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

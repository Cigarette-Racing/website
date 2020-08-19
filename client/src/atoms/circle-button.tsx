import React from 'react'
import clsx from 'clsx'
import { Theme } from '../types/shared'

export interface CircleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to show in button */
  icon: React.ReactType
  /** CSS classes to apply to the icon */
  iconClassName?: string
  /** Button size to display */
  size?: 'sm' | 'md' | 'lg'
  /** Visual variant to use */
  variant?: 'primary' | 'secondary'
  /** Light or dark theme */
  theme?: Theme
}

const containerPrimaryClasses =
  'bg-black bg-opacity-25 border-transparent text-white backdrop-blur-1'
const containerSecondaryClasses =
  'bg-black bg-opacity-25 md:bg-transparent text-white border-red backdrop-blur-2'
const containerSecondaryDarkClasses =
  'text-white hover:text-black hover:bg-white hover:border-white'
const containerSecondaryLightClasses =
  'text-black hover:text-white hover:bg-black hover:border-black'
const containerSmallClasses = 'p-3'
const containerMediumClasses = 'p-4'
const containerLargeClasses = 'p-5'

export const CircleButton = ({
  icon: Icon,
  iconClassName,
  size = 'md',
  variant = 'primary',
  theme,
  className,
  ...props
}: CircleButtonProps) => {
  console.log(theme, variant)
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'border rounded-full transition duration-150 ease-in-out',
        {
          [containerPrimaryClasses]: variant === 'primary',
          [containerSecondaryClasses]: variant === 'secondary',
          [containerSmallClasses]: size === 'sm',
          [containerMediumClasses]: size === 'md',
          [containerLargeClasses]: size === 'lg',
          [containerSecondaryDarkClasses]:
            variant === 'secondary' && theme === 'dark',
          [containerSecondaryLightClasses]:
            variant === 'secondary' && theme === 'light',
          'opacity-25 cursor-not-allowed pointer-events-none': props.disabled,
        },
        className
      )}
    >
      <Icon className={clsx('text-base', iconClassName)} />
    </button>
  )
}

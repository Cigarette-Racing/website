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
  'bg-red text-white border-transparent hover:text-white hover:bg-black'
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
          'opacity-25 cursor-not-allowed pointer-events-none': props.disabled,
        },
        className
      )}
    >
      <Icon className={clsx('text-base', iconClassName)} />
    </button>
  )
}

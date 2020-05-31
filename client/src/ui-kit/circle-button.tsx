import React from 'react'
import clsx from 'clsx'
import { Theme } from './types'

export interface CircleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to show in button */
  icon: React.ReactType
  /** Button size to display */
  size?: 'sm' | 'md' | 'lg'
  /** Visual variant to use */
  variant: 'primary' | 'secondary'
  /** Light or dark theme */
  theme: Theme
}

const containerPrimaryClasses =
  'bg-black bg-opacity-50 border-transparent text-white blur-1'
const containerSecondaryClasses = 'border-red blur-2'
const containerSecondaryDarkClasses =
  'text-white hover:text-black hover:bg-white hover:border-white'
const containerSecondaryLightClasses =
  'text-black hover:text-white hover:bg-black hover:border-black'
const containerSmallClasses = 'p-3'
const containerMediumClasses = 'p-4'
const containerLargeClasses = 'p-5'

export const CircleButton = ({
  icon: Icon,
  size = 'md',
  variant,
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
          [containerSecondaryDarkClasses]:
            variant === 'secondary' && theme === 'dark',
          [containerSecondaryLightClasses]:
            variant === 'secondary' && theme === 'light',
        },
        className
      )}
    >
      <Icon className={clsx('text-base')} />
    </button>
  )
}

import React from 'react'
import clsx from 'clsx'
import { Theme } from './types'

export interface CircleButtonProps {
  icon: React.ReactType
  size?: 'sm' | 'md' | 'lg'
  variant: 'primary' | 'secondary'
  theme: Theme
}

const containerPrimaryClasses =
  'bg-white bg-opacity-25 border-transparent text-white'
const containerSecondaryClasses = 'border-red'
const containerSmallClasses = 'p-3'
const containerMediumClasses = 'p-4'
const containerLargeClasses = 'p-5'

export const CircleButton = ({
  icon: Icon,
  size = 'md',
  variant,
  theme,
}: CircleButtonProps) => {
  return (
    <div
      className={clsx('border rounded-full', {
        [containerPrimaryClasses]: variant === 'primary',
        [containerSecondaryClasses]: variant === 'secondary',
        [containerSmallClasses]: size === 'sm',
        [containerMediumClasses]: size === 'md',
        [containerLargeClasses]: size === 'lg',
        'text-white': variant === 'secondary' && theme === 'dark',
        'text-black': variant === 'secondary' && theme === 'light',
      })}
    >
      <Icon className={clsx('text-base')} />
    </div>
  )
}

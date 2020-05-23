import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { CircleButton } from '../src/ui-kit/circle-button'
import { PlayIcon } from '../src/svgs/icons'

export default {
  title: 'Circle Button',
  component: CircleButton,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  const variant = select('variant', ['primary', 'secondary'], 'primary')
  const theme = select('theme', ['light', 'dark'], 'dark')
  const size = select('size', ['sm', 'md', 'lg'], 'lg')
  return (
    <CircleButton icon={PlayIcon} size={size} theme={theme} variant={variant} />
  )
}

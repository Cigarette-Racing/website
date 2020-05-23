import React from 'react'
import {
  ArrowIcon,
  CaretIcon,
  ExpandIcon,
  ExternalLinkIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapIcon,
  MinusIcon,
  PhoneIcon,
  PlayIcon,
  PlusIcon,
  ThreeDotsIcon,
  YoutubeIcon,
} from '../src/svgs/icons'
import { select } from '@storybook/addon-knobs'
import clsx from 'clsx'

const Container = ({ className, children }) => (
  <div className={clsx('grid grid-cols-4 gap-12 text-2xl', className)}>
    {children}
  </div>
)

export default {
  title: 'Icons',
}

export const All = () => {
  const colorClass = select(
    'color',
    {
      White: 'text-white',
      Black: 'text-black',
      Red: 'text-red',
    },
    'text-white'
  )
  return (
    <Container className={colorClass}>
      <ArrowIcon />
      <CaretIcon />
      <ExpandIcon />
      <ExternalLinkIcon />
      <FacebookIcon />
      <InstagramIcon />
      <MailIcon />
      <MapIcon />
      <MinusIcon />
      <PhoneIcon />
      <PlayIcon />
      <PlusIcon />
      <ThreeDotsIcon />
      <YoutubeIcon />
    </Container>
  )
}

export const Arrow = () => <ArrowIcon className="text-white text-2xl" />
export const Caret = () => <CaretIcon className="text-white text-2xl" />
export const Expand = () => <ExpandIcon className="text-white text-2xl" />
export const ExternalLink = () => (
  <ExternalLinkIcon className="text-white text-2xl" />
)
export const Facebook = () => <FacebookIcon className="text-white text-2xl" />
export const Instagram = () => <InstagramIcon className="text-white text-2xl" />
export const Mail = () => <MailIcon className="text-white text-2xl" />
export const Map = () => <MapIcon className="text-white text-2xl" />
export const Minus = () => <MinusIcon className="text-white text-2xl" />
export const Phone = () => <PhoneIcon className="text-white text-2xl" />
export const Play = () => <PlayIcon className="text-white text-2xl" />
export const Plus = () => <PlusIcon className="text-white text-2xl" />
export const ThreeDots = () => <ThreeDotsIcon className="text-white text-2xl" />
export const Youtube = () => <YoutubeIcon className="text-white text-2xl" />

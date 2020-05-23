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

const Container = ({ children }) => (
  <div className="grid grid-cols-4 gap-12">{children}</div>
)

export default {
  title: 'Icons',
}

export const All = () => {
  return (
    <Container>
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

export const Arrow = () => <ArrowIcon />
export const Caret = () => <CaretIcon />
export const Expand = () => <ExpandIcon />
export const ExternalLink = () => <ExternalLinkIcon />
export const Facebook = () => <FacebookIcon />
export const Instagram = () => <InstagramIcon />
export const Mail = () => <MailIcon />
export const Map = () => <MapIcon />
export const Minus = () => <MinusIcon />
export const Phone = () => <PhoneIcon />
export const Play = () => <PlayIcon />
export const Plus = () => <PlusIcon />
export const ThreeDots = () => <ThreeDotsIcon />
export const Youtube = () => <YoutubeIcon />

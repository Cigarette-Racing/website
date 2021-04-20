import { Theme } from './shared'
import { Ratio } from '../atoms/aspect-ratio'

// ===================================
// BASE TYPES
// ===================================
export type TextBlock = {
  header: string
  copy: string
}

type Treatment = 'desaturate' | 'grayscale'

export type Media = {
  image: string
  label?: string
  alt?: string
  videoUrl?: string
  autoplayVideo?: boolean
  // Don't worry about for n
  embedUrl?: string
  ratio?: Ratio
  treatments?: Treatment[]
}

export type ImageWithText = {
  media: Media
  content: TextBlock
}

// ===================================
// SECTIONS
// ===================================
export type CommonSectionProps = {
  title: string
  shortTitle?: string
}

type FlexibleSection = {
  id?: number
  type: 'flexible'
  theme: Theme
  bleedDirection: 'left' | 'right'
  headerImage: Media
  blocks: Block[]
} & CommonSectionProps

function isFlexibleSection(section: any): section is FlexibleSection {
  return section.type === 'flexible'
}

export function getFlexibleSections(sections: readonly any[]) {
  return sections.filter(isFlexibleSection) as FlexibleSection[]
}

// ===================================
// BLOCKS
// ===================================
export type OneColumnTextBlock = {
  type: 'one-column-text'
  align?: 'left' | 'center' | 'right'
} & TextBlock

export function isOneColumnTextBlock(
  block: Block
): block is OneColumnTextBlock {
  return block.type === 'one-column-text'
}

export type FullBleedImageBlock = {
  type: 'full-bleed-image'
} & Media

export function isFullBleedImageBlock(
  block: Block
): block is FullBleedImageBlock {
  return block.type === 'full-bleed-image'
}

export type OneColumnImageTextBlock = {
  type: 'one-column-image-text'
} & ImageWithText

export function isOneColumnImageTextBlock(
  block: Block
): block is OneColumnImageTextBlock {
  return block.type === 'one-column-image-text'
}

export type TwoColumnImageTextBlock = {
  type: 'two-column-image-text'
  leftColumn: ImageWithText
  rightColumn: ImageWithText
}

export function isTwoColumnImageTextBlock(
  block: Block
): block is TwoColumnImageTextBlock {
  return block.type === 'two-column-image-text'
}

export type TwoColumnImagesBlock = {
  type: 'two-column-images'
  images: [Media, Media]
}

export function isTwoColumnImagesBlock(
  block: Block
): block is TwoColumnImagesBlock {
  return block.type === 'two-column-images'
}

export type ThreeColumnImagesBlock = {
  type: 'three-column-images'
  images: [Media, Media, Media]
}

export function isThreeColumnImagesBlock(
  block: Block
): block is ThreeColumnImagesBlock {
  return block.type === 'three-column-images'
}

export type SliderBlock = {
  type: 'slider'
  items: ImageWithText[]
}

export function isSliderBlock(block: Block): block is SliderBlock {
  return block.type === 'slider'
}

export type CarouselBlock = {
  type: 'carousel'
  items: ImageWithText[]
}

export function isCarouselBlock(block: Block): block is CarouselBlock {
  return block.type === 'carousel'
}

export type FullWidthCarouselBlock = {
  type: 'full-width-carousel'
  items: ImageWithText[]
}

export function isFullWidthCarouselBlock(
  block: Block
): block is FullWidthCarouselBlock {
  return block.type === 'full-width-carousel'
}

export type HorizontalImageTextBlock = {
  type: 'horizontal-image-text'
  media: Media
  content: TextBlock
  layout: 'imageOnLeft' | 'imageOnRight'
}

export function isHorizontalImageTextBlock(
  block: Block
): block is HorizontalImageTextBlock {
  return block.type === 'horizontal-image-text'
}

type Block =
  | OneColumnTextBlock
  | FullBleedImageBlock
  | OneColumnImageTextBlock
  | TwoColumnImageTextBlock
  | TwoColumnImagesBlock
  | ThreeColumnImagesBlock
  | SliderBlock
  | CarouselBlock
  | FullWidthCarouselBlock
  | HorizontalImageTextBlock

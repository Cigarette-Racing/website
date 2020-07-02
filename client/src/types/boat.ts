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
  image: GatsbyTypes.File
  label?: string
  alt?: string
  videoUrl?: string
  embedUrl?: string
  ratio?: Ratio
  treatments?: Treatment[]
}

type ImageWithText = {
  media: Media
  content: TextBlock
}

export type Stat = {
  label: string
  percentage: number
  text: string
}

// ===================================
// SECTIONS
// ===================================
export type CommonSectionProps = {
  title: string
  shortTitle?: string
}

type HeroSection = {
  type: 'hero'
  headline: string
  boatLogo: Media
  backgroundMedia: Media
  stats: [Stat, Stat, Stat]
}

function isHeroSection(section?: any): section is HeroSection {
  return !!section && section.type === 'hero'
}

export function findHeroSection(sections: readonly any[]) {
  return sections.find(isHeroSection) as HeroSection
}

type DiscoverSection = {
  type: 'discover'
} & ImageWithText &
  CommonSectionProps

function isDiscoverSection(section: any): section is DiscoverSection {
  return section.type === 'discover'
}

export function findDiscoverSection(sections: readonly any[]) {
  return sections.find(isDiscoverSection) as DiscoverSection
}

type GallerySection = {
  type: 'gallery'
  gallery: Media[]
} & CommonSectionProps

function isGallerySection(section: any): section is GallerySection {
  return section.type === 'gallery'
}

export function findGallerySection(sections: readonly any[]) {
  return sections.find(isGallerySection) as GallerySection
}

type SpecCategory = {
  name: string
  specs: TextBlock[]
} & CommonSectionProps

export type SpecsSection = {
  type: 'specs'
  categories: SpecCategory[]
} & CommonSectionProps

function isSpecsSection(section: any): section is SpecsSection {
  return section.type === 'specs'
}

export function findSpecsSection(sections: readonly any[]) {
  return sections.find(isSpecsSection) as SpecsSection
}

export type CustomizationsSection = {
  type: 'customizations'
  options: ImageWithText[]
} & CommonSectionProps

function isCustomizationsSection(
  section: any
): section is CustomizationsSection {
  return section.type === 'customizations'
}

export function findCustomizationsSection(sections: readonly any[]) {
  return sections.find(isCustomizationsSection) as CustomizationsSection
}

type FlexibleSection = {
  type: 'flexible'
  theme: Theme
  bleedDirection: 'left' | 'right'
  headerImage: Media
  blocks: Block[]
  moreDetails?: Block[]
} & CommonSectionProps

function isFlexibleSection(section: any): section is FlexibleSection {
  return section.type === 'flexible'
}

export function getFlexibleSections(sections: readonly any[]) {
  return sections.filter(isFlexibleSection) as FlexibleSection[]
}

type Section =
  | HeroSection
  | DiscoverSection
  | GallerySection
  | SpecsSection
  | CustomizationsSection
  | FlexibleSection

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

type Block =
  | OneColumnTextBlock
  | TwoColumnImageTextBlock
  | TwoColumnImagesBlock
  | ThreeColumnImagesBlock
  | SliderBlock
  | CarouselBlock
  | FullWidthCarouselBlock

// ===================================
// PRIMARY TYPES
// ===================================
export type BoatData = {
  boatName: string
  boatLongName: string
  sections: Section[]
}

// Utilities
// function finder<T>(findFn: (item: any) => boolean) {
//   return function (sections: readonly any[]): T {
//     return sections.find(findFn) as T
//   }
// }

// function filterer<T>(filterFn: (item: any) => boolean) {
//   return function (sections: readonly any[]): T[] {
//     return sections.filter(filterFn) as T[]
//   }
// }

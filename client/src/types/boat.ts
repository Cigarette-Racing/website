import {
  CommonSectionProps,
  ImageWithText,
  Media,
  HorizontalImageTextBlock,
} from './common'

// ===================================
// BASE TYPES
// ===================================
export type Stat = {
  label: string
  percentage: number
  text: string
}

// ===================================
// SECTIONS
// ===================================
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
  return sections.find(isHeroSection) as HeroSection | undefined
}

type DiscoverSection = {
  type: 'discover'
} & ImageWithText &
  CommonSectionProps

function isDiscoverSection(section: any): section is DiscoverSection {
  return section.type === 'discover'
}

export function findDiscoverSection(sections: readonly any[]) {
  return sections.find(isDiscoverSection) as DiscoverSection | undefined
}

export type GalleryMedia = Media & { thumbnail: string }

export type GallerySection = {
  source?: string
  type: 'gallery'
  gallery: GalleryMedia[]
} & CommonSectionProps

function isGallerySection(section: any): section is GallerySection {
  return section.type === 'gallery'
}

export function findGallerySection(sections: readonly any[]) {
  return sections.find(isGallerySection) as GallerySection | undefined
}

export type Spec = {
  name: string
  descriptions: string[]
}

export type SpecCategory = {
  name: string
  specs: Spec[]
} & CommonSectionProps

export type SpecsSection = {
  type: 'specs'
  categories: SpecCategory[]
} & CommonSectionProps

function isSpecsSection(section: any): section is SpecsSection {
  return section.type === 'specs'
}

export function findSpecsSection(sections: readonly any[]) {
  return sections.find(isSpecsSection) as SpecsSection | undefined
}

export type CustomizationsSection = {
  type: 'customizations'
  backgroundImage: string
  subtitle: string
  options: ImageWithText[]
} & CommonSectionProps

function isCustomizationsSection(
  section: any
): section is CustomizationsSection {
  return section.type === 'customizations'
}

export function findCustomizationsSection(sections: readonly any[]) {
  return sections.find(isCustomizationsSection) as
    | CustomizationsSection
    | undefined
}

export type OrderSection = {
  type: 'order'
  media: Media
} & CommonSectionProps

function isOrderSection(section: any): section is OrderSection {
  return section.type === 'order'
}

export function findOrderSection(sections: readonly any[]) {
  return sections.find(isOrderSection) as OrderSection | undefined
}

type Section =
  | HeroSection
  | DiscoverSection
  | GallerySection
  | SpecsSection
  | CustomizationsSection
  | OrderSection

export type PowertrainBlock = {
  type: 'powertrain'
} & ImageWithText

export function isPowertrainBlock(block: Block): block is PowertrainBlock {
  return block.type === 'powertrain'
}

export type MoreDetailsBlock = {
  type: 'more-details'
  items: HorizontalImageTextBlock[]
}

export function isMoreDetailsBlock(block: Block): block is MoreDetailsBlock {
  return block.type === 'more-details'
}

type Block = PowertrainBlock | MoreDetailsBlock

// ===================================
// PRIMARY TYPES
// ===================================
export type BoatData = {
  boatName: string
  boatLongName: string
  sections: Section[]
}

import { Theme } from './shared'
import { Ratio } from '../atoms/aspect-ratio'

export type CommonSectionProps = {
  title: string
  shortTitle?: string
}

export type TextBlock = {
  header: string
  copy: string
}

export type Media = {
  image: GatsbyTypes.File
  label?: string
  alt?: string
  videoUrl?: string
  embedUrl?: string
  ratio?: Ratio
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
} & CommonSectionProps

function isFlexibleSection(section: any): section is FlexibleSection {
  return section.type === 'flexible'
}

export function getFlexibleSections(sections: readonly any[]) {
  return sections.filter(isFlexibleSection) as FlexibleSection[]
}

type OneColumnImageTextBlock = {
  type: 'one-column-image-text'
} & ImageWithText

type TwoColumnImageTextBlock = {
  type: 'two-column-image-text'
  leftColumn: ImageWithText
  rightColumn: ImageWithText
}

type TwoColumnImagesBlock = {
  type: 'two-column-images'
  media: [Media, Media]
}

type ThreeColumnImagesBlock = {
  type: 'three-column-images'
  media: [Media, Media, Media]
}

type SliderBlock = {
  type: 'slider'
  items: ImageWithText[]
}

type CarouselBlock = {
  type: 'carousel'
  items: ImageWithText[]
}

type Block =
  | TextBlock
  | OneColumnImageTextBlock
  | TwoColumnImageTextBlock
  | TwoColumnImagesBlock
  | ThreeColumnImagesBlock
  | SliderBlock
  | CarouselBlock

type Section =
  | HeroSection
  | DiscoverSection
  | GallerySection
  | SpecsSection
  | CustomizationsSection
  | FlexibleSection

export type BoatData = {
  boatName: string
  boatLongName: string
  sections: Section[]
}

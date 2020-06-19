import React from 'react'
import { Typography } from './atoms/typography'
import { InPageCta } from './atoms/in-page-cta'
import { StatBlock } from './atoms/stat-block'
import { Theme } from './atoms/types'
import clsx from 'clsx'
import { AspectRatio, AspectRatioProps, Ratio } from './atoms/aspect-ratio'
import { CircleButton } from './atoms/circle-button'
import { ExpandIcon, PlayIcon, ArrowIcon } from './svgs/icons'
import { InPageAnchor } from './molecules/in-page-nav'
import { VerticalHeader } from './atoms/vertical-header'
import { VerticalLabel } from './atoms/vertical-label'
import { ProgressBar } from './atoms/progress-bar'

// images
import discoverBackground from '../images/boat-section2-bg.jpeg'
import orderBackground from '../images/article1.jpeg'

export const BoatHeader = ({
  boatImage,
  boatLogo,
  boatNameLong,
}: {
  boatImage: string
  boatLogo: string
  boatNameLong: string
}) => (
  <section className="bg-black text-white pt-32 pb-4 md:min-h-screen md:flex flex-col justify-between">
    <div />
    <div className="relative z-10">
      <Typography variant="e2" md="e2" className="text-center mb-8 md:mb-4">
        {boatNameLong}
      </Typography>
      <Typography
        variant="h4"
        md="h3"
        lg="h2"
        xl="h1"
        className="text-center mb-8 md:mb-10 max-w-2xl lg:max-w-3xl mx-auto"
      >
        Headline goes here lorem ipsum.
      </Typography>

      <div className="relative mb-4 justify-center hidden md:flex">
        <InPageCta>Request Info</InPageCta>
      </div>
    </div>
    <img src={boatImage} alt="" className="mb-8 md:absolute" />
    <div className="hidden bg-black bg-opacity-50 absolute inset-0 md:block"></div>
    <div className="relative z-10">
      <div className="relative flex justify-center mb-8 md:mb-10">
        <img src={boatLogo} alt="" />
      </div>
      <div className="relative flex px-4 space-x-6 mb-10 md:mb-6 max-w-2xl mx-auto">
        <div className="flex-1">
          <StatBlock label="Length" percentage={80} text="59’" />
        </div>
        <div className="flex-1">
          <StatBlock label="Freeboard" percentage={75} text="68”" />
        </div>
        <div className="flex-1">
          <StatBlock label="Max Speed" percentage={85} text="80mph" />
        </div>
      </div>
    </div>
    <div className="relative mb-4 flex justify-center md:hidden">
      <InPageCta>Request Info</InPageCta>
    </div>
  </section>
)

export const BoatSection: React.FC<{ theme?: Theme; className?: string }> = ({
  children,
  className,
  theme = 'light',
}) => (
  <section
    className={clsx(
      'relative py-12',
      {
        'bg-black text-white': theme === 'dark',
      },
      className
    )}
  >
    {children}
  </section>
)

export const TextBlock = ({
  className = '',
  copy,
  header,
}: {
  className?: string
  header: string
  copy: string
}) => (
  <div className={className}>
    <Typography variant="e2" className="mb-4">
      {header}
    </Typography>
    <Typography variant="p2">{copy}</Typography>
  </div>
)

export const DiscoverSection = ({
  copy,
  header,
  primaryImage,
  sectionTitle,
}: {
  sectionTitle: string
  primaryImage: string
  header: string
  copy: string
}) => (
  <BoatSection theme="dark" className="pb-24 overflow-hidden">
    <InPageAnchor title={sectionTitle} />
    <img
      src={discoverBackground}
      className="absolute top-0 left-0 h-full w-full object-cover filter-grayscale z-auto"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(360deg, #000000 46.14%, rgba(0, 0, 0, 0) 100%)',
      }}
    />
    <div className="md:px-12 lg:px-16 relative max-w-5xl mx-auto">
      <div className="hidden md:block absolute right-0 top-0">
        <VerticalHeader theme="dark" className="mr-4">
          {sectionTitle}
        </VerticalHeader>
      </div>
      <div className="px-4 mb-16 lg:mb-20 md:mt-8 lg:mt-16">
        <AspectRatio ratio="3:2" md="16:9" lg="21:9">
          <img
            src={primaryImage}
            className="absolute h-full w-full object-cover"
          />
          <CircleButton
            icon={PlayIcon}
            size="lg"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </AspectRatio>
      </div>
      <TextBlock
        className="text-center px-4 max-w-2xl mx-auto lg:mb-8"
        header={header}
        copy={copy}
      />
    </div>
  </BoatSection>
)

export const MobileSectionHeader: React.FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <div className="px-4">
    <Typography
      variant="h4"
      className={clsx('text-center px-4 text-gray-4 mb-8 md:hidden', className)}
    >
      {children}
    </Typography>
  </div>
)

export const CarouselButtons = ({
  className,
  theme = 'dark',
}: {
  className?: string
  theme?: Theme
}) => (
  <div className={clsx('flex justify-center space-x-4', className)}>
    <CircleButton
      icon={ArrowIcon}
      theme={theme}
      variant="secondary"
      iconClassName="transform rotate-180"
    />
    <CircleButton icon={ArrowIcon} theme={theme} variant="secondary" />
  </div>
)

export const ImageWithLabel = ({
  imgClassName,
  label,
  ratio,
  src,
  ...rest
}: {
  imgClassName?: string
  label?: string
  src: string
} & AspectRatioProps) => (
  <AspectRatio ratio={ratio} {...rest}>
    <img
      src={src}
      className={clsx('absolute h-full object-cover', imgClassName)}
    />
    {label && (
      <VerticalLabel className="absolute bottom-0 left-0">
        {label}
      </VerticalLabel>
    )}
  </AspectRatio>
)

type Side = 'left' | 'right'

export const VerticalHeaderBlock = ({
  className,
  label,
  side,
  theme,
}: {
  className?: string
  label: string
  theme: Theme
  side: Side
}) => (
  <div className={clsx('max-w-7xl mx-auto relative md:mt-16', className)}>
    <div
      className={clsx('hidden md:block absolute top-0', {
        'left-0': side === 'left',
        'right-0': side === 'right',
      })}
    >
      <VerticalHeader
        theme={theme}
        className={clsx({ 'ml-4': side === 'left', 'mr-4': side === 'right' })}
      >
        {label}
      </VerticalHeader>
    </div>
  </div>
)

export const SideBleedImage = ({
  className,
  imgClassName,
  ratio = '3:2',
  side,
  size = 'default',
  src,
}: {
  className?: string
  imgClassName?: string
  ratio?: Ratio
  side: Side
  size?: 'default' | 'large'
  src: string
}) => (
  <div className={clsx('relative max-w-8xl mx-auto md:mt-16', className)}>
    <div
      className={clsx('w-full md:w-11/12 lg:w-10/12', {
        'ml-auto': side === 'right',
        'mr-auto': side === 'left',
        'xl:w-9/12': size === 'default',
      })}
    >
      <AspectRatio ratio={ratio}>
        <img
          src={src}
          className={clsx('absolute h-full object-cover', imgClassName)}
        />
      </AspectRatio>
    </div>
  </div>
)

export const TwoUpImageBlock = ({
  className,
  images,
}: {
  className?: string
  images: [string, string]
}) => (
  <div className={clsx('max-w-5xl mx-auto sm:flex', className)}>
    <div className="px-4 mb-16 md:mb-0 flex-1">
      <AspectRatio ratio="3:4">
        <img src={images[0]} className="absolute h-full w-full object-cover" />
      </AspectRatio>
    </div>
    <div className="px-4 mb-16 md:mb-0 flex-1">
      <AspectRatio ratio="3:4">
        <img src={images[1]} className="absolute h-full w-full object-cover" />
      </AspectRatio>
    </div>
  </div>
)

export const ThreeUpImageBlock = ({
  className,
  images,
}: {
  className?: string
  images: [string, string, string]
}) => (
  <div className={clsx('sm:flex max-w-7xl mx-auto', className)}>
    <div className="px-4 mb-16 sm:w-1/3">
      <AspectRatio ratio="3:4">
        <img src={images[0]} className="absolute h-full w-full object-cover" />
      </AspectRatio>
    </div>
    <div className="px-4 mb-16 sm:w-1/3">
      <AspectRatio ratio="3:4">
        <img src={images[1]} className="absolute h-full w-full object-cover" />
      </AspectRatio>
    </div>
    <div className="px-4 mb-16 sm:w-1/3">
      <AspectRatio ratio="3:4">
        <img src={images[2]} className="absolute h-full w-full object-cover" />
      </AspectRatio>
    </div>
  </div>
)

export const MediaGallerySection = ({
  images,
  title,
}: {
  images: string[]
  title: string
}) => (
  <BoatSection theme="dark" className="sm:py-32">
    <InPageAnchor title={title} />
    <MobileSectionHeader className="sm:hidden">{title}</MobileSectionHeader>
    <div className="relative max-w-7xl mx-auto sm:pl-16">
      <VerticalHeader theme="dark" className="absolute -ml-12 xl:-ml-16 mt-12">
        {title}
      </VerticalHeader>
      <div className="px-4 flex space-x-6 mb-6">
        <Typography variant="e2" className="text-red sm:text-white">
          All
        </Typography>
        <Typography variant="e2" className="sm:text-gray-3">
          Photos
        </Typography>
        <Typography variant="e2" className="sm:text-gray-3">
          Videos
        </Typography>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-none sm:grid-flow-col-dense sm:grid-rows-2 gap-6 px-4 mb-16">
        {images.map((image, index) => (
          <GalleryImage
            key={image}
            img={image}
            className={index > 3 ? 'hidden sm:block' : ''}
          />
        ))}
      </div>
      <div className="flex sm:justify-between items-center px-4">
        <div className="hidden sm:block w-full max-w-xs md:max-w-sm lg:max-w-md">
          <ProgressBar percentage={33} />
        </div>
        <CarouselButtons className="mb-4" />
      </div>
    </div>
  </BoatSection>
)

export const BespokeOptionCard = ({ img }: { img: string }) => {
  return (
    <div className="w-56 sm:w-auto max-w-lg">
      <AspectRatio
        ratio="1:1"
        sm="16:9"
        className="relative w-56 sm:w-auto max-w-lg mb-6"
      >
        <img src={img} className="absolute w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
          }}
        ></div>
      </AspectRatio>
      <Typography variant="h4" className="mb-4">
        Title of bespoke option
      </Typography>
      <Typography variant="p3" sm="p2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor...
      </Typography>
    </div>
  )
}

export const GalleryImage = ({
  className = '',
  img,
}: {
  className?: string
  img: string
}) => {
  return (
    <div className={`max-w-xs ${className}`}>
      <AspectRatio ratio="1:1" className="relative group cursor-pointer">
        <img
          src={img}
          className="absolute h-full w-full object-cover sm:filter-grayscale group-hover:filter-none transition duration-150 ease-in-out"
        />
        <div className="absolute inset-0 bg-black transform duration-200 bg-opacity-25 group-hover:bg-opacity-0 transition duration-150 ease-in-out"></div>
        <CircleButton
          icon={ExpandIcon}
          size="sm"
          className="absolute right-0 bottom-0 mb-4 mr-4 group-hover:bg-white group-hover:text-red"
        />
      </AspectRatio>
    </div>
  )
}

export const OrderSection = ({
  boatNameLong,
  sectionTitle,
}: {
  boatNameLong: string
  sectionTitle: string
}) => (
  <BoatSection className="pb-48 sm:py-48">
    <InPageAnchor title={sectionTitle} />
    <img
      src={orderBackground}
      className="absolute h-full w-full top-0 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    <div className="relative px-4 text-white text-center mb-48 sm:mb-0 max-w-7xl mx-auto">
      <div className="bg-black bg-opacity-75 py-16 sm:py-20 px-4 max-w-md">
        <Typography variant="h3" sm="h2" className="mb-6">
          Order today
        </Typography>
        <Typography variant="e2" className="mb-12">
          {boatNameLong}
        </Typography>
        <div className="flex justify-center">
          <InPageCta>Request Info</InPageCta>
        </div>
      </div>
    </div>
  </BoatSection>
)

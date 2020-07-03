import React from 'react'
import Img from 'gatsby-image'
import { Typography } from './atoms/typography'
import { InPageCta } from './atoms/in-page-cta'
import { StatBlock } from './atoms/stat-block'
import { Theme } from './types/shared'
import clsx from 'clsx'
import { AspectRatio, AspectRatioProps, Ratio } from './atoms/aspect-ratio'
import { CircleButton } from './atoms/circle-button'
import { ExpandIcon, PlayIcon, ArrowIcon, PlusIcon } from './svgs/icons'
import { InPageAnchor } from './molecules/in-page-nav'
import { VerticalHeader } from './atoms/vertical-header'
import { VerticalLabel } from './atoms/vertical-label'
import { ProgressBar } from './atoms/progress-bar'
import {
  Stat,
  Media,
  SpecsSection,
  CustomizationsSection,
  TextBlock,
  TwoColumnImageTextBlock,
  OneColumnTextBlock,
  CarouselBlock,
  SliderBlock,
  FullWidthCarouselBlock,
} from './types/boat'
import { Tab } from './atoms/tab'
import { LinkCta } from './atoms/link-cta'
import { ProgressDots } from './atoms/progress-dots'

// images
import discoverBackground from '../content/images/boat-section2-bg.jpeg'
import orderBackground from '../content/images/article1.jpeg'
import customizationsBackground from '../content/images/boat-section6-image5.jpeg'

export const BoatHeader = ({
  boatImage,
  boatLogo,
  boatNameLong,
  onClickCta,
  headline,
  stats,
}: {
  boatImage: GatsbyTypes.ImageSharpFluid
  boatLogo: string
  boatNameLong: string
  onClickCta: () => void
  headline: string
  stats: Stat[]
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
        {headline}
      </Typography>
      <div className="relative mb-4 justify-center hidden md:flex">
        <InPageCta onClick={onClickCta}>Request Info</InPageCta>
      </div>
    </div>
    <div className="mb-8 md:absolute w-full">
      <Img fluid={boatImage} alt="" />
    </div>
    <div className="hidden bg-black bg-opacity-50 absolute inset-0 md:block"></div>
    <div className="relative z-10">
      <div className="relative flex justify-center mb-8 md:mb-10">
        <img src={boatLogo} alt="" />
      </div>
      <div className="relative flex px-4 space-x-6 mb-10 md:mb-6 max-w-2xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="flex-1">
            <StatBlock
              label={stat.label}
              percentage={stat.percentage}
              text={stat.text}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="relative mb-4 flex justify-center md:hidden">
      <InPageCta onClick={onClickCta}>Request Info</InPageCta>
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

export const TextBlockComponent = ({
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
      <TextBlockComponent
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

export const SpecsSectionComponent = ({
  title,
  categories,
  boatNameLong,
}: SpecsSection & { boatNameLong: string }) => (
  <BoatSection className="md:py-24">
    <InPageAnchor title={title} />
    <div className="relative flex max-w-7xl mx-auto">
      <div className="hidden md:block absolute right-0 top-0">
        <VerticalHeader theme="light" className="mr-4">
          {title}
        </VerticalHeader>
      </div>
      <div className="hidden md:block px-4 space-y-2 md:w-48 lg:w-56 xl:w-64 mt-24">
        {categories.map(({ name }, index) => (
          <Tab
            key={name}
            className="w-auto whitespace-no-wrap"
            active={index === 0}
          >
            {name}
          </Tab>
        ))}
      </div>
      <div className="max-w-2xl w-full">
        <div className="px-4 md:px-0 md:mb-16">
          <Typography variant="h4">{boatNameLong}</Typography>
        </div>
        <div className="md:hidden flex flex-no-wrap px-4 space-x-4 my-12 overflow-x-auto">
          {categories.map(({ name }, index) => (
            <Tab key={name} className="whitespace-no-wrap" active={index === 0}>
              {name}
            </Tab>
          ))}
        </div>
        <div className="px-4 md:px-0 grid col-gap-6 grid-cols-2 mb-10">
          {categories[0].specs.map(({ header, copy }, index) => (
            <div key={header + index} className="py-8 border-t border-gray-5">
              <Typography variant="e3" className="mb-2">
                {header}
              </Typography>
              <Typography variant="p3" className="text-gray-2 md:w-11/12">
                {copy}
              </Typography>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-start mb-2">
          <InPageCta variant="secondary" theme="light">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Specs</span>
            </span>
          </InPageCta>
        </div>
      </div>
    </div>
  </BoatSection>
)

export const MediaGallerySection = ({
  media,
  title,
}: {
  media: Media[]
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
        {media.map((item, index) => (
          <GalleryImage
            key={index}
            img={item.image.childImageSharp?.fluid?.src!}
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

export const CustomizationsSectionComponent = ({
  title,
  options,
}: CustomizationsSection) => (
  <BoatSection theme="dark" className="py-24 sm:pb-16">
    <InPageAnchor title={title} />
    <img
      src={customizationsBackground}
      className="absolute top-0 h-full w-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(360deg, #000000 46.14%, rgba(0, 0, 0, 0) 100%)',
      }}
    ></div>
    <div className="relative text-center mb-24 sm:mt-20 sm:mb-48">
      <Typography variant="h3" sm="h2" lg="h1" className="mb-4">
        Make it yours.
      </Typography>
      <Typography variant="e2" md="e1" className="text-gray-4">
        Bespoke Possibilities
      </Typography>
    </div>
    <div className="relative max-w-7xl mx-auto">
      <div className="flex space-x-6 px-4 overflow-hidden mb-12 sm:mb-20">
        {options.map(({ media, content }, index) => (
          <BespokeOptionCard
            key={content.header + index}
            img={media.image.childImageSharp?.fluid?.src!}
            {...content}
          />
        ))}
      </div>
      <div className="px-4 flex sm:justify-between items-center">
        <div className="hidden sm:block">
          <InPageCta variant="secondary" theme="dark">
            Explore Bespoke Studio
          </InPageCta>
        </div>
        <CarouselButtons className="mb-12 sm:mb-0" />
      </div>
      <LinkCta theme="dark" className="mx-auto sm:hidden">
        Explore Bespoke Possibilities
      </LinkCta>
    </div>
  </BoatSection>
)

export const BespokeOptionCard = ({
  img,
  header,
  copy,
}: { img: string } & TextBlock) => {
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
        {header}
      </Typography>
      <Typography variant="p3" sm="p2">
        {copy}
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

// ===================================
// BLOCKS
// ===================================
export const OneColumnTextBlockComponent = ({
  align = 'left',
  header,
  copy,
}: OneColumnTextBlock) => (
  <div className="my-12 px-4 xl:pl-0 mb-32 max-w-5xl mx-auto">
    <TextBlockComponent
      className={clsx({
        'max-w-md mr-auto text-left': align === 'left',
        'max-w-xl mx-auto text-center': align === 'center',
        'max-w-md ml-auto text-right': align === 'right',
      })}
      header={header}
      copy={copy}
    />
  </div>
)

export const TwoColumnImageTextBlockComponent = ({
  leftColumn,
  rightColumn,
}: TwoColumnImageTextBlock) => (
  <div className="md:flex md:mb-24 md:px-12 lg:px-16 max-w-6xl mx-auto">
    <div className="md:w-1/2 lg:pr-12">
      <TextBlockComponent
        className="my-12 px-4 lg:px-0 lg:ml-12 md:mb-32 lg:mb-48"
        header={leftColumn.content.header}
        copy={leftColumn.content.copy}
      />
      <div className="px-4 lg:px-0 mb-12 md:mb-0">
        <ImageWithLabel
          ratio="3:4"
          src={leftColumn.media.image.childImageSharp?.fluid?.src!}
          label={leftColumn.media.label}
          imgClassName="filter-grayscale"
        />
      </div>
    </div>
    <div className="md:w-1/2 lg:pl-12">
      <div className="px-4 lg:px-0 lg:pr-16">
        <ImageWithLabel
          ratio="3:4"
          src={rightColumn.media.image.childImageSharp?.fluid?.src!}
          label={leftColumn.media.label}
          style={{ backgroundColor: '#222222' }}
          imgClassName="left-1/2 transform -translate-x-1/2"
        />
      </div>
      <TextBlockComponent
        className="my-10 md:my-16 px-4 lg:px-0 lg:pr-16"
        header={rightColumn.content.header}
        copy={rightColumn.content.copy}
      />
    </div>
  </div>
)

export const SliderBlockComponent = ({ items }: SliderBlock) => (
  <div className="max-w-5xl mx-auto">
    <div className="md:w-9/12">
      <AspectRatio ratio="3:2">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.media.image.childImageSharp?.fluid?.src!}
            className="absolute h-full w-full object-cover"
            style={
              index > 0
                ? {
                    left: 'calc(100% + 8.5rem)',
                  }
                : {}
            }
          />
        ))}
        <CarouselButtons className="absolute bottom-0 pb-4 w-full md:hidden" />
      </AspectRatio>
      <div className="md:flex justify-between items-start md:mt-10 md:mb-40">
        <TextBlockComponent
          className="my-8 md:my-0 px-4 mb-20 md:w-10/12"
          header={items[0].content.header}
          copy={items[0].content.copy}
        />
        <CarouselButtons className="hidden md:flex" />
      </div>
    </div>
  </div>
)

export const CarouselBlockComponent = ({ items }: CarouselBlock) => (
  <div className="max-w-5xl mx-auto">
    <AspectRatio ratio="3:2">
      <img
        src={items[0].media.image.childImageSharp?.fluid?.src!}
        className="absolute h-full w-full object-cover"
      />
      <CarouselButtons className="absolute bottom-0 pb-4 w-full md:hidden" />
    </AspectRatio>
    <div className="md:flex justify-between my-8 mb-20 md:mb-24 px-4 xl:px-0 ">
      <TextBlockComponent
        className="md:w-7/12"
        header={items[0].content.header}
        copy={items[0].content.copy}
      />
      <CarouselButtons className="hidden md:flex items-start" theme="light" />
    </div>
  </div>
)

export const FullWidthCarouselBlockComponent = ({
  items,
}: Omit<FullWidthCarouselBlock, 'type'>) => (
  <div className="relative -mb-12">
    <AspectRatio ratio="16:9">
      <img
        className="absolute h-full w-full object-cover"
        src={items[0].media.image.childImageSharp?.fluid?.src!}
        alt=""
      />
    </AspectRatio>
    <div className="absolute pb-4 bottom-0 left-1/2 transform -translate-x-1/2">
      <ProgressDots current={1} total={items.length} variant="horizontal" />
    </div>
  </div>
)

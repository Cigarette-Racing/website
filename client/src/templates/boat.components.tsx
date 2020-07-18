import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { StatBlock } from '../atoms/stat-block'
import { Theme } from '../types/shared'
import clsx from 'clsx'
import { AspectRatio, AspectRatioProps, Ratio } from '../atoms/aspect-ratio'
import { CircleButton } from '../atoms/circle-button'
import { PlayIcon, ArrowIcon, CaretDownIcon } from '../svgs/icons'
import { InPageAnchor } from '../molecules/in-page-nav'
import { VerticalHeader } from '../atoms/vertical-header'
import { VerticalLabel } from '../atoms/vertical-label'
import {
  Stat,
  Media,
  SpecsSection,
  CustomizationsSection,
  TextBlock,
  TwoColumnImageTextBlock,
  OneColumnTextBlock,
  OneColumnImageTextBlock,
  OrderSection,
  Spec,
} from '../types/boat'
import { Tab } from '../atoms/tab'
import { LinkCta } from '../atoms/link-cta'
import { AnimatePresence, motion } from 'framer-motion'
// images
import discoverBackground from '../../content/images/discover-section-bg.jpeg'
import customizationsBackground from '../../content/images/customization-section-bg.jpeg'
import { useToggle } from 'react-use'
import ReactPlayer from 'react-player'

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
  onClickCta: (state: boolean) => void
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
        <InPageCta
          onClick={() => {
            onClickCta(true)
          }}
        >
          Request Info
        </InPageCta>
      </div>
    </div>
    <div className="mb-8 md:absolute md:h-full md:top-0 w-full">
      <Img fluid={boatImage} alt="" className="h-full w-full object-cover" />
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
      <InPageCta
        onClick={() => {
          onClickCta(true)
        }}
      >
        Request Info
      </InPageCta>
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

const DiscoverMedia = ({ media }: { media: Media }) => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    // TODO: get 3:2 discover section images
    // <AspectRatio ratio="3:2" md="16:9" lg="21:9">
    <AspectRatio ratio="21:9">
      <img
        src={media.image.childImageSharp?.fluid?.src!}
        className="absolute h-full w-full object-cover"
      />
      {media.videoUrl && (
        <CircleButton
          onClick={() => setShowVideo(true)}
          icon={PlayIcon}
          size="lg"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ReactPlayer
              className="absolute top-0 left-0"
              url={media.videoUrl}
              controls
              playing
              config={{
                file: {
                  attributes: {
                    className: 'object-cover',
                  },
                },
              }}
              width="100%"
              height="100%"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </AspectRatio>
  )
}

export const DiscoverSection = ({
  copy,
  header,
  media,
  sectionTitle,
}: {
  sectionTitle: string
  media: Media
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
        <DiscoverMedia media={media} />
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
  disabledNext = false,
  disabledPrev = false,
  onClickNext,
  onClickPrev,
}: {
  className?: string
  theme?: Theme
  disabledNext?: boolean
  disabledPrev?: boolean
  onClickNext?: React.MouseEventHandler<HTMLButtonElement>
  onClickPrev?: React.MouseEventHandler<HTMLButtonElement>
}) => (
  <div className={clsx('flex justify-center space-x-4', className)}>
    <CircleButton
      icon={ArrowIcon}
      theme={theme}
      variant="secondary"
      iconClassName="transform rotate-180"
      onClick={onClickPrev}
      disabled={disabledPrev}
    />
    <CircleButton
      icon={ArrowIcon}
      theme={theme}
      variant="secondary"
      onClick={onClickNext}
      disabled={disabledNext}
    />
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
}: SpecsSection & { boatNameLong: string }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].name
  )
  return (
    <BoatSection className="md:py-24">
      <InPageAnchor title={title} />
      <div className="relative flex max-w-7xl mx-auto">
        <div className="hidden md:block absolute right-0 top-0">
          <VerticalHeader theme="light" className="mr-4">
            {title}
          </VerticalHeader>
        </div>
        <div className="hidden md:block px-4 space-y-2 md:w-48 lg:w-56 xl:w-64 mt-24">
          {categories.map(({ name }) => (
            <Tab
              key={name}
              className="w-auto whitespace-no-wrap"
              active={name === selectedCategory}
              onClick={() => setSelectedCategory(name)}
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
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="whitespace-no-wrap"
                active={name === selectedCategory}
                onClick={() => setSelectedCategory(name)}
              >
                {name}
              </Tab>
            ))}
          </div>
          <div className="px-4 md:px-0 grid col-gap-6 grid-cols-2 mb-10">
            {categories
              .find((category) => category.name === selectedCategory)!
              .specs.map((spec, index) => (
                <SpecAccordion key={spec.name + index} {...spec} />
              ))}
          </div>
          {/* <div className="flex justify-center md:justify-start mb-2">
            <InPageCta variant="secondary" theme="light">
              <span className="flex items-center">
                <PlusIcon className="inline-block text-red mr-2 text-lg" />
                <span>More Specs</span>
              </span>
            </InPageCta>
          </div> */}
        </div>
      </div>
    </BoatSection>
  )
}

const NOOP = () => {}

const SpecAccordion = ({ name, descriptions }: Spec) => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  const isClickable = descriptions.length > 1
  return (
    <div className="py-8 border-t border-gray-5">
      <div
        className={clsx('mb-2 flex', {
          'cursor-pointer focus:outline-none select-none': isClickable,
        })}
        tabIndex={isClickable ? 0 : undefined}
        onClick={isClickable ? () => toggleIsOpen() : NOOP}
      >
        <Typography variant="e3" className="flex-1">
          {name}
        </Typography>
        {isClickable && (
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <CaretDownIcon className="text-red" />
          </motion.div>
        )}
      </div>
      <Typography variant="p3" className="mb-2 text-gray-2 md:w-11/12">
        {descriptions[0]}
      </Typography>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="descriptions"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {descriptions.slice(1).map((description) => (
              <Typography variant="p3" className="mb-2 text-gray-2 md:w-11/12">
                {description}
              </Typography>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

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

export const OrderSectionComponent = ({
  boatNameLong,
  title,
  media,
  onClickCta,
}: OrderSection & {
  boatNameLong: string
  onClickCta: (state: boolean) => void
}) => {
  return (
    <BoatSection className="pb-48 sm:py-48">
      <InPageAnchor title={title} />
      <img
        src={media.image.childImageSharp?.fluid?.src!}
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
            <InPageCta
              onClick={() => {
                onClickCta(true)
              }}
            >
              Request Info
            </InPageCta>
          </div>
        </div>
      </div>
    </BoatSection>
  )
}

// ===================================
// BLOCKS
// ===================================
export const OneColumnTextBlockComponent = ({
  align = 'left',
  header,
  copy,
}: OneColumnTextBlock) => (
  <div className="my-12 px-4 xl:pl-0 mb-32 md:mb-48 max-w-5xl mx-auto">
    <TextBlockComponent
      className={clsx({
        'max-w-lg mr-auto text-left': align === 'left',
        'max-w-xl mx-auto text-center': align === 'center',
        'max-w-lg ml-auto text-right': align === 'right',
      })}
      header={header}
      copy={copy}
    />
  </div>
)

export const OneColumnImageTextBlockComponent = ({
  content,
  media,
}: OneColumnImageTextBlock) => (
  <div className="max-w-5xl mx-auto md:mb-48">
    <AspectRatio ratio="3:2" className="overflow-hidden">
      <img
        src={media.image.childImageSharp?.fluid?.src!}
        className="absolute h-full w-full object-cover"
      />
    </AspectRatio>
    <div className="md:flex justify-between my-8 mb-20 md:mb-24 px-4 xl:px-0 ">
      <TextBlockComponent className="md:w-7/12" {...content} />
    </div>
  </div>
)

export const TwoColumnImageTextBlockComponent = ({
  leftColumn,
  rightColumn,
}: TwoColumnImageTextBlock) => (
  <div className="md:flex md:mb-48 md:px-12 lg:px-16 max-w-6xl mx-auto">
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
        />
      </div>
    </div>
    <div className="md:w-1/2 lg:pl-12">
      <div className="px-4 lg:px-0 lg:pr-16">
        <ImageWithLabel
          ratio="3:4"
          src={rightColumn.media.image.childImageSharp?.fluid?.src!}
          label={rightColumn.media.label}
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

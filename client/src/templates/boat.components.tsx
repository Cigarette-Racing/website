import React, { useState, Fragment } from 'react'
import Img from 'gatsby-image'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { StatBlock } from '../atoms/stat-block'
import { Theme } from '../types/shared'
import clsx from 'clsx'
import { AspectRatio, AspectRatioProps, Ratio } from '../atoms/aspect-ratio'
import { CircleButton } from '../atoms/circle-button'
import { ArrowIcon, CaretDownIcon } from '../svgs/icons'
import { InPageAnchor } from '../molecules/in-page-nav'
import { VerticalHeader } from '../atoms/vertical-header'
import { VerticalLabel } from '../atoms/vertical-label'
import {
  Stat,
  Media,
  SpecsSection,
  TwoColumnImageTextBlock,
  OneColumnTextBlock,
  OneColumnImageTextBlock,
  OrderSection,
  Spec,
  HorizontalImageTextBlock,
} from '../types/boat'
import { Tab } from '../atoms/tab'
import { AnimatePresence, motion } from 'framer-motion'
import { useToggle } from 'react-use'
import { AutoplayVideo } from '../atoms/autoplay-video'

export const BoatHeader = ({
  image,
  alt,
  videoUrl,
  boatLogo,
  boatNameLong,
  onClickCta,
  headline,
  stats,
}: {
  image: GatsbyTypes.File | string
  alt?: string
  videoUrl?: string
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
      {!!videoUrl ? (
        <AutoplayVideo
          image={image}
          alt={alt}
          videoUrl={videoUrl}
          videoOptions={{ controls: false }}
        />
      ) : (
        <Fragment>
          {/* conditionally render component based on Craft vs YAML */}
          {typeof image === 'string' ? (
            <img src={image} className="h-full w-full object-cover" />
          ) : (
            !!image && (
              <Img
                fluid={image.childImageSharp?.fluid!}
                alt=""
                className="h-full w-full object-cover"
              />
            )
          )}
        </Fragment>
      )}
    </div>
    <div className="hidden bg-black bg-opacity-25 absolute inset-0 md:block"></div>
    <div className="relative z-10">
      <div className="relative flex justify-center mb-8 md:mb-10">
        {!!boatLogo && <img src={boatLogo} alt={boatNameLong} />}
      </div>
      <div className="relative flex px-4 space-x-6 mb-10 md:mb-6 max-w-2xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label || stat.statLabel} className="flex-1">
            <StatBlock
              label={stat.label || stat.statLabel}
              percentage={stat.percentage || stat.statPercentage}
              text={stat.text || stat.statText}
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
      aria-label="Previous"
    />
    <CircleButton
      icon={ArrowIcon}
      theme={theme}
      variant="secondary"
      onClick={onClickNext}
      disabled={disabledNext}
      aria-label="Next"
    />
  </div>
)

export const ImageWithLabel = ({
  imgClassName,
  label,
  ratio,
  src,
  alt,
  ...rest
}: {
  imgClassName?: string
  label?: string
  src: GatsbyTypes.File
  alt?: string
} & AspectRatioProps) => (
  <AspectRatio ratio={ratio} {...rest}>
    <Img
      fluid={src.childImageSharp?.fluid}
      className={clsx('h-full w-full object-cover', imgClassName)}
      alt={alt || ''}
      style={{ position: 'absolute' }}
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
  media,
  ratio = '3:2',
  side,
  size = 'default',
}: {
  className?: string
  imgClassName?: string
  media: Media
  ratio?: Ratio
  side: Side
  size?: 'default' | 'large'
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
        {!!media?.image?.childImageSharp ? (
          <Img
            fluid={media.image.childImageSharp?.fluid}
            alt={media.alt || ''}
            className={clsx('h-full w-full object-cover', imgClassName)}
            style={{ position: 'absolute' }}
          />
        ) : (
          <img
            src={media}
            alt=""
            className={clsx('h-full w-full object-cover', imgClassName)}
            style={{ position: 'absolute' }}
          />
        )}
      </AspectRatio>
    </div>
  </div>
)

export const TwoUpImageBlock = ({
  className,
  images,
}: {
  className?: string
  images: [Media, Media]
}) => (
  <div className={clsx('max-w-5xl mx-auto sm:flex', className)}>
    <div className="px-4 mb-16 md:mb-0 flex-1">
      <AspectRatio ratio="3:4">
        {images[0].singleMedia ? (
          <img
            src={images[0].singleMedia?.[0].image?.[0].url}
            alt=""
            className="h-full w-full object-cover"
            style={{ position: 'absolute' }}
          />
        ) : (
          <Img
            fluid={images[0].image.childImageSharp?.fluid}
            alt={images[0].alt || ''}
            className="h-full w-full object-cover"
            style={{ position: 'absolute' }}
          />
        )}
      </AspectRatio>
    </div>
    <div className="px-4 mb-16 md:mb-0 flex-1">
      <AspectRatio ratio="3:4">
        {images[1].singleMedia ? (
          <img
            src={images[1].singleMedia?.[0].image?.[0].url}
            alt=""
            className="h-full w-full object-cover"
            style={{ position: 'absolute' }}
          />
        ) : (
          <Img
            fluid={images[1].image.childImageSharp?.fluid}
            alt={images[1].alt || ''}
            className="h-full w-full object-cover"
            style={{ position: 'absolute' }}
          />
        )}
      </AspectRatio>
    </div>
  </div>
)

export const ThreeUpImageBlock = ({
  className,
  images,
}: {
  className?: string
  images: [Media, Media, Media]
}) => (
  <div className={clsx('sm:flex max-w-7xl mx-auto', className)}>
    {!!images &&
      !!images.length &&
      images.map((media) => {
        return (
          <div
            key={media.image.childImageSharp?.fluid?.src!}
            className="px-4 mb-16 sm:w-1/3"
          >
            <AspectRatio ratio="3:4">
              <Img
                fluid={media.image.childImageSharp?.fluid}
                alt={media.alt || ''}
                className="h-full w-full object-cover"
                style={{ position: 'absolute' }}
              />
            </AspectRatio>
          </div>
        )
      })}
  </div>
)

export const PowertrainSectionComponent = ({
  heroImage,
  options,
}: {
  heroImage: string
  options: any
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]?.name)
  return (
    <BoatSection className="pb-24 overflow-hidden">
      {console.log(heroImage)}
      <InPageAnchor title="Powertrain Options" />
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        <div className="px-4 md:mb-12 md:mt-8 lg:mt-16">
          <img src={heroImage?.[0].url} alt="" />
        </div>
        <div className="md:flex max-w-5xl w-full px-4">
          <div className="md:hidden flex flex-no-wrap p-4 space-x-4 my-14 overflow-x-auto">
            {!!options.length &&
              options.map(({ name }) => (
                <PowertrainTab
                  key={name}
                  className="whitespace-no-wrap"
                  active={name === selectedOption}
                  onClick={() => setSelectedOption(name)}
                >
                  {name}
                </PowertrainTab>
              ))}
          </div>
          <div className="hidden md:block md:flex-1 space-y-4">
            {!!options.length &&
              options.map(({ name }: any) => (
                <PowertrainTab
                  key={name}
                  className="whitespace-no-wrap"
                  active={name === selectedOption}
                  onClick={() => setSelectedOption(name)}
                >
                  {name}
                </PowertrainTab>
              ))}
          </div>
          <div className="flex-1 space-y-4 mt-2 pl-4 md:pl-12">
            {!!options.length &&
              options
                .find((option: any) => option.name === selectedOption)
                .details.map((detail: any) => (
                  <ul>
                    <li>
                      <Typography variant="e3">{detail.name}</Typography>
                      <Typography variant="p3">{detail.info}</Typography>
                    </li>
                  </ul>
                ))}
          </div>
        </div>
      </div>
    </BoatSection>
  )
}

export const SpecsSectionComponent = ({
  title,
  categories,
  boatNameLong,
}: SpecsSection & { boatNameLong: string }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]?.name
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
          {!!categories.length &&
            categories.map(({ name }) => (
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
          <div className="md:hidden flex flex-no-wrap p-4 space-x-4 my-10 overflow-x-auto">
            {!!categories.length &&
              categories.map(({ name }) => (
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
            {!!categories.length &&
              categories
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

interface PowertrainTabProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  active?: boolean
  as?: keyof JSX.IntrinsicElements | React.ReactType
}

export const PowertrainTab = ({
  active,
  as: Comp = 'button',
  className,
  children,
  ...props
}: PowertrainTabProps) => {
  return (
    <Comp
      {...props}
      className={clsx('block py-px border-b border-transparent', className, {
        'text-red border-red': active,
      })}
    >
      <Typography variant="e3" md="h4" as="span">
        {children}
      </Typography>
    </Comp>
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
      {typeof media === 'string' ? (
        <img
          src={media}
          alt=""
          className="h-full w-full object-cover top-0"
          style={{ position: 'absolute' }}
        />
      ) : (
        !!media && (
          <Img
            fluid={!!media.image && media.image.childImageSharp?.fluid}
            alt={media.alt || ''}
            className="h-full w-full object-cover top-0"
            style={{ position: 'absolute' }}
          />
        )
      )}
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="relative px-4 text-white text-center mb-48 sm:mb-0 max-w-7xl mx-auto">
        <div className="bg-black bg-opacity-75 py-16 sm:py-20 px-4 max-w-md">
          <Typography variant="h3" sm="h2" className="mb-6">
            {title}
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
  <div className="my-12 px-4 xl:pl-0 mb-32 max-w-5xl mx-auto">
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
  <div className="max-w-5xl mx-auto">
    <AspectRatio ratio="3:2" className="overflow-hidden">
      {typeof media === 'string' ? (
        <img
          src={media}
          alt=""
          className="h-full w-full object-cover"
          style={{ position: 'absolute' }}
        />
      ) : (
        <Img
          fluid={media.image.childImageSharp?.fluid}
          alt={media.alt || ''}
          className="h-full w-full object-cover"
          style={{ position: 'absolute' }}
        />
      )}
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
          src={leftColumn.media.image}
          alt={leftColumn.media.alt}
          label={leftColumn.media.label}
        />
      </div>
    </div>
    <div className="md:w-1/2 lg:pl-12">
      <div className="px-4 lg:px-0 lg:pr-16">
        <ImageWithLabel
          ratio="3:4"
          src={rightColumn.media.image}
          alt={rightColumn.media.alt}
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

export const HorizontalImageTextBlockComponent = ({
  content,
  layout,
  media,
}: HorizontalImageTextBlock) => {
  const image = <img src={media.image.publicURL} />
  const text = (
    <div className="px-4 md:px-0 md:w-3/4 lg:w-2/3">
      <TextBlockComponent {...content} />
    </div>
  )
  return (
    <div className="md:flex max-w-7xl mx-auto mb-16 md:mb-32">
      <div className="md:w-1/2 flex flex-col justify-center items-center mb-12 md:mb-0">
        {layout === 'imageOnLeft' ? image : text}
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        {layout === 'imageOnLeft' ? text : image}
      </div>
    </div>
  )
}

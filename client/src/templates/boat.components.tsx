import React, { useState, useEffect, Fragment } from 'react'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { StatBlock } from '../atoms/stat-block'
import { Theme } from '../types/shared'
import clsx from 'clsx'
import { ArrowIcon, CaretDownIcon, CaretUpIcon } from '../svgs/icons'
import { CircleButton } from '../atoms/circle-button'
import { AspectRatio, AspectRatioProps, Ratio } from '../atoms/aspect-ratio'
import { InPageAnchor } from '../molecules/in-page-nav'
import { VerticalHeader } from '../atoms/vertical-header'
import { ScrollPrompter } from '../molecules/header'
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
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion'
import { useToggle } from 'react-use'
import { AutoplayVideo } from '../atoms/autoplay-video'

export const BoatHeader = ({
  image,
  alt,
  videoUrl,
  boatLogo,
  boatNameLong,
  eyebrow,
  ctaText,
  onClickCta,
  headline,
  stats,
}: {
  image: string
  alt?: string
  videoUrl?: string
  boatLogo: string
  boatNameLong: string
  eyebrow: string
  onClickCta: (state: boolean) => void
  ctaText?: string
  headline: string
  stats: Stat[]
}) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const { scrollY } = useViewportScroll()

  scrollY.onChange((x) => {
    x > 10 ? setHasScrolled(true) : setHasScrolled(false)
  })

  useEffect(() => {
    setHasScrolled(false)
  }, [])

  return (
    <section className="bg-black text-white pt-32 pb-4 md:min-h-screen md:flex flex-col justify-between relative">
      <div />
      <div className="relative z-10">
        <Typography variant="e2" md="e2" className="text-center mb-8 md:mb-4">
          {eyebrow || boatNameLong}
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
              const discoverSection = document.getElementById('discover')
              const discoverTopOffset = discoverSection?.offsetParent?.offsetTop
              window.scroll({
                top: discoverTopOffset,
                behavior: 'smooth',
              })
            }}
            href="#discover"
          >
            {ctaText || `Explore more`}
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
            <img src={`${image}`} className="h-full w-full object-cover" />
          </Fragment>
        )}
      </div>
      <div className="hidden bg-black bg-opacity-10 absolute inset-0 md:block"></div>
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
      <div className="relative mb-4 flex justify-center hidden">
        <InPageCta href="/contact" link={true}>
          Request Information
        </InPageCta>
      </div>
      <div className="hidden md:block fixed bottom-0 left-0 w-full mb-8 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          <motion.div animate={{ opacity: hasScrolled ? 0 : 1 }}>
            <ScrollPrompter />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const BoatSection: React.FC<{
  theme?: Theme
  className?: string
}> = ({ children, className, theme = 'light', ...rest }) => (
  <section
    className={clsx(
      'relative py-12 overflow-hidden',
      {
        'bg-black text-white': theme === 'dark',
      },
      className
    )}
    {...rest}
  >
    {children}
  </section>
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
    <img
      src={`${src}?q=30&w=1000`}
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
  <div
    className={clsx('relative mx-auto md:mt-16', className)}
    data-block-type="SideBleedImage"
  >
    <div
      className={clsx('w-full md:w-11/12 lg:w-10/12 xl:w-9/12', {
        'ml-auto': side === 'right',
        'mr-auto': side === 'left',
        'xl:w-9/12': size === 'default',
      })}
    >
      <AspectRatio ratio={ratio}>
        <img
          src={`${media}?q=30&w=2000`}
          alt=""
          className={clsx('h-full w-full object-cover', imgClassName)}
          style={{ position: 'absolute' }}
        />
      </AspectRatio>
    </div>
  </div>
)

export const PowertrainSectionComponent = ({
  heroImage,
  options,
  moreDetails,
}: {
  heroImage: string
  options: any
  moreDetails: any
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    options?.[0]?.name
  )
  return (
    <BoatSection
      className={clsx('overflow-hidden', {
        'pb-0': moreDetails?.details?.length,
        'pb-24': !moreDetails?.details?.length,
      })}
      data-section-type="Powertrain Section"
    >
      <InPageAnchor title="Powertrain Options" />
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        <div className="px-4 md:mb-12 md:mt-8 lg:mt-16">
          <img src={`${heroImage?.[0]?.url}?q=30&w=2000`} alt="" />
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
                  <ul key={detail.name}>
                    <li>
                      <Typography variant="e3">{detail.name}</Typography>
                      <Typography variant="p3">{detail.info}</Typography>
                    </li>
                  </ul>
                ))}
          </div>
        </div>
      </div>
      {!!moreDetails?.details?.length && (
        <div className="pt-10">
          <MoreDetailsBlockComponent {...moreDetails} />
        </div>
      )}
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
    <BoatSection
      className="md:py-24 bg-offWhite overflow-hidden"
      data-section-type="Specs Section"
    >
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
            <Typography variant="h4">{boatNameLong} Specs</Typography>
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
                .specs?.map((spec, index) => (
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
      className={clsx(
        'block py-px border-b border-transparent hover:text-red',
        className,
        {
          'text-red border-red': active,
        }
      )}
    >
      <Typography variant="h5" md="h4" as="span" className="normal-case">
        {children}
      </Typography>
    </Comp>
  )
}

const SpecAccordion = ({ name, descriptions }: Spec) => {
  return (
    <div className="py-8 border-t border-gray-5">
      <div className={clsx('mb-2 flex', {})}>
        <Typography variant="e3" className="flex-1">
          {name}
        </Typography>
      </div>
      <AnimatePresence initial={false}>
        <div>
          {descriptions.map((description) => (
            <Typography
              key={description}
              variant="p3"
              className="mb-2 text-gray-2 md:w-11/12"
            >
              {description}
            </Typography>
          ))}
        </div>
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
    <BoatSection
      className="pb-48 sm:py-48"
      data-section-type="OrderSectionComponent"
    >
      <InPageAnchor title={title} />
      <img
        src={`${media}?q=30&w=2400`}
        alt=""
        className="h-full w-full object-cover top-0"
        style={{ position: 'absolute' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative px-4 text-white text-center mb-48 sm:mb-0 max-w-7xl mx-auto">
        <div className="bg-black bg-opacity-75 py-16 sm:py-20 px-4 max-w-md">
          <Typography variant="h3" sm="h2" className="mb-6">
            {title}
          </Typography>
          <Typography variant="e2" className="mb-12">
            {boatNameLong}
          </Typography>
          <div className="flex justify-center">
            <InPageCta href="/contact" link={true}>
              Request Information
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
  <div
    className="my-12 px-4 xl:pl-0 mb-32 max-w-5xl mx-auto"
    data-block-type="OneColumnTextBlockComponent"
  >
    <TextBlockComponent
      className={clsx({
        'max-w-xl mr-auto text-left': align === 'left',
        'max-w-2xl mx-auto text-center': align === 'center',
        'max-w-xl ml-auto text-right': align === 'right',
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
  <div
    className="max-w-7xl mx-auto"
    data-block-type="OneColumnImageTextBlockComponent"
  >
    <AspectRatio ratio="3:2" className="overflow-hidden">
      {!!media.videoURL ? (
        <AutoplayVideo
          image={media.image}
          alt={media.alt}
          videoUrl={media.videoURL}
          videoOptions={{ controls: false }}
        />
      ) : (
        <Fragment>
          <img
            src={`${media.image}?q=30&w=2000`}
            alt=""
            className="h-full w-full object-cover"
            style={{ position: 'absolute' }}
          />
        </Fragment>
      )}
    </AspectRatio>
    <div className="md:flex justify-center my-8 md:my-16 mb-20 md:mb-24 px-4 xl:px-0 ">
      <TextBlockComponent
        className="md:w-3/4 text-center max-w-6xl"
        {...content}
      />
    </div>
  </div>
)

export const TwoColumnImageTextBlockComponent = ({
  children,
}: TwoColumnImageTextBlock) => (
  <div
    className="md:flex md:mb-24 md:px-12 lg:px-16 max-w-7xl mx-auto"
    data-block-type="TwoColumnImageTextBlockComponent"
  >
    <div className="md:w-1/2 lg:pr-12">
      <TextBlockComponent
        className="my-12 px-4 lg:px-0 lg:ml-12 md:mb-32 lg:mb-48"
        header={children?.[0].textBlock?.[0].header}
        copy={children?.[0].textBlock?.[0].copy}
      />
      <div className="px-4 lg:px-0 mb-12 md:mb-0">
        <ImageWithLabel
          ratio="3:4"
          src={children[0].singleMedia?.[0].image?.[0].url}
          alt={children[0].singleMedia?.[0].alt}
          label={children[0].singleMedia?.[0].label}
        />
      </div>
    </div>
    <div className="md:w-1/2 lg:pl-12">
      <div className="px-4 lg:px-0 lg:pr-16">
        {children[1].singleMedia?.alt}
        <ImageWithLabel
          ratio="3:4"
          src={children?.[1].singleMedia?.[0].image?.[0].url}
          alt={children[1].singleMedia?.[0].alt}
          label={children[1].singleMedia?.[0].label}
        />
      </div>
      <TextBlockComponent
        className="my-10 md:my-16 px-4 lg:px-0 lg:pr-16"
        header={children?.[1].textBlock?.[0].header}
        copy={children?.[1].textBlock?.[0].copy}
      />
    </div>
  </div>
)

export const HorizontalImageTextBlockComponent = ({
  content,
  layout,
  media,
}: HorizontalImageTextBlock) => {
  const image = <img src={`${media.image.publicURL}?q=30&w=2000`} />
  const text = (
    <div className="px-4 md:px-0 md:w-3/4 lg:w-2/3">
      <TextBlockComponent {...content} />
    </div>
  )
  return (
    <div
      className="flex flex-col md:flex-row max-w-7xl mx-auto pb-16 md:pb-32"
      data-block-type="HorizontalImageTextBlockComponent"
    >
      <div
        className={clsx(
          `md:w-1/2 flex flex-col justify-center items-center mb-12 md:mb-0`,
          {
            ['order-2 md:order-none']: layout === 'imageOnRight',
          }
        )}
      >
        {layout === 'imageOnLeft' ? image : text}
      </div>
      <div
        className={clsx(`md:w-1/2 flex flex-col justify-center items-center`, {
          ['order-1 mb-12 md:mb-auto md:order-none']: layout === 'imageOnRight',
        })}
      >
        {layout === 'imageOnLeft' ? text : image}
      </div>
    </div>
  )
}

export const MoreDetailsBlockComponent = ({ buttonText, details }: any) => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  return (
    <div data-block-type="MoreDetailsBlockComponent">
      <div className="flex justify-center mb-10 md:mb-20">
        <InPageCta
          variant="secondary"
          onClick={() => {
            toggleIsOpen()
          }}
        >
          <span className="flex items-center group">
            {isOpen ? (
              <CaretUpIcon className="inline-block text-red mr-2 text-lg group-hover:text-white" />
            ) : (
              <CaretDownIcon className="inline-block text-red mr-2 text-lg group-hover:text-white" />
            )}
            <span>{buttonText}</span>
          </span>
        </InPageCta>
      </div>
      <div className="overflow-hidden mb-10">
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
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div>
                {details.map((child: any, index: number) => {
                  const extractedBlock: HorizontalImageTextBlock = {
                    type: 'horizontal-image-text',
                    layout: child.layout,
                    content: {
                      header: child.header as string,
                      copy: child.copy as string,
                    },
                    media: {
                      image: {
                        publicURL: child.image as string,
                      },
                    },
                  }
                  return (
                    <HorizontalImageTextBlockComponent
                      key={`${child.header} - ${index}`}
                      {...extractedBlock}
                    />
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export const TwoUpImageBlock = ({
  className,
  images,
}: {
  className?: string
  images: [Media, Media]
}) => (
  <div
    className={clsx('max-w-7xl mx-auto sm:flex', className)}
    data-block-type="TwoUpImageBlock"
  >
    <div className="sm:first:pr-4 mb-16 md:mb-0 flex-1">
      <AspectRatio ratio="3:4">
        <img
          src={`${images[0].singleMedia?.[0].image?.[0].url}?q=30&w=1000`}
          alt=""
          className="h-full w-full object-cover"
          style={{ position: 'absolute' }}
        />
      </AspectRatio>
    </div>
    <div className="sm:last:pl-4 mb-16 md:mb-0 flex-1">
      <AspectRatio ratio="3:4">
        <img
          src={images[1].singleMedia?.[0].image?.[0].url}
          alt=""
          className="h-full w-full object-cover"
          style={{ position: 'absolute' }}
        />
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
  <div
    className={clsx('sm:flex max-w-7xl mx-auto', className)}
    data-block-type="ThreeUpImageBlock"
  >
    {!!images &&
      !!images.length &&
      images.map((media) => {
        return (
          <div
            key={media?.singleMedia?.[0].image?.[0].url}
            className="px-4 mb-16 sm:w-1/3"
          >
            <ImageWithLabel
              ratio="3:4"
              src={`${media?.singleMedia?.[0].image?.[0].url}?q=30&w=1000`}
              alt={media.alt || ''}
              label={media?.singleMedia?.[0].label}
            />
          </div>
        )
      })}
  </div>
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
  <div className={className} data-block-type="TextBlockComponent">
    <Typography variant="e2" className="mb-4">
      {header}
    </Typography>
    <Typography variant="p2">{copy}</Typography>
  </div>
)

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
  <div
    className={clsx(
      'max-w-7xl 3xl:max-w-10xl mx-auto relative md:mt-16',
      className
    )}
  >
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

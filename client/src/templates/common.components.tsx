import React, { useState, useEffect, Fragment } from 'react'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { Theme } from '../types/shared'
import clsx from 'clsx'
import { ArrowIcon, CaretDownIcon, CaretUpIcon, AngleIcon } from '../svgs/icons'
import { CircleButton } from '../atoms/circle-button'
import { AspectRatio, AspectRatioProps, Ratio } from '../atoms/aspect-ratio'
import { VerticalHeader } from '../atoms/vertical-header'
import { VerticalLabel } from '../atoms/vertical-label'
import { AnimatePresence, motion } from 'framer-motion'
import { useToggle } from 'react-use'
import { AutoplayVideo } from '../atoms/autoplay-video'
import Select, { components } from 'react-select'

export const extractFlexibleSectionsFromCraft = (entry: any) => {
  const blockTypes = {
    oneColumnTextBlock: 'one-column-text',
    oneColumnImageTextBlock: 'one-column-image-text',
    twoColumnImageTextBlock: 'two-column-image-text',
    twoColumnImagesBlock: 'two-column-images',
    threeColumnImagesBlock: 'three-column-images',
    sliderBlock: 'slider',
    carousel: 'carousel',
    fullWidthCarousel: 'full-width-carousel',
    horizontalImageText: 'horizontal-image-text',
    powertrainOptions: 'powertrain',
    moreDetails: 'more-details',
  }

  return entry.flexibleSections.map((section: any) => {
    const blocks = section.blocks.map(
      (block: any, index: Number, blocks: any[]) => {
        const getBlockPosition = () => {
          if (index === 0) {
            return 'first'
          }
          if (index === blocks.length - 1) {
            return 'last'
          }
          return 'middle'
        }

        return {
          ...block,
          source: 'craft',
          blockPosition: getBlockPosition(),
          type:
            block.typeHandle === 'carousel' && block.fullWidth
              ? 'full-width-carousel'
              : blockTypes[block.typeHandle as keyof typeof blockTypes],
        }
      }
    )

    return {
      type: 'flexible',
      title: section.title,
      theme: section.theme,
      bleedDirection: section.bleedDirection,
      headerImage: !!section.headerImage.length && section.headerImage[0].url,
      blocks,
      moreDetails: [],
    }
  })
}

export const createCarouselItems = (items: any) => {
  return items.map((item) => {
    return {
      content: {
        copy: item.textBlock?.[0].copy,
        header: item.textBlock?.[0].header,
      },
      media: {
        image: item.singleMedia?.[0].image?.[0]?.url,
        videoUrl: item.singleMedia?.[0]?.videoURL,
        autoplayVideo: item.singleMedia?.[0]?.autoplayVideo,
      },
    }
  })
}

export const GenericSection: React.FC<{
  theme?: Theme
  className?: string
}> = ({ children, className, theme = 'light', ...rest }) => (
  <section
    className={clsx(
      'relative overflow-hidden',
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
}) => {
  return (
    <div className={clsx(className)} data-block-type="SideBleedImage">
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
}

export const CategoryFilter = ({
  categories,
  setFilterCategory,
  filterCategory,
}) => {
  return (
    <Fragment>
      <DropdownNav
        className="md:hidden"
        placeholder="Explore _Labs"
        options={categories}
        onChange={(option) => {
          setFilterCategory(option)
        }}
      />
      <ul className="hidden md:flex justify-center pb-12 ">
        {categories.map((category) => {
          return (
            <li
              key={category.label}
              className="mx-5 cursor-pointer relative"
              onClick={() => {
                setFilterCategory(category)
              }}
            >
              {category.label === filterCategory.label && (
                <span
                  className="md:block absolute bg-red top-1/2 transform -translate-y-1/2"
                  style={{ height: '2px', width: '100%' }}
                ></span>
              )}
              <Typography variant="e1">{category.label}</Typography>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

export const Categories = ({
  categories = [],
  className = '',
  align,
}: {
  categories: any[]
  className?: string
  align?: string
}) => {
  return (
    <div className={`categories ${className}`}>
      {categories.length > 1 && (
        <div
          className={`flex ${
            align === 'left'
              ? 'justify-start'
              : 'justify-center md:justify-start'
          }`}
        >
          <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
          {categories.map((category: any, i) => {
            return (
              <Typography key={`${category.title}-${i}`} variant="e3">
                {category.title}
              </Typography>
            )
          })}
        </div>
      )}
      {categories.length === 1 && (
        <div
          className={`flex items-center ${
            align === 'left' ? 'justify-start' : 'justify-center'
          }`}
        >
          <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
          <Typography variant="e3">{categories[0].title}</Typography>
        </div>
      )}
    </div>
  )
}

export const DropdownNav = ({
  placeholder,
  options,
  onChange,
  className,
  theme = 'dark',
}) => {
  const [state, setstate] = useState({})

  useEffect(() => {
    setstate(document?.body)

    return () => {}
  }, [])

  return (
    <div>
      <Select
        className={`${className}`}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        menuPortalTarget={state}
        components={{
          DropdownIndicator: (props) => (
            <components.DropdownIndicator {...props}>
              <CaretDownIcon />
            </components.DropdownIndicator>
          ),
          ValueContainer: (props) => (
            <components.ValueContainer {...props}>
              <Typography variant="e2">{props.children}</Typography>
            </components.ValueContainer>
          ),
          Option: (props) => (
            <components.Option
              {...props}
              className="py-3 text-center bg-transparent screen text-white hover:bg-gray-1 hover:text-gray-6"
            >
              <Typography variant="e1">{props.children}</Typography>
            </components.Option>
          ),
        }}
        styles={{
          placeholder: (base) => ({
            ...base,
            color: theme === 'dark' ? '#fff' : '#000',
          }),
          control: (base) => ({
            ...base,
            background: 'rgba(255,255,255,0.1)',
            border: theme === 'dark' ? '1px solid #fff' : '1px solid #e0e0e0',
            borderRadius: '40px',
          }),
          clearIndicator: () => ({
            display: 'none',
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          indicatorsContainer: () => ({
            order: 1,
            padding: '0 5px 0 10px',
          }),
          dropdownIndicator: (base) => ({
            ...base,
            fontSize: '1rem',
            color: '#d12026',
          }),
          valueContainer: (base) => ({
            ...base,
            order: 2,
            padding: '10px 0',
            color: theme === 'dark' ? '#fff' : '#000',
          }),
          singleValue: (base) => ({
            ...base,
            color: theme === 'dark' ? '#fff' : '#000',
          }),
          menu: (base) => ({
            ...base,
            background: '#242424',
          }),
          option: (base, state) => ({
            ...base,
            color: '#fff',
            cursor: 'pointer',
            backgroundColor: state.isSelected ? '#d12026' : 'transparent',
            '&:active': {
              backgroundColor: '#d12026',
              color: '#fff',
            },
          }),
        }}
      />
    </div>
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
      {!!media?.videoURL ? (
        <AutoplayVideo
          image={media?.image}
          alt={media?.alt}
          videoUrl={media?.videoURL}
          videoOptions={{ controls: false }}
        />
      ) : (
        <Fragment>
          <img
            src={`${media?.image}?q=30&w=2000`}
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
          src={`${images[1].singleMedia?.[0].image?.[0].url}`}
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
      images.map((media, i) => {
        return (
          <div
            key={`${media?.singleMedia?.[0].image?.[0].url}-${i}`}
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
    {copy
      ?.split('\n')
      ?.filter(Boolean)
      .map((p) => {
        return (
          <Typography className="mb-4 last:mb-0" key={p} variant="p2">
            {p}
          </Typography>
        )
      })}
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

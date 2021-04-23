import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'gatsby'
import { Typography } from '../atoms/typography'
import { Theme } from '../types/shared'
import clsx from 'clsx'
import {
  FullBleedImageBlock,
  HorizontalImageTextBlock,
  OneColumnImageTextBlock,
  OneColumnTextBlock,
  TwoColumnImageTextBlock,
} from '../types/common'
import { AngleIcon, ArrowIcon, CaretDownIcon } from '../svgs/icons'
import SEO from '../components/seo'
import { CircleButton } from '../atoms/circle-button'
import { AspectRatio, AspectRatioProps, Ratio } from '../atoms/aspect-ratio'
import { VerticalHeader } from '../atoms/vertical-header'
import { VerticalLabel } from '../atoms/vertical-label'
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
    fullBleedImage: 'full-bleed-image',
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
            block?.typeHandle === 'carousel' && block.fullWidth
              ? 'full-width-carousel'
              : blockTypes[block?.typeHandle as keyof typeof blockTypes],
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
        'bg-gray-0 text-white': theme === 'dark',
      },
      className
    )}
    {...rest}
  >
    {children}
  </section>
)

export const PrimaryContentHero = ({ path, theme = 'light', entry }) => {
  return (
    <GenericSection className="py-12 pt-32" theme={theme}>
      <div className="px-4 max-w-screen-xl xl:max-w-screen-2xl m-auto">
        <SEO title={entry?.title} slug={path} />
        <div className="md:flex align-top justify-start content-start">
          {!!(entry.articleCategories.length !== 0) && (
            <Categories
              className="md:mr-16"
              align="left"
              categories={entry.articleCategories}
            />
          )}
          <Typography className="mb-8 max-w-screen-lg" variant="h3" md="h1">
            {entry?.title}
          </Typography>
        </div>
        <div
          className={clsx(
            `border-t border-solid`,
            { 'border-gray-1': theme === 'dark' },
            { 'border-gray-5': theme === 'light' }
          )}
        ></div>
      </div>
    </GenericSection>
  )
}

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

export const FullBleedImage = ({ image, alt = 'full bleed image' }) => (
  <img
    src={image?.[0].url}
    className={clsx('h-full w-full object-cover')}
    alt={alt || ''}
  />
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

export const ContentEntry = ({
  entry,
  entryType,
  index,
  hierarchy,
  className,
  theme = 'light',
}: {
  entryType: string
  entry: any
  index?: number
  hierarchy?: string
  className?: string
  theme?: Theme
}) => {
  const isPrimary = hierarchy === 'primary'
  const isSecondary = hierarchy === 'secondary'
  const isTertiary = hierarchy === 'tertiary'

  const date = new Date(entry.dateCreated)

  return (
    <Fragment>
      {console.log(entry)}
      {isPrimary && (
        <Link
          to={`${entry.slug}`}
          className={clsx(
            `block border-solid border-t md:pt-16`,
            { 'border-gray-1': theme === 'dark' },
            { 'border-gray-5': theme === 'light' },
            className
          )}
        >
          <div className="md:flex pt-5 flex-col md:mb-24">
            <div className="w-full mb-10 md:order-2">
              {!!entry?.image?.[0] && (
                <AspectRatio ratio="1:1" md="16:9" className="">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={`${entry.image[0]?.url}?q=30&w=2400`}
                    alt=""
                  />
                </AspectRatio>
              )}
            </div>
            <div className={clsx('w-full md:order-1')}>
              <Categories
                className="mb-3"
                categories={entry.articleCategories}
              />
              <div className="text-center px-3">
                <Typography className="mb-4" variant="h4" sm="h3" md="h1">
                  {entry.title}
                </Typography>
                <Typography
                  className="max-w-screen-sm m-auto mb-8 text-gray-3"
                  variant="p3"
                >
                  {entry.articleExcerpt}
                </Typography>
                <Typography variant="e3" className="date text-gray-4 mb-8">
                  {`${
                    date.getMonth() + 1
                  }.${date.getDate()}.${date.getFullYear()}`}
                </Typography>
              </div>
            </div>
          </div>
        </Link>
      )}
      {isSecondary && (
        <Link
          to={`${entry.slug}`}
          className={clsx(
            'block border-solid border-t',
            { 'border-gray-1': theme === 'dark' },
            { 'border-gray-5': theme === 'light' }
          )}
        >
          <div className="mb-12 md:mb-24 md:flex pt-5">
            <div
              className={clsx('md:w-1/2 mb-10', {
                ['md:order-2']: index % 2 === 0,
              })}
            >
              {!!entry?.image?.[0] ? (
                <AspectRatio ratio="1:1" md="16:9" className="">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={`${entry.image[0]?.url}?q=30&w=2400`}
                    alt=""
                  />
                </AspectRatio>
              ) : (
                <AspectRatio ratio="1:1" md="16:9" className="">
                  <img
                    className="absolute h-full w-full object-cover"
                    src="https://via.placeholder.com/1000x1000"
                    alt=""
                  />
                </AspectRatio>
              )}
            </div>
            <div
              className={clsx('md:w-1/2', {
                ['md:order-1']: index % 2 === 0,
                ['md:ml-6']: index % 2 != 0,
              })}
            >
              <Categories
                align="left"
                className="mb-3"
                categories={entry.articleCategories}
              />
              <div className="text-center md:text-left px-3">
                <Typography className="mb-4" variant="h4" sm="h3" md="h2">
                  {entry.title}
                </Typography>
                <Typography
                  className="max-w-screen-sm m-auto mb-8 text-gray-3"
                  variant="p3"
                >
                  {entry.articleExcerpt}
                </Typography>
                <Typography variant="e3" className="date text-gray-4">
                  {`${
                    date.getMonth() + 1
                  }.${date.getDate()}.${date.getFullYear()}`}
                </Typography>
              </div>
            </div>
          </div>
        </Link>
      )}
      {isTertiary && (
        <Link
          to={`/${entryType}/${entry.slug}`}
          className={clsx('block', className)}
          data-type="tertiary link"
        >
          <div className="pt-5 flex flex-col h-full">
            <div className="mb-10">
              {!!entry?.image?.[0] ? (
                <AspectRatio ratio="1:1" md="16:9" className="">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={`${entry.image[0]?.url}?q=30&w=2400`}
                    alt=""
                  />
                </AspectRatio>
              ) : (
                <AspectRatio ratio="1:1" md="16:9" className="">
                  <img
                    className="absolute h-full w-full object-cover"
                    src="https://via.placeholder.com/1000x1000"
                    alt=""
                  />
                </AspectRatio>
              )}
            </div>
            <div className="h-full">
              <div className="flex justify-between content-between flex-col h-full">
                <div>
                  <Categories
                    align="left"
                    className="mb-3"
                    categories={entry.articleCategories}
                  />
                  <Typography className="mb-10" variant="h5" md="h4">
                    {entry.title}
                  </Typography>
                  <Typography
                    className="hidden md:block max-w-screen-sm m-auto mb-8 text-gray-3"
                    variant="p3"
                    md="p1"
                  >
                    {entry.articleExcerpt}
                  </Typography>
                </div>
                <div>
                  <Typography variant="e3" className="date text-gray-4">
                    {`${
                      date.getMonth() + 1
                    }.${date.getDate()}.${date.getFullYear()}`}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </Fragment>
  )
}

export const FilteredList = ({ entries, entryType, theme = 'light' }) => {
  return (
    <div>
      {!!entries.length ? (
        entries.map((articleEntry: any, i: number) => (
          <ContentEntry
            entryType={entryType}
            key={`${articleEntry.id}`}
            index={i}
            entry={articleEntry}
            hierarchy="secondary"
            theme={theme}
          />
        ))
      ) : (
        <div>No Entries</div>
      )}
    </div>
  )
}

export const UnFilteredList = ({ entries, entryType, theme = 'light' }) => {
  const nextTwoEntries = entries.slice(1, 3)
  const remainingEntries = entries.slice(3)

  return (
    <Fragment>
      <div>
        <ContentEntry
          entryType={entryType}
          key={`${entries[0].id}`}
          entry={entries[0]}
          hierarchy="primary"
          theme={theme}
        />
      </div>
      <div className="nextTwo">
        {!!nextTwoEntries.length ? (
          nextTwoEntries.map((articleEntry: any, i: number) => (
            <ContentEntry
              entryType={entryType}
              hierarchy="secondary"
              key={`${articleEntry.id}`}
              index={i}
              entry={articleEntry}
              theme={theme}
            />
          ))
        ) : (
          <div>No Entries</div>
        )}
      </div>
      <div
        className={clsx(
          `remaining grid grid-cols-2 col-gap-4 lg:grid-cols-3 lg:col-gap-6 border-solid border-t`,
          { 'border-gray-1': theme === 'dark' },
          { 'border-gray-5': theme === 'light' }
        )}
      >
        {!!remainingEntries.length ? (
          remainingEntries.map((articleEntry: any, i: number) => (
            <ContentEntry
              entryType={entryType}
              hierarchy="tertiary"
              key={`${articleEntry.id}`}
              index={i}
              entry={articleEntry}
            />
          ))
        ) : (
          <div>No Entries</div>
        )}
      </div>
    </Fragment>
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

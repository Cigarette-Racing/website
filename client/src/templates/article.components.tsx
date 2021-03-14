import React, { Fragment, useEffect, useState } from 'react'
import clsx from 'clsx'
import Select, { components } from 'react-select'
import { CaretDownIcon, AngleIcon } from '../svgs/icons'
import { Typography } from '../atoms/typography'

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
  }
  return entry?.flexibleSections?.map((section: any) => {
    const blocks = section?.blocks?.map(
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
      id: section.id || Math.random,
      title: section.title,
      theme: section.theme,
      bleedDirection: section.bleedDirection,
      headerImage: !!section.headerImage.length && section.headerImage[0].url,
      blocks,
      moreDetails: [],
    }
  })
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

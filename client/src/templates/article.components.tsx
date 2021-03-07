import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { PageProps, graphql, Link } from 'gatsby'
import Select, { components } from 'react-select'
import { ContentHeader } from '../atoms/content-header'
import { CaretDownIcon, CaretUpIcon, AngleIcon } from '../svgs/icons'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'
import { ValueContainer } from 'react-select/src/components/containers'

export const Categories = ({
  categories = [],
  align,
}: {
  categories: any[]
  align?: string
}) => {
  return (
    <div className="categories mt-10 mb-2">
      {categories.length > 1 && (
        <div
          className={`flex items-center ${
            align === 'left' ? 'justify-start' : 'justify-center'
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

const bodyElement = document.body

export const DropdownNav = ({ placeholder, options, onChange }) => {
  return (
    <div>
      <Select
        className="mb-12"
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        menuPortalTarget={bodyElement}
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
            color: '#fff',
          }),
          control: (base) => ({
            ...base,
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid #fff',
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
            color: '#fff',
          }),
          singleValue: (base) => ({
            ...base,
            color: '#fff',
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

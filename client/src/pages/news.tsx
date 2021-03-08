import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { PageProps, graphql, Link } from 'gatsby'
import Select, { components } from 'react-select'
import { ContentHeader } from '../atoms/content-header'
import { AspectRatio } from '../atoms/aspect-ratio'
import { CaretDownIcon, CaretUpIcon, AngleIcon } from '../svgs/icons'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'
import { useCategoriesQuery } from '../molecules/categories-data'
import {
  GenericSection,
  Categories,
  DropdownNav,
} from '../templates/article.components'

const NewsArticlesPage = (
  props: PageProps<GatsbyTypes.newsArticlesPageQuery>
) => {
  const [filterCategory, setFilterCategory] = useState({
    value: 'all',
    label: 'All',
  })

  const {
    data: {
      craftAPI: { entries: articleEntries, entry: LandingPage },
    },
  } = props

  const options = useCategoriesQuery()

  const filteredEntries = articleEntries.filter((entry) => {
    if (filterCategory.label === 'All') {
      return entry
    }

    const hasCategory = entry.articleCategories.map((category) => {
      if (category.title === filterCategory.label) {
        return true
      } else {
        return false
      }
    })
    if (hasCategory[0]) {
      return entry
    }
  })

  return (
    <Layout>
      <GenericSection className="pt-48">
        <SEO title="All News" slug={props.path} />
        <div className="relative flex justify-center tracking-wide text-gray-5 capitalize whitespace-no-wrap font-normal text-9xl lg:text-huge leading-10 font-heading mb-8 text-center">
          <span>{LandingPage.title}</span>
        </div>
        <div className="px-4 max-w-screen-xl m-auto">
          <Typography className="mb-24" variant="p3">
            {LandingPage.articleExcerpt}
          </Typography>
          <DropdownNav
            className="md:hidden"
            placeholder="Explore Stories"
            options={options}
            theme="light"
            onChange={(option) => {
              setFilterCategory(option)
            }}
          />
          <ul className="hidden md:flex justify-center pb-12 ">
            {options.map((option) => {
              const selected = option.label === filterCategory.label
              return (
                <li
                  key={option.label}
                  className="mx-5 cursor-pointer relative"
                  onClick={() => {
                    setFilterCategory(option)
                  }}
                >
                  {selected && (
                    <span
                      className="md:block absolute bg-red top-1/2 transform -translate-y-1/2"
                      style={{ height: '2px', width: '100%' }}
                    ></span>
                  )}
                  <Typography
                    variant="e1"
                    className={clsx({ ['text-gray-4']: !selected })}
                  >
                    {option.label}
                  </Typography>
                </li>
              )
            })}
          </ul>
          {/* <NewsDropdownNav /> */}
          {filterCategory.value === 'all' ? (
            <UnFilteredList entries={articleEntries} />
          ) : (
            <FilteredList entries={filteredEntries} />
          )}
        </div>
      </GenericSection>
    </Layout>
  )
}

const NewsArticle = ({ articleEntry, index, isPrimary = false }: any) => {
  return (
    <Link
      to={`${articleEntry.slug}`}
      className={clsx('block border-solid border-gray-5', {
        ['border-0 md:border-t']: isPrimary,
        ['border-t']: !isPrimary,
      })}
    >
      <div
        className={clsx('mb-5 md:flex pt-5', {
          ['flex-col mb-24']: isPrimary,
        })}
      >
        <div
          className={clsx(isPrimary ? 'w-full order-2' : 'md:w-1/2', {
            ['md:order-2']: index % 2 === 0,
          })}
        >
          {!!articleEntry.image[0] && (
            <AspectRatio ratio="1:1" md="16:9" className="">
              <img
                className="absolute h-full w-full object-cover"
                src={`${articleEntry.image[0]?.url}?q=30&w=2400`}
                alt=""
              />
            </AspectRatio>
          )}
        </div>
        <div
          className={clsx(isPrimary ? 'w-full order-1' : 'md:w-1/2', {
            ['md:order-1']: index % 2 === 0,
          })}
        >
          <Categories categories={articleEntry.articleCategories} />
          <div className="text-center px-3">
            <Typography className="mb-4" variant="h4">
              {articleEntry.title}
            </Typography>
            <Typography className="max-w-screen-sm m-auto mb-24" variant="p3">
              {articleEntry.articleExcerpt}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  )
}

const FilteredList = ({ entries }) => {
  return (
    <div>
      {!!entries.length ? (
        entries.map((articleEntry: any, i: number) => (
          <NewsArticle
            key={`${articleEntry.id}`}
            index={i}
            articleEntry={articleEntry}
          />
        ))
      ) : (
        <div>No Entries</div>
      )}
    </div>
  )
}

const UnFilteredList = ({ entries }) => {
  const entriesMinusFirst = entries.slice(1)

  return (
    <Fragment>
      <div>
        <NewsArticle
          key={`${entries[0].id}`}
          articleEntry={entries[0]}
          isPrimary={true}
        />
      </div>
      <div>
        {!!entriesMinusFirst.length ? (
          entriesMinusFirst.map((articleEntry: any, i: number) => (
            <NewsArticle
              key={`${articleEntry.id}`}
              index={i}
              articleEntry={articleEntry}
            />
          ))
        ) : (
          <div>No Entries</div>
        )}
      </div>
    </Fragment>
  )
}

const NewsDropdownNav = () => {
  const options = useCategoriesQuery()
  return (
    <Select
      className="mb-12"
      options={options}
      placeholder={'EXPLORE STORIES'}
      components={{
        ValueContainer: (props) => (
          <components.ValueContainer {...props}>
            <Typography variant="e2">{props.children}</Typography>
          </components.ValueContainer>
        ),
        DropdownIndicator: (props) => (
          <components.DropdownIndicator {...props}>
            <CaretDownIcon />
          </components.DropdownIndicator>
        ),
      }}
      styles={{
        placeholder: (base) => ({
          ...base,
          color: '#000',
        }),
        control: (base) => ({
          ...base,
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid #e0e0e0',
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
          color: '#000',
        }),
        singleValue: (base) => ({
          ...base,
          color: '#000',
        }),
        menu: (base) => ({
          ...base,
          background: '#242424',
        }),
        option: (base, state) => ({
          ...base,
          background: 'transparent',
          color: '#fff',
          '&:hover': {
            color: '#000',
            background: '#D12026',
          },
        }),
      }}
    />
  )
}

export default NewsArticlesPage

export const query = graphql`
  query {
    craftAPI {
      entries(type: "newsArticle") {
        ... on CraftAPI_newsArticles_newsArticle_Entry {
          slug
          id
          articleExcerpt
          title
          image {
            url
          }
          articleCategories {
            id
            title
          }
          articleTags {
            id
            title
          }
        }
      }
      entry(type: "newsArticles") {
        ... on CraftAPI_newsArticles_newsArticles_Entry {
          slug
          id
          title
        }
      }
    }
  }
`

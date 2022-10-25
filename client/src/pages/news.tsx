import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import { PageProps, graphql } from 'gatsby'
import Select, { components } from 'react-select'
import { CaretDownIcon } from '../svgs/icons'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'
import { useCategoriesQuery } from '../molecules/categories-data'
import {
  CategoryFilter,
  DropdownNav,
  FilteredList,
  GenericSection,
  UnFilteredList,
} from '../templates/common.components'

const NewsArticlesPage = (
  props: PageProps<GatsbyTypes.newsArticlesPageQuery>
) => {
  const [filterCategory, setFilterCategory] = useState({
    value: 'all',
    label: 'All',
  })

  const [landingPageTitle, setLandingPageTitle] = useState('All News')

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
      <GenericSection className="py-12 pt-48">
        <SEO title="News" slug={props.path} />
        <div className="relative flex justify-center tracking-wide text-gray-5 capitalize whitespace-no-wrap font-normal text-9xl lg:text-huge leading-10 font-heading mb-8 text-center">
          <span>{landingPageTitle}</span>
        </div>

        <div className="px-4 max-w-screen-xl m-auto">
          {!!LandingPage.articleExcerpt && (
            <Typography
              className="mb-24 md:text-center max-w-2xl m-auto"
              variant="p3"
              md="p1"
            >
              {LandingPage.articleExcerpt}
            </Typography>
          )}
          {/* <CategoryFilter
            className="mb-24 md:hidden"
            placeholder="Explore Stories"
            theme="light"
            categories={options}
            setFilterCategory={setFilterCategory}
            filterCategory={filterCategory}
          /> */}
          {filterCategory.value === 'all' ? (
            <UnFilteredList entries={articleEntries} entryType="news" />
          ) : (
            <FilteredList entries={filteredEntries} entryType="news" />
          )}
        </div>
      </GenericSection>
    </Layout>
  )
}

export default NewsArticlesPage

export const query = graphql`
  query NewsArticleLandingPage {
    craftAPI {
      entries(type: "newsArticle") {
        ... on CraftAPI_newsArticles_newsArticle_Entry {
          dateCreated
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

import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { PageProps, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import { AspectRatio } from '../atoms/aspect-ratio'
import SEO from '../components/seo'
import { useCategoriesQuery } from '../molecules/categories-data'
import {
  CategoryFilter,
  DropdownNav,
  FilteredList,
  GenericSection,
  UnFilteredList,
} from '../templates/common.components'

export const Underline = styled.span`
  display: inline-block;
  transform: translateY(4px);
  margin-right: 4px;
  width: 55px;
  height: 2px;
`

const LabsPage = (props: PageProps<GatsbyTypes.LabsLandingPageQuery>) => {
  const [filterCategory, setFilterCategory] = useState({
    value: 'all',
    label: 'All',
  })

  const {
    data: {
      craftAPI: { entries: labEntries, entry: LandingPage },
    },
  } = props

  const options = useCategoriesQuery()

  const filteredLabEntries = labEntries.filter((entry) => {
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
      <GenericSection className="py-12 pt-48" theme="dark">
        <SEO title="Labs" slug={props.path} />
        <div className="relative flex justify-center tracking-wide text-gray-5 capitalize whitespace-no-wrap font-normal text-9xl lg:text-huge leading-10 font-heading mb-16">
          <span>{LandingPage.title}</span>
        </div>
        <div className="px-4 max-w-screen-xl m-auto">
          <Typography className="mb-24 text-center" variant="p3">
            {LandingPage.articleExcerpt}
          </Typography>
          <DropdownNav
            className="mb-24 md:hidden"
            placeholder="Explore Stories"
            options={options}
            theme="light"
            onChange={(option) => {
              setFilterCategory(option)
            }}
          />
          <CategoryFilter
            categories={options}
            setFilterCategory={setFilterCategory}
            filterCategory={filterCategory}
          />
          {filterCategory.value === 'all' ? (
            <UnFilteredList
              entries={labEntries}
              entryType="labs"
              theme="dark"
            />
          ) : (
            <FilteredList
              entries={filteredLabEntries}
              entryType="labs"
              theme="dark"
            />
          )}
        </div>
      </GenericSection>
    </Layout>
  )
}

export default LabsPage

export const query = graphql`
  query LabsLandingPage {
    craftAPI {
      entry(type: "labs") {
        ... on CraftAPI_labs_labs_Entry {
          slug
          articleExcerpt
          title
        }
      }
      entries(type: "lab", hasDescendants: false) {
        id
        dateCreated
        slug
        title
        typeHandle
        ... on CraftAPI_labs_lab_Entry {
          articleCategories {
            title
          }
          articleExcerpt
          image {
            url
          }
        }
      }
    }
  }
`

import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { PageProps, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import { AspectRatio } from '../atoms/aspect-ratio'
import SEO from '../components/seo'
import { useCategoriesQuery } from '../molecules/categories-data'
import { useMedia } from 'react-use'
import {
  CategoryFilter,
  DropdownNav,
  FilteredList,
  GenericSection,
  UnFilteredList,
} from '../templates/common.components'
import labsBg from '../images/Labs_BG-SVG.svg'

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

  const isMobile = useMedia('(max-width: 767px)')

  return (
    <Layout>
      <GenericSection className="py-12 pt-48 bg-gray-0" theme="dark">
        <SEO title="Labs" slug={props.path} />
        <div className="relative px-4">
          <img
            style={{
              width: !isMobile ? '100%' : '220%',
              opacity: '35%',
            }}
            className="pointer-events-none block max-w-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-mt-16"
            src={labsBg}
            alt=""
          />
          <div className="relative flex md:justify-center tracking-wide text-gray-5 whitespace-no-wrap font-normal text-9xl lg:text-huge leading-10 font-heading mb-8 md:mb-16">
            <span className="lowercase">
              <Underline className="bg-red" />
              {LandingPage.title}
            </span>
          </div>
          <div className="md:flex items-center flex-col">
            <Typography
              className="mb-24 md:text-center max-w-2xl"
              variant="p3"
              md="p1"
            >
              {LandingPage.articleExcerpt}
            </Typography>
            <CategoryFilter
              className="mb-8"
              placeholder="Explore _Labs"
              categories={options}
              theme="light"
              setFilterCategory={setFilterCategory}
              filterCategory={filterCategory}
            />
          </div>
        </div>
        <div className="px-4 max-w-screen-xl m-auto">
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

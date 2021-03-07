import React, { useState } from 'react'
import styled from 'styled-components'
import { PageProps, graphql, Link } from 'gatsby'
import Select, { components } from 'react-select'
import { CaretDownIcon, AngleIcon } from '../svgs/icons'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import { AspectRatio } from '../atoms/aspect-ratio'
import SEO from '../components/seo'
import { useCategoriesQuery } from '../molecules/categories-data'

import {
  GenericSection,
  Categories,
  DropdownNav,
} from '../templates/article.components'

export const Underline = styled.span`
  display: inline-block;
  transform: translateY(4px);
  margin-right: 4px;
  width: 55px;
  height: 2px;
`

const LabsTemplate = (props: PageProps<GatsbyTypes.LabsPageQuery>) => {
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

  console.log(options)

  const firstLabEntry = labEntries.slice(0, 1)[0]
  const allButFirstLabEntries = labEntries.slice(1)

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
      <GenericSection className="pt-48" theme="dark">
        <SEO title="Labs" slug={props.path} />
        <div className="px-4 max-w-screen-sm m-auto">
          <div className="tracking-wide lowercase text-white text-8xl font-light leading-10 font-heading mb-8">
            <Underline className="bg-red" />
            {LandingPage.title}
          </div>
          <Typography className="mb-24" variant="p3">
            {LandingPage.articleExcerpt}
          </Typography>
          <DropdownNav
            placeholder="Explore _Labs"
            options={options}
            onChange={(option) => {
              setFilterCategory(option)
            }}
          />

          {!!filteredLabEntries.length ? (
            filteredLabEntries.map((labEntry: any) => (
              <Lab key={`${labEntry.id}`} labEntry={labEntry} />
            ))
          ) : (
            <div>No Entries</div>
          )}
          {console.log()}
        </div>
      </GenericSection>
    </Layout>
  )
}

const Lab = ({ labEntry }: any) => {
  return (
    <Link to={`${labEntry.slug}`}>
      <div
        data-type="lab-entry"
        className="border-b border-solid border-gray-1 mb-5 md:flex"
      >
        <div className="w-1/2">
          <AspectRatio ratio="1:1" className="">
            <img
              className="absolute h-full w-full object-cover"
              src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`}
              alt=""
            />
          </AspectRatio>
        </div>
        <div className="w-1/2">
          <Categories categories={labEntry.articleCategories} />
          <div className="text-center">
            <Typography className="mb-4" variant="h4">
              {labEntry.title}
            </Typography>
            <Typography className="max-w-screen-sm m-auto mb-24" variant="p3">
              {labEntry.articleExcerpt}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LabsTemplate

export const query = graphql`
  query {
    craftAPI {
      entry(type: "landingPage") {
        ... on CraftAPI_labs_landingPage_Entry {
          slug
          articleExcerpt
          title
        }
      }
      entries(section: "labs", hasDescendants: false) {
        id
        slug
        title
        typeHandle
        ... on CraftAPI_labs_labs_Entry {
          articleCategories {
            title
          }
          articleExcerpt
          imageObject {
            ... on CraftAPI_imageObject_BlockType {
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`

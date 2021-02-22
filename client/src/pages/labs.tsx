import React from 'react'
import styled from 'styled-components'
import { PageProps, graphql, Link } from 'gatsby'
import Select, { components } from 'react-select'
import { CaretDownIcon, AngleIcon } from '../svgs/icons'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'

import {
  GenericSection,
  Categories,
  DropdownNav,
} from '../templates/article.components'

const Underline = styled.span`
  display: inline-block;
  transform: translateY(4px);
  margin-right: 4px;
  width: 55px;
  height: 2px;
`

const LabsTemplate = (props: PageProps<GatsbyTypes.LabsPageQuery>) => {
  const {
    data: {
      craftAPI: { entries: labEntries, entry: LandingPage },
    },
  } = props

  const firstLabEntry = labEntries.slice(0, 1)[0]
  const allButFirstLabEntries = labEntries.slice(1)

  return (
    <Layout>
      <GenericSection className="pt-48" theme="dark">
        <SEO title="Labs" slug={props.path} />
        <div className="px-4 max-w-screen-xl m-auto">
          <div className="tracking-wide lowercase text-white text-8xl font-light leading-10 font-heading mb-8">
            <Underline className="bg-red" />
            {LandingPage.title}
          </div>
          <Typography className="mb-24" variant="p3">
            {LandingPage.articleExcerpt}
          </Typography>
          <DropdownNav />
          <PrimaryLab labEntry={firstLabEntry} />
          {allButFirstLabEntries.map((labEntry: any) => {
            return <Lab key={`${labEntry.id}`} labEntry={labEntry} />
          })}
        </div>
      </GenericSection>
    </Layout>
  )
}

const PrimaryLab = ({ labEntry }: any) => {
  return (
    <Link to={`${labEntry.slug}`}>
      <div
        data-type="lab-entry"
        className="border-b border-solid border-gray-1 mb-5"
      >
        <img
          className="sm:hidden"
          src={`${labEntry.imageObject[0].image[0].url}?q=30&w=1000`}
          alt=""
        />
        <div className="categories mt-10 mb-2">
          {labEntry.articleCategories.length > 1 && (
            <div className="flex items-center justify-center">
              <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
              {labEntry.articleCategories.map((category: any) => {
                return <Typography variant="e3">{category.title}</Typography>
              })}
            </div>
          )}
          {labEntry.articleCategories.length === 1 && (
            <div className="flex items-center justify-center">
              <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
              <Typography variant="e3">
                {labEntry.articleCategories[0].title}
              </Typography>
            </div>
          )}
        </div>
        <div className="text-center">
          <Typography className="mb-4" variant="h4">
            {labEntry.title}
          </Typography>
          <Typography className="mb-24" variant="p3">
            {labEntry.articleExcerpt}
          </Typography>
        </div>
        <img
          className="hidden sm:block"
          src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`}
          alt=""
        />
      </div>
    </Link>
  )
}

const Lab = ({ labEntry }: any) => {
  return (
    <Link to={`${labEntry.slug}`}>
      <div
        data-type="lab-entry"
        className="border-b border-solid border-gray-1 mb-5"
      >
        <img
          className="sm:hidden"
          src={`${labEntry.imageObject[0].image[0].url}?q=30&w=1000`}
          alt=""
        />
        <Categories categories={labEntry.articleCategories} />
        <div className="text-center">
          <Typography className="mb-4" variant="h4">
            {labEntry.title}
          </Typography>
          <Typography className="mb-24" variant="p3">
            {labEntry.articleExcerpt}
          </Typography>
        </div>
        <img
          className="hidden sm:block"
          src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`}
          alt=""
        />
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

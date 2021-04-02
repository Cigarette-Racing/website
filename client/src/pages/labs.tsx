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
  GenericSection,
  Categories,
  CategoryFilter,
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
      <GenericSection className="pt-48 py-12" theme="dark">
        <SEO title="Labs" slug={props.path} />
        <div className="px-4 max-w-screen-sm lg:max-w-screen-xl m-auto">
          <div className="tracking-wide lowercase text-white text-8xl font-light leading-10 font-heading mb-8 md:text-center md:text-huge">
            <Underline className="bg-red" />
            {LandingPage.title}
          </div>
          <Typography className="mb-24 md:text-center" variant="p3">
            {LandingPage.articleExcerpt}
          </Typography>
          <CategoryFilter
            categories={options}
            setFilterCategory={setFilterCategory}
            filterCategory={filterCategory}
          />
          {filterCategory.value === 'all' ? (
            <UnFilteredList entries={labEntries} />
          ) : (
            <FilteredList entries={filteredLabEntries} />
          )}
        </div>
      </GenericSection>
    </Layout>
  )
}

const FilteredList = ({ entries }) => {
  return (
    <div>
      {!!entries.length ? (
        entries.map((labEntry: any, i: number) => (
          <Lab key={`${labEntry.id}`} index={i} labEntry={labEntry} />
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
        <Lab key={`${entries[0].id}`} labEntry={entries[0]} isPrimary={true} />
      </div>
      <div>
        {!!entriesMinusFirst.length ? (
          entriesMinusFirst.map((labEntry: any, i: number) => (
            <Lab key={`${labEntry.id}`} index={i} labEntry={labEntry} />
          ))
        ) : (
          <div>No Entries</div>
        )}
      </div>
    </Fragment>
  )
}

const Lab = ({ labEntry, index, isPrimary = false }: any) => {
  return (
    <Link
      to={`${labEntry.slug}`}
      className={clsx('block border-solid border-gray-1', {
        ['border-0 md:border-t']: isPrimary,
        ['border-t']: !isPrimary,
      })}
    >
      <div
        data-type="lab-entry"
        className={clsx('mb-5 md:flex pt-5', {
          ['flex-col mb-24']: isPrimary,
        })}
      >
        <div
          className={clsx(isPrimary ? 'w-full order-2' : 'md:w-1/2', {
            ['md:order-2']: index % 2 === 0,
          })}
        >
          <AspectRatio ratio="1:1" md="16:9" className="">
            <img
              className="absolute h-full w-full object-cover"
              src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`}
              alt=""
            />
          </AspectRatio>
        </div>
        <div
          className={clsx(isPrimary ? 'w-full order-1' : 'md:w-1/2', {
            ['md:order-1']: index % 2 === 0,
          })}
        >
          <Categories
            className="mt-10 mb-4"
            categories={labEntry.articleCategories}
          />
          <div className="text-center px-3">
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

export default LabsPage

export const query = graphql`
  query LabsLandingPage {
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
        dateCreated
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

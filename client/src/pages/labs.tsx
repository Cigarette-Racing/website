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
  DropdownNav,
} from '../templates/article.components'

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
      <GenericSection className="pt-48" theme="dark">
        <SEO title="Labs" slug={props.path} />
        <div className="px-4 max-w-screen-sm lg:max-w-screen-xl m-auto">
          <div className="tracking-wide lowercase text-white text-8xl font-light leading-10 font-heading mb-8 md:text-center md:text-huge">
            <Underline className="bg-red" />
            {LandingPage.title}
          </div>
          <Typography className="mb-24 md:text-center" variant="p3">
            {LandingPage.articleExcerpt}
          </Typography>
          <DropdownNav
            className="md:hidden"
            placeholder="Explore _Labs"
            options={options}
            onChange={(option) => {
              setFilterCategory(option)
            }}
          />
          <ul className="hidden md:flex justify-center pb-12 ">
            {options.map((option) => {
              return (
                <li
                  key={option.label}
                  className="mx-5 cursor-pointer relative"
                  onClick={() => {
                    setFilterCategory(option)
                  }}
                >
                  {option.label === filterCategory.label && (
                    <span
                      className="md:block absolute bg-red top-1/2 transform -translate-y-1/2"
                      style={{ height: '2px', width: '100%' }}
                    ></span>
                  )}
                  <Typography variant="e1">{option.label}</Typography>
                </li>
              )
            })}
          </ul>
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
  console.log(entries)
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

  console.log(entriesMinusFirst)

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
  console.log(labEntry.dataCreated)
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
          <Categories categories={labEntry.articleCategories} />
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

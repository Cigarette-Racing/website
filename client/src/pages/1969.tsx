import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import {
  Stat,
  CommonSectionProps,
  getFlexibleSections,
  findCustomizationsSection,
  isTwoColumnImageTextBlock,
  isOneColumnTextBlock,
  isCarouselBlock,
  isTwoColumnImagesBlock,
  isThreeColumnImagesBlock,
  isSliderBlock,
  isFullWidthCarouselBlock,
  isOneColumnImageTextBlock,
  isPowertrainBlock,
  isMoreDetailsBlock,
  isHorizontalImageTextBlock,
  HorizontalImageTextBlock,
} from '../types/boat'

import { extractFlexibleSectionsFromCraft } from '../templates/boat'

const Legacy1969Page = (props: PageProps<GatsbyTypes.Legacy1969PageQuery>) => {
  const {
    data: {
      craftAPI: { legacy1969: page },
    },
  } = props

  const flexData = getFlexibleSections(extractFlexibleSectionsFromCraft(page))

  return (
    <Layout>
      <SEO title="Our Legacy - 1969" />
      <section className="bg-black text-white pt-32 pb-4 md:min-h-screen flex flex-col justify-between relative">
        <div className="mb-8 absolute md:h-full md:top-0 w-full">
          <img
            srcSet={`${page.image[0].url}?q=30&w=2000 3x, ${page.image[0].url}?q=30&w=1500 2x, ${page.image[0].url}?q=30&w=1000 1x`}
            src={`${page.image[0].url}?q=30&w=2000`}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative">
          <Typography variant="e3">OUR LEGACY</Typography>
          <Typography variant="h3">Ignoring Gravity </Typography>
          <Typography variant="h3" className="text-red">
            since 1969
          </Typography>
        </div>
      </section>
    </Layout>
  )
}

export default Legacy1969Page

export const query = graphql`
  query Legacy1969Page {
    craftAPI {
      legacy1969: entry(slug: "1969-our-legacy") {
        ... on CraftAPI_ourLegacy_ourLegacy_Entry {
          id
          image {
            url
          }
          flexibleSections {
            ... on CraftAPI_flexibleSections_flexibleSection_BlockType {
              id
              children {
                ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`

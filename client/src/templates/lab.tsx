import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { useMedia } from 'react-use'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import { NewsArticle } from '../pages/news'
import {
  Categories,
  createCarouselItems,
  extractFlexibleSectionsFromCraft,
  GenericSection,
  HorizontalImageTextBlockComponent,
  OneColumnImageTextBlockComponent,
  OneColumnTextBlockComponent,
  SideBleedImage,
  ThreeUpImageBlock,
  TwoColumnImageTextBlockComponent,
  TwoUpImageBlock,
} from './common.components'
import {
  getFlexibleSections,
  HorizontalImageTextBlock,
  isCarouselBlock,
  isFullWidthCarouselBlock,
  isHorizontalImageTextBlock,
  isOneColumnImageTextBlock,
  isOneColumnTextBlock,
  isSliderBlock,
  isThreeColumnImagesBlock,
  isTwoColumnImagesBlock,
  isTwoColumnImageTextBlock,
} from '../types/common'
import { Carousel } from '../molecules/carousel'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { Slider } from '../molecules/slider'

const LabTemplate = (props: PageProps<GatsbyTypes.LabPageQuery>) => {
  const {
    data: {
      craftAPI: { entry: labEntry, entries: allLabs },
    },
  } = props

  const relatedLabs = allLabs.filter((article) => {
    return labEntry.id != allLabs.id
  })

  const flexData = getFlexibleSections(
    extractFlexibleSectionsFromCraft(labEntry)
  )

  const date = new Date(labEntry.dateCreated)

  const isMobile = useMedia('(max-width: 767px)')

  return (
    <Layout>
      <GenericSection className="py-12 pt-32" theme="dark">
        <div className="px-4 max-w-screen-xl xl:max-w-screen-2xl m-auto">
          <SEO title={labEntry.title} slug={props.path} />
          <div className="md:flex align-top justify-start content-start">
            <Categories
              className="md:mr-16"
              align="left"
              categories={labEntry.articleCategories}
            />
            <Typography className="mb-8 max-w-screen-lg" variant="h3" md="h1">
              {labEntry.title}
            </Typography>
          </div>
          <div className="border-t border-solid border-gray-5"></div>
        </div>
      </GenericSection>
      {flexData.map(
        ({ title, theme, bleedDirection, headerImage, blocks, id }, i) => (
          <GenericSection key={id} theme="dark">
            <div className="relative px-4 max-w-screen-xl xl:max-w-screen-2xl m-auto">
              <Typography
                variant="e3"
                className="date text-gray-3 mb-4 absolute top-0 left-0 px-4"
              >
                {`${
                  date.getMonth() + 1
                }.${date.getDate()}.${date.getFullYear()}`}
              </Typography>
            </div>
            <SideBleedImage
              media={headerImage}
              side={bleedDirection}
              className="mt-0 md:m-0 mb-20 md:mb-32 pt-0"
              size="large"
            />
            {!!blocks &&
              blocks.map((block, index) => {
                if (isTwoColumnImageTextBlock(block)) {
                  return (
                    <TwoColumnImageTextBlockComponent key={index} {...block} />
                  )
                }
                if (isOneColumnTextBlock(block)) {
                  if (block.textBlock) {
                    block.copy = block.textBlock[0].copy
                    block.header = block.textBlock[0].header
                  }

                  return (
                    <OneColumnTextBlockComponent
                      key={index}
                      {...block}
                      align={block.align ?? undefined}
                    />
                  )
                }
                if (isOneColumnImageTextBlock(block)) {
                  if (block.textBlock) {
                    block.content = {
                      copy: block.textBlock[0].copy,
                      header: block.textBlock[0].header,
                    }
                    block.media = {
                      image: block.singleMedia?.[0].image?.[0]?.url,
                      videoURL: block.singleMedia?.[0].videoURL,
                      autoplayVideo: block.singleMedia?.[0].autoplayVideo,
                    }
                  }

                  return (
                    <OneColumnImageTextBlockComponent key={index} {...block} />
                  )
                }
                if (isCarouselBlock(block)) {
                  if (block?.source === 'craft') {
                    const items = createCarouselItems(block.children)
                    block.items = items
                  }

                  return <Carousel key={index} {...block} theme={theme} />
                }
                if (isSliderBlock(block)) {
                  if (block?.source === 'craft') {
                    const items = createCarouselItems(block.children)
                    block.items = items
                  }

                  return <Slider key={index} {...block} theme={theme} />
                }
                if (isThreeColumnImagesBlock(block)) {
                  return (
                    <ThreeUpImageBlock
                      key={index}
                      className="mb-32"
                      images={block.children}
                    />
                  )
                }
                if (isTwoColumnImagesBlock(block)) {
                  return (
                    <TwoUpImageBlock
                      key={index}
                      className="mb-32"
                      images={block.images || block.children}
                    />
                  )
                }
                if (isHorizontalImageTextBlock(block)) {
                  console.log(block, 'horz')
                  const extractedBlock: HorizontalImageTextBlock = {
                    type: 'horizontal-image-text',
                    layout: block.layout,
                    content: {
                      header: block.textBlock[0].header as string,
                      copy: block.textBlock[0].copy as string,
                    },
                    media: {
                      image: {
                        publicURL: block.singleMedia[0].image[0]?.url as string,
                      },
                    },
                  }
                  return (
                    <HorizontalImageTextBlockComponent
                      key={index}
                      {...extractedBlock}
                    />
                  )
                }
                if (isFullWidthCarouselBlock(block)) {
                  if (block?.source === 'craft') {
                    const items = createCarouselItems(block.children)
                    block.items = items
                  }

                  return <FullWidthCarousel key={index} {...block} />
                }
                return null
              })}
          </GenericSection>
        )
      )}
      <GenericSection className="max-w-screen-xl xl:max-w-screen-2xl m-auto">
        <Typography className="mt-20 mb-5" variant="h3" md="h2">
          More Stories
        </Typography>
        <div className="overflow-scroll">
          <div
            className="relatedLabs px-4 grid grid-cols-3 gap-6"
            style={{ width: `${isMobile ? '240vw' : 'auto'} ` }}
          >
            {relatedLabs.slice(0, 3).map((lab) => {
              return (
                <NewsArticle
                  key={lab.id}
                  articleEntry={lab}
                  hierarchy="tertiary"
                />
              )
            })}
          </div>
        </div>
      </GenericSection>
    </Layout>
  )
}

export default LabTemplate

export const query = graphql`
  query LabPage($craftSlug: String) {
    craftAPI {
      categories(group: "articleCategories") {
        id
        title
      }
      entries(type: "labs") {
        ... on CraftAPI_labs_labs_Entry {
          id
          slug
          title
          dateCreated
          articleExcerpt
          articleCategories {
            id
            title
          }
          imageObject {
            ... on CraftAPI_imageObject_BlockType {
              image {
                url
              }
            }
          }
        }
      }
      entry(slug: [$craftSlug]) {
        ... on CraftAPI_labs_labs_Entry {
          id
          dateCreated
          title
          articleExcerpt
          articleCategories {
            title
          }
          imageObject {
            ... on CraftAPI_imageObject_BlockType {
              image {
                url
              }
            }
          }

          flexibleSections {
            ... on CraftAPI_flexibleSections_flexibleSection_BlockType {
              ...flexibleSectionsFragment
            }
          }
        }
      }
    }
  }
`

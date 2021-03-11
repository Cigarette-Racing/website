import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { useMedia } from 'react-use'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import {
  GenericSection,
  Categories,
  DropdownNav,
} from '../templates/article.components'
import { NewsArticle } from '../pages/news'

import {
  BoatHeader,
  BoatSection,
  MobileSectionHeader,
  VerticalHeaderBlock,
  SideBleedImage,
  TwoUpImageBlock,
  ThreeUpImageBlock,
  SpecsSectionComponent,
  PowertrainSectionComponent,
  OneColumnTextBlockComponent,
  TwoColumnImageTextBlockComponent,
  OneColumnImageTextBlockComponent,
  OrderSectionComponent,
  HorizontalImageTextBlockComponent,
  MoreDetailsBlockComponent,
} from './boat.components'

import {
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
import { Carousel } from '../molecules/carousel'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { Slider } from '../molecules/slider'
import { MediaGallery } from '../molecules/media-gallery'

import MoreArticlesSlider from '../molecules/more-articles-slider'

const extractFlexibleSectionsFromCraft = (labEntry: any) => {
  const blockTypes = {
    oneColumnTextBlock: 'one-column-text',
    oneColumnImageTextBlock: 'one-column-image-text',
    twoColumnImageTextBlock: 'two-column-image-text',
    twoColumnImagesBlock: 'two-column-images',
    threeColumnImagesBlock: 'three-column-images',
    sliderBlock: 'slider',
    carousel: 'carousel',
    fullWidthCarousel: 'full-width-carousel',
    horizontalImageText: 'horizontal-image-text',
    powertrainOptions: 'powertrain',
    moreDetails: 'more-details',
  }

  return labEntry.flexibleSections.map((section: any) => {
    const blocks = section?.blocks?.map(
      (block: any, index: Number, blocks: any[]) => {
        const getBlockPosition = () => {
          if (index === 0) {
            return 'first'
          }
          if (index === blocks.length - 1) {
            return 'last'
          }
          return 'middle'
        }

        return {
          ...block,
          source: 'craft',
          blockPosition: getBlockPosition(),
          type:
            block.typeHandle === 'carousel' && block.fullWidth
              ? 'full-width-carousel'
              : blockTypes[block.typeHandle as keyof typeof blockTypes],
        }
      }
    )

    return {
      type: 'flexible',
      title: section.title,
      theme: section.theme,
      bleedDirection: section.bleedDirection,
      headerImage: !!section.headerImage.length && section.headerImage[0].url,
      blocks,
      moreDetails: [],
    }
  })
}

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
      <GenericSection className="pt-32 pb-0" theme="dark">
        <div className="px-4 max-w-screen-xl m-auto">
          <SEO title={labEntry.title} slug={props.path} />
          {/* <DropdownNav /> */}
          <div className="border-b border-gray-2 pb-6 mb-10">
            <Categories
              className="transform -translate-x-2"
              align="left"
              categories={labEntry.articleCategories}
            />
            <Typography className="mb-4" variant="h3">
              {labEntry.title}
            </Typography>
          </div>
          <Typography variant="e3" className="mb-4">
            {`${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`}
          </Typography>
          <img
            src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`}
            alt=""
          />
        </div>
      </GenericSection>
      {flexData.map(
        ({ title, theme, bleedDirection, headerImage, blocks }, i) => (
          <GenericSection key={i} theme="dark">
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
            <div className="overflow-scroll">
              <div
                className="relatedArticles grid grid-cols-3 gap-6 px-4"
                style={{ width: `${isMobile ? '270vw' : 'auto'} ` }}
              >
                {relatedLabs.slice(0, 3).map((lab) => {
                  lab.image = lab.imageObject[0].image

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
        )
      )}
      <MoreArticlesSlider />
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
              theme
              title: textBlockHeader
              shortTitle
              bleedDirection: imageBleedDirection
              headerImage: image {
                url
              }

              blocks: children {
                typeHandle
                ... on CraftAPI_flexibleSections_oneColumnTextBlock_BlockType {
                  align: textAlign
                  textBlock {
                    ... on CraftAPI_textBlock_BlockType {
                      header
                      copy
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
                  singleMedia {
                    ... on CraftAPI_singleMedia_BlockType {
                      alt
                      label
                      autoplayVideo
                      videoURL
                      image {
                        ... on CraftAPI_s3_Asset {
                          url(width: 2400)
                        }
                      }
                    }
                  }
                  textBlock {
                    ... on CraftAPI_textBlock_BlockType {
                      header
                      copy
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_horizontalImageText_BlockType {
                  textBlock {
                    ... on CraftAPI_textBlock_BlockType {
                      header
                      copy
                    }
                  }
                  singleMedia {
                    ... on CraftAPI_singleMedia_BlockType {
                      autoplayVideo
                      videoURL
                      image {
                        ... on CraftAPI_s3_Asset {
                          url
                        }
                      }
                    }
                  }
                  layout: horizontalLayout
                }
              }
            }
          }
        }
      }
    }
  }
`

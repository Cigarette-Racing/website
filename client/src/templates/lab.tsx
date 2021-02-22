import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import {
  GenericSection,
  Categories,
  DropdownNav,
} from '../templates/article.components'

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
      craftAPI: { entry: labEntry },
    },
  } = props

  const flexData = getFlexibleSections(
    extractFlexibleSectionsFromCraft(labEntry)
  )

  const date = new Date(labEntry.dateCreated)
  console.log(flexData)

  return (
    <Layout>
      <GenericSection className="pt-48" theme="dark">
        <SEO title={labEntry.title} slug={props.path} />
        <DropdownNav />
        <Categories align="left" categories={labEntry.articleCategories} />
        <div>
          <Typography className="mb-4" variant="h4">
            {labEntry.title}
          </Typography>

          <Typography className="mb-24" variant="p3">
            {labEntry.articleExcerpt}
          </Typography>
        </div>
        <Typography variant="e3" className="date">
          {`${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`}
        </Typography>
        <img
          src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`}
          alt=""
        />
      </GenericSection>
      {flexData.map(({ title, theme, bleedDirection, headerImage, blocks }) => (
        <GenericSection theme="dark">
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

                console.log(block)

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
              if (isPowertrainBlock(block)) {
                const options = block.children.map((option: any) => {
                  const details = option.children.map((detail) => {
                    return {
                      name: detail.textBlockHeader,
                      info: detail.textBlockCopy,
                    }
                  })

                  return {
                    name: option.textBlockHeader,
                    details,
                  }
                })

                const powertrainData = {
                  heroImage: block?.image,
                  options,
                }

                return (
                  <PowertrainSectionComponent
                    key="powertrain-section"
                    {...powertrainData}
                  />
                )
              }

              if (isMoreDetailsBlock(block)) {
                const buttonText = block.textBlockHeader

                const details = block.children.map((detail) => {
                  return {
                    layout: detail.horizontalLayout,
                    header: detail.textBlock?.[0]?.header,
                    copy: detail.textBlock?.[0]?.copy,
                    image: detail.singleMedia?.[0].image?.[0]?.url,
                  }
                })

                const moreDetailsData = {
                  buttonText,
                  details,
                }

                return (
                  <MoreDetailsBlockComponent
                    key={`more-details ${block.textBlockHeader}`}
                    {...moreDetailsData}
                  />
                )
              }

              return null
            })}
        </GenericSection>
      ))}
    </Layout>
  )
}

export default LabTemplate

export const query = graphql`
  query LabPage($craftSlug: String) {
    craftAPI {
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
                ... on CraftAPI_flexibleSections_moreDetails_BlockType {
                  textBlockHeader
                  children {
                    ... on CraftAPI_flexibleSections_horizontalImageText_BlockType {
                      id
                      horizontalLayout
                      textBlock {
                        ... on CraftAPI_textBlock_BlockType {
                          header
                          copy
                        }
                      }
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
                          id
                          videoURL
                          image {
                            ... on CraftAPI_s3_Asset {
                              id
                              url(width: 2400)
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_powertrainOptions_BlockType {
                  image {
                    ... on CraftAPI_s3_Asset {
                      id
                      url(width: 2400)
                    }
                  }
                  children {
                    ... on CraftAPI_flexibleSections_powertrainOption_BlockType {
                      textBlockHeader
                      children {
                        ... on CraftAPI_flexibleSections_powertrainOptionDetails_BlockType {
                          textBlockCopy
                          textBlockHeader
                        }
                      }
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_oneColumnTextBlock_BlockType {
                  align: textAlign
                  textBlock {
                    ... on CraftAPI_textBlock_BlockType {
                      header
                      copy
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

import React, { useState } from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import { GenericSection, Categories, DropdownNav } from './article.components'

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

import MoreArticlesSlider from '../molecules/more-articles-slider'

const extractFlexibleSectionsFromCraft = (articleEntry: any) => {
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
  return articleEntry?.flexibleSections?.map((section: any) => {
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

const NewsArticleTemplate = (
  props: PageProps<GatsbyTypes.NewsArticlePageQuery>
) => {
  const {
    data: {
      craftAPI: { entry: articleEntry },
    },
  } = props

  const flexData = getFlexibleSections(
    extractFlexibleSectionsFromCraft(articleEntry)
  )

  console.log(flexData)

  const date = new Date(articleEntry.dateCreated)

  return (
    <Layout>
      <GenericSection className="pt-32" theme="light">
        <div className="px-4 max-w-screen-xl m-auto">
          <SEO title={articleEntry.title} slug={props.path} />
          <div className="md:flex">
            <Categories
              align="left"
              categories={articleEntry.articleCategories}
            />
            <div>
              <Typography className="mb-8" variant="h3">
                {articleEntry.title}
              </Typography>
            </div>
          </div>
          <div className="border-t border-solid border-gray-5 pt-8 mb-16">
            <Typography variant="e3" className="date text-gray-3 mb-4">
              {`${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`}
            </Typography>
            <img src={`${articleEntry?.image?.[0]?.url}?q=30&w=2400`} alt="" />
          </div>
          <div className="text-center mb-6">
            <Typography className="text-gray-2 mb-3" variant="e2">
              {articleEntry.subheadline}
            </Typography>
            {articleEntry.articleCopy
              ?.split('\n')
              ?.filter(Boolean)
              ?.map((paragraph) => {
                return (
                  <Typography
                    className="text-gray-2 mb-6"
                    key={paragraph}
                    variant="p3"
                  >
                    {paragraph}
                  </Typography>
                )
              })}
          </div>
        </div>
      </GenericSection>
      {flexData.map(({ blocks }, i) => (
        <GenericSection key={i} theme="light">
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
              // if (isCarouselBlock(block)) {
              //   if (block?.source === 'craft') {
              //     const items = createCarouselItems(block.children)
              //     block.items = items
              //   }

              //   return <Carousel key={index} {...block} theme={theme} />
              // }
              // if (isSliderBlock(block)) {
              //   if (block?.source === 'craft') {
              //     const items = createCarouselItems(block.children)
              //     block.items = items
              //   }

              //   return <Slider key={index} {...block} theme={theme} />
              // }
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
              // if (isFullWidthCarouselBlock(block)) {
              //   if (block?.source === 'craft') {
              //     const items = createCarouselItems(block.children)
              //     block.items = items
              //   }

              //   return <FullWidthCarousel key={index} {...block} />
              // }

              return null
            })}
        </GenericSection>
      ))}
      <MoreArticlesSlider />
    </Layout>
  )
}

export default NewsArticleTemplate

export const query = graphql`
  query NewsArticlePage($craftSlug: String) {
    craftAPI {
      categories(group: "articleCategories") {
        id
        title
      }
      entry(slug: [$craftSlug]) {
        ... on CraftAPI_newsArticles_newsArticle_Entry {
          id
          dateCreated
          title
          subheadline
          articleCopy
          image {
            url
          }
          articleExcerpt
          articleCategories {
            title
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
                              url
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
                      url
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
                ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
                  singleMedia {
                    ... on CraftAPI_singleMedia_BlockType {
                      alt
                      label
                      autoplayVideo
                      videoURL
                      image {
                        ... on CraftAPI_s3_Asset {
                          url
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
                ... on CraftAPI_flexibleSections_twoColumnImagesBlock_BlockType {
                  children {
                    ... on CraftAPI_flexibleSections_image_BlockType {
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
                          alt
                          label
                          autoplayVideo
                          videoURL
                          image {
                            ... on CraftAPI_s3_Asset {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_twoColumnImageTextBlock_BlockType {
                  children {
                    ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
                          alt
                          label
                          autoplayVideo
                          videoURL
                          image {
                            ... on CraftAPI_s3_Asset {
                              url
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
                  }
                }
                ... on CraftAPI_flexibleSections_threeColumnImagesBlock_BlockType {
                  children {
                    typeHandle
                    ... on CraftAPI_flexibleSections_image_BlockType {
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
                          autoplayVideo
                          videoURL
                          label
                          image {
                            ... on CraftAPI_s3_Asset {
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_carousel_BlockType {
                  fullWidth
                  children {
                    ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
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
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_sliderBlock_BlockType {
                  children {
                    ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
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

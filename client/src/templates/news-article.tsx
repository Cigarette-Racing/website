import React, { useState } from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import { GenericSection, Categories, DropdownNav } from './article.components'

import {
  MobileSectionHeader,
  VerticalHeaderBlock,
  SideBleedImage,
  TwoUpImageBlock,
  ThreeUpImageBlock,
  OneColumnTextBlockComponent,
  TwoColumnImageTextBlockComponent,
  OneColumnImageTextBlockComponent,
  HorizontalImageTextBlockComponent,
} from './boat.components'

import {
  getFlexibleSections,
  isTwoColumnImageTextBlock,
  isOneColumnTextBlock,
  isTwoColumnImagesBlock,
  isThreeColumnImagesBlock,
  isOneColumnImageTextBlock,
  isCarouselBlock,
  isSliderBlock,
  isHorizontalImageTextBlock,
  HorizontalImageTextBlock,
} from '../types/boat'
import { Carousel } from '../molecules/carousel'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { Slider } from '../molecules/slider'
import { MediaGallery } from '../molecules/media-gallery'

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
      id: section.id || Math.random,
      title: section.title,
      theme: section.theme,
      bleedDirection: section.bleedDirection,
      headerImage: !!section.headerImage.length && section.headerImage[0].url,
      blocks,
      moreDetails: [],
    }
  })
}

const createCarouselItems = (items: any) => {
  return items.map((item) => {
    return {
      content: {
        copy: item.textBlock?.[0].copy,
        header: item.textBlock?.[0].header,
      },
      media: {
        image: item.singleMedia?.[0].image?.[0]?.url,
        videoUrl: item.singleMedia?.[0]?.videoURL,
        autoplayVideo: item.singleMedia?.[0]?.autoplayVideo,
      },
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

  const date = new Date(articleEntry.dateCreated)

  return (
    <Layout>
      <GenericSection className="py-12 pt-32" theme="light">
        <div className="px-4 max-w-screen-xl xl:max-w-screen-2xl m-auto">
          <SEO title={articleEntry.title} slug={props.path} />
          <div className="md:flex align-top justify-start content-start">
            <Categories
              className="md:mr-16"
              align="left"
              categories={articleEntry.articleCategories}
            />
            <div>
              <Typography className="mb-8 max-w-screen-lg" variant="h3" md="h1">
                {articleEntry.title}
              </Typography>
            </div>
          </div>

          <div className="border-t border-solid border-gray-5"></div>
        </div>
      </GenericSection>
      {flexData.map(
        ({ title, theme, bleedDirection, headerImage, blocks, id }, i) => (
          <GenericSection key={id} theme="light">
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
                    <TwoColumnImageTextBlockComponent
                      key={block.id}
                      {...block}
                    />
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

                  return <Carousel key={index} {...block} />
                }
                if (isSliderBlock(block)) {
                  if (block?.source === 'craft') {
                    const items = createCarouselItems(block.children)
                    block.items = items
                  }

                  return <Slider key={index} {...block} />
                }
                if (isThreeColumnImagesBlock(block)) {
                  return (
                    <ThreeUpImageBlock
                      key={block.id}
                      className="mb-32"
                      images={block.children}
                    />
                  )
                }
                if (isTwoColumnImagesBlock(block)) {
                  return (
                    <TwoUpImageBlock
                      key={block.id}
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
                      key={block.id}
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
        )
      )}
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
              id
              theme
              title: textBlockHeader
              shortTitle
              bleedDirection: imageBleedDirection
              headerImage: image {
                url
              }
              blocks: children {
                id
                typeHandle
                ... on CraftAPI_flexibleSections_oneColumnTextBlock_BlockType {
                  id
                  align: textAlign
                  textBlock {
                    ... on CraftAPI_textBlock_BlockType {
                      header
                      copy
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
                  id
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
                  id
                  children {
                    id
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
                  id
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
                  id
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

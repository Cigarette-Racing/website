import React from 'react'
import { useMedia } from 'react-use'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import FormatTextBlob from '../services/text-formatter'
import { ExternalLinkIcon } from '../svgs/icons'
import { ContentEntry } from '../templates/common.components'
import {
  GenericSection,
  Categories,
  extractFlexibleSectionsFromCraft,
  createCarouselItems,
  SideBleedImage,
  TwoUpImageBlock,
  ThreeUpImageBlock,
  OneColumnTextBlockComponent,
  TwoColumnImageTextBlockComponent,
  OneColumnImageTextBlockComponent,
  HorizontalImageTextBlockComponent,
} from './common.components'
import {
  getFlexibleSections,
  isTwoColumnImageTextBlock,
  isOneColumnTextBlock,
  isTwoColumnImagesBlock,
  isThreeColumnImagesBlock,
  isOneColumnImageTextBlock,
  isCarouselBlock,
  isSliderBlock,
  isFullWidthCarouselBlock,
  isHorizontalImageTextBlock,
  HorizontalImageTextBlock,
} from '../types/common'
import { Carousel } from '../molecules/carousel'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { Slider } from '../molecules/slider'

const NewsArticleTemplate = (
  props: PageProps<GatsbyTypes.NewsArticlePageQuery>
) => {
  const {
    data: {
      craftAPI: { entry: articleEntry, entries: allArticles },
    },
  } = props

  const relatedArticles = allArticles?.filter((article) => {
    return article.id != articleEntry.id
  })

  const getFlexData = () => {
    let flexData

    if (articleEntry?.flexibleSections) {
      flexData = getFlexibleSections(
        extractFlexibleSectionsFromCraft(articleEntry)
      )
    } else {
      flexData = null
    }

    return flexData
  }

  const flexData = getFlexData()

  const date = new Date(articleEntry.dateCreated)

  const isMobile = useMedia('(max-width: 767px)')

  return (
    <Layout>
      <GenericSection className="py-12 pb-8 pt-32 md:pt-56" theme="light">
        <div className="px-4 max-w-screen-xl xl:max-w-screen-2xl m-auto">
          <SEO title={articleEntry.title} slug={props.path} />
          <div className="md:flex align-top justify-start content-start pb-10 md:pb-20">
            {!!articleEntry.articleCategories && (
              <Categories
                className="-ml-2 mb-3 md:mr-16 mt-4"
                align="left"
                categories={articleEntry.articleCategories}
              />
            )}
            <div>
              <Typography className="mb-8 max-w-screen-lg" variant="h3" md="h1">
                {articleEntry.title}
              </Typography>
              {!!articleEntry?.urlLink && (
                <a
                  href={articleEntry?.urlLink}
                  className="flex align-middle items-center"
                >
                  <img
                    className="w-10 h-10 mr-4"
                    src={articleEntry.externalLinkIcon[0].url}
                    alt=""
                  />
                  <Typography variant="p2" className="text-gray-3">
                    {articleEntry?.siteName}
                  </Typography>
                  <ExternalLinkIcon className="mr-2 ml-4" />
                </a>
              )}
            </div>
          </div>
          <div className="border-t border-solid border-gray-5"></div>
        </div>
      </GenericSection>
      {flexData.length > 0 &&
        flexData.map(
          ({ title, theme, bleedDirection, headerImage, blocks, id }, i) => (
            <GenericSection key={id} theme="light">
              <div className="relative px-4 max-w-screen-xl xl:max-w-screen-2xl m-auto">
                <Typography
                  variant="e3"
                  className="date text-gray-3 mb-4 md:absolute top-0 left-0 md:px-4"
                >
                  {`${
                    date.getMonth() + 1
                  }.${date.getDate()}.${date.getFullYear()}`}
                </Typography>
              </div>
              <SideBleedImage
                media={headerImage}
                side={bleedDirection}
                className="mt-0 px-4 md:px-0 mb-16 md:m-0 md:mb-32 pt-0"
                size="large"
              />
              <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 ml-auto">
                <div className="px-4 md:px-0 md:w-8/12">
                  <Typography variant="e2" className="mb-4">
                    {articleEntry.subheadline}
                  </Typography>
                </div>
                <div className="px-4 md:px-0 md:w-8/12 mb-16">
                  {FormatTextBlob(articleEntry.articleCopy)}
                </div>
              </div>
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
                      <OneColumnImageTextBlockComponent
                        key={index}
                        {...block}
                      />
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
                          publicURL: block.singleMedia[0].image[0]
                            ?.url as string,
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
                  if (isFullWidthCarouselBlock(block)) {
                    if (block?.source === 'craft') {
                      const items = createCarouselItems(block.children)
                      block.items = items
                    }

                    return <FullWidthCarousel key={index} {...block} />
                  }
                  return null
                })}
              {!!relatedArticles.length && (
                <div>
                  <Typography className="px-4 mt-20 mb-5" variant="h3" md="h2">
                    More Stories
                  </Typography>
                  <div className="overflow-scroll">
                    <div
                      className="relatedArticles grid grid-cols-3 gap-6 px-4"
                      style={{ width: `${isMobile ? '270vw' : 'auto'} ` }}
                    >
                      {relatedArticles.slice(0, 3).map((article) => {
                        return (
                          <ContentEntry
                            entryType="news"
                            key={article.id}
                            entry={article}
                            hierarchy="tertiary"
                            theme="light"
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </GenericSection>
          )
        )}
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
      entry(slug: [$craftSlug], type: "newsArticle") {
        id
        ... on CraftAPI_newsArticles_newsArticle_Entry {
          id
          dateCreated
          title
          urlLink
          siteName
          externalLinkIcon {
            url
          }
          subheadline
          articleCopy
          headerImage: image {
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
                              url(width: 1400)
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
                              url(width: 1400)
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
                              url(width: 1000)
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
      entries(type: "newsArticle") {
        ... on CraftAPI_newsArticles_newsArticle_Entry {
          dateCreated
          slug
          id
          urlLink
          articleExcerpt
          title
          externalLinkIcon {
            url
          }
          image {
            url
          }
          articleCategories {
            id
            title
          }
          articleTags {
            id
            title
          }
        }
      }
    }
  }
`

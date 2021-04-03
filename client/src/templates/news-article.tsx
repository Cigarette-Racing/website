import React from 'react'
import { useMedia } from 'react-use'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import FormatTextBlob from '../services/text-formatter'
import { ExternalLinkIcon } from '../svgs/icons'
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

const NewsArticleTemplate = (
  props: PageProps<GatsbyTypes.NewsArticlePageQuery>
) => {
  const {
    data: {
      craftAPI: { entry: articleEntry, entries: allArticles },
    },
  } = props

  const relatedArticles = allArticles.filter((article) => {
    return article.id != articleEntry.id
  })

  const flexData = getFlexibleSections(
    extractFlexibleSectionsFromCraft(articleEntry)
  )

  const date = new Date(articleEntry.dateCreated)

  const isMobile = useMedia('(max-width: 767px)')

  return (
    <Layout>
      <GenericSection className="py-12 pb-8 pt-32 md:pt-56" theme="light">
        <div className="px-4 max-w-screen-xl xl:max-w-screen-2xl m-auto">
          <SEO title={articleEntry.title} slug={props.path} />
          <div className="md:flex align-top justify-start content-start pb-10 md:pb-20">
            <Categories
              className="-ml-2 mb-3 md:mr-16 mt-4"
              align="left"
              categories={articleEntry.articleCategories}
            />
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
                    {articleEntry?.urlLink}
                  </Typography>
                  <ExternalLinkIcon className="mr-2 ml-4" />
                </a>
              )}
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
            <div className="px-4 md:px-0 md:w-8/12 m-auto">
              <Typography variant="e2" className="mb-4">
                {articleEntry.subheadline}
              </Typography>
            </div>
            <div className="px-4 md:px-0 md:w-8/12 m-auto mb-16">
              {FormatTextBlob(articleEntry.articleCopy)}
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
                if (isFullWidthCarouselBlock(block)) {
                  if (block?.source === 'craft') {
                    const items = createCarouselItems(block.children)
                    block.items = items
                  }

                  return <FullWidthCarousel key={index} {...block} />
                }

                return null
              })}
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
                      <NewsArticle
                        key={article.id}
                        articleEntry={article}
                        hierarchy="tertiary"
                      />
                    )
                  })}
                </div>
              </div>
            </div>
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
      entry(slug: [$craftSlug]) {
        ... on CraftAPI_newsArticles_newsArticle_Entry {
          id
          dateCreated
          title
          urlLink
          externalLinkIcon {
            url
          }
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
              ...flexibleSectionsFragment
            }
          }
        }
      }
    }
  }
`

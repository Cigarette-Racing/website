import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import {
  extractFlexibleSectionsFromCraft,
  createCarouselItems,
  GenericSection,
  HorizontalImageTextBlockComponent,
  OneColumnTextBlockComponent,
  TwoColumnImageTextBlockComponent,
  OneColumnImageTextBlockComponent,
  MobileSectionHeader,
  VerticalHeaderBlock,
  SideBleedImage,
  TwoUpImageBlock,
  ThreeUpImageBlock,
} from '../templates/common.components'
import { InPageAnchor } from '../molecules/in-page-nav'

import { Carousel } from '../molecules/carousel'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { Slider } from '../molecules/slider'
import {
  getFlexibleSections,
  isFullBleedImageBlock,
  isTwoColumnImageTextBlock,
  isOneColumnTextBlock,
  isCarouselBlock,
  isTwoColumnImagesBlock,
  isThreeColumnImagesBlock,
  isSliderBlock,
  isFullWidthCarouselBlock,
  isOneColumnImageTextBlock,
  isHorizontalImageTextBlock,
  HorizontalImageTextBlock,
} from '../types/common'

const Legacy1969Page = (props: PageProps<GatsbyTypes.Legacy1969PageQuery>) => {
  const {
    data: {
      craftAPI: { legacy1969: page },
    },
  } = props

  const flexData = getFlexibleSections(extractFlexibleSectionsFromCraft(page))

  console.log(flexData)

  return (
    <Layout>
      {console.log(page)}
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
      {flexData.map(({ title, theme, bleedDirection, headerImage, blocks }) => (
        <GenericSection key={title} theme={theme}>
          {/* <InPageAnchor title={title} /> */}
          <MobileSectionHeader>{title}</MobileSectionHeader>
          {!!headerImage && (
            <VerticalHeaderBlock
              label={title}
              side={bleedDirection === 'left' ? 'right' : 'left'}
              theme={theme}
              className="lg:mt-32"
            />
          )}
          {!!headerImage ? (
            <SideBleedImage
              media={headerImage}
              side={bleedDirection}
              className="relative mx-auto md:mt-16 lg:mt-32 mb-20 md:mb-32"
              size="large"
            />
          ) : (
            <div className="md:pt-20"></div>
          )}
          {!!blocks &&
            blocks.map((block, index) => {
              if (isFullBleedImageBlock(block)) {
                return (
                  <div>Full Bleed Image</div>
                )
              }
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
      ))}
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
              theme
              title: textBlockHeader
              shortTitle
              bleedDirection: imageBleedDirection
              headerImage: image {
                url
              }
              textBlockHeader
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
                ... on CraftAPI_flexibleSections_fullBleedImage_BlockType {
                  image {
                    id
                    url
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

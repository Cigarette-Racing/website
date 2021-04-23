import React from 'react'
import { AspectRatio } from '../atoms/aspect-ratio'
import { graphql, PageProps } from 'gatsby'
import clsx from 'clsx'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import ExploreOurWorld, {
  ExploreContentItem,
} from '../molecules/explore-our-world'
import {
  extractFlexibleSectionsFromCraft,
  createCarouselItems,
  GenericSection,
  FullBleedImage,
  HorizontalImageTextBlockComponent,
  TwoColumnImageTextBlockComponent,
  MobileSectionHeader,
  VerticalHeaderBlock,
  SideBleedImage,
  TwoUpImageBlock,
  ThreeUpImageBlock,
  TextBlockComponent,
  ImageWithLabel,
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
  OneColumnImageTextBlock,
} from '../types/common'

const Section: React.FC<{
  theme?: Theme | 'red'
  className?: string
}> = ({ children, className, theme = 'light', ...rest }) => (
  <section
    className={clsx(
      'relative py-12 overflow-hidden',
      {
        'bg-gray-0 text-white': theme === 'dark',
        'bg-darkRed text-white': theme === 'red',
      },
      className
    )}
    {...rest}
    data-component="Section"
  >
    {children}
  </section>
)

export const OneColumnImageTextBlockComponent = ({
  align = 'left',
  image,
  header,
  copy,
  imageLabel,
  theme = 'dark',
}) => (
  <div>
    <div data-block-type="OneColumnImageTextBlockComponent">
      <ImageWithLabel
        ratio="3:2"
        src={`${image}?q=30&w=2000`}
        alt="alt"
        label={imageLabel}
      />
      <div className="md:flex mt-10 mb-20 md:mb-48 px-4 xl:px-0 ">
        <TextBlockComponent
          className="md:w-3/4 text-left max-w-6xl pr-6"
          header={header}
          copy={copy}
        />
      </div>
    </div>
  </div>
)

const Legacy1969Menu = () => {
  const LegacyMenuItem = ({ year }) => {
    return (
      <li
        className="mr-12 last:mr-0 cursor-pointer hover:opacity-75 transition-opacity duration-75"
        onClick={() => {
          console.log(`go to ${year}`)
          window.scroll({
            top: 200,
            behavior: 'smooth',
          })
        }}
      >
        <Typography variant="e1">{year}</Typography>
      </li>
    )
  }

  const years = ['1970', '1980', '1990', '2000', '2010']

  return (
    <div
      className="py-3"
      style={{
        background:
          'linear-gradient(250.95deg, #242424 14.79%, #2B2B2B 75.43%)',
      }}
    >
      <ul className="flex justify-center ml-2">
        {years.map((year) => {
          return <LegacyMenuItem year={year} />
        })}
      </ul>
    </div>
  )
}

const Legacy1969Page = (props: PageProps<GatsbyTypes.Legacy1969PageQuery>) => {
  const {
    data: {
      craftAPI: {
        legacy1969: page,
        exploreOurWorld1,
        exploreOurWorld2,
        exploreOurWorld3,
        exploreOurWorld4,
      },
    },
  } = props

  const flexData = getFlexibleSections(extractFlexibleSectionsFromCraft(page))

  const exploreOurWorldContent = [
    {
      image: exploreOurWorld1[0].url,
      title: '_labs',
      url: '/labs',
      text:
        'Enter Cigarette Racing’s industry leading processes, research, and development.',
    },
    {
      image: exploreOurWorld4[0].url,
      title: 'DNA',
      url: '/dna',
      text:
        'Discover why Cigarette Racing remains the finest boat on the water.',
    },
    {
      image: exploreOurWorld3[0].url,
      title: 'News',
      url: '/news',
      text: 'The latest news & press happening at Cigarette Racing.',
    },
  ] as ExploreContentItem[]

  const sliderItems1970s = createCarouselItems(flexData[0].blocks[1].children)
  const sliderItems1980s = createCarouselItems(flexData[1].blocks[1].children)
  const sliderItems2000s = createCarouselItems(flexData[3].blocks[1].children)
  const sliderItems2010s = createCarouselItems(flexData[4].blocks[1].children)

  console.log(flexData[1].blocks[2].image[0].url)

  return (
    <Layout>
      <SEO title="Our Legacy - 1969" />
      <div className="pt-20 bg-gray-0 text-white pb-4 main">
        <Legacy1969Menu />
        <section className="md:min-h-screen flex flex-col justify-between relative">
          <div className="mb-8 absolute md:h-full md:top-0 w-full">
            <img
              // srcSet={`${page.image[0].url}?q=30&w=2800 3x, ${page.image[0].url}?q=30&w=1500 2x, ${page.image[0].url}?q=30&w=1000 1x`}
              src={`${page.image[0].url}?q=30&w=2800`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 mb-20 mr-40">
            <div className="font-body font-bold mb-2 text-sm">OUR LEGACY</div>
            <div className="font-heading -mb-8 text-8xl">Ignoring Gravity </div>
            <div className="font-heading text-red text-8xl">since 1969</div>
          </div>
        </section>
        <Section data-section="1970">
          <div className="max-w-3xl ml-auto mr-40">
            <OneColumnImageTextBlockComponent
              copy={flexData[0].blocks[0].textBlock[0].copy}
              imageLabel={flexData[0].blocks[0].singleMedia[0].label}
              image={flexData[0].blocks[0].singleMedia[0].image[0].url}
            />
          </div>
          <div className="ml-64">
            <Slider items={sliderItems1970s} />
          </div>
        </Section>
        <Section data-section="1980">
          <div className="max-w-3xl mr-auto ml-40">
            <OneColumnImageTextBlockComponent
              copy={flexData[1].blocks[0].textBlock[0].copy}
              imageLabel={flexData[1].blocks[0].singleMedia[0].label}
              image={flexData[1].blocks[0].singleMedia[0].image[0].url}
            />
          </div>
          <div className="mx-24 px-16">
            <Carousel items={sliderItems1980s} />
          </div>
          <div className="fullbleed w-full">
            <img
              className="w-full"
              src={flexData[1].blocks[2].image[0].url}
              alt=""
            />
          </div>
        </Section>
        <Section data-section="1990">
          <div className="max-w-3xl ml-auto mr-40">
            <OneColumnImageTextBlockComponent
              copy={flexData[2].blocks[0].textBlock[0].copy}
              image={flexData[2].blocks[0].singleMedia[0].image[0].url}
            />
          </div>
          {console.log(flexData[2].blocks[1].textBlock[0])}
          <HorizontalImageTextBlockComponent
            layout="imageOnLeft"
            content={{
              copy: flexData[2].blocks[1].textBlock[0].copy,
              header: flexData[2].blocks[1].textBlock[0].header,
            }}
            media={{
              image: {
                publicURL: flexData[2].blocks[1].singleMedia[0].image[0].url,
              },
            }}
          />
        </Section>
        <Section data-section="2000">
          <div className="max-w-3xl mr-auto ml-40">
            <OneColumnImageTextBlockComponent
              copy={flexData[3].blocks[0].textBlock[0].copy}
              image={flexData[3].blocks[0].singleMedia[0].image[0].url}
            />
          </div>
          <div className="mx-24 px-16">
            <Slider items={sliderItems2000s} />
          </div>
          <div className="fullbleed w-full">
            <img
              className="w-full"
              src={flexData[3].blocks[2].image[0].url}
              alt=""
            />
            {console.log(flexData[3])}
          </div>
        </Section>
        <Section data-section="2010">
          <div className="max-w-3xl ml-auto mr-40">
            <OneColumnImageTextBlockComponent
              copy={flexData[4].blocks[0].textBlock[0].copy}
              image={flexData[4].blocks[0].singleMedia[0].image[0].url}
            />
          </div>
          <div className="mx-24 px-16">
            <Carousel items={sliderItems2010s} />
          </div>
        </Section>
        <Section className="exploreOurWorld" theme="dark">
          <div className="relative max-w-7xl mx-auto">
            <div className="border-t border-gray-2 mb-24 pt-8">
              <ExploreOurWorld items={exploreOurWorldContent} />
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

export default Legacy1969Page

export const query = graphql`
  query Legacy1969Page {
    craftAPI {
      exploreOurWorld1: assets(filename: "1up-image-placeholder.jpg") {
        url
      }
      exploreOurWorld2: assets(filename: "explore-our-world-2.png") {
        url
      }
      exploreOurWorld3: assets(filename: "news-00001.jpg") {
        url
      }
      exploreOurWorld4: assets(filename: "explore-our-world_dna.jpg") {
        url
      }
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

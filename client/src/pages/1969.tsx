import React from 'react'
import styled from 'styled-components'
import { AspectRatio } from '../atoms/aspect-ratio'
import { graphql, PageProps } from 'gatsby'
import clsx from 'clsx'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { useMedia } from 'react-use'
import ExploreOurWorld, {
  ExploreContentItem,
} from '../molecules/explore-our-world'
import {
  extractFlexibleSectionsFromCraft,
  createCarouselItems,
  HorizontalImageTextBlockComponent,
  TextBlockComponent,
  ImageWithLabel,
} from '../templates/common.components'

import { Carousel } from '../molecules/carousel'
import { Slider } from '../molecules/slider-custom'
import { Theme } from '../types/shared'
import { getFlexibleSections, OneColumnTextBlock } from '../types/common'
import dottedLine from '../images/dotted.svg'
import verticalDottedLine from '../images/vertical-line.svg'
import verticalDottedLineLarge from '../images/vertical-line-desktop.svg'
import horizontalDottedLineLarge from '../images/horizontal-line-desktop.svg'
import timelineStartCircle from '../images/timeline-start-circle.png'

const Legacy1969Page = (props: PageProps<GatsbyTypes.Legacy1969PageQuery>) => {
  const {
    data: {
      craftAPI: {
        legacy1969: page,
        exploreOurWorld1,
        exploreOurWorld3,
        exploreOurWorld4,
        dnaHeroMobile,
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

  return (
    <Layout>
      <SEO title="Our Legacy - 1969" />
      <div className="pt-20 bg-gray-0 text-white pb-4 main md:min-w-xl">
        <Legacy1969Menu />
        <Section className="md:min-h-screen flex flex-col justify-between relative pb-40 pt-0">
          <img
            className="w-full object-cover max-w-full md:hidden"
            src={dnaHeroMobile[0].url}
          />
          <img
            className="hidden w-full object-cover max-w-full md:block"
            src={page.image[0].url}
          />
          <div className="absolute bottom-0 pb-24 md:pb-40 px-4 md:right-0 md:mb-20 md:mr-40">
            <div className="font-body text-10px font-bold tracking-heading mb-2 md:mb-2 md:text-sm">
              OUR LEGACY
            </div>
            <div className="font-light text-40px md:text-8xl leading-snug md:leading-normal">
              <div className="font-heading  md:-mb-8">Ignoring Gravity</div>
              <div className="font-heading text-red md:font-normal">
                since 1969
              </div>
            </div>
          </div>
          <StartCircle
            className="md:ml-40 relative"
            src={timelineStartCircle}
            alt="start"
          />
          <VerticalLineContainer
            height="276px"
            bottom
            left
            className="ml-8 md:ml-48"
          />
        </Section>
        <Section className="relative pb-0 pt-0" data-section="1970">
          <div className="relative pb-48 linecontainer">
            <div
              style={{
                backgroundImage: `url(${verticalDottedLine})`,
                left: '35px',
                top: 0,
                width: '50px',
              }}
              className="absolute bg-repeat-y h-full md:hidden"
            />
            <div
              style={{
                backgroundImage: `url(${verticalDottedLineLarge})`,
                left: 0,
                top: 0,
                width: '50px',
              }}
              className="hidden md:block absolute bg-repeat-y h-full md:ml-48"
            />
            <VerticalHeader
              text="1970"
              className="hidden md:block ml-32 pr-2 absolute top-0 left-0 bg-gray-0 pt-12 pb-8"
            />

            <div className="md:max-w-3xl ml-auto md:mr-40">
              <ImageWithLabel
                ratio="1:1"
                md="3:2"
                src={`${flexData[0].blocks[0].singleMedia[0].image[0].url}?q=30&w=2000`}
                alt="alt"
                label={flexData[0].blocks[0].singleMedia[0].label}
              />

              <div className="md:flex mt-16 px-4 xl:px-0 ">
                <TextBlockComponent
                  className="md:w-3/4 text-left max-w-6xl pr-6"
                  header=""
                  copy={flexData[0].blocks[0].textBlock[0].copy}
                />
              </div>
            </div>
          </div>
          <div className="relative linecontainer pb-24 md:pb-0">
            <MobileHeader
              className="md:bg-gray-0 px-4 tracking-tight"
              text="1970"
            />
            <div
              style={{
                backgroundImage: `url(${verticalDottedLineLarge})`,
                left: 0,
                top: '18px',
                width: '50px',
              }}
              className="hidden md:block absolute bg-repeat-y h-full md:ml-48"
            />
            <div
              style={{
                backgroundImage: `url(${dottedLine})`,
                top: '49px',
                left: '255px',
                width: '100%',
              }}
              className="dottedLine md:hidden absolute bg-repeat-y min-h-full z-1"
            />
            <div className="md:ml-64 pt-6">
              <Slider items={sliderItems1970s} />
            </div>
          </div>
        </Section>
        <Section
          className="relative pb-0 pt-0 -mt-10"
          data-section="1980"
          style={{
            background: 'linear-gradient(190deg, rgb(19,19,19) 25%, #000 25%)',
          }}
        >
          <div className="realtive pt-10 md:pt-0">
            <MobileHeader text="1980" className="pb-6 px-4" />
            <div
              style={{
                backgroundImage: `url(${dottedLine})`,
                top: '-14px',
                left: '255px',
                width: '100vw',
                height: '100px',
                transform: 'scaleY(-1)',
                backgroundPosition: `top left`,
              }}
              className="absolute z-20 bg-no-repeat md:hidden"
            />
          </div>
          <div className="relative pb-32">
            <div
              style={{
                backgroundImage: `url(${verticalDottedLine})`,
                left: '35px',
                top: 0,
                width: '50px',
              }}
              className="absolute bg-repeat-y h-full md:hidden"
            />
            <div className="hidden md:block py-6 ml-48 mr-48">
              <HorizontalLineContainer />
            </div>
            <div
              style={{
                backgroundImage: `url(${verticalDottedLineLarge})`,
                right: '12px',
                top: '18px',
                width: '50px',
              }}
              className="hidden md:block absolute bg-repeat-y h-full md:mr-40 mt-10"
            />
            <div className="relative md:pt-24">
              <VerticalHeader
                text="1980"
                className="hidden md:block mr-24 absolute top-0 right-0 mt-24 pt-12 bg-gray-0"
              />
              <div className="mb-24 md:max-w-3xl mr-auto md:ml-40">
                <OneColumnImageTextBlockComponent
                  copy={flexData[1].blocks[0].textBlock[0].copy}
                  imageLabel={flexData[1].blocks[0].singleMedia[0].label}
                  image={flexData[1].blocks[0].singleMedia[0].image[0].url}
                />
              </div>
            </div>
            <div className="md:mx-24 md:px-16">
              <Carousel items={sliderItems1980s} />
            </div>
            <div className="fullbleed w-full pt-12 md:mt-48">
              <AspectRatio ratio="21:9">
                <img
                  className="absolute h-full w-full object-cover"
                  src={flexData[1].blocks[2].image[0].url}
                  alt=""
                />
              </AspectRatio>
            </div>
          </div>
        </Section>
        <div className="hidden md:block py-2 ml-48 mr-13.5">
          <HorizontalLineContainer />
        </div>
        <Section
          className="relative pt-0 md:pb-12 md:pt-40"
          data-section="1990"
        >
          <VerticalHeader
            text="1990"
            className="hidden md:block ml-24 absolute top-0 left-0 pb-8 md:mt-30 bg-gray-0 z-10"
          />
          <MobileHeader text="1990" className="px-4 pb-6" />
          <div
            style={{
              backgroundImage: `url(${dottedLine})`,
              top: '49px',
              left: '255px',
              width: '100%',
            }}
            className="absolute bg-repeat-y min-h-full z-1 md:hidden"
          />
          <div
            style={{
              backgroundImage: `url(${verticalDottedLineLarge})`,
              left: 0,
              top: '18px',
              width: '50px',
            }}
            className="hidden md:block absolute bg-repeat-y h-full md:ml-48"
          />
          <div className="mb-20 md:max-w-3xl ml-auto md:mr-40 md:mb-56">
            <OneColumnImageTextBlockComponent
              ratio="4:3"
              copy={flexData[2].blocks[0].textBlock[0].copy}
              image={flexData[2].blocks[0].singleMedia[0].image[0].url}
            />
          </div>
          <div className="z-10 relative">
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
          </div>
        </Section>
        <div className="hidden md:block py-2 ml-48 mr-13.5">
          <HorizontalLineContainer />
        </div>
        <Section className="relative pb-0 md:pt-64" data-section="2000">
          <MobileHeader text="2000" className="px-4 pb-6" />
          <div
            style={{
              backgroundImage: `url(${dottedLine})`,
              top: '-14px',
              left: '264px',
              width: '70px',
              height: '100px',
              transform: 'scaleY(-1)',
              backgroundPosition: `top right`,
            }}
            className="absolute z-1 bg-no-repeat md:hidden"
          />
          <div
            style={{
              backgroundImage: `url(${verticalDottedLineLarge})`,
              right: '12px',
              top: '18px',
              width: '50px',
            }}
            className="hidden md:block absolute bg-repeat-y h-full md:mr-40"
          />
          <div className="relative pb-40 md:pb-20">
            <div
              style={{
                backgroundImage: `url(${verticalDottedLine})`,
                left: '35px',
                top: 0,
                width: '50px',
              }}
              className="absolute bg-repeat-y h-full md:hidden"
            />
            <VerticalHeader
              text="2000"
              className="hidden md:block mr-24 absolute top-0 right-0 pb-8 bg-gray-0"
            />
            <div className="mb-16 md:max-w-3xl mr-auto md:ml-40 md:mb-56">
              <OneColumnImageTextBlockComponent
                ratio="4:3"
                copy={flexData[3].blocks[0].textBlock[0].copy}
                image={flexData[3].blocks[0].singleMedia[0].image[0].url}
              />
            </div>
            <div className="md:mx-24 md:px-16">
              <Slider items={sliderItems2000s} />
            </div>
            <div className="fullbleed w-full mt-32">
              <AspectRatio ratio="21:9">
                <img
                  className="absolute h-full w-full object-cover"
                  src={flexData[3].blocks[2].image[0].url}
                  alt=""
                />
              </AspectRatio>
            </div>
          </div>
        </Section>
        <div className="hidden md:block py-2 ml-48 mr-13.5">
          <HorizontalLineContainer />
        </div>
        <Section className="relative pb-0 pt-0 md:pb-12" data-section="2010">
          <MobileHeader text="2010" className="px-4 pb-6" />
          <div
            style={{
              backgroundImage: `url(${dottedLine})`,
              top: '45px',
              left: '264px',
              width: '100vw',
              height: '100%',
            }}
            className="absolute z-1 bg-no-repeat md:hidden"
          />

          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${verticalDottedLineLarge})`,
                left: 0,
                top: '18px',
                width: '50px',
              }}
              className="hidden md:block absolute bg-repeat-y h-full md:ml-48"
            />
            <div className="md:pt-40 relative">
              <div className="hidden md:block ml-24 absolute top-0 left-0 mt-32 bg-gray-0">
                <VerticalHeader text="2010" className="p-0" />
              </div>
              <div className="md:max-w-3xl ml-auto md:mr-40 md:pb-4">
                <ImageWithLabel
                  ratio="4:3"
                  md="3:2"
                  src={`${flexData[4].blocks[0].singleMedia[0].image[0].url}?q=30&w=2000`}
                  alt="alt"
                  label={flexData[4].blocks[0].singleMedia[0].label}
                />
                <div className="md:flex mt-16 mb-32 md:mb-48 px-4 xl:px-0 ">
                  <TextBlockComponent
                    className="md:w-3/4 text-left max-w-6xl pr-6"
                    header=""
                    copy={flexData[4].blocks[0].textBlock[0].copy}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mx-24 md:px-16">
            <Carousel items={sliderItems2010s} />
          </div>
        </Section>
        <Section className="exploreOurWorld" theme="dark">
          <div className="relative max-w-7xl mx-auto">
            <div className="mb-24 pt-8">
              <ExploreOurWorld items={exploreOurWorldContent} />
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

const Section: React.FC<{
  style?: object
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

export const OneColumnTextBlockComponent = ({
  align = 'left',
  header,
  copy,
  theme = 'dark',
}: Omit<OneColumnTextBlock, 'type'> & { theme?: Theme }) => (
  <div
    className="my-12 px-4 xl:pl-0 mb-24 max-w-5xl mx-auto"
    data-block-type="OneColumnTextBlockComponent"
  >
    <TextBlockComponent
      className={clsx({
        'max-w-xl mr-auto text-left': align === 'left',
        'max-w-2xl mx-auto text-center': align === 'center',
        'max-w-xl ml-auto text-right': align === 'right',
      })}
      header={header}
      headerClassname={clsx({
        'text-black': theme === 'light',
        'text-red': theme === 'dark',
      })}
      copy={copy}
    />
  </div>
)

const VerticalHeader = ({
  className,
  text,
}: {
  className?: string
  text: string
}) => {
  const screenSmall = useMedia('(max-width: 767px)')
  const screenMedium = useMedia('(max-width: 1023px)')
  const screenLarge = useMedia('(max-width: 1200px)')
  const screenXLarge = useMedia('(min-width: 1200px)')

  const getFontSize = () => {
    if (screenSmall) return 80
    if (screenMedium) return 100
    if (screenLarge) return 150
    if (screenXLarge) return 195

    return 80
  }

  const fontSize = getFontSize()

  return (
    <div
      className={clsx(
        'writing-mode-vertical-alt transform rotate-180 pointer-events-none text-white tracking-heading leading-none font-heading font-light text-9xl uppercase',
        className
      )}
    >
      <div
        style={{
          fontSize,
          lineHeight: 1,
        }}
        className="whitespace-no-wrap"
      >
        {text}
        <span
          style={{
            fontSize: 130,
            lineHeight: 0,
            transform: `translate(16px, 7px)`,
          }}
          className="text-gray-2 font-normal align-top inline-block"
        >
          ,
        </span>
        <span
          style={{ fontSize: '120px' }}
          className="text-gray-2 align-bottom font-normal"
        >
          s
        </span>
      </div>
    </div>
  )
}

const MobileHeader = ({
  className,
  text,
}: {
  className?: string
  text: string
}) => {
  const screenSmall = useMedia('(max-width: 767px)')
  const screenMedium = useMedia('(max-width: 1023px)')
  const screenLarge = useMedia('(max-width: 1200px)')
  const screenXLarge = useMedia('(min-width: 1200px)')

  const getFontSize = () => {
    if (screenSmall) return 80
    if (screenMedium) return 100
    if (screenLarge) return 150
    if (screenXLarge) return 195
  }

  return (
    <div
      className={clsx(
        'relative z-10 md:hidden text-white leading-none font-heading font-light text-base uppercase',
        className
      )}
    >
      <div
        style={{
          fontSize: getFontSize(),
          lineHeight: 1,
        }}
        className="whitespace-no-wrap"
      >
        {text}
        <span
          style={{
            lineHeight: 0,
            top: '-7px',
            left: '5px',
          }}
          className="text-gray-2 font-normal align-top relative inline-block text-5xl"
        >
          ,
        </span>
        <span
          style={{ top: '-2px', position: 'relative' }}
          className="text-gray-2 align-bottom font-normal text-5xl"
        >
          s
        </span>
      </div>
    </div>
  )
}

export const OneColumnImageTextBlockComponent = ({
  align = 'left',
  image,
  header = '',
  copy,
  imageLabel = '',
  theme = 'dark',
  ratio = '',
}) => (
  <div>
    <div data-block-type="OneColumnImageTextBlockComponent">
      <ImageWithLabel
        ratio={ratio || '2:3'}
        src={`${image}?q=30&w=2000`}
        alt="alt"
        label={imageLabel}
      />
      <div className="md:flex mt-16 px-4 xl:px-0 ">
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
        className="md:mr-12 last:mr-0 cursor-pointer hover:opacity-75 transition-opacity duration-75 font-body md:text-sm"
        onClick={() => {
          const section = document.querySelector(`[data-section="${year}"]`)
          const topPos = section.offsetTop
          window.scroll({
            top: topPos,
            behavior: 'smooth',
          })
        }}
      >
        {year}
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
      <ul className="flex justify-between md:justify-center px-6 text-xs">
        {years.map((year) => {
          return <LegacyMenuItem key={year} year={year} />
        })}
      </ul>
    </div>
  )
}

const VerticalLineContainer = styled.div`
  background-image: url(${verticalDottedLine});
  @media (min-width: 768px) {
    background-image: url(${verticalDottedLineLarge});
  }
  /* vertical-line-desktop.svg */
  left: ${(props) => (props.left ? 0 : 'auto')};
  right: ${(props) => (props.right ? 0 : 'auto')};
  bottom: ${(props) => (props.bottom ? 0 : 'auto')};
  top: ${(props) => (props.top ? 0 : 'auto')};
  width: 50px;
  height: ${(props) => props.height || '100%'};
  position: absolute;
  background-repeat: repeat-y;
`

const HorizontalLineContainer = styled.div`
  background-image: url(${horizontalDottedLineLarge});
  height: 2px;
  width: 100%;
  background-repeat-y: no-repeat;
  background-repeat-x: repeat;
`

const StartCircle = styled.img`
  position: absolute;
  height: 36px;
  width: 36px;
  bottom: 278px;
  left: 16px;
  @media (max-width: 767px) {
  }
`

export default Legacy1969Page

export const query = graphql`
  query Legacy1969Page {
    craftAPI {
      dnaHeroMobile: assets(filename: "1969-hero-mobile.jpg") {
        url
      }
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
              # title: textBlockHeader
              shortTitle
              bleedDirection: imageBleedDirection
              headerImage: image {
                url
              }
              # textBlockHeader
              blocks: children {
                typeHandle
                ... on CraftAPI_flexibleSections_moreDetails_BlockType {
                  # textBlockHeader
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
                      # textBlockHeader
                      children {
                        ... on CraftAPI_flexibleSections_powertrainOptionDetails_BlockType {
                          textBlockCopy
                          # textBlockHeader
                        }
                      }
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_oneColumnTextBlock_BlockType {
                  # align: textAlign
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

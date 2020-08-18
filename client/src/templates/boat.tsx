import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { InPageNav, InPageAnchor } from '../molecules/in-page-nav'
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
import { CustomizationsSectionComponent } from './boat/customizations-section-component'
import { DiscoverSection } from './boat/discover-section'
import {
  Stat,
  CommonSectionProps,
  findDiscoverSection,
  findHeroSection,
  getFlexibleSections,
  findGallerySection,
  findSpecsSection,
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
  findOrderSection,
  isMoreDetailsBlock,
  isHorizontalImageTextBlock,
  HorizontalImageTextBlock,
} from '../types/boat'
import { Carousel } from '../molecules/carousel'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { Slider } from '../molecules/slider'
import { MediaGallery } from '../molecules/media-gallery'
import {
  InquiryModal,
  useInquiryModalState,
} from '../molecules/inquiry/inquiry-modal'

const extractTitles = (sections: readonly any[]) =>
  (sections as ({ type: string } & CommonSectionProps)[])
    .filter(
      (section) =>
        section.type !== 'hero' && !section.type.includes('DISABLED__')
    )
    .map((section) => [section.title, section.shortTitle || ''])

const extractTitlesFromCraft = (
  boatEntry: GatsbyTypes.BoatPageQuery['craftAPI']['entry']
) => {
  const titles: string[][] = []
  if (!!boatEntry?.discoverSection?.[0]) {
    titles.push(['Discover', ''])
  }
  boatEntry?.flexibleSections?.forEach((section) => {
    titles.push([section.title, section.shortTitle || ''])
  })
  if (!!boatEntry?.boatSpecs) {
    titles.push(['Specs', ''])
  }
  if (!!boatEntry?.gallery) {
    titles.push(['Gallery', ''])
  }
  titles.push([
    boatEntry?.orderSectionTitle || 'Order Today',
    boatEntry?.orderSectionShortTitle || 'Order',
  ])
  return titles
}

const extractHeroSectionFromCraft = (boatEntry: any) => {
  return {
    image: boatEntry.singleMedia[0]?.image[0]?.url,
    alt: boatEntry.singleMedia[0]?.alt,
    videoUrl: boatEntry.singleMedia[0]?.videoURL,
    boatNameLong: boatEntry.boatNameLong,
    headline: boatEntry.headline,
    stats: boatEntry.boatStats,
    boatLogo: boatEntry.boatLogo[0]?.url,
    boatName: boatEntry.title,
    ctaText: boatEntry.ctaText,
  }
}

const extractDiscoverSectionFromCraft = (boatEntry: any) => {
  return {
    title: 'discover',
    disableBackground: boatEntry.discoverSection[0]?.disableBackground,
    content: {
      header: boatEntry.discoverSection[0]?.textBlock[0]?.header,
      copy: boatEntry.discoverSection[0]?.textBlock[0]?.copy,
    },
    media: {
      image: boatEntry.discoverSection[0]?.singleMedia[0]?.image[0]?.url,
      videoUrl: boatEntry.discoverSection[0]?.singleMedia[0]?.videoURL,
    },
  }
}

const extractFlexibleSectionsFromCraft = (boatEntry: any) => {
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

  return boatEntry.flexibleSections.map((section: any) => {
    const blocks = section.blocks.map((block: any) => {
      return {
        ...block,
        source: 'craft',
        type:
          block.typeHandle === 'carousel' && block.fullWidth
            ? 'full-width-carousel'
            : blockTypes[block.typeHandle as keyof typeof blockTypes],
      }
    })

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

const extractGallerySectionFromCraft = (boatEntry: any) => {
  const galleryItems = boatEntry?.gallery.map((galleryItem) => {
    return {
      thumbnail: galleryItem?.thumbnail?.[0].url,
      image: galleryItem?.image?.[0].url,
      videoUrl: galleryItem?.videoURL,
    }
  })

  return {
    source: 'craft',
    type: 'gallery',
    title: 'Media Gallery',
    shortTitle: 'Gallery',
    gallery: galleryItems,
  }
}

const extractSpecsSectionFromCraft = (boatEntry: any) => {
  const categories = boatEntry.boatSpecs.map((specCategory) => {
    const specs = specCategory.children.map((specData) => {
      const specDescriptions = specData.children.map((specDesc) => {
        return specDesc.boatSpecDescription
      })

      return {
        name: specData.boatSpecName,
        descriptions: specDescriptions,
      }
    })

    return {
      name: specCategory.boatSpecCategory,
      specs,
    }
  })

  return {
    title: 'Specs',
    categories,
  }
}

const extractPowertrainDataFromCMS = (boatEntry: any) => {
  const options = boatEntry.powertrainOptions.map((option: any) => {
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

  return {
    heroImage: boatEntry.powertrainOptionsHeader,
    options,
  }
}

const extractOrderDataFromCraft = (boatEntry: any) => {
  return {
    boatNameLong: boatEntry.boatNameLong,
    title: boatEntry.orderSectionTitle || 'Order Today',
    media: boatEntry.orderSectionBackground[0]?.url,
  }
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
      },
    }
  })
}

const BoatTemplate = (props: PageProps<GatsbyTypes.BoatPageQuery>) => {
  const {
    data: {
      craftAPI: { entry: boatEntry },
    },
  } = props

  if (!boatEntry)
    return <div className="text-white">{props.pageContext.craftSlug}</div>

  const titles = extractTitlesFromCraft(boatEntry)
  const heroData = extractHeroSectionFromCraft(boatEntry)
  const discoverData = extractDiscoverSectionFromCraft(boatEntry)
  const flexData = getFlexibleSections(
    extractFlexibleSectionsFromCraft(boatEntry)
  )
  const specsData = extractSpecsSectionFromCraft(boatEntry)
  const galleryData = extractGallerySectionFromCraft(boatEntry)
  const customizationsData = findCustomizationsSection([])
  const orderData = extractOrderDataFromCraft(boatEntry)
  const powertrainData = extractPowertrainDataFromCMS(boatEntry)

  const [, setInquiryModalState] = useInquiryModalState()
  return (
    <Layout>
      <SEO title="Boat" />
      {!heroData && <div>Enter Some boat data</div>}
      {heroData && (
        <BoatHeader
          image={heroData.image}
          alt={heroData.alt}
          videoUrl={heroData.videoUrl}
          boatLogo={heroData.boatLogo}
          boatNameLong={heroData.boatNameLong}
          headline={heroData.headline!}
          stats={heroData.stats! as Stat[]}
          onClickCta={setInquiryModalState}
          ctaText={heroData.ctaText}
        />
      )}
      <InPageNav
        boatName={heroData.boatName}
        titles={titles}
        onClickInquire={setInquiryModalState}
      />
      {discoverData && (
        <DiscoverSection
          sectionTitle={discoverData.title!}
          media={discoverData.media}
          header={discoverData.content.header}
          copy={discoverData.content.copy}
          disableBackground={discoverData.disableBackground}
        />
      )}
      {flexData.map(
        ({
          title,
          theme,
          bleedDirection,
          headerImage,
          blocks,
          moreDetails,
        }) => (
          <BoatSection key={title} theme={theme}>
            <InPageAnchor title={title} />
            <MobileSectionHeader>{title}</MobileSectionHeader>
            {!!headerImage && (
              <VerticalHeaderBlock
                label={title}
                side={bleedDirection === 'left' ? 'right' : 'left'}
                theme={theme}
                className="lg:mt-32"
              />
            )}
            {!!headerImage && (
              <SideBleedImage
                media={headerImage}
                side={bleedDirection}
                className="lg:mt-32 mb-20 md:mb-32"
                size="large"
              />
            )}
            {!!blocks &&
              blocks.map((block, index) => {
                if (isTwoColumnImageTextBlock(block)) {
                  return (
                    <div>TWO COLUMN IMAGE TEXT BLOCK</div>
                    // <TwoColumnImageTextBlockComponent key={index} {...block} />
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
                    }
                    block.media = block.singleMedia?.[0].image?.[0].url
                  }

                  return <OneColumnImageTextBlockComponent {...block} />
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
                    <HorizontalImageTextBlockComponent {...extractedBlock} />
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

                  return <PowertrainSectionComponent {...powertrainData} />
                }

                if (isMoreDetailsBlock(block)) {
                  const buttonText = block.textBlockHeader

                  const details = block.children.map((detail) => {
                    return {
                      layout: detail.horizontalLayout,
                      header: detail.textBlock?.[0].header,
                      copy: detail.textBlock?.[0].copy,
                      image: detail.singleMedia?.[0].image?.[0].url,
                    }
                  })

                  const moreDetailsData = {
                    buttonText,
                    details,
                  }

                  return <MoreDetailsBlockComponent {...moreDetailsData} />
                }

                return null
              })}
          </BoatSection>
        )
      )}
      {!!specsData?.categories.length && (
        <SpecsSectionComponent
          boatNameLong={boatEntry.boatNameLong}
          {...specsData}
        />
      )}
      {!!powertrainData?.options?.length && (
        <PowertrainSectionComponent {...powertrainData} />
      )}
      {galleryData && !!galleryData.gallery.length && (
        <MediaGallery {...galleryData} />
      )}
      {customizationsData && (
        <CustomizationsSectionComponent {...customizationsData} />
      )}
      {orderData && (
        <OrderSectionComponent
          onClickCta={setInquiryModalState}
          {...orderData}
        />
      )}
      <InquiryModal />
    </Layout>
  )
}

export default BoatTemplate

export const query = graphql`
  query BoatPage($craftSlug: String) {
    craftAPI {
      entry(slug: [$craftSlug]) {
        id
        title
        ... on CraftAPI_boats_boats_Entry {
          id
          headline
          slug
          title
          boatNameLong
          ctaText: textBlockHeader
          singleMedia {
            ... on CraftAPI_singleMedia_BlockType {
              alt
              videoURL
              image {
                url(width: 2000)
              }
            }
          }
          boatLogo {
            ... on CraftAPI_s3_Asset {
              url
            }
          }
          gallery: multipleMedia {
            ... on CraftAPI_multipleMedia_BlockType {
              thumbnail: image {
                ... on CraftAPI_s3_Asset {
                  title
                  url(width: 1000)
                }
              }
              image {
                ... on CraftAPI_s3_Asset {
                  title
                  url(width: 2000)
                }
              }
              videoURL
            }
          }
          boatStats {
            ... on CraftAPI_boatStats_stat_BlockType {
              statLabel
              statText
              statPercentage
            }
          }
          powertrainOptionsHeader {
            ... on CraftAPI_s3_Asset {
              url(width: 2800)
            }
          }
          powertrainOptions {
            ... on CraftAPI_powertrainOptions_option_BlockType {
              textBlockHeader
              children {
                ... on CraftAPI_powertrainOptions_optionDetail_BlockType {
                  textBlockCopy
                  textBlockHeader
                }
              }
            }
          }
          discoverSection {
            ... on CraftAPI_discoverSection_discoverSection_BlockType {
              disableBackground
              singleMedia {
                ... on CraftAPI_singleMedia_BlockType {
                  image {
                    ... on CraftAPI_s3_Asset {
                      id
                      url(width: 2800)
                    }
                  }
                  videoURL
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
                          copy
                          header
                        }
                      }
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
                          id
                          videoURL
                          image {
                            ... on CraftAPI_s3_Asset {
                              id
                              url(width: 2000)
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
                      url(width: 2000)
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
                      copy
                      header
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
                  textBlock {
                    ... on CraftAPI_textBlock_BlockType {
                      copy
                    }
                  }
                  singleMedia {
                    ... on CraftAPI_singleMedia_BlockType {
                      image {
                        ... on CraftAPI_s3_Asset {
                          url
                        }
                      }
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_twoColumnImagesBlock_BlockType {
                  children {
                    ... on CraftAPI_flexibleSections_image_BlockType {
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
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
                }
                ... on CraftAPI_flexibleSections_threeColumnImagesBlock_BlockType {
                  children {
                    typeHandle
                    ... on CraftAPI_flexibleSections_image_BlockType {
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
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
                ... on CraftAPI_flexibleSections_sliderBlock_BlockType {
                  id
                }
                ... on CraftAPI_flexibleSections_carousel_BlockType {
                  fullWidth
                  children {
                    ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
                      textBlock {
                        ... on CraftAPI_textBlock_BlockType {
                          copy
                        }
                      }
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
                          image {
                            ... on CraftAPI_s3_Asset {
                              url
                            }
                          }
                          autoplayVideo
                          videoURL
                        }
                      }
                    }
                  }
                }
                ... on CraftAPI_flexibleSections_sliderBlock_BlockType {
                  children {
                    ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
                      singleMedia {
                        ... on CraftAPI_singleMedia_BlockType {
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
                      id
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
          boatSpecs {
            ... on CraftAPI_boatSpecs_specCategory_BlockType {
              boatSpecCategory
              children {
                ... on CraftAPI_boatSpecs_spec_BlockType {
                  boatSpecName
                  children {
                    ... on CraftAPI_boatSpecs_description_BlockType {
                      boatSpecDescription
                    }
                  }
                }
              }
            }
          }
          orderSectionTitle
          orderSectionShortTitle: shortTitle
          orderSectionBackground {
            ... on CraftAPI_s3_Asset {
              url(width: 2800)
            }
          }
        }
      }
    }
  }
`

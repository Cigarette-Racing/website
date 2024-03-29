import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { InPageNav, InPageAnchor } from '../molecules/in-page-nav'
import {
  BoatHeader,
  BoatSection,
  MoreDetailsBlockComponent,
  OrderSectionComponent,
  PowertrainSectionComponent,
} from './boat.components'
import {
  createCarouselItems,
  extractFlexibleSectionsFromCraft,
  HorizontalImageTextBlockComponent,
  MobileSectionHeader,
  OneColumnImageTextBlockComponent,
  OneColumnTextBlockComponent,
  SideBleedImage,
  ThreeUpImageBlock,
  TwoColumnImageTextBlockComponent,
  TwoUpImageBlock,
  VerticalHeaderBlock,
} from './common.components'
import { CustomizationsSectionComponent } from './boat/customizations-section-component'
import { DiscoverSection } from './boat/discover-section'
import SpecsAndFeaturesSection from '../components/specsAndFeatures/SpecificationsAndFeatures'
import { isPowertrainBlock, isMoreDetailsBlock } from '../types/boat'
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
import { MediaGallery } from '../molecules/media-gallery'
import {
  InquiryModal,
  useInquiryModalState,
} from '../molecules/inquiry/inquiry-modal'

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
    eyebrow: boatEntry.eyebrow,
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

const extractGallerySectionFromCraft = (boatEntry: any) => {
  const galleryItems = boatEntry?.gallery.map((galleryItem) => {
    return {
      thumbnail: galleryItem?.image?.[0].thumbnail,
      image: galleryItem?.image?.[0].full,
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

const extractCustomizationsSectionFromCraft = (boatEntry: any) => {
  const options = boatEntry?.bespokeOptions?.map((option: any) => {
    return {
      media: {
        image: option.singleMedia?.[0].image?.[0].url,
      },
      content: {
        header: option.textBlock?.[0]?.header,
        copy: option.textBlock?.[0]?.copy,
      },
    }
  })

  return {
    title: boatEntry.bespokeSectionCustomTitle || 'Make it Yours',
    subtitle: boatEntry.bespokeSectionCustomSubtitle || 'Bespoke Possibilities',
    backgroundImage: boatEntry.bespokeBackgroundImage?.[0]?.url,
    options,
  }
}

const extractSpecsSectionFromCraft = (boatEntry: any) => {
  const categories = boatEntry?.boatSpecs?.map((specCategory: any) => {
    const specs = specCategory?.children?.map((specData: any) => {
      const specDescriptions = specData?.children?.map((specDesc: any) => {
        return specDesc?.boatSpecDescription
      })

      return {
        name: specData?.boatSpecName,
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

const extractSpecsAndFeaturesFromCraft = (boatEntry: any) => {
  const getSpecs = () => {
    const specificationsCategories = boatEntry?.boatSpecifications?.map(
      (specificationCategory: any) => {
        const metricValues: any = []
        const usValues: any = []

        specificationCategory?.children?.map((specification: any) => {
          metricValues.push(specification.specificationValueMetric)
          usValues.push(specification.specificationValueUS)
        })

        return {
          name: specificationCategory?.specificationLabel,
          values: {
            metricValues,
            usValues,
          },
        }
      }
    )

    return {
      title: 'Specifications',
      specificationsCategories,
    }
  }

  const getFeatures = () => {
    const featureCategories = boatEntry?.boatFeatures?.map(
      (featureCategory: any) => {
        const features = featureCategory?.children?.map((featureData: any) => {
          const featureDescriptions = featureData?.children?.map(
            (featureDesc: any) => {
              return featureDesc.boatFeatureDescription
            }
          )

          return {
            name: featureData.boatFeatureName,
            descriptions: featureDescriptions,
          }
        })

        return {
          name: featureCategory.boatFeatureCategory,
          features,
        }
      }
    )

    return {
      title: 'Features',
      featureCategories,
    }
  }

  return {
    specifications: getSpecs(),
    features: getFeatures(),
  }
}

const extractPowertrainDataFromCMS = (boatEntry: any) => {
  const moreDetailsInfo = boatEntry?.powertrainMoreDetails?.[0]?.children.map(
    (detail) => {
      return {
        layout: detail.horizontalLayout,
        header: detail.textBlock?.[0]?.header,
        copy: detail.textBlock?.[0]?.copy,
        image: detail.singleMedia?.[0].image?.[0]?.url,
      }
    }
  )

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
    moreDetails: {
      buttonText: boatEntry?.powertrainMoreDetails?.[0]?.textBlockHeader,
      details: moreDetailsInfo,
    },
  }
}

const extractOrderDataFromCraft = (boatEntry: any) => {
  return {
    boatNameLong: boatEntry.boatNameLong,
    title: boatEntry.orderSectionTitle || 'Order Today',
    media: boatEntry.orderSectionBackground[0]?.url,
  }
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
  const specsAndFeaturesData = extractSpecsAndFeaturesFromCraft(boatEntry)
  const galleryData = extractGallerySectionFromCraft(boatEntry)
  const customizationsData = extractCustomizationsSectionFromCraft(boatEntry)
  const orderData = extractOrderDataFromCraft(boatEntry)
  const powertrainData = extractPowertrainDataFromCMS(boatEntry)

  const [, setInquiryModalState] = useInquiryModalState()
  return (
    <Layout>
      <SEO title={heroData.boatName} slug={props.path} image={heroData.image} />
      {!heroData && <div>Enter Some boat data</div>}
      {heroData && (
        <BoatHeader
          image={`${heroData.image}?q=30&w=2800`}
          alt={heroData.alt}
          videoUrl={heroData.videoUrl}
          boatLogo={heroData.boatLogo}
          boatNameLong={heroData.boatNameLong}
          eyebrow={heroData.eyebrow}
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
      {flexData.map(({ title, theme, bleedDirection, headerImage, blocks }) => (
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
        </BoatSection>
      ))}
      {!!specsAndFeaturesData && (
        <SpecsAndFeaturesSection {...specsAndFeaturesData} />
      )}
      {!!powertrainData?.options?.length && (
        <PowertrainSectionComponent {...powertrainData} />
      )}
      {galleryData && !!galleryData.gallery.length && (
        <MediaGallery {...galleryData} />
      )}
      {customizationsData && customizationsData.options.length > 0 && (
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
          eyebrow
          ctaText: textBlockHeader
          singleMedia {
            ... on CraftAPI_singleMedia_BlockType {
              alt
              autoplayVideo
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
              image {
                ... on CraftAPI_s3_Asset {
                  title
                  thumbnail: url(width: 1000)
                  full: url(width: 2000)
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
          bespokeOptions {
            ... on CraftAPI_bespokeOptions_option_BlockType {
              textBlock {
                ... on CraftAPI_textBlock_BlockType {
                  header
                  copy
                }
              }
              singleMedia {
                ... on CraftAPI_singleMedia_BlockType {
                  image {
                    url(width: 1000)
                  }
                  label
                  title
                }
              }
            }
          }
          bespokeBackgroundImage {
            url
          }
          bespokeSectionCustomTitle
          bespokeSectionCustomSubtitle
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
          powertrainMoreDetails {
            ... on CraftAPI_powertrainMoreDetails_moreDetails_BlockType {
              textBlockHeader
              children {
                ... on CraftAPI_powertrainMoreDetails_moreDetailsImageCopy_BlockType {
                  horizontalLayout
                  singleMedia {
                    ... on CraftAPI_singleMedia_BlockType {
                      image {
                        url(width: 1000)
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
          }
          discoverSection {
            ... on CraftAPI_discoverSection_discoverSection_BlockType {
              disableBackground
              singleMedia {
                ... on CraftAPI_singleMedia_BlockType {
                  autoplayVideo
                  videoURL
                  image {
                    ... on CraftAPI_s3_Asset {
                      id
                      url(width: 2800)
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
          boatFeatures {
            ... on CraftAPI_boatFeatures_featureCategory_BlockType {
              boatFeatureCategory
              children {
                ... on CraftAPI_boatFeatures_featureCategory_BlockType {
                  boatFeatureCategory
                }
                ... on CraftAPI_boatFeatures_feature_BlockType {
                  boatFeatureName
                  children {
                    ... on CraftAPI_boatFeatures_description_BlockType {
                      boatFeatureDescription
                    }
                  }
                }
                ... on CraftAPI_boatFeatures_description_BlockType {
                  boatFeatureDescription
                }
              }
            }
          }
          boatSpecifications {
            ... on CraftAPI_boatSpecifications_specificationName_BlockType {
              specificationLabel
              children {
                ... on CraftAPI_boatSpecifications_specificationValue_BlockType {
                  specificationValueMetric
                  specificationValueUS
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

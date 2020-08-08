import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { InPageCta } from '../atoms/in-page-cta'
import { InPageNav, InPageAnchor } from '../molecules/in-page-nav'
import { PlusIcon } from '../svgs/icons'
import {
  BoatHeader,
  BoatSection,
  MobileSectionHeader,
  VerticalHeaderBlock,
  SideBleedImage,
  TwoUpImageBlock,
  ThreeUpImageBlock,
  SpecsSectionComponent,
  OneColumnTextBlockComponent,
  TwoColumnImageTextBlockComponent,
  OneColumnImageTextBlockComponent,
  OrderSectionComponent,
  HorizontalImageTextBlockComponent,
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
  findOrderSection,
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

const extractHeroSectionFromCraft = (boatEntry: any) => {
  return {
    backgroundMedia: boatEntry.singleMedia[0]?.image[0]?.url,
    boatNameLong: boatEntry.boatNameLong,
    headline: boatEntry.headline,
    stats: boatEntry.boatStats,
    boatLogo: boatEntry.boatLogo[0]?.url,
    boatName: boatEntry.title,
  }
}

const extractDiscoverSectionFromCraft = (boatEntry: any) => {
  return {
    title: 'discover',
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
  }

  return boatEntry.flexibleSections.map((section: any) => {
    const blocks = section.blocks.map((block) => {
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
        copy: item.singleMedia.textBlock?.[0].copy,
        header: item.singleMedia.textBlock?.[0].header,
      },
      media: {
        image: item.singleMedia?.[0].image?.[0].url,
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
  console.log(boatEntry)

  const {
    data: { boatsYaml: boat },
  } = props

  const titles = extractTitles(!!boatEntry ? [] : boat.sections!)
  const heroData = !!boatEntry
    ? extractHeroSectionFromCraft(boatEntry)
    : findHeroSection(boat.sections!)
  const discoverData = !!boatEntry
    ? extractDiscoverSectionFromCraft(boatEntry)
    : findDiscoverSection(boat.sections!)

  const flexData = !!boatEntry
    ? getFlexibleSections(extractFlexibleSectionsFromCraft(boatEntry))
    : getFlexibleSections(boat.sections!)
  const specsData = !!boatEntry
    ? extractSpecsSectionFromCraft(boatEntry)
    : findSpecsSection(boat.sections!)
  const galleryData = findGallerySection(!!boatEntry ? [] : boat.sections!)
  const customizationsData = findCustomizationsSection(
    !!boatEntry ? [] : boat.sections!
  )
  const orderData = !!boatEntry
    ? extractOrderDataFromCraft(boatEntry)
    : findOrderSection(!!boatEntry ? [] : boat.sections!)

  console.log('flexData', flexData)

  const [, setInquiryModalState] = useInquiryModalState()
  return (
    <Layout>
      <SEO title="Boat" />
      {!heroData && <div>Enter Some boat data</div>}
      {heroData && (
        <BoatHeader
          boatImage={
            !!boatEntry
              ? heroData.backgroundMedia
              : heroData.backgroundMedia.image.childImageSharp?.fluid!
          }
          boatLogo={
            !!boatEntry ? heroData.boatLogo : heroData.boatLogo.image.publicURL!
          }
          boatNameLong={
            !!boatEntry ? heroData.boatNameLong : boat.boatNameLong!
          }
          headline={heroData.headline!}
          stats={heroData.stats! as Stat[]}
          onClickCta={setInquiryModalState}
        />
      )}
      <InPageNav
        boatName={!!boatEntry ? heroData.boatName : boat.boatName!}
        titles={titles}
        onClickInquire={setInquiryModalState}
      />
      {discoverData && (
        <DiscoverSection
          sectionTitle={discoverData.title!}
          media={discoverData.media}
          header={discoverData.content.header}
          copy={discoverData.content.copy}
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
            <VerticalHeaderBlock
              label={title}
              side={bleedDirection === 'left' ? 'right' : 'left'}
              theme={theme}
              className="lg:mt-32"
            />
            <SideBleedImage
              media={headerImage}
              side={bleedDirection}
              className="lg:mt-32 md:mb-32"
              size="large"
            />
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
                  console.log('three images up')

                  return (
                    <ThreeUpImageBlock
                      key={index}
                      className="mb-32"
                      images={block.images}
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
                        publicURL: block.singleMedia[0].image[0].url as string,
                      },
                    },
                  }
                  console.log(block, extractedBlock)
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
                return null
              })}
            {moreDetails && (
              <div className="flex justify-center md:mb-12">
                <InPageCta variant="secondary" theme={theme}>
                  <span className="flex items-center">
                    <PlusIcon className="inline-block text-red mr-2 text-lg" />
                    <span>More Details</span>
                  </span>
                </InPageCta>
              </div>
            )}
          </BoatSection>
        )
      )}
      {!!specsData?.categories.length && (
        <SpecsSectionComponent
          boatNameLong={
            !!boatEntry ? !!boatEntry.boatNameLong : boat.boatNameLong!
          }
          {...specsData}
        />
      )}
      {galleryData && <MediaGallery {...galleryData} />}
      {/* {customizationsData && (
        <CustomizationsSectionComponent {...customizationsData} />
      )} */}
      {orderData && (
        <OrderSectionComponent
          boatNameLong={
            !!boatEntry ? !!boatEntry.boatNameLong : boat.boatNameLong!
          }
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
  query BoatPage($slug: String!, $craftSlug: String) {
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
          singleMedia {
            ... on CraftAPI_singleMedia_BlockType {
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
          boatStats {
            ... on CraftAPI_boatStats_stat_BlockType {
              statLabel
              statText
              statPercentage
            }
          }
          discoverSection {
            ... on CraftAPI_discoverSection_discoverSection_BlockType {
              singleMedia {
                ... on CraftAPI_singleMedia_BlockType {
                  image {
                    ... on CraftAPI_s3_Asset {
                      id
                      url(width: 1000)
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
              bleedDirection: imageBleedDirection
              headerImage: image {
                url
              }
              blocks: children {
                typeHandle
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
                  id
                }
                ... on CraftAPI_flexibleSections_sliderBlock_BlockType {
                  id
                }
                ... on CraftAPI_flexibleSections_carousel_BlockType {
                  fullWidth
                  children {
                    typeHandle
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
          orderSectionBackground {
            ... on CraftAPI_s3_Asset {
              url(width: 1200)
            }
          }
        }
      }
    }
    boatsYaml(fields: { slug: { eq: $slug } }) {
      boatName
      boatNameLong
      sections {
        type
        title
        shortTitle
        stats {
          percentage
          text
          label
        }
        headline
        boatLogo {
          image {
            publicURL
          }
        }
        backgroundMedia {
          image {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        media {
          image {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          videoUrl
        }
        content {
          header
          copy
        }
        categories {
          name
          specs {
            name
            descriptions
          }
        }
        gallery {
          thumbnail: image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          videoUrl
        }
        options {
          media {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          content {
            header
            copy
          }
        }
        theme
        bleedDirection
        headerImage {
          image {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        blocks {
          type
          leftColumn {
            content {
              header
              copy
            }
            media {
              image {
                childImageSharp {
                  fluid(maxWidth: 2400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              label
            }
          }
          rightColumn {
            content {
              header
              copy
            }
            media {
              image {
                childImageSharp {
                  fluid(maxWidth: 2400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              label
            }
          }
          header
          copy
          align
          items {
            content {
              header
              copy
            }
            media {
              image {
                childImageSharp {
                  fluid(maxWidth: 2400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 2400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          media {
            image {
              childImageSharp {
                fluid(maxWidth: 2400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          content {
            header
            copy
          }
        }
      }
    }
  }
`

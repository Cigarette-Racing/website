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
} from '../types/boat'
import { Carousel } from '../molecules/carousel'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { Slider } from '../molecules/slider'
import { MediaGallery } from '../molecules/media-gallery'
import {
  InquiryModal,
  useInquiryModalState,
} from '../molecules/inquiry/inquiry-modal'

const categories = [
  {
    name: 'Deck',
    specs: [
      {
        name: 'Helmstation',
        descriptions: [
          'All new floating instrument panel constructed from a solid block of aluminum and anodized',
          'Nano-coated instrument panel face which is resistant to heat, reflections and fingerprints',
          'RGB LED accent lighting around the instrument panel provides a distinct glow, creating the illusion that the dash is floating',
          'Wind doors on each side for added wind protection, constructed from carbon-fiber',
          'Ergonomically placed components and instrumentation',
          'Triple flush mounted 17” Garmin multifunctional displays',
          'Convenience space consisting of cupholders, phone holders, and a keeper tray holder',
          'Stainless grab-rails',
          'Ergonomic CNC machined footrest',
        ],
      },
      {
        name: 'Midship Storage',
        descriptions: [
          'Integrated fender storage in gunnels with ability to store four (4x) 8” fenders',
          'Integrated trash receptacle in gunnel with trash bag holder',
          'Shoe storage cabinet',
          'Forward combing boxes for additional storage',
          'Large floor storage located on both port and starboard side',
        ],
      },
      {
        name: 'Three seat helm seating with central drivers seat',
        descriptions: [
          'Seat bottoms may be flipped up to form a bolster for more comfortable stand-up operation',
        ],
      },
      {
        name: 'Aft Lounge Area',
        descriptions: [
          'Unique lounge arrangement with forward facing oversized L-\tshaped sofa and aft facing sofa',
          'Forward and aft facing sofas electrically slide to become an oversized sundae area',
          'Forward facing sofa with integrated cupholders',
          'Eight cupholders are conveniently located in this area, including inside a recessed cubby by the L-shaped sofa',
          'Large machinery hatch gives full access to technical room below',
          'Storage box under port side L-shaped seating',
          'Flip down port side boarding step integrated into the combing pads',
          'Two aft insulated coolers with drainage on rear dovetail',
        ],
      },
    ],
  },
  {
    name: 'Interiors',
    specs: [
      {
        name: 'Cabin - General',
        descriptions: [
          'Port-side access to cabin',
          'Redesigned luxury interior',
          'CNC cut wood cabinets',
          'CNC cut Corian countertops',
          'Stainless steel freshwater sink',
          'Electric head',
          'Polished towel and toilet paper holders',
        ],
      },
      {
        name: 'Enclosed Head',
        descriptions: [
          'Electric head with macerator',
          'Stainless steel freshwater sink',
          'Polished towel and toilet paper holders',
        ],
      },
      {
        name: 'Cabin Lighting',
        descriptions: [
          'Distributed, warm white, high CRI, ceiling spotlights are provided in the cabin',
        ],
      },
      {
        name: 'Berth',
        descriptions: ['Two passenger sleeping berth'],
      },
    ],
  },
  {
    name: 'Details',
    specs: [
      {
        name: 'Upholstery & Flooring',
        descriptions: [
          'Upholstery is in premium quality outdoor fabrics',
          'Diamond pattern non-skid',
        ],
      },
      {
        name: 'Exterior Lighting',
        descriptions: [
          'Digitally controlled RGB ambient lighting',
          'High power LED down-lights are installed in the hardtop for general and task lighting',
          'Red captains lighting for night tasks',
          'Underwater lighting with full spectrum control',
        ],
      },
    ],
  },
  {
    name: 'Technical',
    specs: [
      {
        name: 'Audio',
        descriptions: [
          'Cigarette PURE by JL Audio Marine',
          '6x 8.8” JL Audio M Series coaxial speakers, plus 2 x 12”  and 1x10” JL Audio M subwoofers on deck',
          '2,400 watts of Class D amplification',
          'Fusion Apollo network headunit',
          '2x 7.7” JL Audio M Series cabin speakers powered by Apollo head unit',
        ],
      },
      {
        name: 'Digital Switching & Automation',
        descriptions: [
          'State-of-the-art CZone digital control and monitoring system',
          'Control of almost every vessel function through several touch screen displays on the boat',
          'Single button “scenes” which activate preset conditions such as day cruising, night cruising, at the dock or entertaining',
          'Lighting, including dimming, can be adjusted across the boat with a single keystroke from any MFD throughout the vessel',
          'CZone monitoring allows the operator to monitor water and diesel fuel (if optioned) directly and fuel level via the NMEA2000 network',
          'Automatic sequential engine starting with a single button push on the Garmin display',
          'Individual engine trim control through Mercury integration',
          'Manual bypass toggle switches for critical systems',
          'All digital switching output modules feature a two position fuse holder that allows bypass of the output directly by moving the fuse to the alternate position for get-home capability',
          'Power source selection conveniently located in the main distribution panel',
          'Individual branch circuit breakers and monitoring boards are strategically located out of sight but within easy reach',
          'Circuits can be turned on or off from one or more of the Garmin MFD displays around the boat',
        ],
      },
      {
        name: 'Electrical System Design',
        descriptions: [
          'Split DC electrical system designed to protect the start battery pack and provide multiple power feeds for critical systems such as navigation',
          'Standalone engine starting and power steering circuits',
          'Automatic battery switches with manual paralleling',
          'House battery system designed to minimize weight and maximize powering of house loads',
          'Bilge pumps, drain sumps and the wireless remote to CZone are all fed directly from the house battery bank with reset only circuit breakers so that these critical circuits can’t be accidentally turned off',
          'House bank charging is accomplished by dedicated battery charger.',
          '30Amp shore power',
        ],
      },
      {
        name: 'Helmstation',
        descriptions: [
          'All new floating instrument panel constructed from a solid block of aluminum and anodized',
          'Nano-coated instrument panel face which is resistant to heat, reflections and fingerprints',
          'RGB LED accent lighting around the instrument panel provides a distinct glow, creating the illusion that the dash is floating',
          'Wind doors on each side for added wind protection, constructed from carbon-fiber',
          'Ergonomically placed components and instrumentation',
          'Triple flush mounted 17” Garmin multifunctional displays',
          'Convenience space consisting of cupholders, phone holders, and a keeper tray holder',
          'Stainless grab-rails',
          'Ergonomic CNC machined footrest',
        ],
      },
      {
        name: 'Laminate',
        descriptions: [
          'Hull and deck are vacuum bagged and use a highly optimized laminate schedule with vinylester resin',
          'Balsa cored hull and deck, foam cored hardtop',
          'Over 7” thick high density transom',
          'Carbon-fiber hard top to reduce the center of gravity for better handling',
          'Two sided, completely finished, hatches throughout',
        ],
      },
      {
        name: 'Mercury Power & Control',
        descriptions: [
          'Quad Mercury Racing or Mercury Verado outboards',
          'Four/five engines can be controlled by just two levers',
          'New VesselView UI',
        ],
      },
    ],
  },
  {
    name: 'Exterior',
    specs: [
      {
        name: 'Paint',
        descriptions: ['Painted hullside with bootstripe included'],
      },
    ],
  },
]

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

const extractFlexibleSectionFromCraft = (boatEntry: any) => {
  return []
}

const extractSpecsSectionFromCraft = (boatEntry: any) => {
  const categories = boatEntry.boatSpecs.map((specCategory) => {
    // const specs = specCategory.
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

  console.log(categories)

  return {
    title: 'Specs',
    categories,
  }
}

const extractOrderDataFromCraft = (boatEntry: any) => {
  return {
    boatNameLong: boatEntry.boatNameLong,
    title: 'Order Today',
    media: boatEntry.orderTodayBackground[0]?.url,
  }
}

const BoatTemplate = (props: PageProps<GatsbyTypes.BoatPageQuery>) => {
  const {
    data: {
      craftAPI: { entry: boatEntry },
    },
  } = props

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
    ? extractFlexibleSectionFromCraft(boatEntry)
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

  const [, setInquiryModalState] = useInquiryModalState()
  return (
    <Layout>
      <SEO title="Boat" />
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
            {blocks.map((block, index) => {
              if (isTwoColumnImageTextBlock(block)) {
                return (
                  <TwoColumnImageTextBlockComponent key={index} {...block} />
                )
              }
              if (isOneColumnTextBlock(block)) {
                return (
                  <OneColumnTextBlockComponent
                    key={index}
                    {...block}
                    align={block.align ?? undefined}
                  />
                )
              }
              if (isOneColumnImageTextBlock(block)) {
                return <OneColumnImageTextBlockComponent {...block} />
              }
              if (isCarouselBlock(block)) {
                return <Carousel key={index} {...block} />
              }
              if (isSliderBlock(block)) {
                return <Slider key={index} {...block} />
              }
              if (isThreeColumnImagesBlock(block)) {
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
                    images={block.images}
                  />
                )
              }
              if (isFullWidthCarouselBlock(block)) {
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
      {specsData && (
        <SpecsSectionComponent
          boatNameLong={boat.boatNameLong!}
          {...specsData}
        />
      )}
      {console.log(specsData)}
      {galleryData && <MediaGallery {...galleryData} />}
      {customizationsData && (
        <CustomizationsSectionComponent {...customizationsData} />
      )}
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
              textBlockHeader
              imageBleedDirection
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
          orderTodayBackground {
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

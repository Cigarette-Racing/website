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

const extractTitles = (sections: readonly any[]) =>
  (sections as ({ type: string } & CommonSectionProps)[])
    .filter(
      (section) =>
        section.type !== 'hero' && !section.type.includes('DISABLED__')
    )
    .map((section) => [section.title, section.shortTitle || ''])

const BoatTemplate = (props: PageProps<GatsbyTypes.BoatPageQuery>) => {
  const {
    data: { boatsYaml: boat },
  } = props
  if (!boat) return null

  const titles = extractTitles(boat.sections!)
  const heroData = findHeroSection(boat.sections!)
  const discoverData = findDiscoverSection(boat.sections!)
  const flexData = getFlexibleSections(boat.sections!)
  const specsData = findSpecsSection(boat.sections!)
  const galleryData = findGallerySection(boat.sections!)
  const customizationsData = findCustomizationsSection(boat.sections!)
  const orderData = findOrderSection(boat.sections!)

  const [, setInquiryModalState] = useInquiryModalState()
  return (
    <Layout>
      <SEO title="Boat" />
      {heroData && (
        <BoatHeader
          boatImage={heroData.backgroundMedia.image.childImageSharp?.fluid!}
          boatLogo={heroData.boatLogo.image.publicURL!}
          boatNameLong={boat.boatNameLong!}
          headline={heroData.headline!}
          stats={heroData.stats! as Stat[]}
          onClickCta={setInquiryModalState}
        />
      )}
      <InPageNav
        boatName={boat.boatName!}
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
      {galleryData && <MediaGallery {...galleryData} />}
      {customizationsData && (
        <CustomizationsSectionComponent {...customizationsData} />
      )}
      {orderData && (
        <OrderSectionComponent
          boatNameLong={boat.boatNameLong!}
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
  query BoatPage($id: String!) {
    boatsYaml(id: { eq: $id }) {
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

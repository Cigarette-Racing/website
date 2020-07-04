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
  DiscoverSection,
  MobileSectionHeader,
  OrderSection,
  VerticalHeaderBlock,
  SideBleedImage,
  TwoUpImageBlock,
  ThreeUpImageBlock,
  MediaGallerySection,
  SpecsSectionComponent,
  // CustomizationsSectionComponent,
  OneColumnTextBlockComponent,
  TwoColumnImageTextBlockComponent,
} from '../boat.components'
import {
  Stat,
  CommonSectionProps,
  findDiscoverSection,
  findHeroSection,
  getFlexibleSections,
  findGallerySection,
  findSpecsSection,
  // findCustomizationsSection,
  isTwoColumnImageTextBlock,
  isOneColumnTextBlock,
  isCarouselBlock,
  isTwoColumnImagesBlock,
  isThreeColumnImagesBlock,
  isSliderBlock,
  isFullWidthCarouselBlock,
} from '../types/boat'
import { Carousel } from '../molecules/carousel'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { Slider } from '../molecules/slider'
import { MediaGallery } from '../molecules/media-gallery'

const ORDER_TITLE = ['Order Today', 'Order']

const extractTitles = (sections: readonly any[]) =>
  (sections as ({ type: string } & CommonSectionProps)[])
    .filter((section) => section.type !== 'hero')
    .map((section) => [section.title, section.shortTitle || ''])
    .concat([ORDER_TITLE])

const IndexPage = (props: PageProps<GatsbyTypes.BoatPageQuery>) => {
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
  // TODO:
  // const customizationsData = findCustomizationsSection(boat.sections!)
  return (
    <Layout>
      <SEO title="Boat" />
      <BoatHeader
        boatImage={heroData.backgroundMedia.image.childImageSharp?.fluid!}
        boatLogo={heroData.boatLogo.image.publicURL!}
        boatNameLong={boat.boatNameLong!}
        headline={heroData.headline!}
        stats={heroData.stats! as Stat[]}
      />
      <InPageNav
        boatName="Tirranna"
        titles={titles}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <DiscoverSection
        sectionTitle={discoverData.title!}
        primaryImage={discoverData.media.image.childImageSharp?.fluid?.src!}
        header={discoverData.content.header}
        copy={discoverData.content.copy}
      />
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
              src={headerImage.image.childImageSharp?.fluid?.src!}
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
                    images={[
                      block.images[0].image.childImageSharp?.fluid?.src!,
                      block.images[1].image.childImageSharp?.fluid?.src!,
                      block.images[2].image.childImageSharp?.fluid?.src!,
                    ]}
                  />
                )
              }
              if (isTwoColumnImagesBlock(block)) {
                return (
                  <TwoUpImageBlock
                    key={index}
                    className="mb-32"
                    images={[
                      block.images[0].image.childImageSharp?.fluid?.src!,
                      block.images[1].image.childImageSharp?.fluid?.src!,
                    ]}
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
      {/* Design & Engineering section */}
      {/* <BoatSection>
        <InPageAnchor title={'Design & Engineering'} />
        <MobileSectionHeader>{'Design & Engineering'}</MobileSectionHeader>
        <VerticalHeaderBlock
          label={'Design & Engineering'}
          side="left"
          theme="light"
          className="lg:mt-32"
        />
        <SideBleedImage
          src={section3Image}
          side="right"
          className="lg:mt-32 md:mb-32"
          size="large"
        />
        <div className="md:flex md:mb-24 md:px-12 lg:px-16 max-w-6xl mx-auto">
          <div className="md:w-1/2 lg:pr-12">
            <TextBlockComponent
              className="my-12 px-4 lg:px-0 lg:ml-12 md:mb-32 lg:mb-48"
              header="Advanced helm"
              copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            />
            <div className="px-4 lg:px-0 mb-12 md:mb-0">
              <ImageWithLabel
                ratio="3:4"
                src={section3Image2}
                label="This is a photo label"
                imgClassName="filter-grayscale"
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:pl-12">
            <div className="px-4 lg:px-0 lg:pr-16">
              <ImageWithLabel
                ratio="3:4"
                src={section3Image3}
                label="4x MERCURY 350 VERADOS"
                style={{ backgroundColor: '#222222' }}
                imgClassName="left-1/2 transform -translate-x-1/2"
              />
            </div>
            <TextBlockComponent
              className="my-10 md:my-16 px-4 lg:px-0 lg:pr-16"
              header="POWERTRAIN OPTIONS"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,"
            />
          </div>
        </div>
        <div className="flex justify-center md:mb-12">
          <InPageCta variant="secondary" theme="light">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </BoatSection> */}
      {/* Technology section */}
      {/* <BoatSection theme="dark" className="overflow-x-hidden">
        <InPageAnchor title="Technology" />
        <MobileSectionHeader>Technology</MobileSectionHeader>
        <VerticalHeaderBlock label="Technology" side="right" theme="dark" />
        <SideBleedImage
          src={section4Image}
          side="left"
          className="md:mb-24"
          imgClassName="filter-saturate-25"
        />
        <div className="my-12 px-4 xl:pl-0 mb-32 max-w-5xl mx-auto">
          <TextBlockComponent
            className="max-w-md"
            header="DIGITAL SWITCHING and AUTOMATION"
            copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ."
          />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="md:w-9/12">
            <AspectRatio ratio="3:2">
              <img
                src={section4Image2}
                className="absolute h-full w-full object-cover"
              />
              <img
                src={section4Image2}
                className="absolute h-full w-full object-cover opacity-50"
                style={{
                  left: 'calc(100% + 8.5rem)',
                }}
              />
              <CarouselButtons className="absolute bottom-0 pb-4 w-full md:hidden" />
            </AspectRatio>
            <div className="md:flex justify-between items-start md:mt-10 md:mb-40">
              <TextBlockComponent
                className="my-8 md:my-0 px-4 mb-20 md:w-10/12"
                header="Feature Callout"
                copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <CarouselButtons className="hidden md:flex" />
            </div>
          </div>
        </div>
        <TwoUpImageBlock
          className="mb-24"
          images={[section4Image3, section4Image4]}
        />
        <div className="flex justify-center mb-4 md:mb-8">
          <InPageCta variant="secondary" theme="dark">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </BoatSection> */}
      {/* Advanced Features section */}
      {/* <BoatSection>
        <InPageAnchor title={'Advanced Features'} />
        <MobileSectionHeader>{'Advanced Features'}</MobileSectionHeader>
        <VerticalHeaderBlock
          label={'Advanced Features'}
          side="left"
          theme="light"
        />
        <SideBleedImage src={section5Image} side="right" className="md:mb-24" />
        <div className="sm:flex sm:mt-32 max-w-5xl mx-auto md:space-x-16 lg:space-x-24 md:px-16 lg:px-8 xl:px-0 sm:mb-24">
          <div className=" px-4 md:px-0">
            <TextBlockComponent
              className="my-12 sm:mt-0 sm:mb-20 lg:mb-32 lg:pl-20"
              header="Carbon Fiber Hardtop"
              copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ."
            />
            <div className="mb-12 max-w-lg">
              <ImageWithLabel
                ratio="3:4"
                src={section5Image2}
                label="This is a photo label"
              />
            </div>
          </div>
          <div className="px-4 md:px-0">
            <div className="max-w-md sm:mt-20 lg:mt-32 xl:mt-40">
              <ImageWithLabel
                ratio="3:4"
                src={section5Image3}
                label="This is a photo label"
              />
            </div>
            <TextBlockComponent
              className="my-10 sm:mt-16"
              header="Storage & Convenience"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <AspectRatio ratio="3:2">
            <img
              src={section5Image4}
              className="absolute h-full w-full object-cover"
            />
            <CarouselButtons className="absolute bottom-0 pb-4 w-full md:hidden" />
          </AspectRatio>
          <div className="md:flex justify-between my-8 mb-20 md:mb-24 px-4 xl:px-0 ">
            <TextBlockComponent
              className="md:w-7/12"
              header="Feature Callout"
              copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CarouselButtons
              className="hidden md:flex items-start"
              theme="light"
            />
          </div>
        </div>
        <div className="flex justify-center md:mb-16">
          <InPageCta variant="secondary" theme="light">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </BoatSection> */}
      {/* Interior Details section */}
      {/* <BoatSection theme="dark">
        <InPageAnchor title={'Interior Details'} />
        <MobileSectionHeader>{'Interior Details'}</MobileSectionHeader>
        <VerticalHeaderBlock
          label={'Interior Details'}
          side="right"
          theme="dark"
        />
        <SideBleedImage src={section6Image} side="left" className="md:mb-24" />
        <TextBlockComponent
          className="my-12 px-4 mb-16 md:mb-48 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"
          header="DIGITAL SWITCHING & AUTOMATION"
          copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
        <div className="px-4 max-w-4xl mx-auto">
          <AspectRatio ratio="3:2">
            <img
              src={section6Image2}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
          <TextBlockComponent
            className="mt-16 mb-24 md:mb-40 max-w-xl"
            header="Story Callout"
            copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          />
        </div>
        <ThreeUpImageBlock
          className="sm:mb-24"
          images={[section6Image3, section6Image4, section6Image5]}
        />
        <TextBlockComponent
          className="my-16 px-4 max-w-2xl mx-auto md:text-center"
          header="Story Callout"
          copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
        <div className="flex justify-center mb-4">
          <InPageCta variant="secondary" theme="dark">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </BoatSection> */}
      <SpecsSectionComponent boatNameLong={boat.boatNameLong!} {...specsData} />
      <MediaGallerySection
        title={galleryData.title}
        media={galleryData.gallery}
      />
      <CustomizationsSectionComponent {...customizationsData} />
      <OrderSection
        boatNameLong={boat.boatNameLong!}
        sectionTitle={ORDER_TITLE[0]}
      />
    </Layout>
  )
}

export default IndexPage

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
              fluid(maxWidth: 1700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        content {
          header
          copy
        }
        categories {
          name
          specs {
            header
            copy
          }
        }
        gallery {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
        }
      }
    }
  }
`

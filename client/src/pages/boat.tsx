import React from 'react'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { InPageNav, InPageAnchor } from '../molecules/in-page-nav'
import { PlusIcon } from '../svgs/icons'
import { AspectRatio } from '../atoms/aspect-ratio'
import { Tab } from '../atoms/tab'
import { LinkCta } from '../atoms/link-cta'
import { VerticalHeader } from '../atoms/vertical-header'
import {
  BoatHeader,
  BoatSection,
  BespokeOptionCard,
  DiscoverSection,
  MobileSectionHeader,
  OrderSection,
  TextBlock,
  CarouselButtons,
  ImageWithLabel,
  VerticalHeaderBlock,
  SideBleedImage,
  TwoUpImageBlock,
  ThreeUpImageBlock,
  MediaGallerySection,
} from './boat.components'

// Images
import boat1 from '../images/tirranna-boat.jpeg'
import tirrannaLogo from '../images/tirranna-logo.svg'
import section2Video from '../images/boat-section2-video.jpeg'
import section3Image from '../images/boat-section3-image.jpeg'
import section3Image2 from '../images/boat-section3-image2.jpeg'
import section3Image3 from '../images/boat-section3-image3.jpeg'
import section4Image from '../images/boat-section4-image.jpeg'
import section4Image2 from '../images/boat-section4-image2.jpeg'
import section4Image3 from '../images/boat-section4-image3.jpeg'
import section4Image4 from '../images/boat-section4-image4.jpeg'
import section5Image from '../images/boat-section5-image.jpeg'
import section5Image2 from '../images/boat-section5-image2.jpeg'
import section5Image3 from '../images/boat-section5-image3.jpeg'
import section5Image4 from '../images/boat-section5-image4.jpeg'
import section6Image from '../images/boat-section6-image.jpeg'
import section6Image2 from '../images/boat-section6-image2.jpeg'
import section6Image3 from '../images/boat-section6-image3.jpeg'
import section6Image4 from '../images/boat-section6-image4.jpeg'
import section6Image5 from '../images/boat-section6-image5.jpeg'
import section8Image from '../images/boat-section8-image.jpeg'
import section8Image2 from '../images/boat-section8-image2.jpeg'
import section8Image3 from '../images/boat-section8-image3.jpeg'
import section8Image4 from '../images/boat-section8-image4.jpeg'
import section8Image5 from '../images/boat-section8-image5.jpeg'
import section8Image6 from '../images/boat-section8-image6.jpeg'
import section8Image7 from '../images/boat-section8-image7.jpeg'
import section8Image8 from '../images/homepage-header.jpeg'
import section9Image from '../images/boat-section9-image.jpeg'
import section9Image2 from '../images/boat-section9-image2.jpeg'

const TITLES = [
  ['Discover'],
  ['Design & Engineering'],
  ['Technology'],
  ['Advanced Features'],
  ['Interior Details', 'Interior'],
  ['Specs'],
  ['Media Gallery', 'Gallery'],
  ['Bespoke Possibilities', 'Bespoke'],
  ['Order Today', 'Order'],
]
const GALLERY_IMAGES = [
  section8Image,
  section8Image2,
  section8Image3,
  section8Image4,
  section8Image5,
  section8Image6,
  section8Image7,
  section8Image8,
]

// From https://stackoverflow.com/a/44230264/4357882
// range(3,7) === [ 3, 4, 5, 6, 7 ]
const range = (x: number, y: number) =>
  Array.from(
    (function* () {
      while (x <= y) yield x++
    })()
  )

const IndexPage = () => (
  <Layout>
    <SEO title="Boat" />
    <BoatHeader
      boatImage={boat1}
      boatLogo={tirrannaLogo}
      boatNameLong="Tirranna AMG 59 Edition"
    />
    <InPageNav
      boatName="Tirranna"
      titles={TITLES}
      onClickInquire={() => console.log('Clicked inquire')}
    />
    {/* Discover section */}
    <DiscoverSection
      sectionTitle={TITLES[0][0]}
      primaryImage={section2Video}
      header="Boat Introduction"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do"
    />
    {/* Design & Engineering section */}
    <BoatSection>
      <InPageAnchor title={TITLES[1][0]} />
      <MobileSectionHeader>{TITLES[1][0]}</MobileSectionHeader>
      <VerticalHeaderBlock
        label={TITLES[1][0]}
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
          <TextBlock
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
          <TextBlock
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
    </BoatSection>
    {/* Technology section */}
    <BoatSection theme="dark" className="overflow-x-hidden">
      <InPageAnchor title={TITLES[2][0]} />
      <MobileSectionHeader>{TITLES[2][0]}</MobileSectionHeader>
      <VerticalHeaderBlock label={TITLES[2][0]} side="right" theme="dark" />
      <SideBleedImage
        src={section4Image}
        side="left"
        className="md:mb-24"
        imgClassName="filter-saturate-25"
      />
      <div className="my-12 px-4 xl:pl-0 mb-32 max-w-5xl mx-auto">
        <TextBlock
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
            <TextBlock
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
    </BoatSection>
    {/* Advanced Features section */}
    <BoatSection>
      <InPageAnchor title={TITLES[3][0]} />
      <MobileSectionHeader>{TITLES[3][0]}</MobileSectionHeader>
      <VerticalHeaderBlock label={TITLES[3][0]} side="left" theme="light" />
      <SideBleedImage src={section5Image} side="right" className="md:mb-24" />
      <div className="sm:flex sm:mt-32 max-w-5xl mx-auto md:space-x-16 lg:space-x-24 md:px-16 lg:px-8 xl:px-0 sm:mb-24">
        <div className=" px-4 md:px-0">
          <TextBlock
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
          <TextBlock
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
          <TextBlock
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
    </BoatSection>
    {/* Interior Details section */}
    <BoatSection theme="dark">
      <InPageAnchor title={TITLES[4][0]} />
      <MobileSectionHeader>{TITLES[4][0]}</MobileSectionHeader>
      <VerticalHeaderBlock label={TITLES[4][0]} side="right" theme="dark" />
      <SideBleedImage src={section6Image} side="left" className="md:mb-24" />
      <TextBlock
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
        <TextBlock
          className="mt-16 mb-24 md:mb-40 max-w-xl"
          header="Story Callout"
          copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
      </div>
      <ThreeUpImageBlock
        className="sm:mb-24"
        images={[section6Image3, section6Image4, section6Image5]}
      />
      <TextBlock
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
    </BoatSection>
    {/* Specs section */}
    <BoatSection className="md:py-24">
      <InPageAnchor title={TITLES[5][0]} />
      <div className="relative flex max-w-7xl mx-auto">
        <div className="hidden md:block absolute right-0 top-0">
          <VerticalHeader theme="light" className="mr-4">
            {TITLES[5][0]}
          </VerticalHeader>
        </div>
        <div className="hidden md:block px-4 space-y-2 md:w-48 lg:w-56 xl:w-64 mt-24">
          <Tab className="w-auto whitespace-no-wrap" active>
            Category One
          </Tab>
          <Tab className="w-auto whitespace-no-wrap">Category Two</Tab>
          <Tab className="w-auto whitespace-no-wrap">Category Three</Tab>
          <Tab className="w-auto whitespace-no-wrap">Category Four</Tab>
        </div>
        <div className="max-w-2xl w-full">
          <div className="px-4 md:px-0 md:mb-16">
            <Typography variant="h4">59' Tirranna AMG Edition Specs</Typography>
          </div>
          <div className="md:hidden flex flex-no-wrap px-4 space-x-4 my-12 overflow-x-auto">
            <Tab className="whitespace-no-wrap" active>
              Category One
            </Tab>
            <Tab className="whitespace-no-wrap">Category Two</Tab>
            <Tab className="whitespace-no-wrap">Category Three</Tab>
          </div>
          <div className="px-4 md:px-0 grid col-gap-6 grid-cols-2 mb-10">
            {range(1, 6).map((key) => (
              <div key={key} className="py-8 border-t border-gray-5">
                <Typography variant="e3" className="mb-2">
                  Spec Title
                </Typography>
                <Typography variant="p3" className="text-gray-2 md:w-11/12">
                  {key % 3 === 0
                    ? 'Lorem ipsum dolor sit amet, consect adipiscing elit dolor sit amet,Lorem ipsum dolor sit amet, consect adipiscing elit dolor sit amet,'
                    : 'Lorem ipsum dolor sit amet, consect adipiscing elit dolor sit'}
                </Typography>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:justify-start mb-2">
            <InPageCta variant="secondary" theme="light">
              <span className="flex items-center">
                <PlusIcon className="inline-block text-red mr-2 text-lg" />
                <span>More Specs</span>
              </span>
            </InPageCta>
          </div>
        </div>
      </div>
    </BoatSection>
    {/* Media Gallery section */}
    <MediaGallerySection title={TITLES[6][0]} images={GALLERY_IMAGES} />
    {/* Bespoke Possibilities section */}
    <BoatSection theme="dark" className="py-24 sm:pb-16">
      <InPageAnchor title={TITLES[7][0]} />
      <img
        src={section6Image5}
        className="absolute top-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(360deg, #000000 46.14%, rgba(0, 0, 0, 0) 100%)',
        }}
      ></div>
      <div className="relative text-center mb-24 sm:mt-20 sm:mb-48">
        <Typography variant="h3" sm="h2" lg="h1" className="mb-4">
          Make it yours.
        </Typography>
        <Typography variant="e2" md="e1" className="text-gray-4">
          Bespoke Possibilities
        </Typography>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex space-x-6 px-4 overflow-hidden mb-12 sm:mb-20">
          <BespokeOptionCard img={section9Image} />
          <BespokeOptionCard img={section9Image2} />
        </div>
        <div className="px-4 flex sm:justify-between items-center">
          <div className="hidden sm:block">
            <InPageCta variant="secondary" theme="dark">
              Explore Bespoke Studio
            </InPageCta>
          </div>
          <CarouselButtons className="mb-12 sm:mb-0" />
        </div>
        <LinkCta theme="dark" className="mx-auto sm:hidden">
          Explore Bespoke Possibilities
        </LinkCta>
      </div>
    </BoatSection>
    {/* Order Today section */}
    <OrderSection
      boatNameLong="Tirranna AMG 59 Edition"
      sectionTitle={TITLES[8][0]}
    />
  </Layout>
)

export default IndexPage

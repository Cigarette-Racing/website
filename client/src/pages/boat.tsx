import React from 'react'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { InPageNav, InPageAnchor } from '../molecules/in-page-nav'
import { CircleButton } from '../atoms/circle-button'
import { PlusIcon, ArrowIcon } from '../svgs/icons'
import { VerticalLabel } from '../atoms/vertical-label'
import { AspectRatio } from '../atoms/aspect-ratio'
import { Tab } from '../atoms/tab'
import { LinkCta } from '../atoms/link-cta'
import { VerticalHeader } from '../atoms/vertical-header'
import { ProgressBar } from '../atoms/progress-bar'
import {
  BoatHeader,
  BoatSection,
  BespokeOptionCard,
  GalleryImage,
  DiscoverSection,
  MobileSectionHeader,
  OrderSection,
  TextBlock,
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
      current={TITLES[0][0]}
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
      <div className="max-w-7xl mx-auto relative md:mt-16 lg:mt-32">
        <div className="hidden md:block absolute left-0 top-0">
          <VerticalHeader theme="light" className="ml-4">
            {TITLES[1][0]}
          </VerticalHeader>
        </div>
      </div>
      <div className="relative max-w-8xl mx-auto md:mt-16 lg:mt-32 md:mb-32">
        <div className="w-full md:w-11/12 lg:w-10/12  ml-auto">
          <AspectRatio ratio="3:2">
            <img src={section3Image} className="absolute h-full object-cover" />
          </AspectRatio>
        </div>
      </div>
      <div className="md:flex md:mb-24 md:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="md:w-1/2 lg:pr-12">
          <TextBlock
            className="my-12 px-4 lg:px-0 lg:ml-12 md:mb-32 lg:mb-48"
            header="Advanced helm"
            copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
          />
          <div className="px-4 lg:px-0 mb-12 md:mb-0">
            <AspectRatio ratio="3:4">
              <img
                src={section3Image2}
                className="absolute h-full object-cover filter-grayscale"
              />
              <VerticalLabel className="absolute bottom-0 left-0">
                This is a photo label
              </VerticalLabel>
            </AspectRatio>
          </div>
        </div>
        <div className="md:w-1/2 lg:pl-12">
          <div className="px-4 lg:px-0 lg:pr-16">
            <AspectRatio ratio="3:4" style={{ backgroundColor: '#222222' }}>
              <img
                src={section3Image3}
                className="absolute h-full left-1/2 transform -translate-x-1/2 object-cover filter-grayscale"
              />
              <VerticalLabel className="absolute bottom-0 left-0">
                4x MERCURY 350 VERADOS
              </VerticalLabel>
            </AspectRatio>
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
      <div className="max-w-7xl mx-auto relative md:mt-16">
        <div className="hidden md:block absolute right-0 top-0">
          <VerticalHeader theme="dark" className="mr-4">
            {TITLES[2][0]}
          </VerticalHeader>
        </div>
      </div>
      <div className="relative max-w-8xl mx-auto md:mt-16 md:mb-24">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
          <AspectRatio ratio="3:2">
            <img
              src={section4Image}
              className="absolute h-full object-cover filter-saturate-25"
            />
          </AspectRatio>
        </div>
      </div>
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
            <div className="flex justify-center space-x-4 absolute bottom-0 pb-4 w-full md:hidden">
              <CircleButton
                icon={ArrowIcon}
                theme="dark"
                variant="secondary"
                iconClassName="transform rotate-180"
              />
              <CircleButton icon={ArrowIcon} theme="dark" variant="secondary" />
            </div>
          </AspectRatio>
          <div className="md:flex justify-between items-start md:mt-10 md:mb-40">
            <TextBlock
              className="my-8 md:my-0 px-4 mb-20 md:w-10/12"
              header="Feature Callout"
              copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <div className="hidden md:flex justify-center space-x-4">
              <CircleButton
                icon={ArrowIcon}
                theme="dark"
                variant="secondary"
                iconClassName="transform rotate-180"
              />
              <CircleButton icon={ArrowIcon} theme="dark" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto sm:flex mb-24">
        <div className="px-4 mb-16 md:mb-0 flex-1">
          <AspectRatio ratio="3:4">
            <img
              src={section4Image3}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="px-4 mb-16 md:mb-0 flex-1">
          <AspectRatio ratio="3:4">
            <img
              src={section4Image4}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
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
      <div className="max-w-7xl mx-auto relative md:mt-16">
        <div className="hidden md:block absolute left-0 top-0">
          <VerticalHeader theme="light" className="ml-4">
            {TITLES[3][0]}
          </VerticalHeader>
        </div>
      </div>
      <div className="relative max-w-8xl mx-auto md:mt-16 md:mb-24">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 ml-auto">
          <AspectRatio ratio="3:2">
            <img src={section5Image} className="absolute h-full object-cover" />
          </AspectRatio>
        </div>
      </div>
      <div className="sm:flex sm:mt-32 max-w-5xl mx-auto md:space-x-16 lg:space-x-24 md:px-16 lg:px-8 xl:px-0 sm:mb-24">
        <div className=" px-4 md:px-0">
          <TextBlock
            className="my-12 sm:mt-0 sm:mb-20 lg:mb-32 lg:pl-20"
            header="Carbon Fiber Hardtop"
            copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ."
          />
          <div className="mb-12 max-w-lg">
            <AspectRatio ratio="3:4">
              <img
                src={section5Image2}
                className="absolute h-full w-full object-cover"
              />
              <VerticalLabel className="absolute bottom-0 left-0">
                This is a photo label
              </VerticalLabel>
            </AspectRatio>
          </div>
        </div>
        <div className="px-4 md:px-0">
          <div className="max-w-md sm:mt-20 lg:mt-32 xl:mt-40">
            <AspectRatio ratio="3:4" style={{ backgroundColor: '#222222' }}>
              <img
                src={section5Image3}
                className="absolute h-full w-full object-cover"
              />
              <VerticalLabel className="absolute bottom-0 left-0">
                This is a photo label
              </VerticalLabel>
            </AspectRatio>
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
          <div className="flex justify-center space-x-4 absolute bottom-0 pb-4 w-full md:hidden">
            <CircleButton
              icon={ArrowIcon}
              theme="dark"
              variant="secondary"
              iconClassName="transform rotate-180"
            />
            <CircleButton icon={ArrowIcon} theme="dark" variant="secondary" />
          </div>
        </AspectRatio>
        <div className="md:flex justify-between my-8 mb-20 md:mb-24 px-4 xl:px-0 ">
          <TextBlock
            className="md:w-7/12"
            header="Feature Callout"
            copy="Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <div className="hidden md:flex justify-center items-start space-x-4">
            <CircleButton
              icon={ArrowIcon}
              theme="light"
              variant="secondary"
              iconClassName="transform rotate-180"
            />
            <CircleButton icon={ArrowIcon} theme="light" variant="secondary" />
          </div>
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
      <div className="max-w-7xl mx-auto relative md:mt-16">
        <div className="hidden md:block absolute right-0 top-0">
          <VerticalHeader theme="dark" className="mr-4">
            {TITLES[4][0]}
          </VerticalHeader>
        </div>
      </div>
      <div className="relative max-w-8xl mx-auto md:mt-16 md:mb-24">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
          <AspectRatio ratio="3:2">
            <img src={section6Image} className="absolute h-full object-cover" />
          </AspectRatio>
        </div>
      </div>
      <TextBlock
        className="my-12 px-4 mb-16 md:mb-48 max-w-5xl mx-auto"
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
      <div className="sm:flex max-w-7xl mx-auto sm:mb-24">
        <div className="px-4 mb-16 sm:w-1/3">
          <AspectRatio ratio="3:4">
            <img
              src={section6Image3}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="px-4 mb-16 sm:w-1/3">
          <AspectRatio ratio="3:4">
            <img
              src={section6Image4}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="px-4 mb-16 sm:w-1/3">
          <AspectRatio ratio="3:4">
            <img
              src={section6Image5}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
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
    <BoatSection theme="dark" className="sm:py-32">
      <InPageAnchor title={TITLES[6][0]} />
      <MobileSectionHeader className="sm:hidden">
        {TITLES[6][0]}
      </MobileSectionHeader>
      <div className="relative max-w-7xl mx-auto sm:pl-16">
        <VerticalHeader
          theme="dark"
          className="absolute -ml-12 xl:-ml-16 mt-12"
        >
          {TITLES[6][0]}
        </VerticalHeader>
        <div className="px-4 flex space-x-6 mb-6">
          <Typography variant="e2" className="text-red sm:text-white">
            All
          </Typography>
          <Typography variant="e2" className="sm:text-gray-3">
            Photos
          </Typography>
          <Typography variant="e2" className="sm:text-gray-3">
            Videos
          </Typography>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-none sm:grid-flow-col-dense sm:grid-rows-2 gap-6 px-4 mb-16">
          <GalleryImage img={section8Image} />
          <GalleryImage img={section8Image2} />
          <GalleryImage img={section8Image3} />
          <GalleryImage img={section8Image4} />
          <GalleryImage img={section8Image5} className="hidden sm:block" />
          <GalleryImage img={section8Image6} className="hidden sm:block" />
          <GalleryImage img={section8Image7} className="hidden md:block" />
          <GalleryImage img={section8Image8} className="hidden md:block" />
        </div>
        <div className="flex sm:justify-between items-center px-4">
          <div className="hidden sm:block w-full max-w-xs md:max-w-sm lg:max-w-md">
            <ProgressBar percentage={33} />
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <CircleButton
              icon={ArrowIcon}
              theme="dark"
              variant="secondary"
              iconClassName="transform rotate-180"
            />
            <CircleButton icon={ArrowIcon} theme="dark" variant="secondary" />
          </div>
        </div>
      </div>
    </BoatSection>
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
          <div className="flex space-x-4 mb-12 sm:mb-0">
            <CircleButton
              icon={ArrowIcon}
              theme="dark"
              variant="secondary"
              iconClassName="transform rotate-180"
            />
            <CircleButton icon={ArrowIcon} theme="dark" variant="secondary" />
          </div>
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

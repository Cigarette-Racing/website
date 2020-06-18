import React from 'react'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '../atoms/typography'
import { StatBlock } from '../atoms/stat-block'
import { InPageCta } from '../atoms/in-page-cta'
import boat1 from '../images/tirranna-boat.jpeg'
import tirrannaLogo from '../images/tirranna-logo.svg'
import section2Bg from '../images/boat-section2-bg.jpeg'
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
import section9Image from '../images/boat-section9-image.jpeg'
import section9Image2 from '../images/boat-section9-image2.jpeg'
import section10Image from '../images/boat-section10-image.jpeg'
import { InPageNav } from '../molecules/in-page-nav'
import { CircleButton } from '../atoms/circle-button'
import { PlayIcon, PlusIcon, ArrowIcon, ExpandIcon } from '../svgs/icons'
import { VerticalLabel } from '../atoms/vertical-label'
import { AspectRatio } from '../atoms/aspect-ratio'
import { Tab } from '../atoms/tab'
import { LinkCta } from '../atoms/link-cta'
import InquiryModal, { useInquiryModalState } from '../components/inquiry-modal'

const IN_PAGE_NAV_LINKS = [
  'Intro',
  'Design & Engineering',
  'Technology',
  'Advanced Features',
  'Interior Details',
  'Specs',
  'Media Gallery',
  'Bespoke Possibilities',
  'Order Today',
]

// From https://stackoverflow.com/a/44230264/4357882
// range(3,7) === [ 3, 4, 5, 6, 7 ]
const range = (x: number, y: number) =>
  Array.from(
    (function* () {
      while (x <= y) yield x++
    })()
  )

const IndexPage = () => {
  const [, setInquiryModalState] = useInquiryModalState()

  return (
    <Layout>
      <SEO title="Boat" />
      <section className="bg-black text-white pt-32 pb-4">
        <Typography variant="e3" className="text-center mb-8">
          Tirranna 59 AMG Edition
        </Typography>
        <Typography variant="h4" className="text-center mb-8">
          Headline goes here lorem ipsum.
        </Typography>
        <img src={boat1} alt="" className="mb-8" />
        <div className="flex justify-center mb-8">
          <img src={tirrannaLogo} alt="" />
        </div>
        <div className="flex px-4 space-x-6 mb-10">
          <div className="flex-1">
            <StatBlock label="Length" percentage={80} text="59’" />
          </div>
          <div className="flex-1">
            <StatBlock label="Freeboard" percentage={75} text="68”" />
          </div>
          <div className="flex-1">
            <StatBlock label="Max Speed" percentage={85} text="80mph" />
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <InPageCta
            onClick={() => {
              setInquiryModalState(true)
            }}
          >
            Request Info
          </InPageCta>
        </div>
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[0]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="relative bg-black text-white pt-12 pb-24">
        <img
          src={section2Bg}
          className="absolute top-0 left-0 h-full w-full object-cover filter-grayscale z-auto"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(360deg, #000000 46.14%, rgba(0, 0, 0, 0) 100%)',
          }}
        />
        <div className="relative px-4 mb-16">
          <img src={section2Video} alt="" />
          <CircleButton
            icon={PlayIcon}
            size="lg"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="text-center relative px-4">
          <Typography variant="e3" className="mb-4">
            Boat Introduction
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do consectetur adipiscing elit, sed
            do{' '}
          </Typography>
        </div>
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[1]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="py-12">
        <div className="px-4">
          <Typography
            variant="h4"
            className="text-center px-4 text-gray-4 mb-8"
          >
            Design & Engineering
          </Typography>
        </div>
        <img src={section3Image} alt="" />
        <div className="my-12 px-4">
          <Typography variant="e3" className="mb-4">
            Advanced helm
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod .
          </Typography>
        </div>
        <div className="px-4 mb-12">
          <AspectRatio ratio="3:4" className="relative">
            <img
              src={section3Image2}
              className="absolute h-full object-cover filter-grayscale"
            />
            <VerticalLabel className="absolute bottom-0 left-0">
              This is a photo label
            </VerticalLabel>
          </AspectRatio>
        </div>
        <div className="px-4">
          <AspectRatio
            ratio="3:4"
            className="relative"
            style={{ backgroundColor: '#222222' }}
          >
            <img
              src={section3Image3}
              className="absolute h-full left-1/2 transform -translate-x-1/2 object-cover filter-grayscale"
            />
            <VerticalLabel className="absolute bottom-0 left-0">
              4x MERCURY 350 VERADOS
            </VerticalLabel>
          </AspectRatio>
        </div>
        <div className="my-10 px-4">
          <Typography variant="e3" className="mb-4">
            POWERTRAIN OPTIONS
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
          </Typography>
        </div>
        <div className="flex justify-center">
          <InPageCta variant="secondary" theme="light">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[2]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="py-12 bg-black text-white">
        <div className="px-4">
          <Typography
            variant="h4"
            className="text-center px-4 text-gray-4 mb-8"
          >
            Technology
          </Typography>
        </div>
        <AspectRatio ratio="3:2" className="relative">
          <img
            src={section4Image}
            className="absolute h-full object-cover filter-saturate-25"
          />
        </AspectRatio>
        <div className="my-12 px-4 mb-32">
          <Typography variant="e3" className="mb-4">
            DIGITAL SWITCHING & AUTOMATION
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod .
          </Typography>
        </div>
        <AspectRatio ratio="3:2" className="relative">
          <img
            src={section4Image2}
            className="absolute h-full w-full object-cover"
          />
          <div className="flex justify-center space-x-4 absolute bottom-0 pb-4 w-full">
            <CircleButton
              icon={ArrowIcon}
              theme="dark"
              variant="secondary"
              iconClassName="transform rotate-180"
            />
            <CircleButton icon={ArrowIcon} theme="dark" variant="secondary" />
          </div>
        </AspectRatio>
        <div className="my-8 px-4 mb-20">
          <Typography variant="e3" className="mb-4">
            Feature Callout
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </div>
        <div className="px-4 mb-16">
          <AspectRatio ratio="3:4" className="relative">
            <img
              src={section4Image3}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="px-4 mb-16">
          <AspectRatio ratio="3:4" className="relative">
            <img
              src={section4Image4}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="flex justify-center mb-4">
          <InPageCta variant="secondary" theme="dark">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[3]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="py-12">
        <div className="px-4">
          <Typography
            variant="h4"
            className="text-center px-4 text-gray-4 mb-8"
          >
            Advanced Features
          </Typography>
        </div>
        <AspectRatio ratio="3:2" className="relative">
          <img src={section5Image} className="absolute h-full object-cover" />
        </AspectRatio>
        <div className="my-12 px-4">
          <Typography variant="e3" className="mb-4">
            Advanced helm
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod .
          </Typography>
        </div>
        <div className="px-4 mb-12">
          <AspectRatio ratio="3:4" className="relative">
            <img
              src={section5Image2}
              className="absolute h-full w-full object-cover"
            />
            <VerticalLabel className="absolute bottom-0 left-0">
              This is a photo label
            </VerticalLabel>
          </AspectRatio>
        </div>
        <div className="px-4">
          <AspectRatio
            ratio="3:4"
            className="relative"
            style={{ backgroundColor: '#222222' }}
          >
            <img
              src={section5Image3}
              className="absolute h-full w-full object-cover"
            />
            <VerticalLabel className="absolute bottom-0 left-0">
              This is a photo label
            </VerticalLabel>
          </AspectRatio>
        </div>
        <div className="my-10 px-4">
          <Typography variant="e3" className="mb-4">
            POWERTRAIN OPTIONS
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
          </Typography>
        </div>
        <AspectRatio ratio="3:2" className="relative">
          <img
            src={section5Image4}
            className="absolute h-full w-full object-cover"
          />
          <div className="flex justify-center space-x-4 absolute bottom-0 pb-4 w-full">
            <CircleButton
              icon={ArrowIcon}
              theme="dark"
              variant="secondary"
              iconClassName="transform rotate-180"
            />
            <CircleButton icon={ArrowIcon} theme="dark" variant="secondary" />
          </div>
        </AspectRatio>
        <div className="my-8 px-4 mb-20">
          <Typography variant="e3" className="mb-4">
            Feature Callout
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </div>
        <div className="flex justify-center">
          <InPageCta variant="secondary" theme="light">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[4]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="py-12 bg-black text-white">
        <div className="px-4">
          <Typography
            variant="h4"
            className="text-center px-4 text-gray-4 mb-8"
          >
            Interior details
          </Typography>
        </div>
        <AspectRatio ratio="3:2" className="relative">
          <img src={section6Image} className="absolute h-full object-cover" />
        </AspectRatio>
        <div className="my-12 px-4 mb-16">
          <Typography variant="e3" className="mb-4">
            DIGITAL SWITCHING & AUTOMATION
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod .
          </Typography>
        </div>
        <AspectRatio ratio="3:2" className="relative">
          <img
            src={section6Image2}
            className="absolute h-full w-full object-cover"
          />
        </AspectRatio>
        <div className="mt-16 px-4 mb-24">
          <Typography variant="e3" className="mb-4">
            Story Callout
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod .
          </Typography>
        </div>
        <div className="px-4 mb-16">
          <AspectRatio ratio="3:4" className="relative">
            <img
              src={section6Image3}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="px-4 mb-16">
          <AspectRatio ratio="3:4" className="relative">
            <img
              src={section6Image4}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="px-4 mb-16">
          <AspectRatio ratio="3:4" className="relative">
            <img
              src={section6Image5}
              className="absolute h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="my-16 px-4">
          <Typography variant="e3" className="mb-4">
            Story Callout
          </Typography>
          <Typography variant="p2">
            Lorem ipsum dolor sit amet, consec-tetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod .
          </Typography>
        </div>
        <div className="flex justify-center mb-4">
          <InPageCta variant="secondary" theme="dark">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[5]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="py-12">
        <div className="px-4">
          <Typography variant="h4">59' Tirranna AMG Edition Specs</Typography>
        </div>
        <div className="flex flex-no-wrap px-4 space-x-4 overflow-y-scroll my-12">
          <Tab className="whitespace-no-wrap" active>
            Category One
          </Tab>
          <Tab className="whitespace-no-wrap">Category Two</Tab>
          <Tab className="whitespace-no-wrap">Category Three</Tab>
        </div>
        <div className="px-4 grid col-gap-6 grid-cols-2 mb-10">
          {range(1, 6).map((key) => (
            <div key={key} className="py-8 border-t border-gray-5">
              <Typography variant="e3" className="mb-2">
                Spec Title
              </Typography>
              <Typography variant="p3">
                {key % 3 === 0
                  ? 'Lorem ipsum dolor sit amet, consect adipiscing elit dolor sit amet,Lorem ipsum dolor sit amet, consect adipiscing elit dolor sit amet,'
                  : 'Lorem ipsum dolor sit amet, consect adipiscing elit dolor sit'}
              </Typography>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-2">
          <InPageCta variant="secondary" theme="light">
            <span className="flex items-center">
              <PlusIcon className="inline-block text-red mr-2 text-lg" />
              <span>More Details</span>
            </span>
          </InPageCta>
        </div>
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[6]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="py-12 bg-black text-white">
        <div className="px-4">
          <Typography
            variant="h4"
            className="text-center px-4 text-gray-4 mb-8"
          >
            Media gallery
          </Typography>
        </div>
        <div className="px-4 flex space-x-6 mb-6">
          <Typography variant="e3" className="text-red">
            All
          </Typography>
          <Typography variant="e3">Photos</Typography>
          <Typography variant="e3">Videos</Typography>
        </div>
        <div className="grid grid-cols-2 gap-6 px-4 mb-16">
          <AspectRatio ratio="1:1" className="relative group cursor-pointer">
            <img
              src={section8Image}
              className="absolute h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black transform duration-200 bg-opacity-25 group-hover:bg-opacity-0"></div>
            <CircleButton
              icon={ExpandIcon}
              size="sm"
              className="absolute right-0 bottom-0 mb-4 mr-4"
            />
          </AspectRatio>
          <AspectRatio ratio="1:1" className="relative group cursor-pointer">
            <img
              src={section8Image2}
              className="absolute h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black transform duration-200 bg-opacity-25 group-hover:bg-opacity-0"></div>
            <CircleButton
              icon={ExpandIcon}
              size="sm"
              className="absolute right-0 bottom-0 mb-4 mr-4"
            />
          </AspectRatio>
          <AspectRatio ratio="1:1" className="relative group cursor-pointer">
            <img
              src={section8Image3}
              className="absolute h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black transform duration-200 bg-opacity-25 group-hover:bg-opacity-0"></div>
            <CircleButton
              icon={ExpandIcon}
              size="sm"
              className="absolute right-0 bottom-0 mb-4 mr-4"
            />
          </AspectRatio>
          <AspectRatio ratio="1:1" className="relative group cursor-pointer">
            <img
              src={section8Image4}
              className="absolute h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black transform duration-200 bg-opacity-25 group-hover:bg-opacity-0"></div>
            <CircleButton
              icon={ExpandIcon}
              size="sm"
              className="absolute right-0 bottom-0 mb-4 mr-4"
            />
          </AspectRatio>
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
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[7]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="bg-black text-white py-24 relative">
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
        <div className="relative text-center mb-16">
          <Typography variant="h4" className="mb-4">
            Make it yours.
          </Typography>
          <Typography variant="e3">Bespoke Possibilities</Typography>
        </div>
        <div className="relative flex space-x-6 px-4 overflow-hidden mb-12">
          <div className="w-56">
            <AspectRatio ratio="1:1" className="relative w-56 mb-6">
              <img
                src={section9Image}
                className="absolute w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
                }}
              ></div>
            </AspectRatio>
            <Typography variant="h5" className="mb-4">
              Title of bespoke option
            </Typography>
            <Typography variant="p3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor...
            </Typography>
          </div>
          <div className="w-56">
            <AspectRatio ratio="1:1" className="relative w-56 mb-6">
              <img
                src={section9Image2}
                className="absolute w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
                }}
              ></div>
            </AspectRatio>
            <Typography variant="h5" className="mb-4">
              Title of bespoke option
            </Typography>
            <Typography variant="p3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor...
            </Typography>
          </div>
        </div>
        <div className="flex space-x-4 px-4 mb-12">
          <CircleButton
            icon={ArrowIcon}
            theme="dark"
            variant="secondary"
            iconClassName="transform rotate-180"
          />
          <CircleButton icon={ArrowIcon} theme="dark" variant="secondary" />
        </div>
        <LinkCta theme="dark" className="relative mx-auto">
          Explore Bespoke Possibilities
        </LinkCta>
      </section>
      <InPageNav
        boatName="Tirranna"
        current={IN_PAGE_NAV_LINKS[8]}
        links={IN_PAGE_NAV_LINKS}
        onClickInquire={() => console.log('Clicked inquire')}
      />
      <section className="relative py-12 pb-48">
        <img
          src={section10Image}
          className="absolute h-full w-full top-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="relative px-4 text-white text-center mb-48">
          <div className="bg-black bg-opacity-75 py-16 px-4">
            <Typography variant="h4" className="mb-6">
              Order today
            </Typography>
            <Typography variant="e3" className="mb-12">
              Tirranna AMG 59 Edition
            </Typography>
            <div className="flex justify-center">
              <InPageCta
                onClick={() => {
                  // setInquiryModalState(true)
                }}
              >
                Request Info
              </InPageCta>
            </div>
          </div>
        </div>
      </section>
      <InquiryModal />
    </Layout>
  )
}

export default IndexPage

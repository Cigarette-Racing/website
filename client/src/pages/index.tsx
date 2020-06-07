import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import header1 from '../images/homepage-header.jpeg'
import header2 from '../images/homepage-header-2.jpeg'
import header3 from '../images/homepage-header-3.jpeg'
import boat1 from '../images/boat1.jpeg'
import boat2 from '../images/boat2.jpeg'
import article1 from '../images/article1.jpeg'
import article2 from '../images/article2.jpeg'
import { ContentHeader } from '../atoms/content-header'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { LinkCta } from '../atoms/link-cta'
import { PlusIcon, ArrowIcon } from '../svgs/icons'
import { ScrollIndicator } from '../molecules/scroll-indicator'
import { ExternalLink } from '../atoms/external-link'
import { CircleButton } from '../atoms/circle-button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ScrollIndicator />
    {/* First hero section */}
    <section
      className="relative min-h-screen relative flex justify-center items-end overflow-hidden"
      data-scrollsection
    >
      <img
        src={header1}
        className="absolute top-0 left-0 h-screen w-full object-cover"
      />
      <div
        className="absolute top-0 left-0 h-screen w-full"
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
      <div className="relative z-10 max-w-6xl mb-12 px-4 sm:mb-24 text-white text-left sm:text-center flex flex-col items-center">
        <ContentHeader className="mb-4">Tiranna 59 AMG Edition</ContentHeader>
        <Typography variant="h3" sm="h2" md="h1" className="mb-10 ">
          Performance luxury defined
        </Typography>
        <Typography variant="p1" className="mb-10 max-w-2xl hidden sm:block">
          A juxtaposition highlighted by land and sea, yet united through a
          steadfast commitment to ultimate luxury and performance.
        </Typography>
        <div className="flex items-center space-x-6">
          <InPageCta>Request Info</InPageCta>
          <LinkCta>Learn More</LinkCta>
        </div>
      </div>
    </section>
    {/* 2-up boats section */}
    <section className="min-h-screen relative md:flex" data-scrollsection>
      {/* Left boat */}
      <div className="relative md:w-1/2 min-h-screen-half md:min-h-screen bg-black text-white">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
          }}
        ></div>
        <div className="flex flex-col ml-auto max-w-2xl h-full">
          <div className="hidden sm:block flex-1"></div>
          <div className="relative z-0 flex-2">
            <div className="px-2 md:px-4">
              <img src={boat1} className="object-cover" />
            </div>
          </div>
          <div className="relative z-20 my-8 px-4 md:px-8 order-first md:order-none">
            <ContentHeader subtitle="Hyperlux">
              Performance Center Console
            </ContentHeader>
          </div>
          <div className="relative z-20 px-4 md:px-8 pb-6 md:pb-20">
            <Typography variant="h4" sm="h3" className="mb-0 md:mb-8">
              42’ Auroris
            </Typography>
            <LinkCta>Learn More</LinkCta>
          </div>
        </div>
      </div>
      {/* Right boat */}
      <div className="relative md:w-1/2 min-h-screen-half md:min-h-screen bg-gray-1 text-white">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
          }}
        ></div>
        <div className="flex flex-col mr-auto max-w-2xl h-full">
          <div className="hidden sm:block flex-1"></div>
          <div className="relative z-0 flex-2">
            <div className="px-2 md:px-4 bg-gray-1">
              <img
                src={boat2}
                className="object-cover"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
          </div>
          <div className="relative z-20 my-8 px-4 md:px-8 order-first md:order-none">
            <ContentHeader subtitle="Heritage">High Performance</ContentHeader>
          </div>
          <div className="relative z-20 px-4 md:px-8 pb-6 md:pb-20">
            <Typography variant="h4" sm="h3" className="mb-0 md:mb-8">
              39’ Top Gun Unlimited
            </Typography>
            <LinkCta>Learn More</LinkCta>
          </div>
        </div>
      </div>
    </section>
    {/* Second hero section */}
    <section
      className="min-h-screen relative flex justify-center items-end"
      data-scrollsection
    >
      <img
        src={header2}
        className="absolute top-0 left-0 h-screen w-full object-cover"
      />
      <div
        className="absolute top-0 left-0 h-screen w-full"
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
      <div className="relative z-10 max-w-6xl mb-12 sm:mb-24 text-white text-center flex flex-col items-center">
        <ContentHeader className="mb-4">
          Every Cigarette is unique
        </ContentHeader>
        <Typography variant="h3" sm="h2" md="h1" className="mb-10">
          The best is only the start
        </Typography>
        <div className="flex items-center space-x-6">
          <LinkCta>EXPERIENCE THE DIFFERENCE</LinkCta>
        </div>
      </div>
    </section>
    {/* News and press section */}
    <section className="p-4 pt-40 sm:py-40 bg-white">
      <div className="max-w-8xl mx-auto sm:flex">
        <div className="sm:w-1/2 md:pl-8 lg:pl-16 xl:pl-24">
          <Typography variant="h4" sm="h3" className="mb-4 sm:mb-16">
            News
            <br className="hidden sm:block" />& press
          </Typography>
          <LinkCta className="hidden sm:flex text-black mb-40">
            Visit the News Room
          </LinkCta>
          <div className="mt-10 space-x-4 hidden sm:block">
            <CircleButton variant="secondary" theme="light" icon={ArrowIcon} />
            <CircleButton variant="secondary" theme="light" icon={ArrowIcon} />
          </div>
        </div>
        <div className="flex sm:w-1/2 sm:overflow-hidden space-x-6">
          <div style={{ maxWidth: '421px' }}>
            <div
              className="relative w-screen h-screen-w -mx-4 xs:mx-0 mb-6"
              style={{ maxWidth: '421px', maxHeight: '421px' }}
            >
              <img src={article1} className="object-cover h-full" />
              <ExternalLink
                href="https://example.com"
                className="absolute top-0 mt-6 ml-4"
              >
                speedthewater.com
              </ExternalLink>
            </div>
            <Typography variant="h5" className="mb-2">
              This is an article title.
            </Typography>
            <Typography variant="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Typography>
          </div>
          <div className="hidden sm:block" style={{ maxWidth: '421px' }}>
            <div
              className="relative w-screen h-screen-w -mx-4 xs:mx-0 mb-6"
              style={{ maxWidth: '421px', maxHeight: '421px' }}
            >
              <img src={article2} className="object-cover h-full" />
              <ExternalLink
                href="https://example.com"
                className="absolute top-0 mt-6 ml-4"
              >
                speedthewater.com
              </ExternalLink>
            </div>
            <Typography variant="h5" className="mb-2">
              This is an article title.
            </Typography>
            <Typography variant="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </Typography>
          </div>
        </div>
        <div className="mt-10 space-x-4 sm:hidden">
          <CircleButton variant="secondary" theme="light" icon={ArrowIcon} />
          <CircleButton variant="secondary" theme="light" icon={ArrowIcon} />
        </div>
      </div>
    </section>
    {/* Stay connected section */}
    <section
      className="relative py-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${header3})` }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row md:items-center md:justify-around justify-center text-white">
        <div className="relative pb-16 px-4">
          <Typography variant="h3">Stay connected</Typography>
        </div>
        <div className="relative px-4 max-w-md">
          <div className="flex border-b border-gray-3 mb-10 h-10 items-center">
            <input
              type="text"
              className="block w-full bg-transparent text-white input-placeholder font-body text-xs tracking-wide"
              placeholder="Enter Email Address"
            />
            <PlusIcon className="w-4 h-4" />
          </div>
          <Typography variant="p2">
            Want to join our exclusive community and be the first to get the
            latest from Cigarette Racing?
          </Typography>
        </div>
      </div>
    </section>
    {/* 
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

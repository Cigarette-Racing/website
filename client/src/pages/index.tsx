<<<<<<< HEAD
import React, { Fragment } from 'react'
import { Form, Field } from 'react-final-form'
=======
import React, { useState } from 'react'
>>>>>>> origin
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import header1 from '../../content/images/homepage-header.jpeg'
import header2 from '../../content/images/homepage-header-2.jpeg'
import header3 from '../../content/images/homepage-header-3.jpeg'
import boat1 from '../../content/images/homepage/nighthawk.png'
import boat1BG from '../../content/images/homepage/nighthawk-bg.jpeg'
import boat2 from '../../content/images/homepage/auroris.png'
import boat2BG from '../../content/images/homepage/auroris-bg.png'
import article1 from '../../content/images/article1.jpeg'
import article2 from '../../content/images/article2.jpeg'
import { ContentHeader } from '../atoms/content-header'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { LinkCta } from '../atoms/link-cta'
import { PlusIcon, ArrowIcon, PlayIcon } from '../svgs/icons'
import { ScrollIndicator } from '../molecules/scroll-indicator'
import { ExternalLink } from '../atoms/external-link'
import { CircleButton } from '../atoms/circle-button'
import {
  InquiryModal,
  useInquiryModalState,
  HiddenInquiryForm,
} from '../molecules/inquiry/inquiry-modal'

import BoatFeaturette from '../molecules/boat-featurette'
import ReactPlayer from 'react-player'
import { AnimatePresence, motion } from 'framer-motion'

const headerVideo =
  'https://player.vimeo.com/external/437681675.hd.mp4?s=62ecc517ddc715ac36d66ed65f8859b67ae9d53b&profile_id=175'

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  const stayConnectedOnSubmit = (values: any) => {
    const submissionValues = {
      emailAddress: values.emailAddress,
    }
  
    console.log('submitted', submissionValues)
  
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': 'stay-connected',
        ...submissionValues,
      }),
    }).then((params) => {
      console.log('subccess')
    })
  }

const TopVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  return (
    <AnimatePresence>
      <motion.img
        key="image"
        src={header1}
        className="absolute top-0 left-0 h-screen w-full object-cover"
      />
      <motion.div key="video" animate={{ opacity: isVideoLoaded ? 1 : 0 }}>
        <ReactPlayer
          className="absolute top-0 left-0"
          url={headerVideo}
          controls={false}
          muted
          loop
          playing
          onReady={() => {
            setIsVideoLoaded(true)
          }}
          config={{
            file: {
              attributes: {
                className: 'object-cover',
              },
            },
          }}
          width="100%"
          height="100%"
        />
      </motion.div>
    </AnimatePresence>
  )
}

const IndexPage = () => {
  const [, setInquiryModalState] = useInquiryModalState()

  return (
    <Layout>
      <SEO title="Home" />
      <ScrollIndicator />
      {/* First hero section */}
      <section
        className="relative min-h-screen flex justify-center items-end overflow-hidden"
        data-scrollsection
      >
        <div className="absolute top-0 left-0 h-screen w-full">
          <TopVideo />
        </div>
        <div
          className="absolute top-0 left-0 h-screen w-full pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        />
        <CircleButton
          variant="primary"
          icon={PlayIcon}
          size="lg"
          className="absolute top-2/5 sm:hidden hidden"
        />
        <div className="relative z-10 max-w-6xl mb-12 px-4 sm:mb-24 text-white text-left sm:text-center flex flex-col items-center">
          <ContentHeader className="mb-4 self-start -ml-2 sm:self-auto mb:ml-0">
            Tirranna 59 AMG Edition
          </ContentHeader>
          <Typography variant="h2" md="h1" className="mb-10 ">
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
      <section className="relative md:flex" data-scrollsection>
        <BoatFeaturette
          backgroundImage={boat1BG}
          boatImage={boat1}
          contentHeader="Performance Center Console"
          subtitle="Hyperlux"
          boatName="41' Nighthawk"
        />
        <BoatFeaturette
          backgroundImage={boat2BG}
          boatImage={boat2}
          contentHeader="Performance Center Console"
          subtitle="Hyperlux"
          boatName="42 Auroris"
        />
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
        <div className="relative z-10 max-w-6xl mb-12 px-4 sm:mb-24 text-white text-left sm:text-center flex flex-col items-start sm:items-center">
          <ContentHeader className="mb-4 self-start -ml-2 sm:self-auto mb:ml-0">
            Every Cigarette is unique
          </ContentHeader>
          <Typography variant="h2" md="h1" className="mb-10">
            The best is only the start
          </Typography>
          <div className="flex items-center space-x-6">
            <LinkCta>EXPERIENCE THE DIFFERENCE</LinkCta>
          </div>
        </div>
      </section>
      {/* News and press section */}
      <section className="p-4 py-12 sm:py-40 bg-white min-h-screen sm:min-h-0 flex sm:block items-center">
        <div className="max-w-8xl sm:mx-auto sm:flex">
          <div className="sm:w-1/2 md:pl-8 lg:pl-16 xl:pl-24">
            <Typography variant="h3" sm="h2" className="mb-4 sm:mb-16">
              News <br className="hidden sm:block" />& press
            </Typography>
            <LinkCta className="hidden sm:flex text-black mb-40">
              Visit the News Room
            </LinkCta>
            <div className="mt-10 space-x-4 hidden sm:block">
              <CircleButton
                variant="secondary"
                theme="light"
                icon={ArrowIcon}
                iconClassName="transform rotate-180"
              />
              <CircleButton
                variant="secondary"
                theme="light"
                icon={ArrowIcon}
              />
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
            <CircleButton
              variant="secondary"
              theme="light"
              icon={ArrowIcon}
              iconClassName="transform rotate-180"
            />
            <CircleButton variant="secondary" theme="light" icon={ArrowIcon} />
          </div>
        </div>
      </section>
      {/* Stay connected section */}
      <section
        className="relative xl:py-48 py-40 bg-cover bg-center min-h-screen sm:min-h-0 flex sm:block items-center"
        style={{ backgroundImage: `url(${header3})` }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
        <div className="max-w-8xl sm:mx-auto flex flex-col md:flex-row md:items-center md:justify-around justify-center text-white">
          <div className="relative pb-16 px-4">
            <Typography variant="h2">Stay connected</Typography>
          </div>
          <div className="relative px-4 max-w-md">
            <div className="flex border-b border-gray-3 mb-10 h-10 items-center">
              <input
                type="text"
                className="block w-full bg-transparent text-white input-placeholder font-body text-sm tracking-wide"
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
<<<<<<< HEAD
        <div className="mt-10 space-x-4 sm:hidden">
          <CircleButton
            variant="secondary"
            theme="light"
            icon={ArrowIcon}
            iconClassName="transform rotate-180"
          />
          <CircleButton variant="secondary" theme="light" icon={ArrowIcon} />
        </div>
      </div>
    </section>
    {/* Stay connected section */}
    <section
      className="relative xl:py-48 py-40 bg-cover bg-center min-h-screen sm:min-h-0 flex sm:block items-center"
      style={{ backgroundImage: `url(${header3})` }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
      <div className="max-w-8xl sm:mx-auto flex flex-col md:flex-row md:items-center md:justify-around justify-center text-white">
        <div className="relative pb-16 px-4">
          <Typography variant="h2">Stay connected</Typography>
        </div>
        <div className="relative px-4 max-w-md">
          <Form
            onSubmit={stayConnectedOnSubmit}
            render={({ handleSubmit, submitSucceeded }) => (
              <div>
                {!submitSucceeded && (
                  <div>
                    <div className="flex border-b border-gray-3 mb-10 h-10 items-center">
                      <form
                        name="stay-connected"
                        netlify-honeypot="bot-field"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="flex items-center justify-between w-full"
                      >
                        <input type="hidden" name="bot-field" />
                        <input
                          type="hidden"
                          name="form-name"
                          value="stay-connected"
                        />
                        <Field
                          name="emailAddress"
                          render={({ input }) => {
                            return (
                              <input
                                {...input}
                                type="text"
                                className="block w-full bg-transparent text-white input-placeholder font-body text-sm tracking-wide"
                                placeholder="Enter Email Address"
                              />
                            )
                          }}
                        />

                        <button type="submit">
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                    <Typography variant="p2" className="pb-16">
                      Want to join our exclusive community and be the first to
                      get the latest from Cigarette Racing?
                    </Typography>
                  </div>
                )}
                {submitSucceeded && (
                  <Typography variant="h3" className="pb-16">
                    Thank You!
                  </Typography>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </section>
  </Layout>
)
=======
      </section>
      <InquiryModal />
      <HiddenInquiryForm />
    </Layout>
  )
}
>>>>>>> origin

export default IndexPage

import React, { useState, useEffect, Fragment } from 'react'
import { Form, Field } from 'react-final-form'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { ContentHeader } from '../atoms/content-header'
import { Typography } from '../atoms/typography'
import { InPageCta } from '../atoms/in-page-cta'
import { LinkCta } from '../atoms/link-cta'
import { PlusIcon, PlayIcon } from '../svgs/icons'
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
import { wrap } from '@popmotion/popcorn'
import { CarouselButtons } from '../templates/boat.components'
import { useToggle } from 'react-use'
import { onSubmitCreator } from '../services/forms'
import { cacheImages } from '../services/images'

const HEADER_VIDEO =
  'https://player.vimeo.com/external/437681675.hd.mp4?s=62ecc517ddc715ac36d66ed65f8859b67ae9d53b&profile_id=175'

const TopVideo = ({
  image,
  videoUrl,
}: {
  image: GatsbyTypes.File
  videoUrl: string
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  return (
    <AnimatePresence>
      <Img
        key="image"
        fluid={image.childImageSharp?.fluid}
        className="top-0 left-0 h-screen w-full object-cover"
        style={{ position: 'absolute' }}
      />
      <motion.div key="video" animate={{ opacity: isVideoLoaded ? 1 : 0 }}>
        <ReactPlayer
          className="absolute top-0 left-0"
          url={videoUrl}
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

const IndexPage = ({ data }: { data: GatsbyTypes.HomePageQuery }) => {
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
          <TopVideo
            image={data.header1 as GatsbyTypes.File}
            videoUrl={HEADER_VIDEO}
          />
        </div>
        <div
          className="absolute top-0 left-0 h-screen w-full pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 51.47%, rgba(0, 0, 0, 0.3) 100%)',
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
            59 TIRRANNA AMG Edition
          </ContentHeader>
          <Typography variant="h2" md="h1" className="mb-10 ">
            Performance luxury defined
          </Typography>
          <Typography variant="p1" className="mb-10 max-w-2xl hidden sm:block">
            A juxtaposition highlighted by land and sea, yet united through a
            steadfast commitment to ultimate luxury and performance.
          </Typography>
          <div className="flex items-center space-x-6">
            <InPageCta onClick={() => setInquiryModalState(true)}>
              Request Info
            </InPageCta>
            <Link to="/boats/59-tirranna">
              <LinkCta>Learn More</LinkCta>
            </Link>
          </div>
        </div>
      </section>
      {/* 2-up boats section */}
      <section className="relative md:flex" data-scrollsection>
        <BoatFeaturette
          backgroundImage={data.boat1BG as GatsbyTypes.File}
          boatImage={data.boat1 as GatsbyTypes.File}
          contentHeader="Performance Center Console"
          subtitle="Hyperlux"
          boatName="42 X"
          url="42-x"
        />
        <BoatFeaturette
          backgroundImage={data.boat2BG as GatsbyTypes.File}
          boatImage={data.boat2 as GatsbyTypes.File}
          contentHeader="Performance Center Console"
          subtitle="Hyperlux"
          boatName="42 Auroris"
          url="42-auroris"
        />
      </section>
      {/* Second hero section */}
      <section
        className="min-h-screen relative flex justify-center items-end"
        data-scrollsection
      >
        <Img
          fluid={data.header2?.childImageSharp?.fluid!}
          className="top-0 left-0 h-screen w-full object-cover"
          style={{ position: 'absolute' }}
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
            <ComingSoonLink>
              <LinkCta>EXPERIENCE THE DIFFERENCE</LinkCta>
            </ComingSoonLink>
          </div>
        </div>
      </section>
      {/* News and press section */}
      <NewsSection />
      {/* Stay connected section */}
      <section
        className="relative xl:py-48 py-40 bg-cover bg-center min-h-screen sm:min-h-0 flex sm:block items-center"
        style={{
          backgroundImage: `url(${data.header3?.childImageSharp?.fluid?.src!})`,
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
        <div className="max-w-8xl sm:mx-auto flex flex-col md:flex-row md:items-center md:justify-around justify-center text-white">
          <div className="relative pb-16 px-4">
            <Typography variant="h2">Stay connected</Typography>
          </div>
          <div className="relative px-4 max-w-md">
            <StayConnectedForm />
          </div>
        </div>
      </section>
      <InquiryModal />
      <HiddenInquiryForm />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePage {
    header1: file(relativePath: { eq: "homepage-header.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    header2: file(relativePath: { eq: "homepage-header-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    header3: file(relativePath: { eq: "homepage-header-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boat1: file(relativePath: { eq: "homepage/42XGold.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boat1BG: file(relativePath: { eq: "homepage/nighthawk-bg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boat2: file(relativePath: { eq: "homepage/42AurorisBlackandWhite.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boat2BG: file(relativePath: { eq: "homepage/auroris-bg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const formValuesMapper = (values: any) => {
  return {
    emailAddress: values.emailAddress,
  }
}

const stayConnectedOnSubmit = onSubmitCreator(formValuesMapper)

function StayConnectedForm() {
  return (
    <Form
      onSubmit={stayConnectedOnSubmit}
      render={({
        handleSubmit,
        submitSucceeded,
      }: {
        handleSubmit: () => void
        submitSucceeded: boolean
      }) => (
        <Fragment>
          {!submitSucceeded && (
            <Fragment>
              <div className="flex border-b border-gray-3 mb-10 h-10 items-center">
                <form
                  name="stay-connected"
                  method="POST"
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="flex items-center justify-between w-full"
                >
                  <input type="hidden" name="bot-field" />
                  <Field
                    component="input"
                    type="hidden"
                    name="form-name"
                    initialValue="stay-connected"
                  />
                  <label htmlFor="emailAddress" className="sr-only">
                    Email Address
                  </label>
                  <Field
                    id="emailAddress"
                    name="emailAddress"
                    component="input"
                    className="block w-full py-3 bg-transparent text-white input-placeholder font-body text-sm tracking-wide"
                    placeholder="Enter Email Address"
                  />
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="p-4 -mr-4"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </form>
              </div>
              <Typography variant="p2" className="pb-16">
                Want to join our exclusive community and be the first to get the
                latest from Cigarette Racing?
              </Typography>
            </Fragment>
          )}
          {submitSucceeded && (
            <Typography variant="p1" className="pb-16">
              Thanks for subscribing! Check your inbox for a welcome email soon.
            </Typography>
          )}
        </Fragment>
      )}
    />
  )
}

function ComingSoonLink({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useToggle(false)
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onFocus={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
      className="relative cursor-default whitespace-no-wrap"
      style={{ width: 'min-content' }}
    >
      <motion.div
        animate={{
          opacity: isActive ? 0 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      {isActive && (
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          className="absolute top-0 left-0 h-full w-full flex justify-center items-center"
        >
          <Typography
            variant="e1"
            className="whitespace-no-wrap opacity-75 text-center"
          >
            Coming Soon
          </Typography>
        </motion.div>
      )}
    </div>
  )
}

type NewsItem = {
  url: string
  siteName: string
  image: string
  title: string
  content: string
}

const newsItems: NewsItem[] = [
  {
    url:
      'https://www.mercedes-amg.com/en/press-information/cigarette-boat-12th-edition.html',
    siteName: 'mercedes-amg.com',
    image: require('../../content/images/homepage/news-00001.jpg'),
    title:
      '12th special edition from Mercedes-AMG and Cigarette Racing celebrates its world debut',
    content:
      'Mercedes-AMG and Cigarette Racing Team continue longstanding collaboration by creating performance one-off role models for land and water.',
  },
  {
    url:
      'https://www.speedonthewater.com/performance-boat-center-on-point-again-with-cigarette-owners-rendezvous/',
    siteName: 'speedonthewater.com',
    image: require('../../content/images/homepage/news-00002.png'),
    title:
      'Performance Boat Center On Point Again With Cigarette Owners Rendezvous',
    content:
      'No one knew how the Cigarette Owners Rendezvous would do when it landed at the Lake of the Ozarksin the hands of Performance Boat Center...',
  },
  {
    url:
      'https://www.speedonthewater.com/gallery-of-the-week-cigarette-opens-st-tropez/',
    siteName: 'speedonthewater.com',
    image: require('../../content/images/homepage/news-00003.png'),
    title: 'Gallery Of The Week: Cigarette Opens St. Tropez',
    content:
      'Reopened this week after its own novel coronavirus shutdown, the Port of Tropez, one of the crown jewels of the French Riviera...',
  },
  {
    url:
      'https://robbreport.com/motors/aviation/mercedes-amg-cigarette-racing-powerboat-release-miami-details-2899104/',
    siteName: 'robbreport.com',
    image: require('../../content/images/homepage/news-00004.png'),
    title: 'Mercedes-AMG Unveils Its Biggest, Baddest Cigarette Boat Yet',
    content:
      'This insane 80 mph, 59-foot rocketship could be yours for $3 million.',
  },
  {
    url: 'https://www.youtube.com/watch?v=SKOXaiH5yB4&feature=emb_title',
    siteName: 'youtube.com',
    image: require('../../content/images/homepage/news-00005.png'),
    title: "New Nighthawk 41 Cigarette's 88 Mph Center Console Monster!",
    content:
      'Some boats become legendary the moment you lay your eyes on them. This is one of them boats...',
  },
  {
    url: 'https://www.youtube.com/watch?v=i8Wt97g7q_c&feature=emb_title',
    siteName: 'youtube.com',
    image: require('../../content/images/homepage/news-00006.png'),
    title: "The Ultimate Adventure Awaits! (Cigarette's Auroris 42 Center)",
    content:
      'Cigarette has changed throughout the years but the 2020 Miami Boat Show Cigarette has begun...',
  },
  {
    url:
      'https://www.youtube.com/watch?time_continue=376&v=ZMLa7pdd1T4&feature=emb_title',
    siteName: 'youtube.com',
    image: require('../../content/images/homepage/news-00007.jpg'),
    title: 'The King of Center Consoles! AMG Cigarette Tirranna',
    content:
      'The fantastic people at Cigarette Racing have come to the 2020 Miami International Boat Show...',
  },
]

function NewsSection() {
  const [page, setPage] = useState(0)
  const itemIndex = wrap(0, newsItems.length, page)
  const nextItemIndex = wrap(0, newsItems.length, page + 1)
  const goNext = () => {
    setPage((state) => state + 1)
  }
  const goPrev = () => {
    setPage((state) => state - 1)
  }

  useEffect(() => {
    cacheImages(newsItems.map((item) => item.image))
  }, [])

  return (
    <section className="p-4 py-12 sm:py-40 bg-white min-h-screen sm:min-h-0 flex sm:block items-center overflow-hidden">
      <div className="max-w-8xl sm:mx-auto sm:flex">
        <div className="sm:w-1/2 md:pl-8 lg:pl-16 xl:pl-24">
          <Typography variant="h3" sm="h2" className="mb-4 sm:mb-16">
            News <br className="hidden sm:block" />& press
          </Typography>
          <ComingSoonLink>
            <LinkCta className="hidden sm:flex text-black mb-40">
              Visit the News Room
            </LinkCta>
          </ComingSoonLink>
          <CarouselButtons
            className="mt-10 space-x-4 hidden sm:block"
            theme="light"
            onClickNext={goNext}
            onClickPrev={goPrev}
          />
        </div>
        <div className="flex sm:w-1/2 space-x-6">
          <div key={newsItems[itemIndex].url}>
            {renderItem(newsItems[itemIndex])}
          </div>
          <div key={newsItems[nextItemIndex].url} className="hidden sm:block">
            {renderItem(newsItems[nextItemIndex])}
          </div>
        </div>
        <div className="flex justify-start">
          <CarouselButtons
            className="mt-10 space-x-4 sm:hidden"
            theme="light"
            onClickNext={goNext}
            onClickPrev={goPrev}
          />
        </div>
      </div>
    </section>
  )

  function renderItem(item: NewsItem) {
    return (
      <div key={item.url} style={{ maxWidth: '421px' }}>
        <div
          className="relative w-screen h-screen-w -mx-4 xs:mx-0 mb-6"
          style={{
            maxWidth: '421px',
            maxHeight: '421px',
          }}
        >
          {/* TODO: convert this to `Img` when we are pulling data from GraphQL */}
          <img src={item.image} alt="" className="object-cover h-full" />
          <ExternalLink href={item.url} className="absolute top-0 mt-6 ml-4">
            {item.siteName}
          </ExternalLink>
        </div>
        <Typography variant="h4" className="mb-2">
          {item.title}
        </Typography>
        <Typography variant="p2" className="text-gray-2">
          {item.content}
        </Typography>
      </div>
    )
  }
}

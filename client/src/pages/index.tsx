import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import header1 from '../../content/images/homepage-header.jpeg'
import header2 from '../../content/images/homepage-header-2.jpeg'
import header3 from '../../content/images/homepage-header-3.jpeg'
import boat1 from '../../content/images/homepage/nighthawk.png'
import boat1BG from '../../content/images/homepage/nighthawk-bg.jpeg'
import boat2 from '../../content/images/homepage/auroris.png'
import boat2BG from '../../content/images/homepage/auroris-bg.jpeg'
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
import { wrap } from '@popmotion/popcorn'
import { CarouselButtons } from '../boat.components'
import { useToggle } from 'react-use'

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const stayConnectedOnSubmit = (values: any) => {
  const submissionValues = {
    emailAddress: values.emailAddress,
  }

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encode({
      'form-name': 'stay-connected',
      ...submissionValues,
    }),
  })
}

const headerVideo =
  'https://player.vimeo.com/external/437681675.hd.mp4?s=62ecc517ddc715ac36d66ed65f8859b67ae9d53b&profile_id=175'

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
            <InPageCta onClick={() => setInquiryModalState(true)}>
              Request Info
            </InPageCta>
            <Link to="/boats/tirranna">
              <LinkCta>Learn More</LinkCta>
            </Link>
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
          url="nighthawk"
        />
        <BoatFeaturette
          backgroundImage={boat2BG}
          boatImage={boat2}
          contentHeader="Performance Center Console"
          subtitle="Hyperlux"
          boatName="42 Auroris"
          url="auroris"
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
            <ComingSoonLink>
              <LinkCta>EXPERIENCE THE DIFFERENCE</LinkCta>
            </ComingSoonLink>
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
            <ComingSoonLink>
              <LinkCta className="hidden sm:flex text-black mb-40">
                Visit the News Room
              </LinkCta>
            </ComingSoonLink>
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
            <Form
              onSubmit={stayConnectedOnSubmit}
              render={({
                handleSubmit,
                submitSucceeded,
              }: {
                handleSubmit: () => void
                submitSucceeded: boolean
              }) => (
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
                    <Typography variant="p1" className="pb-16">
                      Thanks for subscribing! Check your inbox for a welcome
                      email soon.”
                    </Typography>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </section>
      <InquiryModal />
      <HiddenInquiryForm />
    </Layout>
  )
}

export default IndexPage

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
    image: require('../../content/images/homepage/news-00001.jpeg'),
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
    image: require('../../content/images/homepage/news-00007.png'),
    title: 'The King of Center Consoles! AMG Cigarette Tirranna',
    content:
      'The fantastic people at Cigarette Racing have come to the 2020 Miami International Boat Show...',
  },
]

function NewsSection() {
  const [[page, direction], setPage] = useState([0, 0])
  const itemIndex = wrap(0, newsItems.length, page)
  const nextItemIndex = wrap(0, newsItems.length, page + 1)
  const goNext = () => {
    setPage((state) => [state[0], Direction.Next])
    setPage((state) => [state[0] + 1, state[1]])
    // setPage([page + 1, Direction.Next])
  }
  const goPrev = () => {
    setPage((state) => [state[0], Direction.Prev])
    setPage((state) => [state[0] - 1, state[1]])
    // setPage([page - 1, Direction.Prev])
  }

  enum Direction {
    Next = 1,
    Prev = -1,
  }
  const width = 421 + 32
  const variants1 = {
    enter: ({ direction }: { direction: Direction }) => {
      console.log('enter1', direction, width)
      return {
        x: direction === Direction.Next ? width : -1 * width,
      }
    },
    center: {
      x: 0,
    },
    exit: ({ direction }: { direction: Direction }) => {
      console.log('exit1', direction, width)
      return {
        x: direction === Direction.Prev ? width : -1 * width,
      }
    },
  }
  const variants2 = {
    enter: ({ direction }: { direction: Direction }) => {
      console.log('enter2', direction, width)
      return {
        x: direction === Direction.Next ? width : -1 * width,
      }
    },
    center: {
      x: 0,
    },
    exit: ({ direction }: { direction: Direction }) => {
      console.log('exit2', direction, width)
      return {
        x: direction === Direction.Prev ? width : -1 * width,
      }
    },
  }

  return (
    <section className="p-4 py-12 sm:py-40 bg-white min-h-screen sm:min-h-0 flex sm:block items-center">
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
        <div className="flex sm:w-1/2 sm:overflow-hidden space-x-6">
          <AnimatePresence initial={false}>
            <motion.div
              key={newsItems[itemIndex].url}
              initial={{ x: direction === Direction.Next ? width : -1 * width }}
              animate={{ x: 0 }}
              exit={{ x: direction === Direction.Prev ? width : -1 * width }}
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 200,
                },
              }}
            >
              {renderItem(newsItems[itemIndex])}
            </motion.div>
            <motion.div
              key={newsItems[nextItemIndex].url}
              initial={{ x: direction === Direction.Next ? width : -1 * width }}
              animate={{ x: 0 }}
              exit={{ x: direction === Direction.Prev ? width : -1 * width }}
              transition={{
                x: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 200,
                },
              }}
            >
              {renderItem(newsItems[nextItemIndex])}
            </motion.div>
          </AnimatePresence>
          {/* {newsItems.map(renderItem)} */}
        </div>
        <CarouselButtons
          className="mt-10 space-x-4 sm:hidden"
          theme="light"
          onClickNext={goNext}
          onClickPrev={goPrev}
        />
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
          <img src={item.image} className="object-cover h-full" />
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

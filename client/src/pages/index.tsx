import React, { useState, useEffect, Fragment } from 'react'
import { Form, Field } from 'react-final-form'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { ContentHeader } from '../atoms/content-header'
import { Typography } from '../atoms/typography'
// import { InPageCta } from '../atoms/in-page-cta'
import { LinkCta } from '../atoms/link-cta'
import { PlusIcon, PlayIcon } from '../svgs/icons'
import { ScrollIndicator } from '../molecules/scroll-indicator'
import { ExternalLink } from '../atoms/external-link'
import { CircleButton } from '../atoms/circle-button'
import {
  InquiryModal,
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

const TopVideo = ({ image, videoUrl }: { image: string; videoUrl: string }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  return (
    <AnimatePresence>
      <img
        key="image"
        src={image}
        className="absolute top-0 left-0 h-screen w-full object-cover"
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
  const heroImage = data.craftAPI.home?.singleMedia?.[0]?.image?.[0]?.url
  const heroVideo = data.craftAPI.home?.singleMedia?.[0]?.videoURL
  const heroBoat = data.craftAPI.home?.boatLink?.[0] || {}
  const heroContent = data.craftAPI.home?.textBlock?.[0] || {}
  const featured = data.craftAPI.home?.home2UpBoats || []
  const difference = data.craftAPI.home?.differenceSection?.[0] || {}
  const connect = data.craftAPI.home?.connectSection?.[0] || {}
  const connectBackground =
    data.craftAPI.home?.connectSectionBackground?.[0]?.url

  return (
    <Layout>
      <SEO image={heroImage} />
      <ScrollIndicator />
      {/* First hero section */}
      <section
        className="relative min-h-screen flex justify-center items-end overflow-hidden"
        data-scrollsection
      >
        <div className="absolute top-0 left-0 h-screen w-full">
          <TopVideo image={heroImage} videoUrl={heroVideo} />
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
        <div className="relative z-10 max-w-6xl mb-12 px-4 sm:mb-24 text-white text-left flex flex-col items-start md:items-center">
          <ContentHeader className="mb-4 self-start -ml-2 sm:self-auto mb:ml-0">
            {heroBoat.boatMetadata?.[0]?.menuName}
          </ContentHeader>
          <Typography variant="h2" md="h1" className="mb-10 ">
            {heroContent.header}
          </Typography>
          <Typography variant="p1" className="mb-10 max-w-2xl hidden sm:block">
            {heroContent.copy}
          </Typography>
          <div className="flex items-center space-x-6">
            {/* <InPageCta onClick={() => setInquiryModalState(true)}>
              Request Info
            </InPageCta> */}
            <Link to={`/boats/${heroBoat.slug}`}>
              <LinkCta>Learn More</LinkCta>
            </Link>
          </div>
        </div>
      </section>
      {/* 2-up boats section */}
      <section className="relative md:flex" data-scrollsection>
        {featured.map((boat) => (
          <BoatFeaturette
            key={boat.boatLink?.[0]?.title}
            backgroundImage={boat.background?.[0]?.url}
            boatImage={boat.boatImage?.[0]?.image?.[0]?.url}
            contentHeader={boat.boatLink?.[0]?.boatMetadata?.[0]?.menuCategory}
            subtitle={boat.textBlockCopy}
            boatName={boat.boatLink?.[0]?.title}
            url={boat.boatLink?.[0]?.slug}
          />
        ))}
      </section>
      {/* Second hero section */}
      <section
        className="min-h-screen relative flex justify-center items-end"
        data-scrollsection
      >
        <img
          src={difference.backgroundImage?.[0]?.url}
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
            {difference.subtitle}
          </ContentHeader>
          <Typography variant="h2" md="h1" className="mb-10">
            {difference.theTitle}
          </Typography>
          <div className="flex items-center space-x-6">
            {/* <ComingSoonLink>
              <LinkCta>EXPERIENCE THE DIFFERENCE</LinkCta>
            </ComingSoonLink> */}
          </div>
        </div>
      </section>
      {/* News and press section */}
      <NewsSection newsItems={craftNewsToNewsItem(data.craftAPI.news || [])} />
      {/* Stay connected section */}
      <section
        className="relative xl:py-48 py-40 bg-cover bg-center min-h-screen sm:min-h-0 flex sm:block items-center"
        style={{ backgroundImage: `url(${connectBackground})` }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50" />
        <div className="max-w-8xl sm:mx-auto flex flex-col md:flex-row md:items-center md:justify-around justify-center text-white">
          <div className="relative pb-16 px-4">
            <Typography variant="h2">{connect.theTitle}</Typography>
          </div>
          <div className="relative px-4 max-w-md">
            <StayConnectedForm
              content={connect.theContent}
              successMessage={connect.successMessage}
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

export const query = graphql`
  query HomePage {
    craftAPI {
      home: entry(slug: "homepage") {
        ... on CraftAPI_homepage_homepage_Entry {
          boatLink {
            slug
            ... on CraftAPI_boats_boats_Entry {
              boatMetadata {
                ... on CraftAPI_boatMetadata_BlockType {
                  menuName
                }
              }
            }
          }
          singleMedia {
            ... on CraftAPI_singleMedia_BlockType {
              videoURL
              image {
                ... on CraftAPI_s3_Asset {
                  url
                }
              }
            }
          }
          textBlock {
            ... on CraftAPI_textBlock_BlockType {
              header
              copy
            }
          }
          home2UpBoats {
            ... on CraftAPI_home2UpBoats_column_BlockType {
              boatLink {
                ... on CraftAPI_boats_boats_Entry {
                  title
                  slug
                  boatMetadata {
                    ... on CraftAPI_boatMetadata_BlockType {
                      menuCategory(label: true)
                    }
                  }
                }
              }
              background: image {
                ... on CraftAPI_s3_Asset {
                  url
                }
              }
              boatImage: imageObject {
                ... on CraftAPI_imageObject_BlockType {
                  image {
                    ... on CraftAPI_s3_Asset {
                      url
                    }
                  }
                }
              }
              textBlockCopy
            }
          }
          differenceSection {
            ... on CraftAPI_differenceSection_BlockType {
              theTitle
              subtitle
              backgroundImage {
                ... on CraftAPI_s3_Asset {
                  url
                }
              }
            }
          }
          connectSection {
            ... on CraftAPI_connectSection_BlockType {
              theTitle
              theContent
              successMessage
            }
          }
          connectSectionBackground: image {
            ... on CraftAPI_s3_Asset {
              url
            }
          }
        }
      }
      news: entries(orderBy: "dateCreated", type: "news", inReverse: true) {
        ... on CraftAPI_news_news_Entry {
          title
          textContent
          siteName
          imageObject {
            ... on CraftAPI_imageObject_BlockType {
              image {
                ... on CraftAPI_s3_Asset {
                  url
                }
              }
              altTag
            }
          }
          urlLink
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

function StayConnectedForm({
  content,
  successMessage,
}: {
  content: string
  successMessage: string
}) {
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
                {content}
              </Typography>
            </Fragment>
          )}
          {submitSucceeded && (
            <Typography variant="p1" className="pb-16">
              {successMessage}
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

const craftNewsToNewsItem = (apiNewsItems: any[]): NewsItem[] =>
  apiNewsItems.map((item) => ({
    content: item.textContent,
    image: item.imageObject?.[0]?.image?.[0]?.url,
    siteName: item.siteName,
    title: item.title,
    url: item.urlLink,
  }))

function NewsSection({ newsItems }: { newsItems: NewsItem[] }) {
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

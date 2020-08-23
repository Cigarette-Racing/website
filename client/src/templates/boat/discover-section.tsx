import React, { useState, useRef, Fragment } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLockBodyScroll } from 'react-use'
import Img from 'gatsby-image'
import ReactPlayer from 'react-player'
import { graphql, useStaticQuery } from 'gatsby'
import ReactModal from 'react-modal'
import { InPageAnchor } from '../../molecules/in-page-nav'
import { VerticalHeader } from '../../atoms/vertical-header'
import { Media } from '../../types/boat'
import { BoatSection, TextBlockComponent } from '../boat.components'
import { AspectRatio } from '../../atoms/aspect-ratio'
import { CircleButton } from '../../atoms/circle-button'
import { PlayIcon } from '../../svgs/icons'
import CloseCursor from '../../images/close-cursor.png'

const query = graphql`
  query DiscoverSectionBackground {
    background: file(relativePath: { eq: "discover-section-bg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const DiscoverSection = ({
  copy,
  header,
  media,
  sectionTitle,
  disableBackground = false,
}: {
  sectionTitle: string
  media: Media | string
  header: string
  copy: string
  disableBackground?: boolean
}) => {
  const { background } = useStaticQuery<
    GatsbyTypes.DiscoverSectionBackgroundQuery
  >(query)

  return (
    <BoatSection
      theme="dark"
      className="pb-24 overflow-hidden"
      data-section-type="Discover"
    >
      <InPageAnchor title={sectionTitle} />
      {disableBackground ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(63.57% 82.14% at 50% 39.57%, #212121 0.12%, #000000 100%)',
          }}
        />
      ) : (
        <Fragment>
          <Img
            fluid={background?.childImageSharp?.fluid}
            alt=""
            className="top-0 left-0 h-full w-full object-cover filter-grayscale z-auto"
            style={{ position: 'absolute' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(360deg, #000000 46.14%, rgba(0, 0, 0, 0) 100%)',
            }}
          />
        </Fragment>
      )}
      <div className="md:px-12 lg:px-20 relative max-w-7xl 3xl:max-w-10xl mx-auto">
        <div className="hidden md:block absolute right-0 top-0">
          <VerticalHeader theme="dark" className="mr-4">
            {sectionTitle}
          </VerticalHeader>
        </div>
        <div className="px-4 mb-16 lg:mb-20 md:mt-8 lg:mt-16">
          <DiscoverMedia media={media} />
        </div>
        <TextBlockComponent
          className="text-center px-4 max-w-2xl mx-auto lg:mb-8"
          header={header}
          copy={copy}
        />
      </div>
    </BoatSection>
  )
}

const DiscoverMedia = ({ media }: { media: Media }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [autoPlayVideo, setAutoPlayVideo] = useState(false)
  useLockBodyScroll(showVideo)

  if (!media.image) {
    return null
  }

  const videoPlayer = useRef(null)

  const modalStyles = {
    overlay: {
      background: 'transparent',
      zIndex: 50,
    },
    content: {
      background: 'transparent',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 0,
      border: 'none',
      borderRadius: 0,
      overflow: 'hidden',
    },
  }

  return (
    // TODO: get 3:2 discover section images
    // <AspectRatio ratio="3:2" md="16:9" lg="21:9">
    <Fragment>
      <ReactModal
        style={modalStyles}
        isOpen={showVideo!}
        contentLabel="onRequestClose Example"
        onRequestClose={() => {
          setShowVideo(false)
        }}
      >
        <div
          style={{
            cursor: `url(${CloseCursor}) 28 28, auto`,
          }}
        >
          <button
            onClick={() => {
              setShowVideo(false)
            }}
          >
            close
          </button>
          <ReactPlayer
            ref={videoPlayer}
            className="absolute top-0 left-0"
            url={media.videoUrl}
            controls
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setShowVideo(false)
            }}
            playing={showVideo}
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
        </div>
      </ReactModal>
      <AspectRatio ratio="21:9">
        <img
          src={media.image}
          alt=""
          className="h-full w-full object-cover"
          style={{ position: 'absolute' }}
        />
        {media.videoUrl && (
          <CircleButton
            onClick={() => setShowVideo(true)}
            icon={PlayIcon}
            size="lg"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </AspectRatio>
    </Fragment>
  )
}

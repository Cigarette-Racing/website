import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Img from 'gatsby-image'
import ReactPlayer from 'react-player'
import { graphql, useStaticQuery } from 'gatsby'
import { InPageAnchor } from '../../molecules/in-page-nav'
import { VerticalHeader } from '../../atoms/vertical-header'
import { Media } from '../../types/boat'
import { BoatSection, TextBlockComponent } from '../boat.components'
import { AspectRatio } from '../../atoms/aspect-ratio'
import { CircleButton } from '../../atoms/circle-button'
import { PlayIcon } from '../../svgs/icons'

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
}: {
  sectionTitle: string
  media: Media
  header: string
  copy: string
}) => {
  const { background } = useStaticQuery<
    GatsbyTypes.DiscoverSectionBackgroundQuery
  >(query)

  return (
    <BoatSection theme="dark" className="pb-24 overflow-hidden">
      <InPageAnchor title={sectionTitle} />
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
      <div className="md:px-12 lg:px-16 relative max-w-5xl mx-auto">
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
  return (
    // TODO: get 3:2 discover section images
    // <AspectRatio ratio="3:2" md="16:9" lg="21:9">
    <AspectRatio ratio="21:9">
      <Img
        fluid={media.image.childImageSharp?.fluid}
        className="h-full w-full object-cover"
        alt={media.alt || ''}
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
      <AnimatePresence>
        {showVideo && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ReactPlayer
              className="absolute top-0 left-0"
              url={media.videoUrl}
              controls
              playing
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
        )}
      </AnimatePresence>
    </AspectRatio>
  )
}

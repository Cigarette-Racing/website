import React, { useState } from 'react'
import Img from 'gatsby-image'
import { AnimatePresence, motion } from 'framer-motion'
import ReactPlayer from 'react-player'

export interface AutoplayVideoProps {
  image: GatsbyTypes.File | string
  alt?: string
  videoUrl: string
  videoOptions?: {
    controls: boolean
  }
}

export const AutoplayVideo = ({
  image,
  alt,
  videoUrl,
  videoOptions,
}: AutoplayVideoProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const { controls = true } = videoOptions || {}

  return (
    <AnimatePresence>
      <img
        key="image"
        src={image}
        className="absolute h-full w-full object-cover"
        alt={alt || ''}
      />
      <motion.div key="video" animate={{ opacity: isVideoLoaded ? 1 : 0 }}>
        <ReactPlayer
          className="absolute top-0 left-0"
          url={videoUrl}
          controls={controls}
          playsinline={true}
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

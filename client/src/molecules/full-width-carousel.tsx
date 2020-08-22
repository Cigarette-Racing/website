import React, { useState, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FullWidthCarouselBlock } from '../types/boat'
import { AspectRatio } from '../atoms/aspect-ratio'
import { ProgressDots } from '../atoms/progress-dots'
import { CircleButton } from '../atoms/circle-button'
import { ArrowIcon } from '../svgs/icons'
import { determineSwipeAction } from '../services/swiping'
import { AutoplayVideo } from '../atoms/autoplay-video'
import clsx from 'clsx'

const animations = {
  initial: {
    opacity: 0,
  },
  animate: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0.5,
  },
  transition: {
    opacity: { duration: 0.6 },
  },
}
export interface FullWidthCarouselProps
  extends Omit<FullWidthCarouselBlock, 'type'> {}

export const FullWidthCarousel = ({
  items,
  blockPosition,
}: FullWidthCarouselProps) => {
  const [page, setPage] = useState(0)
  const itemIndex = wrap(0, items.length, page)
  const goToItem = (oneBasedIndex: number) => {
    setPage(oneBasedIndex - 1)
  }
  const media = items[itemIndex].media

  return (
    <div
      className={clsx('relative mx-auto', {
        'md:-mt-32 first': blockPosition === 'first',
        'mb-32 lg:mb-48 middle': blockPosition === 'middle',
        '-mb-12 last': blockPosition === 'last',
      })}
    >
      <AspectRatio ratio="2:1">
        <AnimatePresence>
          <motion.div
            key={page}
            {...animations}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDragEnd={(e, { offset, velocity }) => {
              determineSwipeAction({
                offset: offset.x,
                velocity: velocity.x,
                onSwipeLeft: () => goToItem(page + 2),
                onSwipeRight: () => goToItem(page),
              })
            }}
            className="absolute h-full w-full object-cover"
          >
            {!!media?.videoUrl ? (
              <AutoplayVideo
                alt={media.alt}
                image={media.image}
                videoUrl={media.videoUrl}
              />
            ) : (
              <img
                src={media?.image?.childImageSharp?.fluid?.src! || media?.image}
                className="pointer-events-none"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </AspectRatio>
      {items.length > 1 && (
        <Fragment>
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 47.5%)',
            }}
          />
          <div className="absolute pb-4 bottom-0 left-1/2 transform -translate-x-1/2 z-10">
            <ProgressDots
              current={itemIndex + 1}
              total={items.length}
              variant="horizontal"
              onClick={goToItem}
            />
          </div>
          <div className="hidden absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:flex justify-between w-full px-4">
            <CircleButton
              icon={ArrowIcon}
              size="md"
              className="border-red hover:bg-white hover:text-red transform rotate-180"
              onClick={(params) => {
                goToItem(page)
              }}
            />
            <CircleButton
              icon={ArrowIcon}
              size="md"
              className="border-red hover:bg-white hover:text-red"
              onClick={(params) => {
                goToItem(page + 2)
              }}
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}

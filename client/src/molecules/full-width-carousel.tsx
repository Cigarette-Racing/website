import React, { useState, Fragment, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FullWidthCarouselBlock } from '../types/common'
import { AspectRatio } from '../atoms/aspect-ratio'
import { ProgressDots } from '../atoms/progress-dots'
import { determineSwipeAction } from '../services/swiping'
import { AutoplayVideo } from '../atoms/autoplay-video'
import clsx from 'clsx'
import { CarouselButtons } from '../templates/boat.components'
import { cacheImages } from '../services/images'

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
  extends Omit<FullWidthCarouselBlock, 'type'> {
  blockPosition?: 'first' | 'middle' | 'last'
}

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

  useEffect(() => {
    cacheImages(items.map((item) => `${item?.media?.image}?q=30&w=1500`))
  }, [])

  return (
    <div
      className={clsx('relative mx-auto', {
        'md:-mt-32 first': blockPosition === 'first',
        'mb-32 lg:mb-48 middle': blockPosition === 'middle',
        '-mb-12 last': blockPosition === 'last',
      })}
      data-component="FullWidthCarousel"
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
                videoOptions={{ controls: false }}
              />
            ) : (
              <img
                src={`${media?.image}?q=30&w=2000`}
                className="pointer-events-none h-full w-full object-cover"
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
          <CarouselButtons
            className="hidden absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:flex justify-between w-full px-4"
            onClickNext={() => {
              goToItem(page + 2)
            }}
            onClickPrev={() => {
              goToItem(page)
            }}
          />
        </Fragment>
      )}
    </div>
  )
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FullWidthCarouselBlock } from '../types/boat'
import { AspectRatio } from '../atoms/aspect-ratio'
import { ProgressDots } from '../atoms/progress-dots'

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
    opacity: 0,
  },
  transition: {
    opacity: { duration: 0.4 },
  },
}
export interface FullWidthCarouselProps
  extends Omit<FullWidthCarouselBlock, 'type'> {}

export const FullWidthCarousel = ({ items }: FullWidthCarouselProps) => {
  const [page, setPage] = useState(0)
  const itemIndex = wrap(0, items.length, page)
  const goToItem = (oneBasedIndex: number) => {
    console.log(oneBasedIndex)
    setPage(oneBasedIndex - 1)
  }

  return (
    <div className="relative -mb-12 max-w-8xl mx-auto">
      <AspectRatio ratio="16:9">
        <AnimatePresence>
          <motion.img
            key={page}
            src={items[itemIndex].media.image.childImageSharp?.fluid?.src!}
            {...animations}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                goToItem(page + 2)
              } else if (swipe > swipeConfidenceThreshold) {
                goToItem(page)
              }
            }}
            className="absolute h-full w-full object-cover"
          />
        </AnimatePresence>
      </AspectRatio>
      <div className="absolute pb-4 bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <ProgressDots
          current={itemIndex + 1}
          total={items.length}
          variant="horizontal"
          onClick={goToItem}
        />
      </div>
    </div>
  )
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

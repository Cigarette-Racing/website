// Adapted from https://codesandbox.io/s/framer-motion-image-gallery-pqvx3
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { CarouselBlock } from '../types/boat'
import { AspectRatio } from '../atoms/aspect-ratio'
import { CarouselButtons, TextBlockComponent } from '../boat.components'

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

export interface CarouselProps extends Omit<CarouselBlock, 'type'> {}

export const Carousel = ({ items }: CarouselProps) => {
  const [page, setPage] = useState(0)
  const itemIndex = wrap(0, items.length, page)
  const goNext = () => {
    setPage(page + 1)
  }
  const goPrev = () => {
    setPage(page - 1)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <AspectRatio ratio="3:2" className="overflow-hidden">
        <AnimatePresence initial={false}>
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
                goNext()
              } else if (swipe > swipeConfidenceThreshold) {
                goPrev()
              }
            }}
            className="absolute h-full w-full object-cover"
          />
        </AnimatePresence>
        <CarouselButtons
          className="absolute bottom-0 pb-4 w-full md:hidden z-10"
          onClickNext={goNext}
          onClickPrev={goPrev}
        />
      </AspectRatio>
      <div className="md:flex justify-between my-8 mb-20 md:mb-24 px-4 xl:px-0 ">
        <AnimatePresence initial={false}>
          <motion.div {...animations}>
            <TextBlockComponent
              key={page}
              className="md:w-7/12"
              header={items[itemIndex].content.header}
              copy={items[itemIndex].content.copy}
            />
          </motion.div>
        </AnimatePresence>
        <CarouselButtons
          className="hidden md:flex items-start"
          theme="light"
          onClickNext={goNext}
          onClickPrev={goPrev}
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

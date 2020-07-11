// Adapted from https://codesandbox.io/s/framer-motion-image-gallery-pqvx3
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { SliderBlock } from '../types/boat'
import { AspectRatio } from '../atoms/aspect-ratio'
import { CarouselButtons, TextBlockComponent } from '../boat.components'
import { useMeasure } from 'react-use'

enum Direction {
  Next = 1,
  Prev = -1,
}

const variants = {
  enter: ({ direction, width }: { direction: Direction; width: number }) => {
    return {
      x: direction === Direction.Next ? 500 : -500,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: ({ direction, width }: { direction: Direction; width: number }) => {
    return {
      zIndex: 0,
      x: direction === Direction.Prev ? 500 : -500,
      opacity: 0,
    }
  },
}

const textContentAnimations = {
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

export interface SliderProps extends Omit<SliderBlock, 'type'> {}

export const Slider = ({ items }: SliderProps) => {
  const [ref, { width }] = useMeasure<HTMLDivElement>()
  const [[page, direction], setPage] = useState([0, 0])
  const itemIndex = wrap(0, items.length, page)
  const goNext = () => {
    setPage([page + 1, Direction.Next])
  }
  const goPrev = () => {
    setPage([page - 1, Direction.Prev])
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="md:w-9/12" ref={ref}>
        <AspectRatio ratio="3:2">
          <AnimatePresence initial={false} custom={{ direction, width }}>
            <motion.img
              key={page}
              src={items[itemIndex].media.image.childImageSharp?.fluid?.src!}
              custom={{ direction, width }}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 200 },
                opacity: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
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
            className="absolute bottom-0 pb-4 w-full z-10 md:hidden"
            onClickNext={goNext}
            onClickPrev={goPrev}
          />
        </AspectRatio>
        <div className="md:flex justify-between items-start md:mt-10 md:mb-40">
          <AnimatePresence initial={false}>
            <motion.div {...textContentAnimations}>
              <TextBlockComponent
                key={page}
                className="my-8 md:my-0 px-4 mb-20 md:w-10/12"
                header={items[itemIndex].content.header}
                copy={items[itemIndex].content.copy}
              />
            </motion.div>
          </AnimatePresence>
          <CarouselButtons
            className="hidden md:flex"
            onClickNext={goNext}
            onClickPrev={goPrev}
          />
        </div>
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

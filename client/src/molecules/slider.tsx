// Adapted from https://codesandbox.io/s/framer-motion-image-gallery-pqvx3
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { SliderBlock } from '../types/common'
import { AspectRatio } from '../atoms/aspect-ratio'
import {
  CarouselButtons,
  TextBlockComponent,
} from '../templates/boat.components'
import { determineSwipeAction } from '../services/swiping'
import { fadeAnimationProps } from '../services/animations'
import { Theme } from '../types/shared'
import { cacheImages } from '../services/images'

enum Direction {
  Next = 1,
  Prev = -1,
}

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
}

const secondaryVariants = {
  enter: {
    opacity: 0,
    scale: 0.8,
  },
  center: {
    opacity: 0.35,
    scale: 0.85,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
    },
  },
}

export interface SliderProps extends Omit<SliderBlock, 'type'> {
  theme?: Theme
}

export const Slider = ({ items, theme }: SliderProps) => {
  if (!items?.length) {
    return null
  }

  const [[page], setPage] = useState([0, 0])
  const itemIndex = wrap(0, items?.length, page)
  const nextItemIndex = wrap(0, items?.length, page + 1)
  const goNext = () => {
    setPage([page + 1, Direction.Next])
  }
  const goPrev = () => {
    setPage([page - 1, Direction.Prev])
  }

  useEffect(() => {
    cacheImages(
      items?.map((item) => `${item?.media?.image}?q=30&w=2000&fm=jpg`)
    )
  }, [])

  return (
    <div className="max-w-7xl mx-auto" data-block-type="Slider">
      <div className="md:w-9/12">
        <AspectRatio ratio="3:2">
          <AnimatePresence initial={false}>
            <motion.img
              key={page}
              src={`${items?.[itemIndex]?.media?.image}?q=30&w=2000&fm=jpg`}
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
                determineSwipeAction({
                  offset: offset.x,
                  velocity: velocity.x,
                  onSwipeLeft: goNext,
                  onSwipeRight: goPrev,
                })
              }}
              className="absolute h-full w-full object-cover"
            />
            <motion.div
              key={`secondary${page}`}
              variants={secondaryVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 200 },
                opacity: { duration: 0.4 },
              }}
              className="absolute h-full w-full object-cover cursor-pointer"
              style={{ left: 'calc(100% + 0px)' }}
              onClick={goNext}
            >
              <img src={items?.[nextItemIndex]?.media?.image} />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    theme === 'dark'
                      ? 'linear-gradient(to right, transparent, black 45%)'
                      : 'linear-gradient(to right, transparent, white 45%)',
                }}
              />
            </motion.div>
          </AnimatePresence>
          <CarouselButtons
            className="absolute bottom-0 pb-4 w-full z-10 md:hidden"
            onClickNext={goNext}
            onClickPrev={goPrev}
            theme={theme}
          />
        </AspectRatio>
        <div className="md:flex justify-between items-start md:mt-10 md:mb-40">
          <AnimatePresence initial={false}>
            <motion.div {...fadeAnimationProps}>
              <TextBlockComponent
                key={page}
                className="my-8 md:my-0 px-4 mb-20 md:w-10/12"
                header={items?.[itemIndex].content.header}
                copy={items?.[itemIndex].content.copy}
              />
            </motion.div>
          </AnimatePresence>
          <CarouselButtons
            className="hidden md:flex"
            onClickNext={goNext}
            onClickPrev={goPrev}
            theme={theme}
          />
        </div>
      </div>
    </div>
  )
}

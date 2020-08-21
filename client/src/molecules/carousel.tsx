// Adapted from https://codesandbox.io/s/framer-motion-image-gallery-pqvx3
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { CarouselBlock } from '../types/boat'
import { AspectRatio } from '../atoms/aspect-ratio'
import {
  CarouselButtons,
  TextBlockComponent,
} from '../templates/boat.components'
import { determineSwipeAction } from '../services/swiping'
import { fadeAnimationProps } from '../services/animations'
import { Theme } from '../types/shared'

export interface CarouselProps extends Omit<CarouselBlock, 'type'> {
  theme?: Theme
}

export const Carousel = ({ items, theme }: CarouselProps) => {
  const [page, setPage] = useState(0)
  const itemIndex = wrap(0, items.length, page)
  const goNext = () => {
    setPage(page + 1)
  }
  const goPrev = () => {
    setPage(page - 1)
  }

  return (
    <div className="max-w-7xl mx-auto" data-block-type="Carousel">
      <AspectRatio ratio="3:2" className="overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={page}
            src={
              items[itemIndex]?.media?.image?.childImageSharp?.fluid?.src! ||
              items[itemIndex].media.image
            }
            {...fadeAnimationProps}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
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
        </AnimatePresence>
        <CarouselButtons
          className="absolute bottom-0 pb-4 w-full md:hidden z-10"
          onClickNext={goNext}
          onClickPrev={goPrev}
          theme={theme}
        />
      </AspectRatio>
      <div className="md:flex justify-between my-8 mb-20 md:mb-24 px-4 xl:px-0 ">
        <AnimatePresence initial={false}>
          <motion.div {...fadeAnimationProps}>
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
          onClickNext={goNext}
          onClickPrev={goPrev}
          theme={theme}
        />
      </div>
    </div>
  )
}

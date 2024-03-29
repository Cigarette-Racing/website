import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Typography } from '../../atoms/typography'
import { ArrowIcon } from '../../svgs/icons'
import { ReturnLink } from '../../atoms/return-link'
import { Link } from 'gatsby'
import { throttle } from 'throttle-debounce'
import { AspectRatio } from '../../atoms/aspect-ratio'
import { motion } from 'framer-motion'
import {
  useOnMobileScroll,
  ScrollPrompter,
  useSelectedBoatCategoryState,
} from '../header'
import {
  useBoatsQuery,
  HeaderBoatMenuCategories,
  categoriesToDisplay,
} from './header-data'
import clsx from 'clsx'

export const MobileBoatSelector = ({
  onClose,
  onReturn,
}: {
  onClose: () => void
  onReturn: () => void
}) => {
  const [boatCategory, setBoatCategory] = useSelectedBoatCategoryState()
  const [boatIndex, setBoatIndex] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)
  const boatsByCategory = useBoatsQuery()

  const boats = boatsByCategory[boatCategory] || []

  const listenerProps = useOnMobileScroll(
    throttle(200, true, (deltaY: number): void => {
      if (isNaN(deltaY) || Math.abs(deltaY) < 1) return
      if (!hasScrolled) setHasScrolled(true)
      const step = deltaY > 0 ? 1 : -1
      setBoatIndex((index) =>
        Math.min(Math.max(0, index + step), boats.length - 1)
      )
    })
  )

  return (
    <div className="min-h-screen">
      <div className="h-16 flex items-center">
        <ReturnLink onClick={onReturn}>Back</ReturnLink>
      </div>
      <div className="w-screen h-10 bg-gray-0 -mx-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-full space-x-6 overflow-x-auto  pr-8">
          {Object.keys(boatsByCategory).map(
            (category: HeaderBoatMenuCategories) => {
              if (!categoriesToDisplay[category]) return null
              return (
                <button
                  key={category}
                  className="p-2 whitespace-no-wrap"
                  onClick={() => setBoatCategory(category)}
                >
                  <Typography
                    variant="e3"
                    className={clsx({
                      'text-gray-3': boatCategory !== category,
                    })}
                  >
                    {categoriesToDisplay[category]}
                  </Typography>
                </button>
              )
            }
          )}
        </div>
      </div>
      <div {...listenerProps}>
        <div className="-mx-4">
          <AspectRatio ratio="3:2" className="w-screen">
            <img
              src={boats[boatIndex].backgroundMedia.image.publicUrl}
              alt={boats[boatIndex].backgroundMedia.alt || ''}
              className="h-full w-full object-cover"
              style={{ position: 'absolute' }}
            />
            <div className="bg-black opacity-50 absolute inset-0"></div>
          </AspectRatio>
        </div>
        <div className="relative -mt-6">
          {boats.map((boat, index) => {
            const collapsedHeight = 56
            const highlightedHeight = 80
            const parentAnimation =
              index === boatIndex
                ? {
                    height: highlightedHeight,
                    translateY: 0,
                    scale: 1,
                    opacity: 1,
                  }
                : index > boatIndex
                ? {
                    height: collapsedHeight,
                    translateY:
                      (index - boatIndex) * collapsedHeight + highlightedHeight,
                    scale: 0.85,
                    opacity: 1,
                  }
                : {
                    height: collapsedHeight,
                    translateY: (index - boatIndex) * collapsedHeight,
                    scale: 0.5,
                    opacity: 0,
                  }
            return (
              <motion.div
                key={boat.boatName}
                initial={false}
                animate={parentAnimation}
                transition={{ stiffness: 90 }}
                className="absolute top-0 left-0 w-full"
              >
                <Link
                  to={index === boatIndex ? `/boats/${boat.slug!}` : '#'}
                  onClick={(event) => {
                    if (index !== boatIndex) {
                      event.preventDefault()
                      setBoatIndex(index)
                    } else {
                      // Hack because the menu closes faster than the page navigates.
                      // Using a 32ms timeout generally gives the route enough time
                      // to change before closing the menu.
                      setTimeout(onClose, 32)
                    }
                  }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ opacity: index === boatIndex ? 1 : 0.4 }}
                  >
                    <Typography variant="h3" className="mb-4">
                      {boat.menuName}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: index === boatIndex ? 1 : 0,
                      scale: index === boatIndex ? 1 : 0.5,
                    }}
                  >
                    <Typography
                      variant="e1"
                      className="flex space-x-6 items-center justify-center"
                    >
                      <span>View Model</span>{' '}
                      <ArrowIcon className="text-red text-xl" />
                    </Typography>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
      <motion.div animate={{ opacity: hasScrolled ? 0 : 1 }}>
        <ScrollPrompter className="fixed bottom-0 right-0" />
      </motion.div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { ProgressDots } from '../atoms/progress-dots'

const getOneBasedIndex = (collection: Element[], element: Element) => {
  const index = collection.findIndex((value) => value === element)
  if (typeof index === 'undefined') return 0
  return index + 1
}
const getMaxMapValue = (map: Map<Element, number>, threshold: number) => {
  if (map.size === 0) return
  const largestEntry = Array.from(map.entries()).reduce((localMax, current) => {
    if (current[1] > localMax[1]) return current
    return localMax
  })
  if (largestEntry[1] < threshold) return
  return largestEntry[0]
}

export interface ScrollIndicatorProps {}

export const ScrollIndicator = ({}: ScrollIndicatorProps) => {
  const [scrollSections, setScrollSections] = useState<Element[]>()
  const [current, setCurrent] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!window.IntersectionObserver) return

    const sections = Array.from(
      document.querySelectorAll('[data-scrollsection]')
    )
    const ratiosMap = new Map(Array.from(sections).map((el) => [el, 0]))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, intersectionRatio }) => {
          ratiosMap.set(target, intersectionRatio)
        })
        // This number controls when the progress dots fade out
        const mostVisibleElement = getMaxMapValue(ratiosMap, 0.3)
        if (mostVisibleElement) {
          const oneBasedIndex = getOneBasedIndex(sections, mostVisibleElement)
          setCurrent(oneBasedIndex)
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: [0.01, 0.25, 0.75, 1] }
    )

    sections.forEach((el) => observer.observe(el))
    setScrollSections(sections)

    return () => observer.disconnect()
  }, [])

  if (!scrollSections) return null

  return (
    <div
      className={clsx(
        'fixed right-0 z-30 pointer-events-none h-screen flex items-center pr-1 sm:pr-2 md:pr-3 lg:pr-4 transition-opacity duration-200',
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
        }
      )}
    >
      <ProgressDots
        current={current}
        total={scrollSections.length}
        variant="vertical"
      />
    </div>
  )
}

import React, { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { ToggleButtons } from './ToggleButtons'
import { ToggleSwitch } from './ToggleSwitch'
import SpecsSection from './SpecsSection'
import FeaturesSection from './FeaturesSection'
import { BoatSection } from '../../templates/boat.components'

const specs = [
  {
    title: `LOA`,
    info: { us: `18-m`, metric: `56` },
  },
  {
    title: `LOA W/ OUTBOARDS`,
    info: { us: `19-m`, metric: `56` },
  },
  {
    title: `BEAM`,
    info: { us: `4.3m`, metric: `56` },
  },
  {
    title: `weight`,
    info: { us: `14,100-kg`, metric: `56` },
  },
  {
    title: `fuel capacity`,
    info: { us: `3785-L`, metric: `56` },
  },
  {
    title: `Diesel Capacity`,
    info: { us: `132.5-L`, metric: `56` },
  },
  {
    title: `FRESH WATER`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `BLACK WATER`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `DRAFT`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `DEADRISE`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `DEADRISE`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `DEADRISE`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `DEADRISE`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `DEADRISE`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `DEADRISE`,
    info: { us: `61' 8"`, metric: `56` },
  },
  {
    title: `DEADRISE`,
    info: { us: `61' 8"`, metric: `56` },
  },
]

const SpecsAndFeaturesSection = () => {
  const [isToggled, setIsToggled] = useState(false)
  const containerRef = useRef(null)
  const specsContainerRef = useRef(null)
  const featuresContainerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('specs')
  const [containerHeight, setContainerHeight] = useState(null)
  const [specsHeight, setSpecsHeight] = useState(null)
  const [featuresHeight, setFeaturesHeight] = useState(null)

  useEffect(() => {
    // setContainerHeight(containerRef.current.offsetHeight)
    // setSpecsHeight(specsContainerRef.current.offsetHeight)
    // setFeaturesHeight(featuresContainerRef.current.offsetHeight)
  }, [])

  const height =
    selectedCategory === 'specs'
      ? specsContainerRef?.current?.offsetHeight
      : featuresContainerRef?.current?.offsetHeight

  console.log(height)

  return (
    <BoatSection
      theme="dark"
      className="pb-24 overflow-hidden min-h-screen"
      data-section-type="Specs And Features"
    >
      <div className="md:px-12 lg:px-20 relative mx-auto min-h-full">
        <div className="flex items-center justify-between mb-20">
          <ToggleButtons
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
          />
          <ToggleSwitch
            className={clsx(
              'transition-opacity duration-150 ease-in-out',
              selectedCategory === 'specs' ? 'opacity-100' : 'opacity-0'
            )}
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
            choices={['US', 'METRIC']}
          />
        </div>
      </div>
      <div className="relative">
        <motion.div
          className="flex overflow-hidden"
          ref={containerRef}
          style={{ width: '200vw' }}
        >
          <motion.div
            animate={{ opacity: selectedCategory === 'specs' ? 1 : 0 }}
            className="w-screen"
          >
            <div
              ref={specsContainerRef}
              className="specs grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-screen-xl m-auto"
            >
              <SpecsSection unitToggle={isToggled} />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{
              opacity: selectedCategory === 'features' ? 1 : 0,
              y: selectedCategory === 'features' ? 0 : '100%',
            }}
            className="w-screen transform -translate-x-full"
          >
            <div className="relative" ref={featuresContainerRef}>
              <FeaturesSection />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </BoatSection>
  )
}

export default SpecsAndFeaturesSection

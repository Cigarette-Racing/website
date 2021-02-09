import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ToggleButtons } from './ToggleButtons'
import { ToggleSwitch } from './ToggleSwitch'
import SpecsSection from './SpecsSection'
import FeaturesSection from './FeaturesSection'
import { BoatSection } from '../../templates/boat.components'

const SpecsAndFeaturesSection = () => {
  const [isToggled, setIsToggled] = useState(false)
  const containerRef = useRef(null)
  const specsContainerRef = useRef(null)
  const featuresContainerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('specs')
  const [containerHeight, setContainerHeight] = useState(null)

  const [featureState, setFeatureState] = useState(null)

  useEffect(() => {
    setContainerHeight(
      selectedCategory === 'specs'
        ? specsContainerRef?.current?.offsetHeight
        : featuresContainerRef?.current?.offsetHeight
    )
  }, [featureState, selectedCategory])

  return (
    <BoatSection
      theme="dark"
      className="pb-10 sm:pb-24 overflow-hidden min-h-screen"
      data-section-type="Specs And Features"
    >
      <div className="py-4 md:px-12 lg:px-20 relative mx-auto min-h-full">
        <div className="flex items-center justify-center sm:items-baseline sm:justify-between flex-col sm:flex-row sm:mb-4">
          <ToggleButtons
            className="bg-gray-1 sm:bg-transparent w-full sm:w-auto"
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
          />
          <AnimatePresence>
            {selectedCategory === 'specs' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
              >
                <ToggleSwitch
                  isToggled={isToggled}
                  onToggle={() => setIsToggled(!isToggled)}
                  choices={['US', 'METRIC']}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="relative" style={{ height: containerHeight }}>
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
              className="specs grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 sm:gap-6 max-w-screen-xl m-auto px-6 sm:px-0"
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
            transition={{ type: 'tween' }}
            className="w-screen transform -translate-x-full"
          >
            <div ref={featuresContainerRef} className="relative">
              <FeaturesSection
                featureState={featureState}
                setFeatureState={setFeatureState}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </BoatSection>
  )
}

export default SpecsAndFeaturesSection

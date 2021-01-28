import React, { useState } from 'react'
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
  const [selectedCategory, setSelectedCategory] = useState('specs')
  const [animate, toggleFeature] = useCycle(
    { height: '263px' },
    { height: '500px' }
  )

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
        <AnimatePresence initial={false} exitBeforeEnter>
          {selectedCategory === 'specs' && (
            <motion.div
              key="specs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SpecsSection unitToggle={isToggled} />
            </motion.div>
          )}
          {selectedCategory === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full min-h-screen"
            >
              <FeaturesSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BoatSection>
  )
}

export default SpecsAndFeaturesSection

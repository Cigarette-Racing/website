import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ToggleButtons } from './ToggleButtons'
import { ToggleSwitch } from './ToggleSwitch'
import SpecificationsSection from './SpecificationsSection'
import FeaturesSection from './FeaturesSection'
import { BoatSection } from '../../templates/boat.components'
import { useToggle } from 'react-use'

const SpecsAndFeaturesSection = ({ specifications, features }) => {
  const [isToggled, setIsToggled] = useToggle(false)
  const [selectedCategory, setSelectedCategory] = useState('specifications')

  const showUnitToggle = selectedCategory === 'specifications' ? true : false

  return (
    <BoatSection
      theme="dark"
      className="pb-10 sm:pb-24 overflow-hidden"
      data-section-type="Specs And Features"
    >
      <div className="sm:flex justify-between align-middle content-center px-6 lg:px-0 sm:mb-10 max-w-screen-xl lg:mx-auto">
        <ToggleButtons
          options={['Specifications', 'Features']}
          className="toggleButtons"
          selectedCategory={selectedCategory}
          onCategoryClick={setSelectedCategory}
        />
        {showUnitToggle && (
          <ToggleSwitch
            isToggled={isToggled}
            onToggle={setIsToggled}
            choices={['US', 'Metric']}
          />
        )}
      </div>

      <AnimatePresence exitBeforeEnter initial={false}>
        {console.log(selectedCategory)}
        {selectedCategory === 'specifications' && (
          <motion.div
            key="specifications"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ ease: [0.45, 0, 0.5, 0.1] }}
          >
            {console.log('specs')}
            <SpecificationsSection unitToggle={isToggled} {...specifications} />
          </motion.div>
        )}
        {selectedCategory === 'features' && (
          <motion.div
            key="features"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ ease: [0.45, 0, 0.5, 0.1] }}
          >
            {console.log('features')}
            <FeaturesSection {...features} />
          </motion.div>
        )}
      </AnimatePresence>
    </BoatSection>
  )
}

const MotionSection = ({ children, initial, ...rest }) => {
  return (
    <motion.div
      animate={{ top: 0, opacity: 1 }}
      initial={initial}
      exit={{ opacity: 0, top: '-50%' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default SpecsAndFeaturesSection

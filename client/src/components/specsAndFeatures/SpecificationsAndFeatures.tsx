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
        {/* <AnimatePresence> */}
        {/* <motion.div
          initial={{ opacity: 1, height: 'auto' }}
          animate={{
            opacity: showUnitToggle ? 1 : 0,
            height: showUnitToggle ? 'auto' : 0,
          }}
          transition={{ ease: [0.45, 0, 0.55, 1] }}
        > */}
        {showUnitToggle && (
          <ToggleSwitch
            isToggled={isToggled}
            onToggle={setIsToggled}
            choices={['US', 'Metric']}
          />
        )}
      </div>
      {/* </motion.div> */}
      {/* </AnimatePresence> */}

      {selectedCategory === 'specifications' ? (
        <SpecificationsSection unitToggle={isToggled} {...specifications} />
      ) : (
        <FeaturesSection {...features} />
      )}
    </BoatSection>
  )
}

export default SpecsAndFeaturesSection

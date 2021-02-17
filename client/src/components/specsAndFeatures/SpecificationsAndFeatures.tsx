import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ToggleButtons } from './ToggleButtons'
import { ToggleSwitch } from './ToggleSwitch'
import SpecificationsSection from './SpecificationsSection'
import FeaturesSection from './FeaturesSection'
import { BoatSection } from '../../templates/boat.components'

const SpecsAndFeaturesSection = ({ specifications, features }) => {
  const [isToggled, setIsToggled] = useState(false)
  const containerRef = useRef(null)
  const specificationsContainerRef = useRef(null)
  const featuresContainerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('specifications')
  const [containerHeight, setContainerHeight] = useState(null)

  const [featureState, setFeatureState] = useState(null)

  useEffect(() => {
    setContainerHeight(
      selectedCategory === 'specifications'
        ? specificationsContainerRef?.current?.offsetHeight
        : featuresContainerRef?.current?.offsetHeight
    )
  }, [selectedCategory])

  return (
    <BoatSection
      theme="dark"
      className="pb-10 sm:pb-24 overflow-hidden min-h-screen"
      data-section-type="Specs And Features"
    >
      <ToggleButtons
        className="toggleBtns"
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
      />
      {selectedCategory === 'specifications' && (
        <SpecificationsSection
          unitToggle={isToggled}
          {...specifications}
        ></SpecificationsSection>
      )}
    </BoatSection>
  )
}

export default SpecsAndFeaturesSection

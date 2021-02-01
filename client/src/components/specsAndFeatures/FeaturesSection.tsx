import React, { useState } from 'react'
import { motion, useCycle } from 'framer-motion'

const FeaturesSection = ({ featuresRef }) => {
  const [animate, toggleFeature] = useCycle(
    { height: '263px' },
    { height: '500px' }
  )
  return (
    <div className="relative" ref={featuresRef}>
      <div className="w-full">
        <motion.div
          className="w-full bg-gray-3 mb-6"
          onTap={() => toggleFeature()}
          animate={animate}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam
          accusamus corporis, accusantium vel atque est distinctio amet
          necessitatibus iusto maxime facere dignissimos excepturi minima
          expedita id aut dolor ex?
        </motion.div>
        <motion.div
          className="w-full bg-gray-3 mb-6"
          onTap={() => toggleFeature()}
          animate={animate}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam
          accusamus corporis, accusantium vel atque est distinctio amet
          necessitatibus iusto maxime facere dignissimos excepturi minima
          expedita id aut dolor ex?
        </motion.div>
        <motion.div
          className="w-full bg-gray-3 mb-6"
          onTap={() => toggleFeature()}
          animate={animate}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam
          accusamus corporis, accusantium vel atque est distinctio amet
          necessitatibus iusto maxime facere dignissimos excepturi minima
          expedita id aut dolor ex?
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturesSection

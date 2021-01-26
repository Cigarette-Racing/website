import React, { useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { InPageCta } from '../atoms/in-page-cta'
import { Typography } from '../atoms/typography'
import { BoatSection } from '../templates/boat.components'

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
      <div className="md:px-12 lg:px-20 relative max-w-7xl 3xl:max-w-10xl mx-auto min-h-full">
        <div className="flex items-center justify-between mb-20">
          <SpecFeatureToggleButtons
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
          />
          <SpecFeatureToggleSwitch
            className={clsx(
              'transition-opacity duration-150 ease-in-out',
              selectedCategory === 'specs' ? 'opacity-100' : 'opacity-0'
            )}
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
        <div className="relative">
          <AnimatePresence exitBeforeEnter>
            {selectedCategory === 'specs' ? (
              <motion.div className="specs grid grid-cols-3 sm:grid-cols-5 gap-6">
                {specs.map((spec, index) => {
                  return (
                    <div
                      key={`${spec.title}-${index}`}
                      className="spec py-4 border-white border-solid first:border-t border-b last:border-b-0 md:border-0 md:first:border-t-0"
                    >
                      <Typography
                        className="text-left mb-2"
                        theme="dark"
                        variant="e2"
                      >
                        {spec.title}
                      </Typography>
                      <Typography
                        className="text-left relative min-h-6"
                        style={{ minHeight: '20px' }}
                        theme="dark"
                        variant="p3"
                      >
                        <AnimatePresence exitBeforeEnter>
                          {isToggled ? (
                            <motion.span
                              className="absolute top-0 left-0"
                              key="us"
                              animate={{}}
                              transition={{ duration: 0.2 }}
                              exit={{ opacity: 0 }}
                            >
                              {spec.info.us}
                            </motion.span>
                          ) : (
                            <motion.span
                              className="absolute top-0 left-0"
                              key="metric"
                              exit={{ opacity: 0 }}
                            >
                              {spec.info.metric}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </Typography>
                    </div>
                  )
                })}
              </motion.div>
            ) : (
              <motion.div className="w-full">
                <motion.div
                  className="w-full bg-gray-3 mb-6"
                  onTap={() => toggleFeature()}
                  animate={animate}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quibusdam accusamus corporis, accusantium vel atque est
                  distinctio amet necessitatibus iusto maxime facere dignissimos
                  excepturi minima expedita id aut dolor ex?
                </motion.div>
                <motion.div
                  className="w-full bg-gray-3 mb-6"
                  onTap={() => toggleFeature()}
                  animate={animate}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quibusdam accusamus corporis, accusantium vel atque est
                  distinctio amet necessitatibus iusto maxime facere dignissimos
                  excepturi minima expedita id aut dolor ex?
                </motion.div>
                <motion.div
                  className="w-full bg-gray-3 mb-6"
                  onTap={() => toggleFeature()}
                  animate={animate}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quibusdam accusamus corporis, accusantium vel atque est
                  distinctio amet necessitatibus iusto maxime facere dignissimos
                  excepturi minima expedita id aut dolor ex?
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* <div className="relative">
          {selectedCategory === 'specs' ? (
            <div className="absolute top-0 left-0 specs grid grid-cols-3 sm:grid-cols-5 gap-6">
              {specs.map((spec, index) => {
                return (
                  <div
                    key={`${spec.title}-${index}`}
                    className="spec py-4 border-white border-solid first:border-t border-b last:border-b-0 md:border-0 md:first:border-t-0"
                  >
                    <Typography
                      className="text-left mb-2"
                      theme="dark"
                      variant="e2"
                    >
                      {spec.title}
                    </Typography>
                    <Typography
                      className="text-left relative min-h-6"
                      style={{ minHeight: '20px' }}
                      theme="dark"
                      variant="p3"
                    >
                      <AnimatePresence exitBeforeEnter>
                        {isToggled ? (
                          <motion.span
                            className="absolute top-0 left-0"
                            key="us"
                            animate={{}}
                            transition={{ duration: 0.2 }}
                            exit={{ opacity: 0 }}
                          >
                            {spec.info.us}
                          </motion.span>
                        ) : (
                          <motion.span
                            className="absolute top-0 left-0"
                            key="metric"
                            exit={{ opacity: 0 }}
                          >
                            {spec.info.metric}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Typography>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="absolute top-0 left-0 w-full">
              <motion.div
                className="w-full bg-gray-3 mb-6"
                onTap={() => toggleFeature()}
                animate={animate}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                quibusdam accusamus corporis, accusantium vel atque est
                distinctio amet necessitatibus iusto maxime facere dignissimos
                excepturi minima expedita id aut dolor ex?
              </motion.div>
              <motion.div
                className="w-full bg-gray-3 mb-6"
                onTap={() => toggleFeature()}
                animate={animate}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                quibusdam accusamus corporis, accusantium vel atque est
                distinctio amet necessitatibus iusto maxime facere dignissimos
                excepturi minima expedita id aut dolor ex?
              </motion.div>
              <motion.div
                className="w-full bg-gray-3 mb-6"
                onTap={() => toggleFeature()}
                animate={animate}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                quibusdam accusamus corporis, accusantium vel atque est
                distinctio amet necessitatibus iusto maxime facere dignissimos
                excepturi minima expedita id aut dolor ex?
              </motion.div>
            </div>
          )}
        </div> */}
      </div>
    </BoatSection>
  )
}

export const SpecFeatureToggleButtons = ({
  selectedCategory,
  onCategoryClick,
}) => {
  const specBtnVariant = selectedCategory === 'specs' ? 'primary' : 'secondary'
  const featureBtnVariant =
    selectedCategory === 'features' ? 'primary' : 'secondary'

  return (
    <div className="flex bg-gray-3 sm:bg-opacity-0">
      <InPageCta
        onClick={() => {
          onCategoryClick('specs')
        }}
        className={clsx(
          'mr-6',
          selectedCategory === 'specs'
            ? 'selected'
            : 'text-white border-white hover:border-red'
        )}
        variant={specBtnVariant}
      >
        Specifications
      </InPageCta>
      <InPageCta
        onClick={() => {
          onCategoryClick('features')
        }}
        className={clsx(
          selectedCategory === 'features'
            ? 'selected'
            : 'text-white border-white hover:border-red'
        )}
        variant={featureBtnVariant}
      >
        Features
      </InPageCta>
    </div>
  )
}

export const SpecFeatureToggleSwitch = ({ className, isToggled, onToggle }) => {
  return (
    <div className={`flex ${className}`}>
      <Typography className="mr-3 sm:mr-4" variant="p3" theme="dark">
        US
      </Typography>
      <label className="toggle-switch inline-block relative">
        <input
          className="hidden"
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
        />
        <span className="switch absolute top-0 left-0 bottom-0 right-0 transition-colors" />
      </label>
      <Typography
        className={clsx('ml-3 sm:ml-4 transition-transform')}
        variant="p3"
        theme="dark"
      >
        METRIC
      </Typography>
    </div>
  )
}

export default SpecsAndFeaturesSection

import React, { useState } from 'react'
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import { Typography } from '../../atoms/typography'
import DeckBg from '../../images/specs-features-deck-bg.jpg'
import features from './feature-data'

const StyledFeatureLi = styled.li`
  div::before {
    display: inline-block;
    color: red;
    height: 5px;
    width: 5px;
    border-radius: 5px;
    background-color: red;
    content: '';
    vertical-align: middle;
    margin-right: 7px;
  }
`

const FeaturesSection = () => {
  const [expanded, setExpanded] = useState<false | number>(false)

  return (
    <div className="relative">
      <div className="w-full flex flex-col items-center">
        {features.map((feature, i) => {
          // return <Feature key={`feature-${feature}`} />
          return (
            <FeatureAccordion
              feature={feature}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
              key={`feature-${feature.name}`}
            />
          )
        })}
      </div>
    </div>
  )
}

const FeatureAccordion = ({ i, expanded, setExpanded, feature }) => {
  const isOpen = i === expanded
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className="max-w-screen-xl w-full mb-6">
      <motion.div
        whileHover={{ backgroundSize: '110%' }}
        style={{
          backgroundImage: `url(${DeckBg})`,
          backgroundSize: '100%',
          backgroundPosition: 'top center',
        }}
        className="overflow-hidden m-auto"
        initial={{ width: '100%', backgroundSize: '100%' }}
        animate={{
          // width: isOpen ? '110%' : '100%',
          backgroundSize: isOpen ? '110%' : '100%',
        }}
      >
        <motion.header
          className="flex items-center content-center cursor-pointer"
          style={{ height: '240px', width: '100%' }}
          initial={false}
          onClick={() => setExpanded(isOpen ? false : i)}
        >
          <Typography className="text-center w-full" variant="h3">
            {feature.name}
          </Typography>
        </motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              className="px-40"
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="grid grid-cols-2 gap-10 pb-20">
                {feature.data.map((data) => {
                  return (
                    <div>
                      <Typography className="mb-8" variant="e2">
                        {data.title}
                      </Typography>
                      <ul className="w-full">
                        {data.details.map((detail) => {
                          return (
                            <StyledFeatureLi className="mb-6">
                              <Typography variant="p3">{detail}</Typography>
                            </StyledFeatureLi>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default FeaturesSection

import React, { useState, useRef, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

import { Typography } from '../../atoms/typography'

const StrikeThrough = styled.div`
  position: absolute;
  height: 2px;
  top: 40%;
  background: red;
  width: 100%;
  transition: transform 0.5s ease;
  transform: translate3d(-101%, 0, 0);

  &.open {
    transform: translate3d(0, 0, 0);
  }
`

const AnimatedBorder = styled.div`
  transition: opacity 0.5s ease;

  &.open {
    opacity: 0;
  }

  height: 1px;
  /* background-color: #fff; */
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 1) 52%,
      rgba(255, 255, 255, 1) 100%
    );
    width: 400%;
    display: block;
    transition: transform 1s ease;
    transform: translate3d(-60%, 0, 0);
  }
`

const Header = styled.header`
  &:hover {
    ${AnimatedBorder} {
      &:after {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`

const Close = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 48px;
  width: 48px;
  position: absolute;
  top: 19px;
  right: 19px;
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
`

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

const FeaturesSection = ({ title, featureCategories }) => {
  const [expanded, setExpanded] = useState<false | number>(false)

  return (
    <div className="relative px-6 max-w-screen-xl m-auto lg:px-0">
      <div className="w-full flex flex-col items-center">
        {featureCategories.map((featureCategory, i) => {
          const isOpen = i === expanded

          return (
            <div
              key={`${featureCategory}-${i}`}
              className="feature w-full border-solid border-gray-1 border mb-6"
            >
              <Header
                className="relative p-12 md:py-24 text-center flex items-center content-center justify-center cursor-pointer group"
                onClick={() => setExpanded(isOpen ? false : i)}
              >
                <CloseX isOpen={isOpen} />
                <Typography className="relative overflow-hidden" variant="h3">
                  <StrikeThrough className={`${isOpen ? 'open' : 'closed'}`} />
                  {featureCategory.name}
                  <AnimatedBorder className={`${isOpen ? 'open' : 'closed'}`} />
                </Typography>
              </Header>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                exit={{ height: 0 }}
                transition={{ ease: [0.45, 0, 0.55, 1] }}
                className="overflow-hidden feature-body px-6"
              >
                <div className="lg:grid-cols-2 lg:px-32 lg:grid lg:col-gap-10 pb-10">
                  {featureCategory.features.length === 0 && (
                    <div
                      key={`no features`}
                      className="border-b border-solid border-gray-2 lg:border-none"
                    >
                      <Typography variant="e2" className="mb-10 text-center">
                        Details Coming Soon!
                      </Typography>
                    </div>
                  )}

                  {featureCategory.features.map((feature, i) => {
                    return (
                      <div
                        key={`${feature.name}-${i}`}
                        className="pt-10 border-b border-solid border-gray-2 last:border-b-0 lg:border-none"
                      >
                        <Typography variant="e2" className="mb-6">
                          {feature.name}
                        </Typography>

                        {!!feature.descriptions.length && (
                          <ul className="mb-10">
                            {feature.descriptions.map((description) => {
                              return (
                                <StyledFeatureLi
                                  key={description}
                                  className="mb-6"
                                >
                                  <Typography variant="p3">
                                    {description}
                                  </Typography>
                                </StyledFeatureLi>
                              )
                            })}
                          </ul>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const FeatureAccordion = ({
  i,
  expanded,
  setExpanded,
  feature,
  setFeatureState,
}) => {
  const isOpen = i === expanded
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  setFeatureState(isOpen)
  return (
    <div className="max-w-screen-xl w-full mb-6">
      <motion.div className="overflow-hidden m-auto border-gray-4 border-solid border">
        <Header
          as={motion.header}
          className="flex items-center content-center justify-center cursor-pointer relative group"
          style={{ height: '240px', width: '100%' }}
          initial={false}
          onClick={() => setExpanded(isOpen ? false : i)}
        >
          <CloseX isOpen={isOpen} />

          <Typography className="relative overflow-hidden" variant="h3">
            <StrikeThrough className={`${isOpen ? 'open' : 'closed'}`} />
            {feature.name}
            <AnimatedBorder className={`${isOpen ? 'open' : 'closed'}`} />
          </Typography>
        </Header>
        <AnimatePresence>
          {isOpen && (
            <motion.section
              className="px-10 sm:px-20 md:px-40"
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              onAnimationComplete={() => {
                setFeatureState(expanded)
              }}
              variants={{
                open: { y: 0, opacity: 1, height: 'auto' },
                collapsed: { y: 100, opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="grid grid-cols-2 gap-10 pb-20">
                {feature.data.map((data) => {
                  return (
                    <div key={data.title}>
                      <Typography className="mb-8" variant="e2">
                        {data.title}
                      </Typography>
                      <ul className="w-full">
                        {data.details.map((detail) => {
                          return (
                            <StyledFeatureLi key={detail} className="mb-6">
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

const CloseX = ({ isOpen }) => {
  return (
    <Close
      as={motion.div}
      isOpen={isOpen}
      initial={{ x: 0 }}
      animate={{ rotate: isOpen ? -45 : 0 }}
      className="group-hover:bg-red"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <line
          x1="8.41675"
          x2="8.41675"
          y2="16"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          y1="7.58301"
          x2="16"
          y2="7.58301"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    </Close>
  )
}

export default FeaturesSection

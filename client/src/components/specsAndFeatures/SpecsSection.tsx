import React, { useState } from 'react'
import clsx from 'clsx'
import { Typography } from '../../atoms/typography'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import specs from './data'

const SpecsSection = ({ unitToggle, specRef }) => {
  return (
    <div
      ref={specRef}
      className="specs grid grid-cols-3 sm:grid-cols-5 gap-6 w-screen"
    >
      {specs.map((spec, index) => {
        return (
          <div
            key={`${spec.title}-${index}`}
            className="spec py-4 border-white border-solid first:border-t border-b last:border-b-0 md:border-0 md:first:border-t-0"
          >
            <Typography className="text-left mb-2" theme="dark" variant="e2">
              {spec.title}
            </Typography>
            <Typography
              className="text-left relative min-h-6"
              style={{ minHeight: '20px' }}
              theme="dark"
              variant="p3"
            >
              <AnimatePresence exitBeforeEnter>
                {unitToggle ? (
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
  )
}

export default SpecsSection

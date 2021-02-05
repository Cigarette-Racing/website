import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import { Typography } from '../../atoms/typography'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import specs from './data'

const SpecsSection = ({ unitToggle }) => {
  return (
    <Fragment>
      {specs.map((spec, index) => {
        return (
          <div
            key={`${spec.title}-${index}`}
            className="spec py-4 border-gray-1 border-solid first:border-t-0 border-b last:border-b-0 sm:border-0 sm:first:border-t-0"
          >
            <Typography
              className="text-center sm:text-left mb-2"
              theme="dark"
              variant="e2"
            >
              {spec.title}
            </Typography>
            <Typography
              className="text-center sm:text-left relative min-h-6"
              style={{ minHeight: '20px' }}
              theme="dark"
              variant="p3"
            >
              <AnimatePresence exitBeforeEnter>
                {unitToggle ? (
                  <motion.span
                    className="sm:absolute top-0 left-0"
                    key="us"
                    animate={{}}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    {spec.info.us}
                  </motion.span>
                ) : (
                  <motion.span
                    className="sm:absolute top-0 left-0"
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
    </Fragment>
  )
}

export default SpecsSection

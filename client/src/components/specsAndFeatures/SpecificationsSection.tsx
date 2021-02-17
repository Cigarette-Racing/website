import React, { Fragment } from 'react'
import { Typography } from '../../atoms/typography'
import { AnimatePresence, motion, useCycle } from 'framer-motion'

const SpecsSection = ({ specificationsCategories, title, unitToggle }) => {
  return (
    <Fragment>
      {specificationsCategories.map((specification, index) => {
        return (
          <div
            key={`${specification.name}-${index}`}
            className="specification py-4 border-gray-1 border-solid first:border-t border-b last:border-b-0 sm:border-0 sm:first:border-t-0"
          >
            <Typography
              className="text-center sm:text-left mb-2"
              theme="dark"
              variant="e2"
            >
              {specification.name}
            </Typography>
            <Typography
              className="text-center sm:text-left relative min-h-6"
              style={{ minHeight: '20px' }}
              theme="dark"
              variant="p3"
            >
              <AnimatePresence exitBeforeEnter>
                {specification.specifications.map((specificationDetail) => {
                  return unitToggle ? (
                    <motion.span
                      className="sm:absolute top-0 left-0"
                      key="us"
                      animate={{}}
                      transition={{ duration: 0.2 }}
                      exit={{ opacity: 0 }}
                    >
                      {specificationDetail.specificationValueUS}
                    </motion.span>
                  ) : (
                    <motion.span
                      className="sm:absolute top-0 left-0"
                      key="metric"
                      exit={{ opacity: 0 }}
                    >
                      {specificationDetail.specificationValueMetric}
                    </motion.span>
                  )
                  // console.log(
                  //   specificationDetail.specificationValueMetric,
                  //   specificationDetail.specificationValueUS
                  // )
                })}
              </AnimatePresence>
            </Typography>
          </div>
        )
      })}
    </Fragment>
  )
}

export default SpecsSection

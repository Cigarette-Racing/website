import React, { Fragment } from 'react'
import { Typography } from '../../atoms/typography'
import { AnimatePresence, motion } from 'framer-motion'

const SpecificationsSection = ({
  specificationsCategories,
  title,
  unitToggle,
}) => {
  console.log(specificationsCategories, 'wtf')
  if (!specificationsCategories.length) {
    return (
      <div className="max-w-screen-xl m-auto">Specifications coming soon!</div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 max-w-screen-xl m-auto lg:px-0">
      {specificationsCategories.map((specification, index) => {
        return (
          <Specification
            key={`${specification.name}-${index}`}
            unitToggle={unitToggle}
            {...specification}
          />
        )
      })}
    </div>
  )
}

const Specification = ({ name, values, unitToggle }) => {
  return (
    <div className="py-6 border-gray-2 border-solid border-b first:border-t last:border-b-0 sm:border-none">
      <Typography className="text-center mb-3 sm:text-left" variant="e3">
        {name}
      </Typography>
      <AnimatePresence exitBeforeEnter>
        {!unitToggle && (
          <SpecificationValueMotionDiv valueKey="us">
            {values.metricValues.map((value, i) => {
              return (
                <Typography key={`${value}-${i}`} variant="p2">
                  {value}
                </Typography>
              )
            })}
          </SpecificationValueMotionDiv>
        )}
        {unitToggle && (
          <SpecificationValueMotionDiv valueKey="metric">
            {values.usValues.map((value) => {
              return <Typography variant="p2">{value}</Typography>
            })}
          </SpecificationValueMotionDiv>
        )}
      </AnimatePresence>
    </div>
  )
}

const SpecificationValueMotionDiv = ({ children, valueKey }) => {
  return (
    <motion.div
      key={valueKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="text-center sm:text-left w-full"
    >
      {children}
    </motion.div>
  )
}

export default SpecificationsSection

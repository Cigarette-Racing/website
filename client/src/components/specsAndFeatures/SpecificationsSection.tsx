import React, { Fragment } from 'react'
import { Typography } from '../../atoms/typography'
import { AnimatePresence, motion } from 'framer-motion'

const SpecsSection = ({ specificationsCategories, title, unitToggle }) => {
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
    <div className="py-6 border-gray-2 border-solid border-b first:border-t sm:border-none">
      <Typography className="text-center mb-3 sm:text-left" variant="e3">
        {name}
      </Typography>
      <AnimatePresence exitBeforeEnter>
        {!unitToggle && (
          <SpecificationValueMotionDiv key="us">
            {values.metricValues.map((value) => {
              return <Typography variant="p2">{value}</Typography>
            })}
          </SpecificationValueMotionDiv>
        )}
        {unitToggle && (
          <SpecificationValueMotionDiv key="metric">
            {values.usValues.map((value) => {
              return <Typography variant="p2">{value}</Typography>
            })}
          </SpecificationValueMotionDiv>
        )}
      </AnimatePresence>
    </div>
  )
}

const SpecificationValueMotionDiv = ({ children, key }) => {
  return (
    <motion.div
      key={key}
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

export default SpecsSection

// <div
//   key={`${specification.name}-${index}`}
//   className="specification py-4 border-gray-1 border-solid first:border-t border-b last:border-b-0 sm:border-0 sm:first:border-t-0"
// >
//   <Typography
//     className="text-center sm:text-left mb-2"
//     theme="dark"
//     variant="e2"
//   >
//     {specification.name}
//   </Typography>
//   <Typography
//     className="text-center sm:text-left relative min-h-6"
//     style={{ minHeight: '20px' }}
//     theme="dark"
//     variant="p3"
//   >
//     {specification.specifications.map((specificationDetail) => {
//       // console.log(specificationDetail.specificationValueMetric)
//     })}
//   </Typography>
// </div>

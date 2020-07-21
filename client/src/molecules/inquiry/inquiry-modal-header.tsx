import React, { Fragment } from 'react'
import { WithWizard } from 'react-albus'
import clsx from 'clsx'

import { CaretDownIcon, ArrowIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { useInquiryModalState } from './inquiry-modal'
import { motion } from 'framer-motion'

const InquiryModalHeader: React.FC = () => {
  const [, setInquiryModalState] = useInquiryModalState()

  return (
    <WithWizard
      render={({ previous, step, steps }) => {
        return (
          <Fragment>
            <header
              className={clsx(
                'bg-white flex px-4',
                steps.indexOf(step) !== 0
                  ? 'items-start justify-center'
                  : 'justify-end',
                'sm:items-center flex-col relative h-20'
              )}
            >
              {steps.indexOf(step) === 0 && (
                <button
                  className="flex items-center justify-end flex-col pb-2"
                  onClick={() => {
                    setInquiryModalState(false)
                  }}
                >
                  <Typography className="uppercase font-bold pb-1" variant="e2">
                    close
                  </Typography>
                  <CaretDownIcon className="text-red" />
                </button>
              )}
              {steps.indexOf(step) > 0 && (
                <button
                  className="flex items-center justify-center"
                  onClick={() => {
                    previous()
                  }}
                >
                  <ArrowIcon className="mr-4 text-xl text-red transform rotate-180" />
                  <Typography className="uppercase font-bold" variant="e2">
                    go back
                  </Typography>
                </button>
              )}
            </header>
            {steps.indexOf(step) > 0 && (
              <HeaderProgressBar
                percentage={(steps.indexOf(step) / (steps.length - 1)) * 100}
              />
            )}
          </Fragment>
        )
      }}
    />
  )
}

export default InquiryModalHeader

const between = (min: number, max: number, value: number) =>
  Math.min(Math.max(min, value), max)

export const HeaderProgressBar = ({ percentage }: { percentage: number }) => {
  const percentageString = between(0, 100, percentage) + '%'
  return (
    <div className="h-2 w-full bg-gray-5">
      <motion.div
        className="h-full bg-red"
        initial={{ width: 0 }}
        animate={{ width: percentageString }}
        transition={{ stiffness: 30 }}
      >
        <span className="sr-only">{percentageString}</span>
      </motion.div>
    </div>
  )
}

import React, { Fragment } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { CaretDownIcon, ArrowIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { useInquiryModalState } from './inquiry-modal'
import { useWulfric } from '../wulfric'

const InquiryModalHeader: React.FC = () => {
  const [, setInquiryModalState] = useInquiryModalState()
  const { previous, steps, currentStepIndex } = useWulfric()

  return (
    <Fragment>
      <header
        className={clsx(
          'relative h-20 bg-white flex px-4 items-center',
          currentStepIndex !== 0
            ? 'justify-start sm:justify-center'
            : 'justify-center'
        )}
      >
        {currentStepIndex === 0 && (
          <button
            className="relative flex items-center justify-center py-2"
            onClick={() => {
              setInquiryModalState(false)
            }}
          >
            <Typography className="uppercase font-bold" variant="e2">
              close
            </Typography>
            <CaretDownIcon className="absolute top-1/1 text-red" />
          </button>
        )}
        {currentStepIndex > 0 && (
          <button
            className="flex items-center justify-center py-2"
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
      {currentStepIndex > 0 && (
        <HeaderProgressBar
          percentage={(currentStepIndex / (steps.length - 1)) * 100}
        />
      )}
    </Fragment>
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

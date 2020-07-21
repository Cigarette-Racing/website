import React, { Fragment } from 'react'
import { WithWizard } from 'react-albus'
import { Line } from 'rc-progress'
import clsx from 'clsx'

import { CaretDownIcon, ArrowIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { useInquiryModalState } from './inquiry-modal'
import { useWulfric } from '../wulfric'

const InquiryModalHeader: React.FC = () => {
  const [inquiryModalState, setInquiryModalState] = useInquiryModalState()
  const { previous, steps, currentStepIndex } = useWulfric()

  return (
    <Fragment>
      <header
        className={clsx(
          'bg-white flex px-4',
          currentStepIndex !== 0 ? 'items-start justify-center' : 'justify-end',
          'sm:items-center flex-col relative h-20'
        )}
      >
        {currentStepIndex === 0 && (
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
        {currentStepIndex > 0 && (
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
      {currentStepIndex > 0 && (
        <Line
          strokeColor="#D12026"
          strokeLinecap="butt"
          strokeWidth={0.4}
          percent={(currentStepIndex / (steps.length - 1)) * 100}
        />
      )}
    </Fragment>
  )
}

export default InquiryModalHeader

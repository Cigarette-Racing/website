import React from 'react'
import { WithWizard } from 'react-albus'
import { createGlobalState } from 'react-use'

import { CaretDownIcon, ArrowIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { useInquiryModalState } from './inquiry-modal'

const InquiryModalHeader: React.FC = () => {
  const [inquiryModalState, setInquiryModalState] = useInquiryModalState()

  return (
    <WithWizard
      render={({ previous, step, steps }) => {
        return (
          <header className="bg-white flex items-center flex-col justify-center relative h-20">
            {steps.indexOf(step) === 0 && (
              <button
                className="flex items-center justify-center flex-col"
                onClick={() => {
                  setInquiryModalState(false)
                  console.log('close the thing', inquiryModalState)
                }}
              >
                <Typography className="uppercase font-bold" variant="e2">
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
        )
      }}
    />
  )
}

export default InquiryModalHeader

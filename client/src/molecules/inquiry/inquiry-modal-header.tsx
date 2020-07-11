import React, { Fragment } from 'react'
import { WithWizard } from 'react-albus'
import { Line } from 'rc-progress'
import clsx from 'clsx'

import { CaretDownIcon, ArrowIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { useInquiryModalState } from './inquiry-modal'

const InquiryModalHeader: React.FC = () => {
  const [inquiryModalState, setInquiryModalState] = useInquiryModalState()

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
                    setInquiryModalState(false)a
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
              <Line
                strokeColor="#D12026"
                strokeLinecap="butt"
                strokeWidth={0.4}
                percent={(steps.indexOf(step) / (steps.length - 1)) * 100}
              />
            )}
          </Fragment>
        )
      }}
    />
  )
}

export default InquiryModalHeader

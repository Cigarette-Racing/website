import React, { useState, Fragment } from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { Wizard, Steps, Step, WithWizard } from 'react-albus'

import { InPageCta } from '../../atoms/in-page-cta'
import FullBleedBackground from '../../molecules/full-bleed-background'
import { CaretDownIcon, ArrowIcon } from '../../svgs/icons'
import { OptionsCta } from '../../atoms/options-cta'
import { Typography } from '../../atoms/typography'
import fullBleedImage from '../../images/boat-section2-bg.jpeg'
// import InquiryPage1 from './inquiry-screen-1'
// import InquiryPage2 from './inquiry-screen-2'
// import InquiryPage3 from './inquiry-screen-3'

const modalStyles = {
  overlay: {
    zIndex: 50,
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    border: 'none',
  },
}

export const useInquiryModalState = createGlobalState<boolean>(false)

const InquiryModal: React.FC = () => {
  const [inquiryModalState, setInquiryModalState] = useInquiryModalState()
  useLockBodyScroll(inquiryModalState)

  return (
    <ReactModal isOpen={inquiryModalState!} style={modalStyles}>
      <FullBleedBackground image={fullBleedImage} />
      <div className="relative">
        <Wizard>
          <WithWizard
            render={({ next, previous, step, steps }) => {
              return (
                <header className="bg-white flex items-center flex-col justify-center relative h-20">
                  {steps.indexOf(step) === 0 && (
                    <button
                      className="flex items-center justify-center flex-col"
                      onClick={() => {
                        setInquiryModalState(false)
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
          <Steps>
            <Step
              id="request-appointment-1"
              render={({ next }) => (
                <div className="text-white flex flex-col justify-center">
                  <h1 className="text-white">Initial Screen</h1>
                </div>
              )}
            />
            <Step
              id="request-appointment-2"
              render={({ next, previous }) => (
                <div className="text-white">
                  <h1 className="text-white">Screen 1</h1>
                </div>
              )}
            />
            <Step
              id="request-appointment-3"
              render={({ previous }) => (
                <div className="text-white">
                  <h1 className="text-white">Screen 2</h1>
                </div>
              )}
            />
            <Step
              id="request-appointment-3"
              render={({ previous }) => (
                <div className="text-white">
                  <h1 className="text-white">Screen 3</h1>
                </div>
              )}
            />
          </Steps>
          <WithWizard
            render={({ next, previous, step, steps }) => {
              return (
                <div className="flex justify-center flex-col">
                  {steps.indexOf(step) + 1 < steps.length && (
                    <InPageCta
                      className="self-center mt-12"
                      variant="primary"
                      onClick={next}
                    >
                      Continue
                    </InPageCta>
                  )}
                  {steps.indexOf(step) + 1 === steps.length && (
                    <InPageCta
                      className="self-center mt-12"
                      variant="primary"
                      onClick={() => {
                        alert('submit!')
                      }}
                    >
                      Submit Request
                    </InPageCta>
                  )}
                  <div className="text-white self-center mt-6 font-heading italic">
                    {steps.indexOf(step) != 0 &&
                      `${steps.indexOf(step) + 1} of 3`}
                  </div>
                </div>
              )
            }}
          />
        </Wizard>
      </div>
    </ReactModal>
  )
}

export default InquiryModal

import React, { useState, Fragment } from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { Wizard, Steps, Step } from 'react-albus'

import FullBleedBackground from '../../molecules/full-bleed-background'
import InquiryModalNavigation from './inquiry-modal-navigation'
import InquiryModalHeader from './inquiry-modal-header'
import fullBleedImage from '../../images/boat-section2-bg.jpeg'

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
  const [inquiryModalState] = useInquiryModalState()
  useLockBodyScroll(inquiryModalState)

  return (
    <ReactModal isOpen={inquiryModalState!} style={modalStyles}>
      <FullBleedBackground image={fullBleedImage} />
      <div className="relative">
        <Wizard>
          <InquiryModalHeader />
          <Steps>
            <Step
              id="initial-screen"
              render={() => (
                <section className="text-white flex flex-col justify-center">
                  <h1 className="text-white self-center">Initial Screen</h1>
                </section>
              )}
            />
            <Step
              id="request-appointment-1"
              render={() => (
                <section className="text-white flex flex-col justify-center">
                  <h1 className="text-white self-center">Screen 1</h1>
                </section>
              )}
            />
            <Step
              id="request-appointment-2"
              render={() => (
                <section className="text-white flex flex-col justify-center">
                  <h1 className="text-white self-center">Screen 2</h1>
                </section>
              )}
            />
            <Step
              id="request-appointment-3"
              render={() => (
                <section className="text-white flex flex-col justify-center">
                  <h1 className="text-white self-center">Screen 3</h1>
                </section>
              )}
            />
          </Steps>
          <InquiryModalNavigation />
        </Wizard>
      </div>
    </ReactModal>
  )
}

export default InquiryModal

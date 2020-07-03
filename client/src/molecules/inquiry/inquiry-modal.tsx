import React, { useState, Fragment } from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { Wizard, WithWizard, Steps, Step } from 'react-albus'
import { Form, Field } from 'react-final-form'
import Select from 'react-select'
import { Link } from 'gatsby'

import { ArrowIcon } from '../../svgs/icons'
import { AngleIcon } from '../../svgs/icons'
import { OptionsCta } from '../../atoms/options-cta'
import { Typography } from '../../atoms/typography'
import { Radio } from '../../atoms/radio'
import { MultiSelect } from '../../atoms/multi-select'
import FullBleedBackground from '../../molecules/full-bleed-background'
import { InPageCta } from '../../atoms/in-page-cta'
import InquiryModalHeader from './inquiry-modal-header'
import fullBleedImage from '../../images/boat-section2-bg.jpeg'

import { StepOne } from './inquiry-modal.components'

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
    borderRadius: 0,
  },
}

export const useInquiryModalState = createGlobalState<boolean>(false)

const InquiryModal: React.FC = () => {
  const [inquiryModalState] = useInquiryModalState()
  useLockBodyScroll(inquiryModalState)

  return (
    <ReactModal isOpen={inquiryModalState!} style={modalStyles}>
      <FullBleedBackground image={fullBleedImage} />
      <Wizard>
        <InquiryModalHeader />
        <div className="text-white flex flex-col items-center justify-center relative">
          <div className="w-full max-w-2xl">
            <Form
              onSubmit={(values) => {
                console.log(values)
              }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Steps>
                    <Step
                      id="one"
                      render={() => {
                        return <StepOne />
                      }}
                    />
                  </Steps>
                </form>
              )}
            />
          </div>
        </div>
      </Wizard>
    </ReactModal>
  )
}

export default InquiryModal

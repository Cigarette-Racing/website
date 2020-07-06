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
import fullBleedImage from '../../../content/images/boat-section2-bg.jpeg'
import InquiryForm from './inquiry-form'

import {
  LandingStep,
  StepOne,
  StepTwo,
  StepThree,
  ContinueButton,
  PageStatus,
} from './inquiry-modal.components'

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
    background: '#020407',
  },
}

export const useInquiryModalState = createGlobalState<boolean>(false)

const InquiryModal: React.FC = () => {
  const [inquiryModalState] = useInquiryModalState()
  useLockBodyScroll(inquiryModalState)

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  return (
    <ReactModal isOpen={inquiryModalState!} style={modalStyles}>
      <div className="relative pb-10">
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
                  <InquiryForm onSubmit={handleSubmit}>
                    <Steps>
                      <Step
                        id="landing"
                        render={({ next }) => {
                          return <LandingStep next={next} />
                        }}
                      />
                      <Step
                        id="one"
                        render={({ next, steps, step }) => {
                          return (
                            <StepOne>
                              <ContinueButton
                                next={next}
                                inValid={form.getState().hasValidationErrors}
                              />
                              <PageStatus
                                next={next}
                                steps={steps}
                                step={step}
                              />
                            </StepOne>
                          )
                        }}
                      />
                      <Step
                        id="two"
                        render={(props) => {
                          return (
                            <StepTwo
                              {...props}
                              pristine={pristine}
                              submitting={submitting}
                            />
                          )
                        }}
                      />
                      <Step
                        id="three"
                        render={(props) => {
                          return (
                            <StepThree
                              {...props}
                              submit={handleSubmit}
                              pristine={pristine}
                              submitting={submitting}
                            />
                          )
                        }}
                      />
                    </Steps>
                  </InquiryForm>
                )}
              />
            </div>
          </div>
        </Wizard>
      </div>
    </ReactModal>
  )
}

export default InquiryModal

export const HiddenInquiryForm = () => (
  <form
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    name="TEST-contact"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="TEST-contact" />

    <button type="submit">Submit</button>
  </form>
)

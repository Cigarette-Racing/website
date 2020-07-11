import React from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { Wizard, Steps, Step } from 'react-albus'
import { Form } from 'react-final-form'
import InquiryModalHeader from './inquiry-modal-header'
import fullBleedImage from '../../../content/images/discover-section-bg.jpeg'

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
  },
}

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const useInquiryModalState = createGlobalState<boolean>(false)

export const InquiryModal: React.FC = () => {
  const [inquiryModalState] = useInquiryModalState()
  useLockBodyScroll(inquiryModalState)

  return (
    <ReactModal isOpen={inquiryModalState!} style={modalStyles}>
      <div
        className="min-h-full"
        style={{ backgroundImage: `url(${fullBleedImage})` }}
      >
        <div
          className="pb-5 min-h-screen"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        >
          <Wizard>
            <InquiryModalHeader />
            <div className="text-white flex flex-col items-center justify-center relative">
              <div className="w-full max-w-2xl">
                <Form
                  onSubmit={(values) => {
                    const submissionValues = {
                      firstName: values.firstName,
                      lastName: values.lastName,
                      phone: values.phone,
                      emailAddress: values.emailAddress,
                      notes: values.notes,
                      contactPreferences: values.contactPreferences,
                      interest: values.interest.value,
                      modelInterest: values.modelInterest
                        .map((model: any) => model.value)
                        .join(', '),
                      marketingOptIn: values.marketingOptIn,
                    }

                    fetch('/', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      body: encode({
                        'form-name': 'TEST-contact',
                        ...submissionValues,
                      }),
                    })
                      .then(() => console.log('success!!'))
                      .catch((error) => alert(error))
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
                          render={({ next, steps, step }) => {
                            return (
                              <StepTwo
                                pristine={pristine}
                                submitting={submitting}
                              >
                                <ContinueButton
                                  next={next}
                                  inValid={form.getState().hasValidationErrors}
                                />
                                <PageStatus
                                  next={next}
                                  steps={steps}
                                  step={step}
                                />
                              </StepTwo>
                            )
                          }}
                        />
                        <Step
                          id="three"
                          render={({ next, steps, step }) => {
                            return (
                              <StepThree
                                submit={handleSubmit}
                                pristine={pristine}
                                submitting={submitting}
                              >
                                <PageStatus
                                  next={next}
                                  steps={steps}
                                  step={step}
                                />
                              </StepThree>
                            )
                          }}
                        />
                      </Steps>
                    </form>
                  )}
                />
              </div>
            </div>
          </Wizard>
        </div>
      </div>
    </ReactModal>
  )
}

export const HiddenInquiryForm = () => (
  <form
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    name="TEST-contact"
    hidden
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="TEST-contact" />

    <input type="text" name="firstName" />
    <input type="text" name="lastName" />
    <input type="text" name="phone" />
    <input type="email" name="emailAddress" />
    <input type="text" name="notes" />
    <input type="text" name="modelInterest" />
    <input type="checkbox" name="marketingOptIn" />
    <input type="text" name="interest" />
    <input type="radio" name="contactPreferences" />

    <button type="submit">Submit</button>
  </form>
)

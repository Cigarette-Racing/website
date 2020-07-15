import React from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { Wizard, Steps, Step } from 'react-albus'
import { Form, Field } from 'react-final-form'
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
import { AnimatePresence, motion } from 'framer-motion'
import { onSubmitCreator } from '../../services/forms'

const modalStyles = {
  overlay: {
    background: 'transparent',
    zIndex: 50,
  },
  content: {
    background: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    border: 'none',
    borderRadius: 0,
  },
}

const formValuesMapper = (values: any) => {
  return {
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
}

const inquiryOnSubmit = onSubmitCreator(formValuesMapper)

export const useInquiryModalState = createGlobalState<boolean>(false)

export const InquiryModal: React.FC = () => {
  const [inquiryModalState] = useInquiryModalState()
  useLockBodyScroll(inquiryModalState)
  const animationDuration = 0.5

  return (
    <ReactModal
      isOpen={inquiryModalState!}
      style={modalStyles}
      closeTimeoutMS={animationDuration * 1000}
    >
      <AnimatePresence>
        {inquiryModalState && (
          <motion.div
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ stiffness: 100, duration: animationDuration }}
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
                      onSubmit={inquiryOnSubmit}
                      render={({
                        handleSubmit,
                        form,
                        submitting,
                        pristine,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <Field
                            component="input"
                            type="hidden"
                            name="form-name"
                            initialValue="TEST-contact"
                          />
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
                                      inValid={
                                        form.getState().hasValidationErrors
                                      }
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
                                      inValid={
                                        form.getState().hasValidationErrors
                                      }
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
          </motion.div>
        )}
      </AnimatePresence>
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

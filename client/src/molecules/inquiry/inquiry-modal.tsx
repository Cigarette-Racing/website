import React, { useEffect } from 'react'
import { createGlobalState } from 'react-use'
import ReactModal from 'react-modal'
import { Wizard, Steps } from '../../molecules/wulfric'
import { Form, Field } from 'react-final-form'
import InquiryModalHeader from './inquiry-modal-header'
import {
  LandingStep,
  StepOne,
  StepTwo,
  StepThree,
} from './inquiry-modal.components'
import { AnimatePresence, motion } from 'framer-motion'
import { onSubmitCreator } from '../../services/forms'
import { useBackgroundsQuery } from '../../services/backgrounds'

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
    overflow: 'hidden',
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
  const { inquiryModal: background } = useBackgroundsQuery()
  const [inquiryModalState] = useInquiryModalState()
  // useLockBodyScroll(inquiryModalState)
  const animationDuration = 0.5

  useEffect(() => {
    if (inquiryModalState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [])

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
            className="min-h-full bg-gray-0"
          >
            <img
              src={background}
              className="absolute top-0 left-0 h-full w-full object-cover"
              alt=""
            />
            <div
              className="pb-5 min-h-screen max-h-screen overflow-y-auto"
              style={{
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
              }}
            >
              <FormWizard />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReactModal>
  )
}

const FormWizard = () => (
  <Wizard>
    <InquiryModalHeader />
    <div className="text-white flex flex-col items-center justify-center relative">
      <div className="w-full max-w-2xl pb-20">
        <Form
          onSubmit={inquiryOnSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                component="input"
                type="hidden"
                name="form-name"
                initialValue="inquiry-form"
              />
              <AnimatePresence>
                <Steps>
                  <LandingStep id="landing" />
                  <StepOne id="one" />
                  <StepTwo id="two" />
                  <StepThree id="three" />
                </Steps>
              </AnimatePresence>
            </form>
          )}
        />
      </div>
    </div>
  </Wizard>
)

export const HiddenInquiryForm = () => (
  <form
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    name="inquiry-form"
    hidden
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="inquiry-form" />

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

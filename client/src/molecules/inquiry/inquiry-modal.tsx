import React, { useState, Fragment } from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { Wizard, Steps, Step } from 'react-albus'
import { Form, Field } from 'react-final-form'

import { AngleIcon } from '../../svgs/icons'
import { OptionsCta } from '../../atoms/options-cta'
import { Typography } from '../../atoms/typography'
import FullBleedBackground from '../../molecules/full-bleed-background'
import { TextInput } from '../../atoms/text-input'
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
      <Wizard>
        <InquiryModalHeader />
        <div className="text-white flex justify-center relative">
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
                      id="initial-screen"
                      render={({ next }) => (
                        <div className="flex flex-col justify-center px-4">
                          <Typography
                            className="text-white uppercase text-center mb-16 mt-20 font-bold"
                            variant="p3"
                          >
                            at your service
                          </Typography>
                          <OptionsCta
                            variant="secondary"
                            theme="dark"
                            onClick={next}
                          >
                            Request <br className="md:hidden" />
                            an appointment
                          </OptionsCta>
                          <OptionsCta variant="secondary" theme="dark">
                            Questions & answer
                          </OptionsCta>
                          <OptionsCta variant="secondary" theme="dark">
                            Contact
                          </OptionsCta>
                        </div>
                      )}
                    />
                    <Step
                      id="request-appointment-1"
                      render={({ next }) => (
                        <div className="flex flex-col justify-center px-4">
                          <Typography
                            className="text-white uppercase text-center mb-12 mt-16 font-bold"
                            variant="p3"
                          >
                            request an appointment
                          </Typography>
                          <div className="flex items-center mb-6">
                            <AngleIcon
                              className="text-white"
                              style={{ fontSize: '40px' }}
                            />
                            <Typography variant="e2" className="text-white">
                              Basic Info
                            </Typography>
                          </div>
                          <div className="space-y-6 lg:pl-5">
                            <Field
                              component={TextField}
                              required={true}
                              name="firstName"
                              placeholder="First Name"
                            />
                            <Field
                              component={TextField}
                              required={true}
                              name="lastName"
                              placeholder="Last Name"
                            />
                            <Field
                              component={TextField}
                              required={true}
                              name="phone"
                              placeholder="Phone Number"
                            />
                            <Field
                              component={TextField}
                              required={true}
                              name="Email Address"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                      )}
                    />
                    <Step
                      id="request-appointment-2"
                      render={({ next }) => <div>Step 3</div>}
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

const TextField = (props: any) => {
  return (
    <div className="flex items-center justify-center ">
      {props.required && <div className="text-red mr-2">*</div>}
      <input
        {...props.input}
        placeholder={props.placeholder}
        className="placeholder-white font-body w-full bg-transparent text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 hover:border-opacity-100 transition-border-opacity duration-200 ease-in-out outline-none py-4"
        autoComplete="off"
      />
    </div>
  )
}

export default InquiryModal

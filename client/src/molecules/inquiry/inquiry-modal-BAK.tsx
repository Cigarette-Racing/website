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
                          <Link
                            to="/contact"
                            className="border-b border-opacity-25 border-white flex items-center group h-24 justify-between"
                          >
                            <Typography
                              variant="h4"
                              as="span"
                              className="text-white"
                            >
                              Contact
                            </Typography>
                            <div className="border border-red rounded-full p-2">
                              <ArrowIcon className="text-xl" />
                            </div>
                          </Link>
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
                          <FormSectionHeader>Basic info</FormSectionHeader>
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
                              Model interest
                            </Typography>
                          </div>
                          <div className="space-y-6 lg:pl-5">
                            <div className="mb-10">
                              <Field
                                component={() => (
                                  <div className="flex items-center justify-center">
                                    <div className="text-red mr-2">*</div>
                                    <MultiSelect
                                      className="w-full"
                                      name="boat-models"
                                      options={[
                                        {
                                          value: 'tirranna',
                                          label: 'Tirranna',
                                        },
                                        {
                                          value: 'nighthawk',
                                          label: 'Nighthawk',
                                        },
                                        { value: 'model 3', label: 'Model 3' },
                                      ]}
                                    />
                                  </div>
                                )}
                                required={true}
                                name="Email Address"
                                placeholder="Email Address"
                              />
                            </div>
                          </div>
                          <div className="flex items-center mb-6">
                            <AngleIcon
                              className="text-white"
                              style={{ fontSize: '40px' }}
                            />
                            <Typography variant="e2" className="text-white">
                              leave a note
                            </Typography>
                          </div>
                          <div className="space-y-6 lg:pl-5">
                            <Field
                              className="w-full bg-gray-0 text-white p-8 font-body placeholder-white h-48"
                              placeholder="Leave a message for our team..."
                              name="notes"
                              component="textarea"
                            />
                          </div>
                        </div>
                      )}
                    />
                    <Step
                      id="request-appointment-3"
                      render={({ next }) => (
                        <div className="flex flex-col justify-center px-4">
                          <Typography
                            className="text-white uppercase text-center mb-12 mt-16 font-bold"
                            variant="p3"
                          >
                            request an appointment
                          </Typography>
                          <FormSectionHeader>
                            Contact preference
                          </FormSectionHeader>
                          <div className="lg:pl-5 flex justify-between">
                            <Field
                              name="contactPreferences"
                              value="phone"
                              type="radio"
                              component={({ input }) => {
                                return <Radio {...input}>Phone Call</Radio>
                              }}
                            />
                            <Field
                              name="contactPreferences"
                              value="email"
                              type="radio"
                              component={({ input }) => {
                                return <Radio {...input}>Email</Radio>
                              }}
                            />
                            <Field
                              name="contactPreferences"
                              value="sms-text-message"
                              type="radio"
                              component={({ input }) => {
                                return (
                                  <Radio {...input}>SMS Text message</Radio>
                                )
                              }}
                            />
                          </div>
                          <FormSectionHeader>
                            level of interest
                          </FormSectionHeader>
                          <Field
                            component={TextField}
                            required={true}
                            name="interest"
                            placeholder="Ready to purchase"
                          />
                          <div>
                            <Radio checked={true} alignment="start">
                              <Typography variant="p3" className="text-white">
                                I would like to receive marketing communications
                                on products, services and events offered by
                                Cigarette Racing Team. I understand these
                                communications may be personalised to me based
                                on my interests, preferences and use of products
                                and services, including invitations to provide
                                customer experience feedback.
                              </Typography>
                            </Radio>
                          </div>
                        </div>
                      )}
                    />
                  </Steps>
                  <WithWizard
                    render={({ next, previous, step, steps }) => (
                      <div>
                        {steps.indexOf(step) > 0 && (
                          <div className="flex justify-center flex-col relative">
                            {steps.indexOf(step) + 1 < steps.length && (
                              <InPageCta
                                className="self-center mt-16 lg:mt-20"
                                variant="primary"
                                onClick={next}
                              >
                                Continue
                              </InPageCta>
                            )}
                            {steps.indexOf(step) + 1 === steps.length && (
                              <InPageCta
                                className="self-center mt-16 lg:mt-20"
                                variant="primary"
                                onClick={() => {
                                  alert('nothing!')
                                }}
                              >
                                Submit request
                              </InPageCta>
                            )}
                            <div className="text-white self-center mt-6 font-heading italic">
                              {console.log(steps.indexOf(step))}
                              {`${steps.indexOf(step)} of 3`}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  />
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

const FormSectionHeader = ({ children }: any) => {
  return (
    <div className="flex items-center mb-6">
      <AngleIcon className="text-white" style={{ fontSize: '40px' }} />
      <Typography variant="e2" className="text-white">
        {children}
      </Typography>
    </div>
  )
}

export default InquiryModal

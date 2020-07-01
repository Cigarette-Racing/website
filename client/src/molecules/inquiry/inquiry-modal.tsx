import React, { useState, Fragment } from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { Wizard, Steps, Step } from 'react-albus'
import { Form, Field } from 'react-final-form'

import { OptionsCta } from '../../atoms/options-cta'
import { Typography } from '../../atoms/typography'
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

      <section className="flex flex-col justify-center relative">
        <Form
          onSubmit={(values) => {
            console.log(values)
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Wizard>
                <InquiryModalHeader />
                <Steps>
                  <Step
                    id="initial-screen"
                    render={({ next }) => (
                      <div>
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
                            onClick={() => {
                              next()
                            }}
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
                        {/* <Field name="firstName" component="input"></Field> */}
                      </div>
                    )}
                  />
                  <Step
                    id="request-appointment-1"
                    render={() => (
                      <h1 className="text-white self-center">Screen 1</h1>
                    )}
                  />
                  <Step
                    id="request-appointment-2"
                    render={() => (
                      <h1 className="text-white self-center">Screen 2</h1>
                    )}
                  />
                  <Step
                    id="request-appointment-3"
                    render={() => <button type="submit">Submit</button>}
                  />
                </Steps>
                <InquiryModalNavigation />
              </Wizard>
            </form>
          )}
        />
      </section>
    </ReactModal>
  )
}

export default InquiryModal

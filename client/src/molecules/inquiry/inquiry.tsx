import React, { useState, Fragment } from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { CaretDownIcon } from '../../svgs/icons'
import { OptionsCta } from '../../atoms/options-cta'
import { Typography } from '../../atoms/typography'
import section2Image from '../images/boat-section2-bg.jpeg'
import InquiryPage1 from './inquiry-screen-1'
import InquiryPage2 from './inquiry-screen-2'
import InquiryPage3 from './inquiry-screen-3'

export const useInquiryModalState = createGlobalState<boolean>(false)

const Inquiry: React.FC = () => {
  const [inquiryModalState, setInquiryModalState] = useInquiryModalState()
  const [inquiryPage, setInquiryPage] = useState(0)
  useLockBodyScroll(inquiryModalState)

  const goToNext = () => {
    console.log('do something')
    setInquiryPage(inquiryPage + 1)
  }

  return (
    <ReactModal
      isOpen={inquiryModalState}
      style={{
        overlay: {
          zIndex: 50,
        },
        content: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: 0,
        },
      }}
    >
      <form
        onSubmit={() => {
          console.log('submit')
        }}
      >
        {' '}
        <section
          className="bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${section2Image})` }}
        >
          {inquiryPage === 0 && (
            <Fragment>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
                }}
              ></div>
              <div className="relative z-10">
                <header className="bg-white flex items-center flex-col pt-5 pb-4">
                  <button
                    className="flex items-center justify-center flex-col"
                    onClick={() => {
                      setInquiryModalState(false)
                    }}
                  >
                    <Typography className="uppercase font-bold" variant="p3">
                      close
                    </Typography>
                    <CaretDownIcon className="text-red" />
                  </button>
                </header>
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
                    onClick={goToNext}
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
              </div>
            </Fragment>
          )}
          <InquiryPage1 goToNext={goToNext} inquiryPage={inquiryPage} />
          <InquiryPage2 goToNext={goToNext} inquiryPage={inquiryPage} />
          <InquiryPage3 goToNext={goToNext} inquiryPage={inquiryPage} />
        </section>
      </form>
    </ReactModal>
  )
}

export default Inquiry

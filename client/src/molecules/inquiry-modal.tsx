import React, { useState, Fragment } from 'react'
import { createGlobalState, useLockBodyScroll } from 'react-use'
import ReactModal from 'react-modal'
import { CaretDownIcon, ArrowIcon } from '../svgs/icons'
import { Typography } from '../atoms/typography'
import section2Image from '../images/boat-section2-bg.jpeg'
import { InPageCta } from '../atoms/in-page-cta'
import InquiryLanding from './inquiry/inquiry-landing'
import InquiryScreen1 from './inquiry/inquiry-screen-1'
import InquiryScreen2 from './inquiry/inquiry-screen-2'
import InquiryScreen3 from './inquiry/inquiry-screen-3'

const ReactModalStyles = {
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
}
export const useInquiryModalState = createGlobalState<boolean>(false)

const Inquiry: React.FC = () => {
  const [inquiryModalState, setInquiryModalState] = useInquiryModalState()
  const [inquiryScreen, setInquiryScreen] = useState(0)

  useLockBodyScroll(inquiryModalState)

  const goToNext = () => {
    setInquiryScreen(inquiryScreen + 1)
  }

  const goToPrev = () => {
    setInquiryScreen(inquiryScreen - 1)
  }

  return (
    <ReactModal isOpen={inquiryModalState} style={ReactModalStyles}>
      <section
        className="bg-cover bg-center min-h-screen relative pb-20"
        style={{ backgroundImage: `url(${section2Image})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 51.47%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        />
        <div className="relative z-10">
          {inquiryScreen === 0 && (
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
          )}
          {inquiryScreen != 0 && (
            <header className="bg-white flex items-center flex-col pt-5 pb-4">
              <button
                className="flex items-center justify-center"
                onClick={goToPrev}
              >
                <ArrowIcon className="text-red transform rotate-180 mr-4" />
                <Typography className="uppercase font-bold" variant="p3">
                  go back
                </Typography>
              </button>
            </header>
          )}
          <form className="flex justify-center">
            <div className="max-w-screen-sm flex-1">
              {inquiryScreen === 0 && <InquiryLanding goToNext={goToNext} />}
              {inquiryScreen === 1 && <InquiryScreen1 />}
              {inquiryScreen === 2 && <InquiryScreen2 />}
              {inquiryScreen === 3 && <InquiryScreen3 />}
            </div>
          </form>
          {inquiryScreen != 0 && (
            <div className="flex justify-center flex-col">
              <InPageCta
                className="self-center"
                variant="primary"
                onClick={goToNext}
              >
                Continue
              </InPageCta>
              <div className="text-white self-center">
                {inquiryScreen != 0 && `${inquiryScreen} of 3`}
              </div>
            </div>
          )}
        </div>
      </section>
    </ReactModal>
  )
}

export default Inquiry

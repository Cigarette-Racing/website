import React, { useState, Fragment } from 'react'
import { CaretDownIcon } from '../svgs/icons'
import { OptionsCta } from '../atoms/options-cta'
import { Typography } from '../atoms/typography'
import section2Image from '../images/boat-section2-bg.jpeg'
import { ReturnLink } from '../atoms/return-link'
import ReactModal from 'react-modal'

export interface Props {
  isModalOpen: boolean
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Inquiry: React.FC<Props> = ({ isModalOpen, handleCloseModal }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      style={{
        content: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: 0,
        },
      }}
    >
      <section
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${section2Image})` }}
      >
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
              onClick={handleCloseModal}
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
            <OptionsCta variant="secondary" theme="dark">
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
      </section>
    </ReactModal>
  )
}

export default Inquiry

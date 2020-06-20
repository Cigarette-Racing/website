import React, { Fragment } from 'react'
import { Typography } from '../../atoms/typography'
import { OptionsCta } from '../../atoms/options-cta'

const InquiryLanding: React.FC = ({ goToNext }) => {
  return (
    <div className="flex flex-col justify-center px-4">
      <Typography
        className="text-white uppercase text-center mb-16 mt-20 font-bold"
        variant="p3"
      >
        at your service
      </Typography>
      <OptionsCta variant="secondary" theme="dark" onClick={goToNext}>
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
  )
}

export default InquiryLanding

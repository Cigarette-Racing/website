import React, { Fragment } from 'react'

import { Typography } from '../../atoms/typography'
import { AngleIcon } from '../../svgs/icons'

const InquiryScreen1: React.FC = ({}) => {
  return (
    <div className="flex flex-col justify-center px-4">
      <Typography
        className="text-white uppercase text-center mb-16 mt-20 font-bold"
        variant="p3"
      >
        Request an appointment
      </Typography>
      <div className="flex items-center">
        <AngleIcon className="mr-1 text-white" style={{ fontSize: '40px' }} />
        <Typography variant="e2" className="text-white">
          Basic Info
        </Typography>
      </div>
      <div className="text-field required-field flex items-center">
        <input
          className="w-full text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 outline-none py-4"
          type="text"
          name="first name"
          placeholder="First Name"
        />
      </div>
      <div className="text-field required-field flex items-center">
        <input
          className="w-full text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 outline-none py-4"
          type="text"
          name="last name"
          placeholder="Last Name"
        />
      </div>
      <div className="text-field required-field flex items-center">
        <input
          className="w-full text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 outline-none py-4"
          type="text"
          name="phone number"
          placeholder="Phone Number"
        />
      </div>
      <div className="text-field required-field flex items-center">
        <input
          className="w-full text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 outline-none py-4"
          type="text"
          name="email address"
          placeholder="Email Address"
        />
      </div>
    </div>
  )
}

export default InquiryScreen1

import React, { Fragment } from 'react'

import { Typography } from '../../atoms/typography'
import { AngleIcon } from '../../svgs/icons'
import { TextInput } from '../../atoms/text-input'

const InquiryScreen1: React.FC = ({}) => {
  return (
    <div className="flex flex-col justify-center px-4">
      <Typography
        className="text-white uppercase text-center mb-16 mt-20 font-bold"
        variant="p3"
      >
        Request an appointment
      </Typography>
      <div className="flex items-center mb-5">
        <AngleIcon className="mr-1 text-white" style={{ fontSize: '40px' }} />
        <Typography variant="e2" className="text-white">
          Basic Info
        </Typography>
      </div>
      <TextInput type="text" name="first name" placeholder="First Name" />
      <TextInput type="text" name="last name" placeholder="First Name" />
      <TextInput type="text" name="phone number" placeholder="phone number" />
      <TextInput type="text" name="email address" placeholder="email address" />
    </div>
  )
}

export default InquiryScreen1

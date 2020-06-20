import React, { Fragment } from 'react'
import Select from 'react-select'

import { Typography } from '../../atoms/typography'
import { AngleIcon } from '../../svgs/icons'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const MyComponent = () => <Select options={options} isMulti />

const InquiryScreen2: React.FC = ({}) => {
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
          Model Interest
        </Typography>
      </div>
      <MyComponent />
      <div className="flex items-center">
        <AngleIcon className="mr-1 text-white" style={{ fontSize: '40px' }} />
        <Typography variant="e2" className="text-white">
          Leave a note
        </Typography>
      </div>
      <textarea
        className="bg-gray-1 text-white"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  )
}

export default InquiryScreen2

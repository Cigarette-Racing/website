import React, { Fragment } from 'react'

import Inquiry, { useGlobalValue } from '../components/inquiry'

const InquiryTest = () => {
  const [val, setVal] = useGlobalValue()

  console.log(val)

  return (
    <Fragment>
      <button className="text-white" onClick={() => setVal(true)}>
        Open Modal
      </button>
      <Inquiry />
    </Fragment>
  )
}

export default InquiryTest

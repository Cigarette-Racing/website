import React, { Fragment, useState } from 'react'

import Inquiry from '../components/inquiry'

const InquiryTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Fragment>
      <button className="text-white" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      <Inquiry
        isModalOpen={isModalOpen}
        handleCloseModal={() => setIsModalOpen(false)}
      />
    </Fragment>
  )
}

export default InquiryTest

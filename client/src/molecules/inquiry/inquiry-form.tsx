import React from 'react'

const InquiryForm = ({ children, onSubmit }: any) => (
  <form
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    name="inquiry-form"
    onSubmit={onSubmit}
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="inquiry-form" />

    {children}

    <button type="submit">Submit</button>
  </form>
)

export default InquiryForm

import React from 'react'
import { Form, Field } from 'react-final-form'

const MyForm = () => (
  <Form
    onSubmit={() => {}}
    validate={() => ({})}
    render={({ handleSubmit }) => (
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="TEST-contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="TEST-contact" />
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>

        <h2>Render Function as Children</h2>
        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label>Phone</label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

        <button type="submit">Submit</button>
      </form>
    )}
  />
)

export default MyForm

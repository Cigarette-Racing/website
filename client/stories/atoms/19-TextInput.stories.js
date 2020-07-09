import React, { useState } from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'
import { TextInput } from '../../src/atoms/text-input'
import { Form } from 'react-final-form'

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  return (
    <div className="w-full max-w-2xl">
      <Form
        onSubmit={() => {
          console.log('submitted')
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="space-y-2">
              <TextInput
                name="firstName"
                placeholder="First Name"
                type="text"
                required
              />
              <TextInput
                name="email"
                placeholder="Email"
                type="email"
                required
              />
              <TextInput
                name="phone"
                placeholder="Phone"
                type="text"
                required
              />
            </div>
          </form>
        )}
      </Form>
    </div>
  )
}

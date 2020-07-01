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
    <Form
      onSubmit={() => {
        console.log('submitted')
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <TextInput
            name="firstName"
            className="w-full bg-transparent text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 hover:border-opacity-100 outline-none py-4"
          />
        </form>
      )}
    </Form>
  )
}

import React, { useState, Fragment } from 'react'
import { Step } from 'react-albus'
import { Link } from 'gatsby'
import { Field } from 'react-final-form'

import { InPageCta } from '../../atoms/in-page-cta'
import { OptionsCta } from '../../atoms/options-cta'
import { AngleIcon } from '../../svgs/icons'
import { ArrowIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { array } from 'prop-types'

export const TextField = (props: any) => {
  return (
    <div className="flex items-center justify-center ">
      {props.required && <div className="text-red mr-2">*</div>}
      <input
        {...props.input}
        placeholder={props.placeholder}
        className="placeholder-white font-body w-full bg-transparent text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 hover:border-opacity-100 transition-border-opacity duration-200 ease-in-out outline-none py-4"
        autoComplete="off"
      />
    </div>
  )
}

export const ScreenHeader = ({ children }: any) => {
  return (
    <Typography
      className="text-white uppercase text-center mb-16 mt-20 font-bold"
      variant="p3"
    >
      {children}
    </Typography>
  )
}

export const FormSectionHeader = ({ children }: any) => {
  return (
    <div className="flex items-center mb-12 px-1">
      <AngleIcon className="text-white" style={{ fontSize: '40px' }} />
      <Typography variant="e2" className="text-white">
        {children}
      </Typography>
    </div>
  )
}

export const ContinueButton = ({ next }: any) => {
  return (
    <InPageCta
      className="self-center mt-16 lg:mt-20"
      variant="primary"
      onClick={next}
    >
      Continue
    </InPageCta>
  )
}

export const LandingStep = ({ next }: any) => {
  return (
    <div className="flex flex-col justify-center px-4">
      <Typography
        className="text-white uppercase text-center mb-16 mt-20 font-bold"
        variant="p3"
      >
        at your service
      </Typography>
      <OptionsCta variant="secondary" theme="dark" onClick={next}>
        Request <br className="md:hidden" />
        an appointment
      </OptionsCta>
      <OptionsCta variant="secondary" theme="dark">
        Questions & answer
      </OptionsCta>
      <Link
        to="/contact"
        className="border-b border-opacity-25 border-white flex items-center group h-24 justify-between"
      >
        <Typography variant="h4" as="span" className="text-white">
          Contact
        </Typography>
        <div className="border border-red rounded-full p-2">
          <ArrowIcon className="text-xl" />
        </div>
      </Link>
    </div>
  )
}

export const StepOne = ({ next, steps, step }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FormSectionHeader>Basic info</FormSectionHeader>
      <div className="space-y-6 px-4 lg:pl-5">
        <Field
          component={TextField}
          required={true}
          name="firstName"
          placeholder="First Name"
        />
        <Field
          component={TextField}
          required={true}
          name="lastName"
          placeholder="Last Name"
        />
        <Field
          component={TextField}
          required={true}
          name="phone"
          placeholder="Phone Number"
        />
        <Field
          component={TextField}
          required={true}
          name="Email Address"
          placeholder="Email Address"
        />
      </div>
      <ContinueButton next={next} />
      <div className="text-white self-center mt-6 font-heading italic">
        <span className="mr-2">{`${steps.indexOf(step)}`}</span>
        <span className="mr-2">of</span>
        <span>3</span>
      </div>
    </div>
  )
}

export const StepTwo = ({ next, steps, step }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FormSectionHeader>Model Interest</FormSectionHeader>
      <div className="space-y-6 px-4 mb-12 lg:pl-5">
        <Field
          component={TextField}
          required={true}
          name="select"
          placeholder="Select which models interest you"
        />
      </div>
      <FormSectionHeader>Leave a note</FormSectionHeader>
      <div className="space-y-6 px-4 lg:pl-5">
        <Field
          className="w-full bg-gray-0 text-white p-8 font-body placeholder-white h-48"
          placeholder="Leave a message for our team..."
          name="notes"
          component="textarea"
        />
      </div>
      <ContinueButton next={next} />
      <div className="text-white self-center mt-6 font-heading italic">
        <span className="mr-2">{`${steps.indexOf(step)}`}</span>
        <span className="mr-2">of</span>
        <span>3</span>
      </div>
    </div>
  )
}

export const StepThree = ({ next, steps, step }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FormSectionHeader>Contact preference</FormSectionHeader>
      <div className="space-y-6 px-4 mb-12 lg:pl-5"></div>
      <FormSectionHeader>Level of interest</FormSectionHeader>
      <div className="space-y-6 px-4 lg:pl-5"></div>
      <div>{/* disclaimer agreement */}</div>
      <InPageCta
        className="self-center mt-16 lg:mt-20"
        variant="primary"
        onClick={() => {
          alert('nothing!')
        }}
      >
        Submit request
      </InPageCta>
      <div className="text-white self-center mt-6 font-heading italic">
        <span className="mr-2">{`${steps.indexOf(step)}`}</span>
        <span className="mr-2">of</span>
        <span>3</span>
      </div>
    </div>
  )
}

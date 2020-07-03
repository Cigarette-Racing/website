import React, { useState, Fragment } from 'react'
import { Step } from 'react-albus'
import { Link } from 'gatsby'

import { OptionsCta } from '../../atoms/options-cta'
import { AngleIcon } from '../../svgs/icons'
import { ArrowIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'

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
    <div className="flex items-center mb-6">
      <AngleIcon className="text-white" style={{ fontSize: '40px' }} />
      <Typography variant="e2" className="text-white">
        {children}
      </Typography>
    </div>
  )
}

export const StepOne = ({ next, previous }: any) => {
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

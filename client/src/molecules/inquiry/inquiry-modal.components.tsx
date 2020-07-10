import React from 'react'
import { Field, useForm } from 'react-final-form'
import clsx from 'clsx'
import { Link } from 'gatsby'
import Select, { components } from 'react-select'

import { Radio } from '../../atoms/radio'
import { InPageCta } from '../../atoms/in-page-cta'
import { OptionsCta } from '../../atoms/options-cta'
import {
  TextInput,
  requiredText,
  requiredEmail,
  requiredPhone,
} from '../../atoms/text-input'
import { AngleIcon } from '../../svgs/icons'
import { ArrowIcon } from '../../svgs/icons'
import { CloseIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { MultiValueRemove } from 'react-select/src/components/MultiValue'

export const FieldSetContainer = ({ children }: any) => (
  <div className="space-y-2 px-4 lg:pl-5">{children}</div>
)

export const FieldSetHeader = ({ children, className }: any) => {
  return (
    <div className={clsx('flex items-center mb-2 px-1', className)}>
      <AngleIcon className="text-white" style={{ fontSize: '40px' }} />
      <Typography variant="e2" className="text-white">
        {children}
      </Typography>
    </div>
  )
}

export const ContinueButton = ({ next, inValid }: any) => {
  return (
    <InPageCta
      className={clsx('self-center mt-16 lg:mt-20', {
        'opacity-50 pointer-events-none': inValid,
      })}
      variant="primary"
      onClick={() => {
        if (inValid) return
        next()
      }}
    >
      Continue
    </InPageCta>
  )
}

export const PageStatus = ({ steps, step }: any) => (
  <div className="text-white self-center mt-6 font-heading italic">
    <span className="mr-2">{`${steps.indexOf(step)}`}</span>
    <span className="mr-2">of</span>
    <span>3</span>
  </div>
)

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

export const StepOne = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FieldSetHeader>Basic info</FieldSetHeader>
      <FieldSetContainer>
        <TextInput
          name="firstName"
          placeholder="First Name"
          type="text"
          validation={requiredText}
          required
        />
        <TextInput
          name="lastName"
          placeholder="last Name"
          type="text"
          validation={requiredText}
          required
        />
        <TextInput
          name="phone"
          placeholder="Phone"
          type="phone"
          validation={requiredPhone}
          required
        />
        <TextInput
          name="emailAddress"
          type="email"
          placeholder="Email Address"
          validation={requiredEmail}
          required
        />
      </FieldSetContainer>
      {children}
    </div>
  )
}
const Placeholder = (props: any) => {
  return (
    <components.Placeholder {...props}>
      <Typography className=" pt-4" variant="p3">
        {props.children}
      </Typography>
    </components.Placeholder>
  )
}

export const StepTwo = ({ next, steps, step }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FieldSetHeader>Model Interest</FieldSetHeader>
      <FieldSetContainer>
        <Field
          name="modelInterest"
          render={(props) => (
            <div className="flex items-center justify-center pt-3">
              <div className="text-red mr-2">*</div>
              <Select
                className="w-full"
                isMulti
                placeholder={'Select which boats are you interested in?'}
                components={{
                  Placeholder,
                  // Placeholder: (props) => (
                  //   <components.Placeholder {...props}></components.Placeholder>
                  // ),
                  MultiValueContainer: (props) => (
                    <components.MultiValueContainer {...props}>
                      <div className="bg-black rounded-full py-1 px-4 flex items-center mr-2 mb-2">
                        {props.children}
                      </div>
                    </components.MultiValueContainer>
                  ),
                  MultiValueLabel: (props) => (
                    <components.MultiValueLabel {...props}>
                      <Typography
                        variant="p2"
                        theme="dark"
                        className="leading-none font-light"
                      >
                        {props.children}
                      </Typography>
                    </components.MultiValueLabel>
                  ),
                  MultiValueRemove: (props) => (
                    <components.MultiValueRemove {...props}>
                      <CloseIcon role="button" className="text-white" />
                    </components.MultiValueRemove>
                  ),
                }}
                options={[
                  {
                    value: 'tirranna',
                    label: 'Tirranna',
                  },
                  {
                    value: 'nighthawk',
                    label: 'Nighthawk',
                  },
                  { value: 'model 3', label: 'Model 3' },
                ]}
                styles={{
                  placeholder: (base) => ({
                    ...base,
                    paddingBottom: '20px',
                    color: '#fff',
                  }),
                  control: (base) => ({
                    ...base,
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #fff',
                    borderRadius: 0,
                    cursor: 'pointer',
                    minHeight: '54px',
                  }),
                  clearIndicator: () => ({
                    display: 'none',
                  }),
                  indicatorSeparator: () => ({
                    display: 'none',
                  }),
                  multiValue: (base) => {
                    return {
                      paddingBottom: 0,
                    }
                  },
                  valueContainer: (base) => ({
                    ...base,
                    padding: 0,
                    color: '#fff',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: '#fff',
                  }),
                  menu: (base) => ({
                    ...base,
                    background: '#242424',
                  }),
                  option: (base, state) => ({
                    ...base,
                    background: 'transparent',
                    color: '#fff',
                    '&:hover': {
                      color: '#000',
                      background: 'red',
                    },
                  }),
                }}
                {...props.input}
              />
            </div>
          )}
        />
      </FieldSetContainer>
      <FieldSetHeader className="mb-10 mt-10">Leave a note</FieldSetHeader>
      <div className="px-4 lg:pl-5">
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

export const StepThree = ({ steps, step, submit }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FieldSetHeader>Contact preference</FieldSetHeader>
      <div className="space-y-3 px-4 mb-12 lg:pl-5 mt-4">
        <Field
          name="contactPreferences"
          value="phone"
          type="radio"
          render={({ input }) => {
            return <Radio {...input}>Phone Call</Radio>
          }}
        />
        <Field
          name="contactPreferences"
          value="email"
          type="radio"
          render={({ input }) => {
            return <Radio {...input}>Email</Radio>
          }}
        />
        <Field
          name="contactPreferences"
          value="text"
          type="radio"
          render={({ input }) => {
            return <Radio {...input}>SMS Text Message</Radio>
          }}
        />
      </div>

      <div className="mb-1">
        <FieldSetHeader>Level of interest</FieldSetHeader>
      </div>

      <FieldSetContainer>
        <Field
          name="interest"
          render={(props) => (
            <div className="flex items-center justify-center">
              <div className="text-red mr-2 pt-2">*</div>
              <Select
                className="w-full"
                options={[
                  {
                    value: 'ready to purchase',
                    label: 'ready to purchase',
                  },
                  {
                    value: 'something else',
                    label: 'something else',
                  },
                  { value: "I don't know", label: "I don't know" },
                ]}
                defaultValue={{
                  value: 'Ready to purchase',
                  label: 'Ready to purchase',
                }}
                styles={{
                  placeholder: (base) => ({
                    ...base,
                    color: '#fff',
                  }),
                  control: (base) => ({
                    ...base,
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #fff',
                    borderRadius: 0,
                  }),
                  clearIndicator: () => ({
                    display: 'none',
                  }),
                  indicatorSeparator: () => ({
                    display: 'none',
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: '10px 0',
                    color: '#fff',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: '#fff',
                  }),
                  menu: (base) => ({
                    ...base,
                    background: '#242424',
                  }),
                  option: (base, state) => ({
                    ...base,
                    background: 'transparent',
                    color: '#fff',
                    '&:hover': {
                      color: '#000',
                      background: 'red',
                    },
                  }),
                }}
                {...props.input}
              />
            </div>
          )}
        />
      </FieldSetContainer>
      <div className="mt-12">
        <FieldSetContainer>
          <Field
            name="marketingOptIn"
            value="text"
            type="checkbox"
            render={({ input, meta }) => {
              return (
                <Radio {...input} alignment="start" name="marketingOptIn">
                  <Typography variant="p3">
                    I would like to receive marketing communications on
                    products, services and events offered by Cigarette Racing
                    Team. I understand these communications may be personalised
                    to me based on my interests, preferences and use of products
                    and services, including invitations to provide customer
                    experience feedback.
                  </Typography>
                </Radio>
              )
            }}
          />
        </FieldSetContainer>
      </div>
      <InPageCta
        className="self-center mt-16 lg:mt-20"
        variant="primary"
        onClick={() => {
          submit()
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

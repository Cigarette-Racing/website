import React from 'react'
import { Field } from 'react-final-form'
import clsx from 'clsx'
import { Link } from 'gatsby'
import Select from 'react-select'

import { Radio } from '../../atoms/radio'
import { InPageCta } from '../../atoms/in-page-cta'
import { OptionsCta } from '../../atoms/options-cta'
import { AngleIcon } from '../../svgs/icons'
import { ArrowIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { MultiSelect } from '../../atoms/multi-select'
import { Pill } from '../../atoms/pill'

export const FieldSet = ({ children }: any) => (
  <div className="space-y-2 px-4 lg:pl-5">{children}</div>
)

export const TextField = ({ required, meta, input, placeholder }: any) => {
  return (
    <div className="relative pt-8">
      {meta.error && meta.touched && (
        <div className="absolute top-0 pl-4 left-0">
          <Typography variant="p3">Enter required info to continue</Typography>
        </div>
      )}
      <div className="flex justify-center">
        {required && <div className="text-red mr-2">*</div>}
        <input
          {...input}
          placeholder={placeholder}
          className={clsx(
            'placeholder-white font-body w-full bg-transparent text-white border-b border-white border-solid border-opacity-25 focus:border-opacity-100 hover:border-opacity-100 transition-border-opacity duration-200 ease-in-out outline-none pb-5',
            { 'placeholder-red': meta.error && meta.touched }
          )}
          autoComplete="off"
        />
      </div>
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

export const FormSectionHeader = ({ children, className }: any) => {
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

const required = (value: any) => (value ? undefined : 'Required')

export const StepOne = ({ next, steps, step, children }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FormSectionHeader>Basic info</FormSectionHeader>
      <FieldSet>
        <Field
          component={TextField}
          required={true}
          validate={required}
          name="firstName"
          placeholder="First Name"
        />
        <Field
          component={TextField}
          required={true}
          validate={required}
          name="lastName"
          placeholder="Last Name"
        />
        <Field
          component={TextField}
          required={true}
          validate={required}
          name="phone"
          placeholder="Phone Number"
        />
        <Field
          component={TextField}
          required={true}
          validate={required}
          name="Email Address"
          placeholder="Email Address"
        />
      </FieldSet>
      {children}
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
      <FieldSet>
        <Field
          name="model-interest"
          component={(props) => (
            <div className="flex items-center justify-center">
              <div className="text-red mr-2">*</div>
              <Select
                className="w-full"
                isMulti
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
      </FieldSet>
      <FormSectionHeader className="mb-10">Leave a note</FormSectionHeader>
      <FieldSet>
        <Field
          className="w-full bg-gray-0 text-white p-8 font-body placeholder-white h-48"
          placeholder="Leave a message for our team..."
          name="notes"
          component="textarea"
        />
      </FieldSet>
      <ContinueButton next={next} />
      <div className="text-white self-center mt-6 font-heading italic">
        <span className="mr-2">{`${steps.indexOf(step)}`}</span>
        <span className="mr-2">of</span>
        <span>3</span>
      </div>
    </div>
  )
}

export const StepThree = ({ steps, step }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FormSectionHeader>Contact preference</FormSectionHeader>
      <div className="space-y-2 px-4 mb-12 lg:pl-5">
        <Field
          name="contactPreferences"
          value="phone"
          type="radio"
          component={({ input }) => {
            return <Radio {...input}>Phone Call</Radio>
          }}
        />
        <Field
          name="contactPreferences"
          value="email"
          type="radio"
          component={({ input }) => {
            return <Radio {...input}>Email</Radio>
          }}
        />
        <Field
          name="contactPreferences"
          value="text"
          type="radio"
          component={({ input }) => {
            return <Radio {...input}>SMS Text Message</Radio>
          }}
        />
      </div>
      <FormSectionHeader>Level of interest</FormSectionHeader>
      <FieldSet>
        <Field
          name="interest"
          component={(props) => (
            <div className="flex items-center justify-center">
              <div className="text-red mr-2">*</div>
              <Select
                className="w-full"
                isMulti
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
      </FieldSet>
      <div className="mt-12">
        <FieldSet>
          <Field
            name="marketingOptIn"
            value="text"
            type="radio"
            component={({ input, meta }) => {
              return (
                <Radio {...input} alignment="start">
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
        </FieldSet>
      </div>
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

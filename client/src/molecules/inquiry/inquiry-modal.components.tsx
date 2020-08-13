import React from 'react'
import { Field } from 'react-final-form'
import clsx from 'clsx'
import { Link } from 'gatsby'
import Select, { components } from 'react-select'
import { motion } from 'framer-motion'
import { Radio } from '../../atoms/radio'
import { InPageCta } from '../../atoms/in-page-cta'
import { OptionsCta } from '../../atoms/options-cta'
import {
  TextInput,
  requiredText,
  requiredEmail,
  requiredPhone,
} from '../../atoms/text-input'
import { useInquiryModalState } from './inquiry-modal'
import { AngleIcon } from '../../svgs/icons'
import { ArrowIcon } from '../../svgs/icons'
import { CloseIcon } from '../../svgs/icons'
import { CheckIcon } from '../../svgs/icons'
import { Typography } from '../../atoms/typography'
import { useFormState } from '../../services/forms'
import { useWulfric } from '../wulfric'

const stepAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const FieldSetContainer: React.FC = ({ children }) => (
  <div className="space-y-2 px-4 lg:pl-5">{children}</div>
)

export const FieldSetHeader: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx('flex items-center mb-2 px-1', className)}>
      <AngleIcon className="text-white" style={{ fontSize: '40px' }} />
      <Typography variant="e2" className="text-white">
        {children}
      </Typography>
    </div>
  )
}

const ContinueButton = () => {
  const { next } = useWulfric()
  const { hasValidationErrors: isInvalid } = useFormState({
    subscription: {
      hasValidationErrors: true,
    },
  })

  return (
    <InPageCta
      className={clsx('self-center mt-16 lg:mt-20', {
        'opacity-50 pointer-events-none': isInvalid,
      })}
      variant="primary"
      onClick={() => {
        if (isInvalid) return
        next()
      }}
    >
      Continue
    </InPageCta>
  )
}

const PageStatus = () => {
  const { currentStepIndex } = useWulfric()

  return (
    <div className="text-white self-center mt-6 font-heading italic">
      <span className="mr-2">{currentStepIndex}</span>
      <span className="mr-2">of</span>
      <span>3</span>
    </div>
  )
}

export const LandingStep: React.FC<{ id: string }> = () => {
  const { next } = useWulfric()
  return (
    <motion.div
      {...stepAnimation}
      className="flex flex-col justify-center px-4 pb-10"
    >
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
      {/* commenting out for soft launch */}
      {/* <OptionsCta variant="secondary" theme="dark">
        Questions & answer
      </OptionsCta> */}
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
    </motion.div>
  )
}

export const StepOne: React.FC<{ id: string }> = () => {
  return (
    <motion.div {...stepAnimation} className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request an appointment
      </div>
      <FieldSetHeader>Basic info</FieldSetHeader>
      <FieldSetContainer>
        <TextInput
          name="firstName"
          placeholder="First Name"
          type="text"
          validation={requiredText}
          required={true}
        />
        <TextInput
          name="lastName"
          placeholder="last Name"
          type="text"
          validation={requiredText}
          required={true}
        />
        <TextInput
          name="phone"
          placeholder="Phone"
          type="phone"
          validation={requiredPhone}
          required={true}
        />
        <TextInput
          name="emailAddress"
          type="email"
          placeholder="Email Address"
          validation={requiredEmail}
          required={true}
        />
      </FieldSetContainer>
      <ContinueButton />
      <PageStatus />
    </motion.div>
  )
}
const Placeholder = (props: any) => {
  return (
    <components.Placeholder {...props}>
      <Typography className="pb- pt-4" variant="p3">
        {props.children}
      </Typography>
    </components.Placeholder>
  )
}

export const StepTwo: React.FC<{ id: string }> = () => {
  return (
    <motion.div {...stepAnimation} className="flex flex-col justify-center">
      <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
        request and appointment
      </div>
      <FieldSetHeader>Model Interest</FieldSetHeader>
      <FieldSetContainer>
        <Field
          name="modelInterest"
          validate={(value: any) => {
            return value ? undefined : 'Required'
          }}
          render={(props) => (
            <div className="flex items-center justify-center pt-3">
              <div className="text-red mr-2">*</div>
              <Select
                className="w-full"
                isMulti
                placeholder={'Select which boats are you interested in?'}
                components={{
                  Placeholder,
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
                    value: '50ss',
                    label: `50' Marauder SS`,
                  },
                  {
                    value: '38topgun',
                    label: `38' Top Gun`,
                  },
                  { value: '515', label: '515' },
                  { value: `42' X`, label: '42x' },
                  { value: `39' GTS`, label: '39gts' },
                  {
                    value: 'nighthawk',
                    label: `41' Nighthawk`,
                  },
                  { value: `42' Auroris`, label: 'auroris' },
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
                  multiValueRemove: (base) => {
                    return {
                      ...base,
                      '&:hover': {
                        background: 'transparent',
                      },
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
                  option: (base) => ({
                    ...base,
                    background: 'transparent',
                    color: '#fff',
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#000',
                      background: '#D12026',
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
      <ContinueButton />
      <PageStatus />
    </motion.div>
  )
}

export const StepThree: React.FC<{ id: string }> = () => {
  const { hasValidationErrors, submitSucceeded } = useFormState({
    subscription: {
      hasValidationErrors: true,
      submitSucceeded: true,
    },
  })

  if (!submitSucceeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col justify-center"
      >
        <div className="text-white uppercase text-center mb-16 mt-20 font-bold tracking-widest font-body text-sm">
          request and appointment
        </div>
        <FieldSetHeader>Contact preference</FieldSetHeader>
        <div className="space-y-3 lg:space-y-0 justify-between px-4 mb-12 lg:pl-5 mt-4 lg:flex">
          <Field
            name="contactPreferences"
            value="phone"
            type="radio"
            checked
            render={({ input }) => {
              return (
                <Radio alignment="center" {...input}>
                  Phone Call
                </Radio>
              )
            }}
          />
          <Field
            name="contactPreferences"
            value="email"
            type="radio"
            render={({ input }) => {
              return (
                <Radio alignment="center" {...input}>
                  Email
                </Radio>
              )
            }}
          />
          <Field
            name="contactPreferences"
            value="text"
            type="radio"
            render={({ input }) => {
              return (
                <Radio alignment="center" {...input}>
                  SMS Text Message
                </Radio>
              )
            }}
          />
        </div>

        <div className="mb-1">
          <FieldSetHeader>Level of interest</FieldSetHeader>
        </div>

        <FieldSetContainer>
          <Field
            name="interest"
            validate={(value: any) => {
              return value ? undefined : 'Required'
            }}
            render={(props) => (
              <div className="flex items-center justify-center">
                <div className="text-red mr-2 pt-2">*</div>
                <Select
                  className="w-full"
                  options={[
                    {
                      value: 'Just exploring',
                      label: 'Just exploring',
                    },
                    {
                      value: 'Seriously interested',
                      label: 'Seriously interested',
                    },
                    {
                      value: 'ready to purchase',
                      label: 'ready to purchase',
                    },
                  ]}
                  placeholder={'Select your level of interest.'}
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
                        background: '#D12026',
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
                      Team. I understand these communications may be
                      personalised to me based on my interests, preferences and
                      use of products and services, including invitations to
                      provide customer experience feedback.
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
          type="submit"
        >
          Submit request
        </InPageCta>
        <PageStatus />
      </motion.div>
    )
  } else {
    return <FormSuccessMessage />
  }
}

export const FormSuccessMessage = () => {
  const [, setInquiryModalState] = useInquiryModalState()

  return (
    <motion.div
      {...stepAnimation}
      className="flex items-center justify-center flex-col"
      style={{
        height: 'calc(100vh - 100px)',
      }}
    >
      <div className="flex items-center bg-black bg-opacity-50 h-10 px-4 rounded-full mb-8">
        <CheckIcon className="mr-4" />
        <Typography variant="e2">request received</Typography>
      </div>
      <Typography className="mb-12" variant="h3" md="h2">
        Thank you for your interest
      </Typography>
      <Typography variant="p2" className="max-w-xs text-center mb-10">
        One of our team members will be in touch with your shortly.
      </Typography>
      <InPageCta
        className={clsx('self-center')}
        variant="primary"
        onClick={() => {
          setInquiryModalState(false)
        }}
      >
        Continue exploring
      </InPageCta>
    </motion.div>
  )
}

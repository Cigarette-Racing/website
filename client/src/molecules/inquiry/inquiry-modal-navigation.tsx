import React from 'react'
import { WithWizard } from 'react-albus'

import { InPageCta } from '../../atoms/in-page-cta'

const InquiryModalNavigation: React.FC = () => {
  return (
    <WithWizard
      render={({ next, step, steps }) => {
        return (
          <div className="flex justify-center flex-col">
            {console.log(step, steps)}
            {steps.indexOf(step) + 1 < steps.length && (
              <InPageCta
                className="self-center mt-12"
                variant="primary"
                onClick={next}
              >
                Continue
              </InPageCta>
            )}
            {steps.indexOf(step) + 1 === steps.length && (
              <InPageCta
                className="self-center mt-12"
                variant="primary"
                onClick={() => {
                  alert('submit!')
                }}
              >
                Submit Request
              </InPageCta>
            )}
            <div className="text-white self-center mt-6 font-heading italic">
              {steps.indexOf(step) != 0 && `${steps.indexOf(step)} of 3`}
            </div>
          </div>
        )
      }}
    />
  )
}

export default InquiryModalNavigation

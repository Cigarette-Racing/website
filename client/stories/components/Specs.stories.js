import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import SpecsAndFeaturesSection, {
  SpecFeatureToggleButtons,
  SpecFeatureToggleSwitch,
} from '../../src/components/specsAndFeatures/SpecsAndFeatures'

export default {
  title: 'Components/SpecsAndFeatures',
  component: Main,
  decorators: [
    withKnobs,
    (Story) => {
      return (
        <div className="w-screen min-h-screen max-w-screen-xl bg-black mt-12 pt-16 pb-16">
          <Story />
        </div>
      )
    },
  ],
}

export const Main = () => {
  return <SpecsAndFeaturesSection />
}

export const Toggle = () => {
  return <SpecFeatureToggleButtons />
}

export const Switch = () => {
  return <SpecFeatureToggleSwitch />
}

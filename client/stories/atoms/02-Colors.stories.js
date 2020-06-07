import React, { Fragment } from 'react'
import clsx from 'clsx'

export default {
  title: 'Atoms/Colors',
  parameters: {
    backgrounds: [{ name: 'Off-black', value: '#1b1b1b', default: true }],
  },
}

const Color = (props) => {
  return (
    <div>
      <div className={clsx('w-40 h-40', props.className)}></div>
      <div className="text-white">.{props.className}</div>
    </div>
  )
}

const Spacer = () => <div className="w-16" />

export const Palette = () => {
  return (
    <Fragment>
      <div className="flex my-8">
        <Color className="bg-red" />
        <Spacer />
        <Color className="bg-black" />
        <Spacer />
        <Color className="bg-white" />
      </div>
      <div className="flex my-8">
        <Color className="bg-gray-1" />
        <Spacer />
        <Color className="bg-gray-2" />
        <Spacer />
        <Color className="bg-gray-3" />
      </div>
      <div className="flex my-8">
        <Color className="bg-gray-4" />
        <Spacer />
        <Color className="bg-gray-5" />
        <Spacer />
        <Color className="bg-gray-6" />
      </div>
    </Fragment>
  )
}

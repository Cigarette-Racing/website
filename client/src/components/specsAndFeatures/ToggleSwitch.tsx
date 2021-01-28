import React, { useState } from 'react'
import clsx from 'clsx'
import { Typography } from '../../atoms/typography'

export const ToggleSwitch = ({ className, isToggled, onToggle, choices }) => {
  return (
    <div className={`flex ${className}`}>
      <Typography className="mr-3 sm:mr-4" variant="p3" theme="dark">
        {choices[0]}
      </Typography>
      <label className="toggle-switch inline-block relative">
        <input
          className="hidden"
          type="checkbox"
          checked={isToggled}
          onChange={onToggle}
        />
        <span className="switch absolute top-0 left-0 bottom-0 right-0 transition-colors" />
      </label>
      <Typography
        className={clsx('ml-3 sm:ml-4 transition-transform')}
        variant="p3"
        theme="dark"
      >
        {choices[1]}
      </Typography>
    </div>
  )
}

export default ToggleSwitch

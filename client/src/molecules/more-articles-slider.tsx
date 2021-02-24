import React, { useState } from 'react'

const MoreArticlesSlider = () => {
  const getWidth = () => window.innerWidth

  return (
    <div className="relative w-full h-full m-auto overflow-hidden">
      <div
        className="sliderContent transform ease-out flex"
        style={{ width: `${getWidth()}` }}
      ></div>
    </div>
  )
}

export default MoreArticlesSlider

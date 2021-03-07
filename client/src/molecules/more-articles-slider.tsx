import React, { useState, useEffect } from 'react'

const MoreArticlesSlider = () => {
  const [state, setstate] = useState(null)

  useEffect(() => {
    setstate(window.innerWidth)
  }, [])

  return (
    <div className="relative w-full h-full m-auto overflow-hidden">
      <div
        className="sliderContent transform ease-out flex"
        style={{ width: `${state}` }}
      ></div>
    </div>
  )
}

export default MoreArticlesSlider

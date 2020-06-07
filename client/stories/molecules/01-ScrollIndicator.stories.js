import React from 'react'
import { ScrollIndicator } from '../../src/molecules/scroll-indicator'

export default {
  title: 'Molecules/ScrollIndicator',
  component: ScrollIndicator,
}

export const Sandbox = () => {
  return (
    <div>
      <ScrollIndicator />
      <div
        className="h-screen w-screen text-2xl text-white bg-black flex justify-center items-center"
        style={{ width: '99vw' }}
      >
        Not a scroll section
      </div>
      <div
        className="h-screen w-screen text-2xl text-white bg-gray-1 flex justify-center items-center"
        data-scrollsection
        style={{ width: '99vw' }}
      >
        A scroll section (1)
      </div>
      <div
        className="h-screen w-screen text-2xl text-white bg-black flex justify-center items-center"
        data-scrollsection
        style={{ width: '99vw' }}
      >
        A scroll section (2)
      </div>
      <div
        className="h-screen w-screen text-2xl text-white bg-gray-1 flex justify-center items-center"
        data-scrollsection
        style={{ width: '99vw' }}
      >
        A scroll section (3)
      </div>
      <div
        className="h-screen w-screen text-2xl text-white bg-black flex justify-center items-center"
        data-scrollsection
        style={{ width: '99vw' }}
      >
        A scroll section (4)
      </div>
      <div
        className="h-screen w-screen text-2xl text-white bg-gray-1 flex justify-center items-center"
        data-scrollsection
        style={{ width: '99vw' }}
      >
        A scroll section (5)
      </div>
      <div
        className="h-screen w-screen text-2xl text-white bg-black flex justify-center items-center"
        style={{ width: '99vw' }}
      >
        Not a scroll section
      </div>
    </div>
  )
}

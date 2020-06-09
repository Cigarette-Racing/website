import React from 'react'
import { Footer } from '../../src/molecules/footer'

export default {
  title: 'Molecules/Footer',
  component: Footer,
}

export const Sandbox = () => {
  return (
    <div>
      <div
        class="h-screen flex justify-center items-center bg-gray-6 text-2xl text-black"
        style={{ width: '95vw' }}
      >
        Scroll down to see footer.
      </div>
      <Footer />
    </div>
  )
}

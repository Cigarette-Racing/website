import React, { Fragment, useEffect } from 'react'
import { Header } from '../../src/molecules/header'
import clsx from 'clsx'

// From https://stackoverflow.com/a/44230264/4357882
// range(3,7) === [ 3, 4, 5, 6, 7 ]
const range = (x, y) =>
  Array.from(
    (function* () {
      while (x <= y) yield x++
    })()
  )

export default {
  title: 'Molecules/Header',
  component: Header,
}

export const Sandbox = () => {
  // Hack to get around Storybook's layout quirks
  useEffect(() => {
    document.querySelector('#root').childNodes[0].style.position = 'unset'
  }, [])

  return (
    <Fragment>
      <Header />
      {range(1, 5).map((key) => {
        return (
          <div
            key={key}
            className={clsx(
              'h-screen w-screen flex justify-center items-center text-2xl text-black',
              {
                'bg-gray-6': key % 2 === 0,
                'bg-gray-4': key % 2 !== 0,
              }
            )}
          >
            Section {key}
          </div>
        )
      })}
    </Fragment>
  )
}

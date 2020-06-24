import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import clsx from 'clsx'
import { InPageAnchor, InPageNav } from '../../src/molecules/in-page-nav'

export default {
  title: 'Molecules/In Page Nav',
  component: InPageNav,
  decorators: [withKnobs],
  parameters: {
    centered: { disable: true },
  },
}

export const Sandbox = () => {
  const TITLES = [
    ['Section A'],
    ['Section B', 'B'],
    ['Section C'],
    ['Section D'],
    ['Section E', 'E'],
    ['Section F'],
  ]
  return (
    <div>
      <div className="h-64 flex justify-center items-center bg-gray-4">
        Hero Section
      </div>
      <InPageNav
        boatName="Test Boat"
        titles={TITLES}
        onClickInquire={action('Clicked Inquire')}
      />
      {TITLES.map(([long], index) => (
        <div
          key={long}
          className={clsx(
            'relative h-screen flex justify-center items-center',
            {
              'bg-gray-5': index % 2 === 0,
              'bg-gray-6': index % 2 === 1,
            }
          )}
        >
          <InPageAnchor title={long} />
          {long}
        </div>
      ))}
    </div>
  )
}

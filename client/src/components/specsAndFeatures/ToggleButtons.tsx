import React from 'react'
import clsx from 'clsx'
import { InPageCta } from '../../atoms/in-page-cta'

export const ToggleButtons = ({ selectedCategory, onCategoryClick }) => {
  const specBtnVariant = selectedCategory === 'specs' ? 'primary' : 'secondary'
  const featureBtnVariant =
    selectedCategory === 'features' ? 'primary' : 'secondary'

  return (
    <div className="flex bg-gray-3 sm:bg-opacity-0">
      <InPageCta
        onClick={() => {
          onCategoryClick('specs')
        }}
        className={clsx(
          'mr-6',
          selectedCategory === 'specs'
            ? 'selected'
            : 'text-white border-white hover:border-red'
        )}
        variant={specBtnVariant}
      >
        Specifications
      </InPageCta>
      <InPageCta
        onClick={() => {
          onCategoryClick('features')
        }}
        className={clsx(
          selectedCategory === 'features'
            ? 'selected'
            : 'text-white border-white hover:border-red'
        )}
        variant={featureBtnVariant}
      >
        Features
      </InPageCta>
    </div>
  )
}

export default ToggleButtons

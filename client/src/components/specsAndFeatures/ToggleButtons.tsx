import React from 'react'
import clsx from 'clsx'
import { InPageCta } from '../../atoms/in-page-cta'

export const ToggleButtons = ({
  options,
  className,
  selectedCategory,
  onCategoryClick,
}) => {
  const specBtnVariant =
    selectedCategory === 'specifications' ? 'primary' : 'secondary'
  const featureBtnVariant =
    selectedCategory === 'features' ? 'primary' : 'secondary'

  return (
    <div className={`${className} flex justify-center py-6 px-4 sm:p-0`}>
      <InPageCta
        onClick={() => {
          onCategoryClick('specifications')
        }}
        className={clsx(
          'mr-6',
          selectedCategory === 'specifications'
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

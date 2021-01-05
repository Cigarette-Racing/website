import React from 'react'
// import { Slider } from '../../molecules/slider'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowIcon } from '../../svgs/icons'
import { CircleButton } from '../../atoms/circle-button'
import { Typography } from '../../atoms/typography'
import { InPageCta } from '../../atoms/in-page-cta'
import { AspectRatio } from '../../atoms/aspect-ratio'
import { InPageAnchor } from '../../molecules/in-page-nav'
import { Media, CustomizationsSection, TextBlock } from '../../types/boat'
import { LinkCta } from '../../atoms/link-cta'
import { BoatSection } from '../boat.components'
import { useBackgroundsQuery } from '../../services/backgrounds'

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <CircleButton
      icon={ArrowIcon}
      variant="secondary"
      iconClassName="transform rotate-180"
      onClick={onClick}
      aria-label="Previous"
    />
  )
}

const NextArrow = ({ className, style, onClick }) => {
  return (
    <CircleButton
      icon={ArrowIcon}
      variant="secondary"
      iconClassName="transform rotate-180"
      onClick={onClick}
      aria-label="Previous"
    />
  )
}

export const CustomizationsSectionComponent = ({
  title,
  options,
}: CustomizationsSection) => {
  const { customizationSection: background } = useBackgroundsQuery()

  const sliderSettings = {
    slidesToShow: 2,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <BoatSection theme="dark" className="py-24 sm:pb-16">
      <InPageAnchor title={title} />
      <img
        src={background}
        alt=""
        className="absolute top-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(360deg, #000000 46.14%, rgba(0, 0, 0, 0) 100%)',
        }}
      />
      <div className="relative text-center mb-24 sm:mt-20 sm:mb-48">
        <Typography variant="h3" sm="h2" lg="h1" className="mb-4">
          Make it yours.
        </Typography>
        <Typography variant="e2" md="e1" className="text-gray-4">
          Bespoke Possibilities
        </Typography>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <Slider {...sliderSettings}>
          {options.map((option, index) => {
            return (
              <BespokeOptionCard
                key={`bespoke-option-${index}`}
                media={option.media}
                header={option.content.header}
                copy={option.content.copy}
              />
            )
          })}
        </Slider>
        <div className="px-4 flex sm:justify-between items-center">
          <div className="hidden sm:block">
            <InPageCta variant="secondary" theme="dark">
              Explore Bespoke Studio
            </InPageCta>
          </div>
          <div>
            <CircleButton
              icon={ArrowIcon}
              theme={theme}
              variant="secondary"
              iconClassName="transform rotate-180"
              onClick={onClickPrev}
              disabled={disabledPrev}
              aria-label="Previous"
            />
            <CircleButton
              icon={ArrowIcon}
              theme={theme}
              variant="secondary"
              onClick={onClickNext}
              disabled={disabledNext}
              aria-label="Next"
            />
          </div>
        </div>
        <LinkCta theme="dark" className="mx-auto sm:hidden">
          Explore Bespoke Possibilities
        </LinkCta>
      </div>
    </BoatSection>
  )
}

const BespokeOptionCard = ({
  media,
  header,
  copy,
}: { media: Media } & TextBlock) => {
  return (
    <div className="w-56 sm:w-auto max-w-lg">
      <AspectRatio
        ratio="1:1"
        sm="16:9"
        className="relative sm:w-auto w-56 max-w-lg mb-6"
      >
        <img
          src={media.image}
          alt={media.image.alt || ''}
          className="h-full w-full object-cover"
          style={{ position: 'absolute' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
          }}
        ></div>
      </AspectRatio>
      <Typography variant="h4" className="mb-4">
        {header}
      </Typography>
      <Typography variant="p3" sm="p2">
        {copy}
      </Typography>
    </div>
  )
}

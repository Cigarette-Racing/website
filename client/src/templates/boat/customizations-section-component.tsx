import React, { useRef, useState } from 'react'
import { useMedia } from 'react-use'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowIcon } from '../../svgs/icons'
import { CircleButton } from '../../atoms/circle-button'
import { Typography } from '../../atoms/typography'
import { AspectRatio } from '../../atoms/aspect-ratio'
import { InPageAnchor } from '../../molecules/in-page-nav'
import { CustomizationsSection } from '../../types/boat'
import { Media, TextBlock } from '../../types/common'
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
  subtitle,
  backgroundImage,
  options,
}: CustomizationsSection) => {
  const { customizationSection: background } = useBackgroundsQuery()

  const [currentSliderIndex, setCurrentSliderIndex] = useState(0)

  const isMobile = useMedia('(max-width: 767px)')

  const sliderRef = useRef()

  const sliderSettings = {
    ref: sliderRef,
    slidesToShow: 3,
    arrows: false,
    touchThreshold: 10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    onInit: () => {},
    beforeChange: (oldIndex, newIndex) => {
      // console.log(oldIndex, newIndex)
      // console.log(document.querySelectorAll('.slick-active'))
      // document.querySelector('.slick-active.faded').classList.remove('faded')
      // document.querySelectorAll('.slick-active')[2].classList.add('faded')
    },
    afterChange: (index: number) => {
      setCurrentSliderIndex(index)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }

  const sliderWidth = !isMobile ? `calc(100% + 280px)` : `calc(100% + 180px)`

  return (
    <BoatSection theme="dark" className="py-24 sm:pb-16">
      <InPageAnchor title={title} />
      <img
        src={`${backgroundImage || background}?q=30&w=2000`}
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
          {title}
        </Typography>
        <Typography variant="e2" md="e1" className="text-gray-4">
          {subtitle}
        </Typography>
      </div>
      <div
        className="relative overflow-hidden lg:pl-16 md:-mt-16"
        style={{ width: sliderWidth }}
      >
        <div className="slider-wrapper">
          <Slider {...sliderSettings}>
            {options.map((option, index) => {
              return (
                <BespokeOptionCard
                  index={index}
                  sliderIndex={currentSliderIndex}
                  key={`bespoke-option-${index}`}
                  media={option.media}
                  header={option.content.header}
                  copy={option.content.copy}
                />
              )
            })}
          </Slider>
        </div>
      </div>
      <div className="relative flex lg:justify-end pl-4 lg:px-12 mt-10 lg:mt-20">
        <CircleButton
          className="mr-4"
          icon={ArrowIcon}
          variant="secondary"
          iconClassName="transform rotate-180"
          onClick={() => {
            sliderRef.current.slickPrev()
          }}
          aria-label="Previous"
        />
        <CircleButton
          icon={ArrowIcon}
          variant="secondary"
          onClick={() => {
            sliderRef.current.slickNext()
          }}
          aria-label="Next"
        />
      </div>
    </BoatSection>
  )
}

const BespokeOptionCard = ({
  index,
  sliderIndex,
  media,
  header,
  copy,
}: { index: number; sliderIndex: number; media: Media } & TextBlock) => {
  return (
    <div
      data-index={index}
      className="sm:max-w-full sm:w-auto lg:max-w-10xl px-2"
    >
      <AspectRatio
        ratio="16:9"
        className="relative sm:max-w-full sm:w-auto lg:max-w-10xl mb-6"
      >
        <img
          src={`${media.image}?q=30&w=1000`}
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

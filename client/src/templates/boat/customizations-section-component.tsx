import React from 'react'
import { Slider } from '../../molecules/slider'
import { Typography } from '../../atoms/typography'
import { InPageCta } from '../../atoms/in-page-cta'
import { AspectRatio } from '../../atoms/aspect-ratio'
import { InPageAnchor } from '../../molecules/in-page-nav'
import { Media, CustomizationsSection, TextBlock } from '../../types/boat'
import { LinkCta } from '../../atoms/link-cta'
import { BoatSection, CarouselButtons } from '../boat.components'
import { useBackgroundsQuery } from '../../services/backgrounds'

export const CustomizationsSectionComponent = ({
  title,
  options,
}: CustomizationsSection) => {
  console.log('custom section')
  const { customizationSection: background } = useBackgroundsQuery()

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
        <Slider key={`bespoke-slider`} items={options} />
        <div className="px-4 flex sm:justify-between items-center">
          <div className="hidden sm:block">
            <InPageCta variant="secondary" theme="dark">
              Explore Bespoke Studio
            </InPageCta>
          </div>
          <CarouselButtons className="mb-12 sm:mb-0" />
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

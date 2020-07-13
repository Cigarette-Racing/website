import React from 'react'
import { ContentHeader } from '../atoms/content-header'
import { Typography } from '../atoms/typography'
import { LinkCta } from '../atoms/link-cta'

const BoatFeaturette = ({
  backgroundImage,
  boatImage,
  contentHeader,
  subtitle,
  boatName,
}: {
  backgroundImage: string
  boatImage: string
  contentHeader: string
  subtitle: string
  boatName: string
}) => (
  <div
    className="bg-cover relative justify-content: center; md:w-1/2 min-h-screen-half bg-black text-white pt-4 lg:pt-16"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        background:
          'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
      }}
    ></div>
    <div className="flex flex-col h-full relative justify-between lg:justify-end">
      <div className="relative z-0 flex-2">
        <div className="px-2 md:px-4 flex justify-center">
          <img src={boatImage} className="object-cover max-w-1/2" />
        </div>
      </div>
      <div className="absolute flex flex-col justify-between md:justify-end h-full w-full">
        <div className="relative z-20 px-4 md:px order-first md:order-none">
          <ContentHeader
            subtitle={subtitle}
            className="self-start -ml-2 sm:self-auto mb:ml-0"
          >
            {contentHeader}
          </ContentHeader>
        </div>
        <div className="relative z-20 px-4 md:px-8 pb-6 md:pb-20">
          <Typography variant="h3" xl="h2" className="mb-4 md:mb-8">
            {boatName}
          </Typography>
          <LinkCta>Learn More</LinkCta>
        </div>
      </div>
    </div>
  </div>
)

export default BoatFeaturette

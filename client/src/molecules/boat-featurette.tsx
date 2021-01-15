import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { ContentHeader } from '../atoms/content-header'
import { Typography } from '../atoms/typography'
import { LinkCta } from '../atoms/link-cta'

const BoatFeaturette = ({
  backgroundImage,
  boatImage,
  contentHeader,
  subtitle,
  boatName,
  url,
}: {
  backgroundImage: string
  boatImage: string
  contentHeader: string
  subtitle: string
  boatName: string
  url: string
}) => (
  <div
    className="bg-cover relative justify-center md:w-1/2 md:min-h-screen bg-black text-white pt-4 md:pt-0"
    style={{
      backgroundImage: `url(${backgroundImage}?q=30&w=1500)`,
    }}
  >
    <Link
      to={`/boats/${url}`}
      className="absolute inset-0 z-10"
      style={{
        background:
          'linear-gradient(360deg, rgba(0, 0, 0, 0.6) 23.28%, rgba(0, 0, 0, 0) 71.29%)',
      }}
    ></Link>
    <div className="flex flex-col h-full relative justify-between lg:justify-end pointer-events-none">
      <div className="relative z-0 h-full">
        <div className="px-2 py-12 md:py-0 md:px-4 flex h-full justify-center">
          <img
            src={boatImage}
            className="w-full self-center max-w-3/4 md:max-w-11/12"
          />
        </div>
      </div>
      <div className="md:absolute flex flex-col justify-between md:justify-end h-full w-full">
        <div className="relative z-20 px-4 md:px order-first md:order-none">
          <ContentHeader
            subtitle={subtitle}
            className="self-start -ml-2 sm:self-auto mb:ml-0"
          >
            {contentHeader}
          </ContentHeader>
        </div>
        <div className="relative z-20 px-4 md:px-8 pb-6 md:pb-12">
          <Typography variant="h3" xl="h2" className="mb-4 md:mb-8">
            {boatName}
          </Typography>
          <Link to={`/boats/${url}`} className="pointer-events-auto">
            <LinkCta>Learn More</LinkCta>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default BoatFeaturette

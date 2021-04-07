import React from 'react'
import { Link } from 'gatsby'
import { Typography } from '../atoms/typography'
import clsx from 'clsx'
import { AspectRatio } from '../atoms/aspect-ratio'

const ExploreOurWorld = () => {
  return (
    <div>
      <Typography className="px-4 mt-20 mb-5" variant="h3" md="h2">
        Explore Our World
      </Typography>
      <div className="grid-cols-3 grid col-gap-4 grid-flow-row px-4">
        <Link to={`/labs`} className="block w-full" data-type="tertiary link">
          <div className="pt-5 flex flex-col h-full">
            <div className="mb-10">
              <AspectRatio ratio="1:1" md="16:9" className="">
                <img
                  className="absolute h-full w-full object-cover"
                  src="https://via.placeholder.com/1000x1000"
                  alt=""
                />
              </AspectRatio>
            </div>
            <div className="h-full">
              <div className="flex justify-between content-between flex-col h-full">
                <div>
                  <Typography className="mb-10" variant="h5" md="h4">
                    Labs
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/dna`} className="block w-full" data-type="tertiary link">
          <div className="pt-5 flex flex-col h-full">
            <div className="mb-10">
              <AspectRatio ratio="1:1" md="16:9" className="">
                <img
                  className="absolute h-full w-full object-cover"
                  src="https://via.placeholder.com/1000x1000"
                  alt=""
                />
              </AspectRatio>
            </div>
            <div className="h-full">
              <div className="flex justify-between content-between flex-col h-full">
                <div>
                  <Typography className="mb-10" variant="h5" md="h4">
                    Labs
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/news`} className="block w-full" data-type="tertiary link">
          <div className="pt-5 flex flex-col h-full">
            <div className="mb-10">
              <AspectRatio ratio="1:1" md="16:9" className="">
                <img
                  className="absolute h-full w-full object-cover"
                  src="https://via.placeholder.com/1000x1000"
                  alt=""
                />
              </AspectRatio>
            </div>
            <div className="h-full">
              <div className="flex justify-between content-between flex-col h-full">
                <div>
                  <Typography className="mb-10" variant="h5" md="h4">
                    Labs
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ExploreOurWorld

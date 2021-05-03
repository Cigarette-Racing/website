import React from 'react'
import { Link } from 'gatsby'
import { Typography } from '../atoms/typography'
import { AspectRatio } from '../atoms/aspect-ratio'
import { CircleButton } from '../atoms/circle-button'
import { ArrowIcon } from '../svgs/icons'

export interface ExploreContentItem {
  image: string
  title: string
  url: string
  text: string
}

const ExploreOurWorld = ({ items }: { items: ExploreContentItem[] }) => {
  return (
    <div data-component="ExploreOurWorld">
      <Typography
        variant="h2"
        md="h3"
        className="mb-4 px-4 md:px-0 text-center md:text-left"
      >
        Explore Our World
      </Typography>
      <div className="grid-cols-1 md:grid-cols-3 grid col-gap-6 grid-flow-row">
        {items.map((item) => (
          <Link to={item.url} className="block w-full">
            <div className="pt-5 flex flex-col h-full">
              <div className="mb-10">
                <AspectRatio ratio="1:1">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </AspectRatio>
              </div>
              <div className="flex justify-between items-center mb-4 px-4 md:px-0">
                <Typography variant="h3" md="h3">
                  {item.title}
                </Typography>
                <CircleButton icon={ArrowIcon} />
              </div>
              <Typography variant="p3" className="px-4 md:px-0">
                {item.text}
              </Typography>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExploreOurWorld

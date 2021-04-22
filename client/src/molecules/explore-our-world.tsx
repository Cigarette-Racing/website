import React from 'react'
import { Link } from 'gatsby'
import { Typography } from '../atoms/typography'
import clsx from 'clsx'
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
      <Typography variant="h3" className="mb-4">
        Explore Our World
      </Typography>
      <div className="grid-cols-3 grid col-gap-6 grid-flow-row">
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
              <div className="flex justify-between items-center mb-4">
                <Typography variant="h3" md="h3">
                  {item.title}
                </Typography>
                <CircleButton style={{backgroundColor: '#232323'}} icon={ArrowIcon} />
              </div>
              <Typography variant="p3">{item.text}</Typography>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExploreOurWorld
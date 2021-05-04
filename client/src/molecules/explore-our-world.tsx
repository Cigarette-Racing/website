import React from 'react'
import { Link } from 'gatsby'
import { Typography } from '../atoms/typography'
import { AspectRatio } from '../atoms/aspect-ratio'
import { CircleButton } from '../atoms/circle-button'
import { ArrowIcon } from '../svgs/icons'
import labsTitleSVG from '../images/labs-title.svg'

export interface ExploreContentItem {
  image: string
  title: string
  url: string
  text: string
}

const ExploreOurWorld = ({ items }: { items: ExploreContentItem[] }) => {
  return (
    <div data-component="ExploreOurWorld">
      <div className="px-4 md:px-0">
        <hr className="border-t border-gray-2 pt-10 " />
        <Typography
          variant="h2"
          md="h3"
          className="mb-16 md:mb-4 px-12 md:px-0 text-center md:text-left"
        >
          Explore Our World
        </Typography>
      </div>
      <div className="grid-cols-1 md:grid-cols-3 grid col-gap-6 grid-flow-row">
        {items.map((item) => (
          <Link key={item.title} to={item.url} className="block w-full">
            <div className="pt-5 flex flex-col h-full">
              <div className="mb-10 order-2 md:order-1">
                <AspectRatio ratio="3:2">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </AspectRatio>
              </div>
              <div className="copy order-1 md:order-2 mb-8">
                <div className="flex justify-between items-center mb-4 px-4 md:px-0">
                  <Typography variant="h2" md="h2">
                    {item.title}
                  </Typography>
                  <CircleButton
                    style={{ backgroundColor: '#232323' }}
                    icon={ArrowIcon}
                  />
                </div>
                <Typography
                  variant="p3"
                  className="pl-4 pr-16 md:px-0 text-gray-4"
                >
                  {item.text}
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExploreOurWorld

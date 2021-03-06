import React from 'react'
import Modal from 'react-modal'
import { PageProps, graphql, Link } from 'gatsby'
import { ReturnLink } from '../../atoms/return-link'
import { Typography } from '../../atoms/typography'
import { Underline } from './../../pages/labs'
import our_world_1969 from '../../images/1969.jpg'
import our_world_news from '../../images/news.jpg'
import our_world_labs from '../../images/labs.jpg'
import our_world_dna from '../../images/dna.jpg'

const our_world_sections = [
  {
    name: 'Labs',
    hero: our_world_labs,
    headline:
      'Enter Cigarette Racing’s industry leading processes, research, and development.',
    url: '/labs',
  },
  {
    name: 'DNA',
    hero: our_world_dna,
    headline:
      'Discover why Cigarette Racing remains the finest boat on the water.',
    url: '/dna',
  },
  {
    name: '1969',
    hero: our_world_1969,
    headline: 'Explore the legacy and origins of an offshore legend.',
    url: '/1969',
  },
  {
    name: 'News',
    hero: our_world_news,
    headline: 'The latest news & press happening at Cigarette Racing.',
    url: '/news',
  },
]

export const OurWorldMenu = ({
  isVisible,
  onReset,
}: {
  isVisible: boolean
  onReset: () => void
}) => {
  return (
    <Modal
      isOpen={isVisible}
      className={{
        base: 'absolute inset-0',
        afterOpen: '',
        beforeClose: '',
      }}
      overlayClassName="fixed inset-0 z-30"
      closeTimeoutMS={250}
    >
      <div className="md:hidden h-16 flex items-center">
        <ReturnLink>Back</ReturnLink>
      </div>
      <div className="pt-20 min-h-screen h-full px-10 bg-black">
        <div className="pt-24 grid grid-cols-2 h-full">
          {our_world_sections.map((section) => {
            return (
              <Link
                to={section.url}
                onClick={() => onReset()}
                className="flex flex-col justify-start items-start px-3"
              >
                <img src={section.hero} alt="" />
                {section.name === 'Labs' ? (
                  <LabsTitle />
                ) : (
                  <Typography variant="h2" className="text-white mt-4">
                    {section.name}
                  </Typography>
                )}
                <Typography variant="p2" className="text-white">
                  {section.headline}
                </Typography>
              </Link>
            )
          })}
        </div>
      </div>
    </Modal>
  )
}

const LabsTitle = () => {
  return (
    <div className="flex items-baseline">
      <Underline className="bg-red" />
      <Typography variant="h2" className="text-white mt-4">
        Labs
      </Typography>
    </div>
  )
}

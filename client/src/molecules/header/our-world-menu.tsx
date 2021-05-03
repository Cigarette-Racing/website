import React, { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { PageProps, graphql, Link } from 'gatsby'
import { ReturnLink } from '../../atoms/return-link'
import { Typography } from '../../atoms/typography'
import { Underline } from './../../pages/labs'
import ourworldBg from '../../images/ourworld_BG.jpg'
import our_world_1969 from '../../images/1969.jpg'
import our_world_news from '../../images/news.jpg'
import our_world_labs from '../../images/labs.jpg'
import our_world_dna from '../../images/dna.jpg'
import labsTitleSVG from '../../images/_Labs.svg'

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

const MenuLink = styled(Link)`
  &:hover {
    opacity: 1;
  }
`

const Menu = styled.div`
  &:hover {
    ${MenuLink} {
      opacity: 0.3;
      &:hover {
        opacity: 1;
      }
    }
  }
`

const LabsSVGTitle = styled.img`
  height: 40px;
`

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
      shouldCloseOnEsc={true}
      onRequestClose={onReset}
      className={{
        base: 'absolute inset-0 overflow-scroll',
        afterOpen: '',
        beforeClose: '',
      }}
      overlayClassName="fixed inset-0 z-30"
      closeTimeoutMS={250}
    >
      <div className="md:hidden h-16 flex items-center">
        <ReturnLink>Back</ReturnLink>
      </div>
      <div
        className="pt-20 min-h-screen px-10 bg-black bg-opacity-75"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0, .1) 25%, rgba(0,0,0,1)), url(${ourworldBg})`,
        }}
      >
        <Menu className="pt-24 grid grid-cols-2 h-full pb-16">
          {our_world_sections.map((section) => {
            return (
              <MenuLink
                key={section.url}
                to={section.url}
                onClick={() => onReset()}
                className="flex flex-col justify-start items-start px-3 pb-10 transition-opacity duration-150"
              >
                <img src={section.hero} alt="" />
                {section.name === 'Labs' ? (
                  <LabsSVGTitle
                    className="mt-4 mb-6"
                    src={labsTitleSVG}
                    alt="_labs"
                  />
                ) : (
                  <Typography variant="h2" className="text-white mt-4 mb-4">
                    {section.name}
                  </Typography>
                )}
                <Typography variant="p2" className="text-white max-w-sm">
                  {section.headline}
                </Typography>
              </MenuLink>
            )
          })}
        </Menu>
      </div>
    </Modal>
  )
}

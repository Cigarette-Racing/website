import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { ReturnLink } from '../../atoms/return-link'
import { Typography } from '../../atoms/typography'
import ourworldBg from '../../images/ourworld_BG.jpg'
import labsTitleSVG from '../../images/labs-title.svg'
import { AspectRatio } from '../../atoms/aspect-ratio'
import { CircleButton } from '../../atoms/circle-button'
import { ArrowIcon } from '../../svgs/icons'

const MenuLink = styled(Link)`
  @media (min-width: 769px) {
    display: block;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 55%;
  }

  .hero {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    opacity: 1;
  }
`

const Menu = styled.div`
  @media (min-width: 769px) {
    height: calc(100vh - 80px);
    overflow: hidden;

    &:hover {
      ${MenuLink} {
        opacity: 0.3;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`

const LabsSVGTitle = styled.img`
  height: 40px;
`

const useOurWorldMenuImagesQuery = () => {
  const menuImages = useStaticQuery<GatsbyTypes.OurWorldMenuImagesQuery>(
    graphql`
      query OurWorldMenuImages {
        craftAPI {
          labs: assets(filename: "1up-image-placeholder.jpg") {
            url
          }
          legacy1969: assets(filename: "explore-our-world-2.png") {
            url
          }
          news: assets(filename: "news-00001.jpg") {
            url
          }
          dna: assets(filename: "explore-our-world_dna.jpg") {
            url
          }
        }
      }
    `
  )

  return menuImages
}

export const OurWorldMenu = ({
  isVisible,
  onReset,
}: {
  isVisible: boolean
  onReset: () => void
}) => {
  const menuImages = useOurWorldMenuImagesQuery()

  const our_world_sections = [
    {
      name: 'News',
      hero: menuImages.craftAPI.news[0].url,
      headline: 'The latest news & press happening at Cigarette Racing.',
      url: '/news',
    },
    {
      name: 'DNA',
      hero: menuImages.craftAPI.dna[0].url,
      headline:
        'Discover why Cigarette Racing remains the finest boat on the water.',
      url: '/dna',
    },
    {
      name: 'Labs',
      hero: menuImages.craftAPI.labs[0].url,
      headline:
        'Enter Cigarette Racing’s industry leading processes, research, and development.',
      url: '/labs',
    },
    {
      name: '1969',
      hero: menuImages.craftAPI.legacy1969[0].url,
      headline: 'Explore the legacy and origins of an offshore legend.',
      url: '/1969',
    },
  ]

  return (
    <Modal
      isOpen={isVisible}
      shouldCloseOnEsc={true}
      onRequestClose={onReset}
      className={{
        base: 'ourworld absolute inset-0 overflow-scroll md:overflow-hidden',
        afterOpen: '',
        beforeClose: '',
      }}
      overlayClassName="fixed inset-0 z-50 md:z-30"
      closeTimeoutMS={250}
    >
      <div className="md:hidden px-4 h-16 flex items-center text-white">
        <ReturnLink onClick={onReset}>Our World</ReturnLink>
      </div>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0, .1) 25%, rgba(0,0,0,1)), url(${ourworldBg})`,
        }}
      >
        <div className="md:px-10 bg-opacity-75 pt-24 md:h-full">
          <Menu className="md:grid md:grid-cols-2 md:grid-rows-2 h-full md:h-auto">
            {our_world_sections.map((section) => {
              return (
                <MenuLink
                  key={section.url}
                  to={section.url}
                  onClick={() => onReset()}
                  className="flex flex-col justify-start items-start md:px-3 pb-10 last:pb-0 md:last:pb-10 transition-opacity duration-150 group"
                >
                  <div className="order-2 md:order-1 hidden md:block image-container overflow-hidden">
                    <img
                      className="hero w-full object-cover"
                      src={section.hero}
                      alt=""
                    />
                  </div>
                  <div className="order-2 md:order-1 w-full">
                    <AspectRatio
                      className="md:hidden w-full"
                      ratio="4:3"
                      md="21:9"
                    >
                      <img
                        className="absolute h-full w-full object-cover"
                        src={section.hero}
                        alt=""
                      />
                    </AspectRatio>
                  </div>
                  <div className="order-1 md:order-2 px-4 md:px-0 mb-8 md:mb-0 w-full">
                    <div className="flex justify-between items-center content-center">
                      {section.name === 'Labs' ? (
                        <LabsSVGTitle
                          className="md:mt-6 mb-6"
                          src={labsTitleSVG}
                          alt="_labs"
                        />
                      ) : (
                        <Typography
                          variant="h2"
                          className="text-white md:mt-4 mb-4"
                        >
                          {section.name}
                        </Typography>
                      )}
                      <CircleButton
                        className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                        style={{ backgroundColor: '#232323' }}
                        icon={ArrowIcon}
                      />
                    </div>
                    <Typography
                      variant="p2"
                      className="copy pr-12 text-white max-w-xs md:max-w-sm md:opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                    >
                      {section.headline}
                    </Typography>
                  </div>
                </MenuLink>
              )
            })}
          </Menu>
        </div>
      </div>
    </Modal>
  )
}

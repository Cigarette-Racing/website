import React, { Fragment, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { useMedia } from 'react-use'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import ExploreOurWorld, {
  ExploreContentItem,
} from '../molecules/explore-our-world'
import { Theme } from '../types/shared'
import clsx from 'clsx'
import { TextBlockComponent } from '../templates/common.components'
import content from './dna.json'
import { OneColumnTextBlock } from '../types/common'
import { FullWidthCarousel } from '../molecules/full-width-carousel'
import { InPageCta } from '../atoms/in-page-cta'
import { Controller, Scene } from 'react-scrollmagic'
import gsap from 'gsap'
import { Tween, Timeline } from 'react-gsap'
import { Typography } from '../atoms/typography'

const Section: React.FC<{
  theme?: Theme | 'red' | 'gray' | 'none'
  className?: string
  website?: string
  logo?: any
}> = ({ children, className, website, logo, theme = 'light', ...rest }) => (
  <section
    className={clsx(
      'relative overflow-hidden flex flex-col content-center justify-center items-center py-12 md:min-h-screen',
      {
        'bg-gray-0 text-white': theme === 'dark',
        'bg-gray-4 text-white': theme === 'gray',
        'bg-darkRed text-white': theme === 'red',
        'text-white': theme === 'none',
      },
      className
    )}
    {...rest}
    data-component="Section"
  >
    <a
      className="relative w-full flex flex-col items-center content-center"
      target="blank"
      href={website}
    >
      <img src={logo} alt="" className="w-3/4 md:w-1/2 block" />
    </a>
  </section>
)

const Dealers = (props) => {
  const {
    data: {
      craftAPI: { bigThunder, lipShip, topGun, ultimateMarine, cmg, wiresOnly },
    },
  } = props

  return (
    <Layout>
      <SEO title="Dealers" slug={props.path} />
      <Section
        className="pt-32"
        theme="light"
        logo={bigThunder.url}
        website="https://www.bigthundermarine.com/"
      ></Section>
      <Section
        theme="light"
        logo={cmg.url}
        website="https://chiefmarinegroup.com/"
      ></Section>
      <Section
        theme="light"
        logo={lipShip.url}
        website="http://www.lipship.com/"
      ></Section>
      <Section
        theme="light"
        logo={topGun.url}
        website="http://topgunyachts.com/"
      ></Section>
      <Section
        theme="light"
        logo={ultimateMarine.url}
        website="https://www.ultimatemarine.com/"
      ></Section>
      <Section
        theme="light"
        logo={wiresOnly.url}
        website="https://wiresonly.com/"
      ></Section>
    </Layout>
  )
}

export default Dealers

export const query = graphql`
  query DealersPage {
    craftAPI {
      bigThunder: asset(filename: "BT-color.jpg") {
        url
      }
      lipShip: asset(filename: "Lip-Ship_Logo_Silver.jpeg") {
        url
      }
      topGun: asset(filename: "Top-Gun-Logo-Red.jpg") {
        url
      }
      ultimateMarine: asset(filename: "UMLOGOS.png") {
        url
      }
      cmg: asset(filename: "CMGLogo600px.png") {
        url
      }
      wiresOnly: asset(filename: "wires-only-logo.png") {
        url
      }
    }
  }
`

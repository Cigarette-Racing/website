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
  theme?: Theme | 'red' | 'none'
  className?: string
}> = ({ children, className, theme = 'light', ...rest }) => (
  <section
    className={clsx(
      'relative overflow-hidden flex flex-col content-center justify-center items-center min-h-screen',
      {
        'bg-gray-0 text-white': theme === 'dark',
        'bg-darkRed text-white': theme === 'red',
        'text-white': theme === 'none',
      },
      className
    )}
    {...rest}
    data-component="Section"
  >
    {children}
  </section>
)

export const OneColumnTextBlockComponent = ({
  align = 'left',
  header,
  copy,
  theme = 'dark',
  className,
}: Omit<OneColumnTextBlock, 'type'> & { theme?: Theme; className: string }) => (
  <div
    className={clsx(className)}
    data-block-type="OneColumnTextBlockComponent"
  >
    <TextBlockComponent
      className={clsx({
        'max-w-xl mr-auto text-center lg:text-left': align === 'left',
        'max-w-2xl mx-auto text-center': align === 'center',
        'max-w-xl ml-auto text-center lg:text-right': align === 'right',
      })}
      header={header}
      headerClassname={clsx({
        'text-black': theme === 'light',
        'text-red': theme === 'dark',
      })}
      copy={copy}
    />
  </div>
)

const Dealers = (props) => {
  const {
    data: {
      craftAPI: { bigThunder, lipShip, topGun, ultimateMarine },
    },
  } = props

  return (
    <Layout>
      <SEO title="Dealers" slug={props.path} />
      <Section theme="light">
        <a
          className="flex flex-col items-center content-center"
          target="blank"
          href="https://www.bigthundermarine.com/"
        >
          <img src={bigThunder.url} alt="" className="w-1/2 block" />
        </a>
      </Section>
      <Section theme="light">
        <a
          className="flex flex-col items-center content-center"
          target="blank"
          href="http://www.lipship.com/"
        >
          <img src={lipShip.url} alt="" className="w-1/2 block" />
        </a>
      </Section>
      <Section theme="light">
        <a
          className="flex flex-col items-center content-center"
          target="blank"
          href="http://topgunyachts.com/"
        >
          <img src={topGun.url} alt="" className="w-1/2 block" />
        </a>
      </Section>
      <Section theme="light">
        <a
          className="flex flex-col items-center content-center"
          target="blank"
          href="https://www.ultimatemarine.com/"
        >
          <img src={ultimateMarine.url} alt="" className="w-1/2 block" />
        </a>
      </Section>
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
    }
  }
`

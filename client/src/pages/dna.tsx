import React from 'react'
import { PageProps, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'
import ExploreOurWorld, {
  ExploreContentItem,
} from '../molecules/explore-our-world'
import { Theme } from '../types/shared'
import clsx from 'clsx'
import { TextBlockComponent } from '../templates/common.components'
import content from './dna.json'
import { OneColumnTextBlock } from '../types/common'
import { LinkCta } from '../atoms/link-cta'
import { InPageCta } from '../atoms/in-page-cta'
import { FullWidthCarousel } from '../molecules/full-width-carousel'

const Section: React.FC<{
  theme?: Theme | 'red'
  className?: string
}> = ({ children, className, theme = 'light', ...rest }) => (
  <section
    className={clsx(
      'relative py-12 overflow-hidden',
      {
        'bg-gray-0 text-white': theme === 'dark',
        'bg-darkRed text-white': theme === 'red',
      },
      className
    )}
    {...rest}
    data-component="Section"
  >
    {children}
  </section>
)

const StaggeredHeader = ({
  className,
  style,
  text1,
  text2,
  theme = 'light',
  staggerDistance = 'normal',
}: {
  className?: string
  style?: React.CSSProperties
  text1: string
  text2: string
  theme?: Theme
  staggerDistance?: string
}) => {
  return (
    <div
      className={clsx(
        'font-heading font-light uppercase tracking-heading leading-none -mb-32 ',
        className
      )}
      style={style}
      data-component="StaggeredHeader"
    >
      <div
        className={clsx({
          'text-white': theme === 'light',
          'text-red': theme === 'dark',
        })}
      >
        {text1}
      </div>
      <div
        className={clsx({
          'ml-56': staggerDistance === 'normal',
          'ml-32': staggerDistance === 'tight',
          'text-white': theme === 'dark',
          'text-black': theme === 'light',
        })}
      >
        {text2}
      </div>
    </div>
  )
}

export const OneColumnTextBlockComponent = ({
  align = 'left',
  header,
  copy,
  theme = 'dark',
}: Omit<OneColumnTextBlock, 'type'> & { theme?: Theme }) => (
  <div
    className="my-12 px-4 xl:pl-0 mb-24 max-w-5xl mx-auto"
    data-block-type="OneColumnTextBlockComponent"
  >
    <TextBlockComponent
      className={clsx({
        'max-w-xl mr-auto text-left': align === 'left',
        'max-w-2xl mx-auto text-center': align === 'center',
        'max-w-xl ml-auto text-right': align === 'right',
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

const VerticalHeader = ({
  className,
  line1,
  line2,
}: {
  className?: string
  line1: string
  line2: string
}) => {
  return (
    <div
      className={clsx(
        'writing-mode-vertical-alt transform rotate-180 pointer-events-none text-gray-3 tracking-heading leading-none font-heading font-light text-9xl uppercase',
        className
      )}
      style={{
        backgroundImage:
          'linear-gradient(9.4deg, #adadad 33.76%, rgba(173, 173, 173, 0) 111.26%)',
        backgroundSize: '100%',
        // @ts-expect-error
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        '-moz-background-clip': 'text',
        '-moz-text-fill-color': 'transparent',
      }}
    >
      <div className="whitespace-no-wrap">{line1}</div>
      <div className="mt-40 whitespace-no-wrap">{line2}</div>
    </div>
  )
}

const OurWorldDNA = (props) => {
  const {
    data: {
      craftAPI: {
        introImage,
        schematicImage,
        imageBreak1,
        imageBreak2,
        scienceOnWater,
        simplyStunningForeground,
        simplyStunningBgRight,
        dnaHelmBreak,
        dnaMadeCraftedHeader,
        dnaMadeCraftedHeaderBg,
        dnaTrulyYours,
        dnaLegacyBg,
        dnaExperience1,
        exploreOurWorld1,
        exploreOurWorld2,
        exploreOurWorld3,
      },
    },
  } = props

  const exploreOurWorldContent = [
    {
      image: exploreOurWorld1[0].url,
      title: '_labs',
      url: '/labs',
      text:
        'Enter Cigarette Racing’s industry leading processes, research, and development.',
    },
    {
      image: exploreOurWorld2[0].url,
      title: '1969',
      url: '/1969',
      text: 'Explore the legacy and origins of an offshore legend.',
    },
    {
      image: exploreOurWorld3[0].url,
      title: 'News',
      url: '/news',
      text: 'The latest news & press happening at Cigarette Racing.',
    },
  ] as ExploreContentItem[]

  return (
    <Layout>
      <SEO title="DNA" slug={props.path} />
      <div className="relative bg-gray-0 min-w-screen min-h-screen overflow-hidden flex justify-center items-center">
        <img
          className="absolute h-full w-full object-contain z-index-0"
          // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2"
          src={`${schematicImage.url}?q=30&w=2400`}
          alt="boat schematic"
        />
        <div
          className="text-darkRed font-heading leading-none pointer-events-none font-light"
          style={{ fontSize: '335px' }}
        >
          DNA
        </div>
        <div className="absolute bottom-0 rounded-full bg-gray-0 uppercase mb-4 text-white font-body px-4 py-2 text-mi tracking-wide">
          Scroll to begin
        </div>
      </div>
      <img
        src={`${introImage.url}?q=30&w=2400`}
        alt="intro image"
        className="w-full object-cover max-h-screen"
      />
      <Section className="nextLevelPerformance pt-40" theme="dark">
        <div className="relative flex max-w-7xl mx-auto flex-col items-center">
          <StaggeredHeader
            text1="Next Level"
            text2="performance"
            theme="dark"
          />
          <div className="md:px-12 lg:px-20">
            <div className="px-4 mb-16 lg:mb-20 md:mt-8 lg:mt-16">
              <div className="relative">
                <img
                  src={`${imageBreak1.url}?q=30&w=2400`}
                  alt="next level performance"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(145deg, #093D42 9.24%, rgba(17, 60, 64, 0) 46.38%)',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <OneColumnTextBlockComponent
            {...content.nextLevelPerformance}
            align="center"
          />
        </div>
      </Section>
      <Section className="scienceOnWater pt-40" theme="red">
        <div className="relative flex max-w-8xl mx-auto flex-col items-center">
          <StaggeredHeader
            text1="Science"
            text2="on water"
            theme="light"
            className="text-9xl"
          />
          <div className="">
            <div className="md:mt-4 lg:mt-8 relative z-10">
              <img
                src={`${scienceOnWater.url}?q=30&w=2400`}
                alt="science on water"
              />
            </div>
          </div>
          <OneColumnTextBlockComponent
            {...content.scienceOnWater}
            align="center"
            theme="light"
          />
        </div>
      </Section>
      <img
        src={`${imageBreak2.url}?q=30&w=2400`}
        alt="next level performance"
        className="w-full object-cover max-h-screen"
      />
      <Section className="simplyStunning pt-0 pb-0" theme="dark">
        <div className="relative flex max-w-7xl mx-auto flex-col items-center">
          <img
            className="absolute w-1/2 left-1/2 transform -translate-x-1/2 mt-56"
            src={simplyStunningForeground.url}
            alt=""
          />
          <div className="flex items-center">
            <div className="w-1/2 pl-12">
              <VerticalHeader line1="Simply" line2="Stunning" />
            </div>
            <img className="w-1/2" src={simplyStunningBgRight.url} alt="" />
          </div>
          <OneColumnTextBlockComponent {...content.simplyStunning} />
        </div>
      </Section>
      <Section className="boatImage pt-0 pb-0" theme="dark">
        <img
          src={dnaHelmBreak.url}
          alt=""
          className="w-full object-cover max-h-screen"
        />
      </Section>
      <Section className="madeAndCrafted pt-24" theme="dark">
        <div className="relative flex max-w-7xl mx-auto flex-col items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={dnaMadeCraftedHeader.url}
              className="max-w-xl h-auto"
              alt=""
            />
          </div>
          <VerticalHeader
            line1="Made &"
            line2="Crafted"
            className="absolute right-0 mr-12"
          />
          <div className="flex items-center mt-64 pt-8">
            <img className="w-1/2" src={dnaMadeCraftedHeaderBg.url} />
            <div className="w-1/2 px-24 pt-64">
              <OneColumnTextBlockComponent {...content.madeAndCrafted} />
            </div>
          </div>
        </div>
      </Section>
      <Section className="trulyYours" theme="dark">
        <div className="relative flex max-w-8xl mx-auto flex-col items-center px-4">
          <StaggeredHeader
            text1="Truly"
            text2="Yours"
            theme="dark"
            staggerDistance="tight"
            className="inline-block self-start text-11xl pl-16"
            style={{
              backgroundImage: `url(${dnaTrulyYours.url})`,
              backgroundPosition: '25% 15%',
              // @ts-expect-error
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              '-moz-background-clip': 'text',
              '-moz-text-fill-color': 'transparent',
            }}
          />
          <img
            src={dnaTrulyYours.url}
            className="mt-16 z-10"
            style={{ mixBlendMode: 'lighten' }}
            alt=""
          />
          <OneColumnTextBlockComponent {...content.trulyYours} align="center" />
        </div>
      </Section>
      <Section className="1969" theme="dark">
        <img
          src={dnaLegacyBg.url}
          alt=""
          className="w-full object-cover max-h-screen object-top"
        />
        <div
          className="font-heading font-light text-center leading-none pointer-events-none mb-32"
          style={{
            fontSize: '340px',
            marginTop: '-170px',
            mixBlendMode: 'overlay',
          }}
        >
          1969
        </div>
        <OneColumnTextBlockComponent {...content['1969']} align="center" />
        <div className="flex justify-center -mt-8 mb-32">
          <Link to="/1969">
            <InPageCta variant="secondary">Explore Our Heritage</InPageCta>
          </Link>
        </div>
      </Section>
      <Section className="experience" theme="dark">
        <div className="font-heading font-light text-7xl uppercase tracking-heading leading-none text-center">
          <div className="text-red">The Experience</div>
          <div className="text-white">You Deserve</div>
        </div>
        <div className="my-24">
          <FullWidthCarousel
            items={[{ media: { image: dnaExperience1.url } }]}
          />
        </div>
        <OneColumnTextBlockComponent {...content.experience} align="center" />
      </Section>
      <Section className="exploreOurWorld" theme="dark">
        <div className="relative max-w-7xl mx-auto px-16">
          <div className="border-t border-gray-2 mb-24 pt-8">
            <ExploreOurWorld items={exploreOurWorldContent} />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default OurWorldDNA

export const query = graphql`
  query DNAPage {
    craftAPI {
      introImage: asset(filename: "dna-intro.jpg") {
        url
      }
      schematicImage: asset(filename: "dna-Schematic-Illustration.png") {
        url
      }
      imageBreak1: asset(filename: "dna-image-break-1.jpg") {
        url
      }
      imageBreak2: asset(filename: "dna-image-break-2.jpg") {
        url
      }
      scienceOnWater: asset(filename: "dna-science-on-water.png") {
        url
      }
      simplyStunningForeground: asset(
        filename: "dna-simply-stunning-foreground.jpg"
      ) {
        url
      }
      simplyStunningBgRight: asset(
        filename: "dna-simply-stunning-bg-right.jpg"
      ) {
        url
      }
      dnaHelmBreak: asset(filename: "dna-helm-break.png") {
        url
      }
      dnaMadeCraftedHeader: asset(filename: "dna-made-in-the-usa.jpg") {
        url
      }
      dnaMadeCraftedHeaderBg: asset(filename: "dna-made-in-the-usa-bg.jpg") {
        url
      }
      dnaTrulyYours: asset(filename: "dna-truly-yours.png") {
        url
      }
      dnaLegacyBg: asset(filename: "dna-legacy-bg.jpg") {
        url
      }
      dnaExperience1: asset(filename: "dna-experience-slider-1.jpg") {
        url
      }
      exploreOurWorld1: assets(filename: "1up-image-placeholder.jpg") {
        url
      }
      exploreOurWorld2: assets(filename: "explore-our-world-2.png") {
        url
      }
      exploreOurWorld3: assets(filename: "news-00001.jpg") {
        url
      }
    }
  }
`

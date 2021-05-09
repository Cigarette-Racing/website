import React from 'react'
import { graphql, Link } from 'gatsby'
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

const Section: React.FC<{
  theme?: Theme | 'red' | 'none'
  className?: string
}> = ({ children, className, theme = 'light', ...rest }) => (
  <section
    className={clsx(
      'relative py-12 overflow-hidden',
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

const StaggeredHeader = ({
  className,
  centered = true,
  style,
  text1,
  text2,
  theme = 'light',
  staggerDistance = 'normal',
}: {
  className?: string
  centered: boolean
  style?: React.CSSProperties
  text1: string
  text2: string
  theme?: Theme
  staggerDistance?: string
}) => {
  console.log(centered)

  return (
    <div
      className={clsx(
        'font-heading font-light uppercase tracking-heading leading-none -mb-8 md:-mb-16 relative z-10',
        { 'lg:text-left lg:-mb-32 text-center ': centered },
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
          'lg:ml-56': staggerDistance === 'normal',
          'lg:ml-32': staggerDistance === 'tight',
          'ml-12 pl-1': centered === false,
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
        'writing-mode-vertical-alt transform rotate-180 pointer-events-none text-gray-3 tracking-heading leading-none font-heading font-light text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-right lg:text-left uppercase',
        className
      )}
      style={{
        backgroundImage:
          'linear-gradient(9.4deg, #adadad 33.76%, rgba(173, 173, 173, 0) 111.26%)',
        backgroundSize: '100%',
        // @ts-expect-error
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        MozBackgroundClip: 'text',
        MozTextFillColor: 'transparent',
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
      title: 'labs',
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
        <div className="relative text-darkRed font-heading leading-none pointer-events-none font-light text-huge sm:text-huge2 md:text-huge3">
          DNA
        </div>
        <div className="absolute bottom-0 rounded-full bg-gray-0 uppercase mb-4 text-white font-body px-4 py-2 text-mi tracking-wide">
          Scroll to begin
        </div>
      </div>
      <img
        src={`${introImage.url}?q=30&w=2400`}
        alt="intro image"
        className="w-full object-cover max-h-screen min-h-50vh md:min-h-0"
      />
      <Section className="nextLevelPerformance pt-32" theme="dark">
        <div className="relative flex max-w-7xl mx-auto flex-col items-center">
          <StaggeredHeader
            text1="Next Level"
            text2="performance"
            theme="dark"
            className="text-3xl sm:text-5xl lg:text-8xl"
          />
          <div className="md:px-12 lg:px-20">
            <div className="px-4 mb-10 lg:mb-20 md:mt-8 lg:mt-16">
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
            className="my-12 px-4 xl:pl-0 mb-8 md:mb-24 max-w-5xl mx-auto"
          />
        </div>
      </Section>
      <Section className="scienceOnWater pt-32 pb-24" theme="red">
        <div className="relative flex max-w-8xl mx-auto flex-col items-center">
          <StaggeredHeader
            text1="Science"
            text2="on water"
            theme="light"
            className="text-4xl sm:text-5xl lg:text-9xl px-10"
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
            className="my-12 px-4 xl:pl-0 mb-8 md:mb-24 max-w-5xl mx-auto"
          />
        </div>
      </Section>
      <img
        src={`${imageBreak2.url}?q=30&w=2400`}
        alt="next level performance"
        className="w-full object-cover max-h-screen"
      />
      <Section className="simplyStunning pt-0 pb-20" theme="dark">
        <div className="relative flex max-w-7xl mx-auto flex-col items-center">
          <div className="flex items-start lg:items-center">
            <div className="w-1/2 lg:pl-12 flex justify-end lg:block pr-12 lg:pr-0 pt-4 lg:pt-0">
              <VerticalHeader line1="Simply" line2="Stunning" />
            </div>
            <div className="w-1/2">
              <img
                className="min-h-50vh"
                src={simplyStunningBgRight.url}
                alt=""
              />
            </div>
          </div>
          <img
            className="lg:absolute w-5/6 lg:w-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:mt-56 -mt-40 mb-8"
            src={simplyStunningForeground.url}
            alt=""
          />
          <OneColumnTextBlockComponent
            {...content.simplyStunning}
            className="my-12 px-4 xl:pl-0 mb-8 md:mb-24 max-w-5xl mx-auto"
          />
        </div>
      </Section>
      <Section className="boatImage pt-0 pb-0 -mb-4 lg:mb-0" theme="dark">
        <img
          src={dnaHelmBreak.url}
          alt=""
          className="w-full object-cover max-h-screen"
        />
      </Section>
      <Section className="madeAndCrafted pt-0 lg:pt-24" theme="dark">
        <div className="relative grid grid-cols-2 lg:mt-64 max-w-7xl mx-auto flex-col items-center">
          <div className="lg:row-span-2 overflow-hidden flex justify-center">
            <img
              className="dnaMadeCraftedHeaderBg max-w-sm md:max-w-full"
              src={dnaMadeCraftedHeaderBg.url}
            />
          </div>
          <VerticalHeader
            line1="Made &"
            line2="Crafted"
            className="absolute top-0 right-0 mt-12 mr-4 lg:mr-12 lg:-top-3/12 lg:-mt-12"
          />
          <div className="dnaMadeCraftedHeader lg:absolute col-span-2 w-5/6 top-0 mx-auto -mt-32 sm:-mt-16 md:-mt-24 lg:mt-0 lg:w-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2">
            <img
              src={dnaMadeCraftedHeader.url}
              // className="max-w-xl h-auto"
              alt=""
            />
          </div>
          <div className="px-4 md:px-24 mt-20 lg:mt-48 lg:pt-64 col-span-2 lg:col-span-1 flex justify-center lg:block">
            <OneColumnTextBlockComponent
              {...content.madeAndCrafted}
              className="my-12 px-4 xl:pl-0 mb-8 md:mb-24 max-w-5xl mx-auto"
            />
          </div>
          {/* <div className="lg:flex items-center mt-64 pt-8">
          </div> */}
        </div>
      </Section>
      <Section className="trulyYours bg-black md:bg-gray-0" theme="none">
        <div className="relative flex max-w-8xl mx-auto flex-col items-center mb-6">
          <StaggeredHeader
            text1="Truly"
            text2="Yours"
            theme="dark"
            className="lg:self-start text-5xl sm:text-5xl lg:text-11xl px-12"
            centered={false}
            // staggerDistance="tight"
            style={{
              backgroundImage: `url(${dnaTrulyYours.url})`,
              backgroundPosition: '25% 15%',
              // @ts-expect-error
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              MozBackgroundClip: 'text',
              MozTextFillColor: 'transparent',
            }}
          />
          <img
            src={dnaTrulyYours.url}
            className="sm:mt-10 md:mt-12 lg:mt-16 z-10"
            style={{ mixBlendMode: 'lighten' }}
            alt=""
          />
          <OneColumnTextBlockComponent
            {...content.trulyYours}
            align="center"
            className="my-12 px-4 xl:pl-0 mb-8 md:mb-24 max-w-5xl mx-auto"
          />
        </div>
      </Section>
      <Section className="1969 pt-0 md:pt-12" theme="dark">
        <img
          src={dnaLegacyBg.url}
          alt=""
          className="w-full object-cover min-h-50vh md:min-h-0 max-h-screen object-top"
        />
        <div
          className="font-heading font-light text-center leading-none pointer-events-none mb-20 text-huge sm:text-huge2 md:text-huge3 -mt-20 sm:-mt-32 md:-mt-40"
          style={{
            mixBlendMode: 'overlay',
          }}
        >
          1969
        </div>
        <OneColumnTextBlockComponent
          className="my-12 px-4 xl:pl-0 mb-8 md:mb-12 max-w-5xl mx-auto"
          {...content['1969']}
          align="center"
        />
        <div className="flex justify-center mb-32">
          <Link to="/1969">
            <InPageCta variant="secondary">Explore Our Heritage</InPageCta>
          </Link>
        </div>
      </Section>
      <Section className="experience" theme="dark">
        <div className="font-heading font-light uppercase tracking-heading leading-none text-center text-3xl sm:text-5xl md:text-8xl">
          <div className="text-red">The Experience</div>
          <div className="text-white">
            You
            <br className="md:hidden" /> Deserve
          </div>
        </div>
        <div className="mt-10 mb-16">
          <FullWidthCarousel
            items={[{ media: { image: dnaExperience1.url } }]}
          />
        </div>
        <OneColumnTextBlockComponent
          {...content.experience}
          align="center"
          className="my-12 px-4 xl:pl-0 mb-8 md:mb-24 max-w-5xl mx-auto"
        />
      </Section>
      <Section className="exploreOurWorld" theme="dark">
        <div className="relative max-w-7xl mx-auto md:px-16">
          <div className="md:mb-24">
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
      dnaTrulyYours: asset(filename: "Personalization-boat.png") {
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

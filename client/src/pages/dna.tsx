import React from 'react'
import { PageProps, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'
import ExploreOurWorld from '../molecules/explore-our-world'

const StaggeredHeader = ({ text1, text2 }) => {
  return (
    <div className="font-heading font-light text-7xl uppercase tracking-heading leading-none">
      <div className="text-red">{text1}</div>
      <div className="ml-56">{text2}</div>
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
        dnaExperience,
      },
    },
  } = props

  return (
    <Layout>
      <SEO title="DNA" slug={props.path} />
      <div className="relative bg-gray-0 min-w-screen min-h-screen overflow-hidden">
        <img
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2"
          src={`${schematicImage.url}?q=30&w=2400`}
          alt="boat schematic"
        />
      </div>
      <img src={`${introImage.url}?q=30&w=2400`} alt="intro image" />
      <div className="nextLevelPerformance">
        <StaggeredHeader text1="Next Level" text2="performance" />
        <img
          src={`${imageBreak1.url}?q=30&w=2400`}
          alt="next level performance"
        />
      </div>
      <div className="scienceOnWater">
        <StaggeredHeader text1="Science" text2="on water" />
        <img
          src={`${scienceOnWater.url}?q=30&w=2400`}
          alt="next level performance"
        />
      </div>
      <img
        src={`${imageBreak2.url}?q=30&w=2400`}
        alt="next level performance"
      />
      <div className="relative simplyStunning">
        <img
          className="absolute w-1/2 left-1/2 transform -translate-x-1/2"
          src={simplyStunningForeground.url}
          alt=""
        />
        <div className="flex">
          <div className="w-1/2">some stuff</div>
          <img className="w-1/2" src={simplyStunningBgRight.url} alt="" />
        </div>
      </div>
      <div>
        <img src={dnaHelmBreak.url} alt="" />
      </div>
      <div className="experience">
        <img src={dnaExperience?.url} alt="" />
      </div>
      <div>
        <ExploreOurWorld />
      </div>
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
      scienceOnWater: asset(filename: "dna-science-on-water.jpg") {
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
      dnaHelmBreak: asset(filename: "dna-helm-break.jpg") {
        url
      }
      dnaExperience: asset(filename: "dna-experience.jpg") {
        url
      }
    }
  }
`

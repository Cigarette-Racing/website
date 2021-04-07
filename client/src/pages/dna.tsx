import React from 'react'
import { PageProps, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'

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
      <div className="nextLevelPerformance font-heading font-light text-7xl uppercase tracking-heading">
        <div className="text-red">Next Level</div>
        <div>Performance</div>
        <img
          src={`${imageBreak1.url}?q=30&w=2400`}
          alt="next level performance"
        />
      </div>
      <img
        src={`${imageBreak2.url}?q=30&w=2400`}
        alt="next level performance"
      />
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
    }
  }
`

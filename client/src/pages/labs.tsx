import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'

const LabsTemplate = (props: PageProps<GatsbyTypes.LabsPageQuery>) => {
  const {
    data: {
      craftAPI: { entries: labEntries },
    },
  } = props

  const firstLabEntry = labEntries.slice(0, 1)[0]
  const allButFirstLabEntries = labEntries.slice(1)

  return (
    <Layout>
      <SEO title="Labs" slug={props.path} />
      <PrimaryLab labEntry={firstLabEntry} />

      {allButFirstLabEntries.map((labEntry: any) => {
        return <Lab labEntry={labEntry} />
      })}
    </Layout>
  )
}

const PrimaryLab = ({ labEntry }: any) => {
  return (
    <div>
      <Typography variant="h1">{labEntry.title}</Typography>
      <Typography variant="p1">{labEntry.articleExcerpt}</Typography>
      <img src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`} alt="" />
    </div>
  )
}

const Lab = ({ labEntry }: any) => {
  return (
    <div>
      <Typography variant="h2">{labEntry.title}</Typography>
      <Typography variant="p1">{labEntry.articleExcerpt}</Typography>
    </div>
  )
}

export default LabsTemplate

export const query = graphql`
  query {
    craftAPI {
      entries(section: "labs") {
        slug
        title
        ... on CraftAPI_labs_labs_Entry {
          articleExcerpt
          imageObject {
            ... on CraftAPI_imageObject_BlockType {
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`

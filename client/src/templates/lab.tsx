import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'

const LabTemplate = (props: PageProps<GatsbyTypes.LabPageQuery>) => {
  const {
    data: {
      craftAPI: { entry: labEntry },
    },
  } = props

  return (
    <Layout>
      <SEO title={labEntry.title} slug={props.path} />
      {labEntry.title}
    </Layout>
  )
}

export default LabTemplate

export const query = graphql`
  query LabPage($craftSlug: String) {
    craftAPI {
      entry(slug: [$craftSlug]) {
        title
      }
    }
  }
`

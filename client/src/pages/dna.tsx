import React from 'react'
import { PageProps, graphql, Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'

const OurWorldDNA = (props) => {
  return (
    <Layout>
      <SEO title="DNA" slug={props.path} />
      <Typography variant="h1">DNA</Typography>
    </Layout>
  )
}

export default OurWorldDNA

import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'

const OurWorld1969 = (props) => {
  return (
    <Layout>
      <SEO title="1969" slug={props.path} />
      <Typography variant="h1">1969</Typography>
    </Layout>
  )
}

export default OurWorld1969

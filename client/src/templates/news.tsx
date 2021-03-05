import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import SEO from '../components/seo'

const NewsArticleTemplate = (
  props: PageProps<GatsbyTypes.NewsArticleQuery>
) => {
  const {
    data: {
      craftAPI: { entry: newsArticleEntry },
    },
  } = props

  return (
    <Layout>
      <SEO title={newsArticleEntry.title} slug={props.path} />
      {newsArticleEntry.title}
    </Layout>
  )
}

export default NewsArticleTemplate

export const query = graphql`
  query NewsArticle($craftSlug: String) {
    craftAPI {
      entry(slug: [$craftSlug]) {
        title
      }
    }
  }
`

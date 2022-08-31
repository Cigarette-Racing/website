/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export interface SEOProps {
  description?: string
  image?: string
  lang?: string
  meta?: React.ReactNode[]
  slug?: string
  title?: string
}

function SEO({
  description = '',
  image,
  lang = 'en',
  meta = [],
  slug = '',
  title,
}: SEOProps) {
  const { site } = useStaticQuery<GatsbyTypes.SEOMetadataQueryQuery>(
    graphql`
      query SEOMetadataQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const seoTitle = title || site?.siteMetadata?.title
  const metaDescription = description || site?.siteMetadata?.description
  const canonicalUrl = slug
    ? `${site?.siteMetadata.siteUrl!}${slug}`
    : site?.siteMetadata.siteUrl!
  const imageUrl =
    image && image.startsWith('/')
      ? `${site?.siteMetadata.siteUrl!}${image}`
      : image

  return (
    <Helmet
      htmlAttributes={{ lang }}
      defaultTitle={site?.siteMetadata?.title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={metaDescription} />
      <meta name="image" content={imageUrl} />
      {imageUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* OpenGraph tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={metaDescription} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site?.siteMetadata?.author!} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Additional tags */}
      <meta
        name="facebook-domain-verification"
        content="2pc60e3rpwaik8sr5d6ipr66blzr87"
      />
      {meta}
    </Helmet>
  )
}

export default SEO

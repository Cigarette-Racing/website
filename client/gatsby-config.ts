require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
import express, { Application } from 'express'

export const siteMetadata = {
  title: `Cigarette Racing`,
  description: `The world champion racing team defining performance boating since 1969.`,
  author: `@cigaretteracing`,
  siteUrl:
    // Optional override from .env file
    process.env.SITE_URL ||
    // Next 3 from Netlify (https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata)
    process.env.DEPLOY_PRIME_URL ||
    process.env.DEPLOY_URL ||
    process.env.URL ||
    // Default to localhost
    'http://localhost:17007',
}

export const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-graphql`,
    options: {
      typeName: 'CraftAPI',
      fieldName: 'craftAPI',
      url: `https://cigracingapi.frb.io/actions/graphql/api`,
      refetchInterval: process.env.NODE_ENV === 'development' ? 300 : null,
    },
  },
  `gatsby-plugin-typescript`,
  // {
  //   resolve: `gatsby-plugin-typegen`,
  //   options: {
  //     emitSchema: {
  //       'src/__generated__/gatsby-introspection.json': true,
  //     },
  //     emitPluginDocuments: {
  //       'src/__generated__/gatsby-plugin-documents.graphql': true,
  //     },
  //   },
  // },
  {
    resolve: `gatsby-plugin-svgr`,
    options: {
      include: /svgs/,
      icon: true,
      replaceAttrValues: {
        '#fff': 'currentColor',
      },
    },
  },
  `gatsby-plugin-postcss`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `cigarette-racing`,
      short_name: `cigarette`,
      start_url: `/`,
      background_color: `#d12026`,
      theme_color: `#d12026`,
      display: `minimal-ui`,
      icon: `src/images/favicon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  `gatsby-plugin-sitemap`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]

// Realistically handle form submissions locally
export const developMiddleware = (app: Application) => {
  app.use(express.urlencoded())
  app.post('/', (req, res) => {
    console.log(`Form submissions for "${req.body['form-name']}":`)
    console.log(JSON.stringify(req.body, null, 2))
    res.send()
  })
}

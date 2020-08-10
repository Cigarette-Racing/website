import metadata from './content/metadata'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

export const siteMetadata = {
  title: `Cigarette Racing`,
  description: `Cigarette Racing`,
  author: `@cigaretteracing`,
  metadata,
}

export const plugins = [
  `gatsby-transformer-yaml`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/content/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `boats`,
      path: `${__dirname}/content/boats`,
    },
  },
  {
    resolve: `gatsby-source-graphql`,
    options: {
      typeName: 'CraftAPI',
      fieldName: 'craftAPI',
      url: `${process.env.GATSBY_CRAFT_GRAPHQL_API}`,
      // refetchInterval: 20,
    },
  },
  `gatsby-plugin-typescript`,
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      emitSchema: {
        'src/__generated__/gatsby-introspection.json': true,
      },
      emitPluginDocuments: {
        'src/__generated__/gatsby-plugin-documents.graphql': true,
      },
    },
  },
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
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]

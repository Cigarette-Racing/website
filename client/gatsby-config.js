require('ts-node').register({ files: true })

module.exports = {
  siteMetadata: {
    title: `Cigarette Racing`,
    description: `Cigarette Racing`,
    author: `@cigaretteracing`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-typescript`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

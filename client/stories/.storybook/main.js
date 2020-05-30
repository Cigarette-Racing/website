const { resolve } = require('path')

const pathToSvgs = resolve(__dirname, '../../src/svgs')

module.exports = {
  stories: ['../**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config) => {
    /**
     * Begin Gatsby changes
     *
     * See https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
     */
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader')
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ]
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
    ]
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main']
    /** End Gatsby changes */

    // Remove Storybook's default SVG handling
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test.test('.svg')
    )
    fileLoaderRule.exclude = pathToSvgs

    // Use the SVGR loader for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      include: pathToSvgs,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            replaceAttrValues: {
              '#fff': 'currentColor',
            },
          },
        },
      ],
    })

    // Add postcss-loader for tailwind
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('tailwindcss'), require('autoprefixer')],
          },
        },
      ],
    })

    // Handle Typescript files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}

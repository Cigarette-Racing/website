const { resolve } = require('path')

const pathToSvgs = resolve(__dirname, '../src/svgs')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config) => {
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

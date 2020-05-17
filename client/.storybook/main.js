module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds',
  ],
  webpackFinal: (config) => {
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

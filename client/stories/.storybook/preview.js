import { addParameters, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { action } from '@storybook/addon-actions'
import '../../src/styles.css'
import '../../src/fonts/fonts.css'

addDecorator(centered)

addParameters({
  options: {
    showRoots: true,
  },
  backgrounds: [
    { name: 'UI Background', value: '#1e1e1e', default: true },
    { name: 'Red', value: '#d12026' },
    { name: 'Black', value: '#000000' },
    { name: 'Gray 1', value: '#333333' },
    { name: 'Gray 2', value: '#4f4f4f' },
    { name: 'Gray 3', value: '#828282' },
    { name: 'Gray 4', value: '#bdbdbd' },
    { name: 'Gray 5', value: '#e0e0e0' },
    { name: 'Gray 6', value: '#f2f2f2' },
    { name: 'White', value: '#ffffff' },
  ],
})

/**
 * Begin Gatsby changes
 *
 * See https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
 */
// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
global.__PATH_PREFIX__ = ''
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}
/** End Gatsby changes */

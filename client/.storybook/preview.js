import { addParameters, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import '../src/index.css'
import '../src/fonts/fonts.css'

addDecorator(centered)

addParameters({
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

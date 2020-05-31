import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Tabs, Tab } from '../src/atoms/tabs'
// @reach/router is a transitive dependency via Gatsby
import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from '@reach/router'

const source = createMemorySource('/a')
const history = createHistory(source)

export default {
  title: 'Atoms/Tabs',
  component: Tabs,
  decorators: [withKnobs],
}

export const Sandbox = () => {
  return (
    <LocationProvider history={history}>
      <Tabs>
        <Tab to="/a">Category One</Tab>
        <Tab to="/b">Category Two</Tab>
        <Tab to="/c">Category Three</Tab>
        <Tab to="/d">Category Four</Tab>
      </Tabs>
    </LocationProvider>
  )
}

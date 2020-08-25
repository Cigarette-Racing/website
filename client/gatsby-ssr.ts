/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import { GatsbySSR } from 'gatsby'

// From https://github.com/tgallacher/gatsby-plugin-remove-generator/blob/next/src/gatsby-ssr.js
const isGeneratorTag = (type: string, name: string) =>
  type === 'meta' && name === 'generator'
export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = async ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents().filter(
    ({ type, props: { name = '' } = {} }) => !isGeneratorTag(type, name)
  )
  replaceHeadComponents(headComponents)
}

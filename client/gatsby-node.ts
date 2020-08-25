/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'

const createBoatPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions
  const boatTemplate = resolve(__dirname, 'src/templates/boat.tsx')
  const query = /* GraphQL */ `
    query AllBoats {
      craftAPI {
        entries(type: "boats") {
          slug
        }
      }
    }
  `
  const result = await graphql<{
    craftAPI: {
      entries: {
        slug: string
      }[]
    }
  }>(query)
  if (result.errors) throw result.errors

  result.data!.craftAPI.entries.forEach(({ slug }) => {
    createPage({
      path: `/boats/${slug}`,
      component: boatTemplate,
      context: {
        slug: `/boats/${slug}`,
        craftSlug: slug,
      },
    })
  })
}

export const createPages: GatsbyNode['createPages'] = async (...args) => {
  await createBoatPages(...args)
}

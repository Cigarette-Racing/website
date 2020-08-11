/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { GatsbyNode, CreateSchemaCustomizationArgs } from 'gatsby'
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

const addSlugs: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'BoatsYaml') {
    const boatName = node.boatName as string
    createNodeField({
      node,
      name: 'slug',
      value: `/boats/${boatName.toLowerCase()}`,
    })
    createNodeField({
      node,
      name: 'craftSlug',
      value: `${boatName.toLowerCase()}`,
    })
  }
}

export const onCreateNode: GatsbyNode['onCreateNode'] = (...args) => {
  addSlugs(...args)
}

export const createSchemaCustomization = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions
  // Have to manually type these because Gatsby is freaking out
  // and refuses to link up these images in the YAML file
  const Media = `
    image: File @fileByRelativePath
  `
  const typeDefs = [
    'BoatsYamlSectionsBlocksItemsMedia',
    'BoatsYamlSectionsBlocksImages',
    'BoatsYamlSectionsBlocksMedia',
  ]
    .map((type) => `type ${type} { ${Media} }`)
    .join('\n')
  createTypes(typeDefs)
}

import { graphql, useStaticQuery } from 'gatsby'
import { findHeroSection } from '../../types/boat'

export const useBoatsQuery = () => {
  const data = useStaticQuery<GatsbyTypes.HeaderBoatsMenuQuery>(
    graphql`
      query HeaderBoatsMenu {
        boats: allBoatsYaml(sort: { fields: metadata___menuSort }) {
          nodes {
            boatName
            fields {
              slug
            }
            metadata {
              menuSort
              menuName
            }
            sections {
              type
              stats {
                percentage
                text
                label
              }
              backgroundMedia {
                image {
                  childImageSharp {
                    fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return extractBoats(data)
}

const extractBoats = (data: GatsbyTypes.HeaderBoatsMenuQuery) => {
  return data.boats.nodes.map((node) => {
    const heroSection = findHeroSection(node.sections!)!
    return {
      boatName: node.boatName,
      menuName: node.metadata?.menuName,
      slug: node.fields?.slug,
      ...heroSection,
    }
  })
}

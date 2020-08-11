import { graphql, useStaticQuery } from 'gatsby'
import orderBy from 'lodash/orderBy'
import { Stat } from '../../types/boat'

export const useBoatsQuery = () => {
  const data = useStaticQuery<GatsbyTypes.HeaderBoatsMenuQuery>(
    graphql`
      query HeaderBoatsMenu {
        craftAPI {
          entries(type: "boats") {
            __typename
            ... on CraftAPI_boats_boats_Entry {
              title
              slug
              boatNameLong
              stats: boatStats {
                ... on CraftAPI_boatStats_stat_BlockType {
                  label: statLabel
                  percentage: statPercentage
                  text: statText
                }
              }
              boatMetadata {
                ... on CraftAPI_boatMetadata_BlockType {
                  menuName
                  menuSortOrder
                }
              }
              backgroundMedia: singleMedia {
                ... on CraftAPI_singleMedia_BlockType {
                  image {
                    ... on CraftAPI_s3_Asset {
                      url
                    }
                  }
                  alt
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
  const menuItems = data.craftAPI.entries?.map((entry) => {
    if (entry?.__typename !== 'CraftAPI_boats_boats_Entry') {
      return
    }
    return {
      boatName: entry?.title!,
      menuName: entry?.boatMetadata?.[0]?.menuName! || entry?.boatNameLong!,
      menuOrder: (entry?.boatMetadata?.[0]?.menuSortOrder as Number) || 0,
      slug: entry?.slug!,
      stats: entry?.stats?.map(
        (stat) =>
          ({
            label: stat?.label!,
            percentage: stat?.percentage! as Number,
            text: stat?.text!,
          } as Stat)
      )!,
      backgroundMedia: {
        image: {
          publicUrl: entry?.backgroundMedia?.[0]?.image?.[0]?.url!,
        },
        alt: entry?.backgroundMedia?.[0]?.alt,
      },
    }
  })
  return orderBy(menuItems, ['menuOrder'])
}

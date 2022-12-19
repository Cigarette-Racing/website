import { graphql, useStaticQuery } from 'gatsby'
import { pipe, groupBy, mapValues, orderBy, cloneDeep } from 'lodash/fp'
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
                  menuCategory
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

export type HeaderBoatMenuCategories =
  | 'all'
  | 'centerConsole'
  | 'heritage'
  | 'performance'
  | 'none'

export type HeaderBoat = {
  boatName: string
  menuName: string
  menuOrder: Number
  menuCategory: string
  slug: string
  stats: Stat[]
  backgroundMedia: {
    image: {
      publicUrl: string
    }
    alt: GatsbyTypes.Maybe<string>
  }
}

const extractBoats = (data: GatsbyTypes.HeaderBoatsMenuQuery) => {
  // Use .flatMap to convince Typescript that there will never be
  // `undefined` values in the array... 🤦‍♂️
  const menuItems: HeaderBoat[] | undefined = data.craftAPI.entries?.flatMap(
    (entry) => {
      if (entry?.__typename !== 'CraftAPI_boats_boats_Entry') {
        return []
      }
      return {
        boatName: entry?.title!,
        menuName: entry?.boatMetadata?.[0]?.menuName! || entry?.boatNameLong!,
        menuOrder: (entry?.boatMetadata?.[0]?.menuSortOrder as Number) || 0,
        menuCategory: entry?.boatMetadata?.[0]?.menuCategory || 'none',
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
    }
  )

  const menuItemsClone = cloneDeep(menuItems)

  const menuItemsAll = menuItemsClone?.map((item) => {
    item.menuCategory = 'all'
    return item
  })

  const menuItemsWithAll = menuItemsAll?.concat(menuItems)

  const preparedMenuItems = pipe(
    groupBy('menuCategory'),
    mapValues(orderBy(['menuOrder'])(['asc']))
  )(menuItemsWithAll) as Record<HeaderBoatMenuCategories, typeof menuItems>

  return preparedMenuItems
}

export const categoriesToDisplay: Record<HeaderBoatMenuCategories, string> = {
  all: 'All Boats',
  centerConsole: 'Center Console',
  performance: 'Performance',
  heritage: '',
  none: '',
}

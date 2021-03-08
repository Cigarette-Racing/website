import { graphql, useStaticQuery } from 'gatsby'
import { pipe, groupBy, mapValues, orderBy, cloneDeep } from 'lodash/fp'

export const useCategoriesQuery = () => {
  const data = useStaticQuery<GatsbyTypes.CategoriesQuery>(
    graphql`
      query Categories {
        craftAPI {
          categories(group: "articleCategories") {
            id
            title
          }
        }
      }
    `
  )
  return extractCategories(data)
}

const convertCategoriesToOptions = (categories) => {
  const categoryOptions = []

  categoryOptions.push({
    id: '1',
    value: 'all',
    label: 'All',
  })

  categories.map((category) => {
    categoryOptions.push({
      id: category.id,
      value: category.title,
      label: category.title,
    })
  })

  return categoryOptions
}

const extractCategories = (data: any) => {
  const {
    craftAPI: { categories },
  } = data

  return convertCategoriesToOptions(categories)
}

// export type HeaderBoatMenuCategories =
//   | 'all'
//   | 'performanceCenterConsole'
//   | 'heritage'
//   | 'highPerformance'
//   | 'none'

// export type HeaderBoat = {
//   boatName: string
//   menuName: string
//   menuOrder: Number
//   menuCategory: string
//   slug: string
//   stats: Stat[]
//   backgroundMedia: {
//     image: {
//       publicUrl: string
//     }
//     alt: GatsbyTypes.Maybe<string>
//   }
// }

// const extractBoats = (data: GatsbyTypes.HeaderBoatsMenuQuery) => {
//   // Use .flatMap to convince Typescript that there will never be
//   // `undefined` values in the array... 🤦‍♂️
//   const menuItems: HeaderBoat[] | undefined = data.craftAPI.entries?.flatMap(
//     (entry) => {
//       if (entry?.__typename !== 'CraftAPI_boats_boats_Entry') {
//         return []
//       }
//       return {
//         boatName: entry?.title!,
//         menuName: entry?.boatMetadata?.[0]?.menuName! || entry?.boatNameLong!,
//         menuOrder: (entry?.boatMetadata?.[0]?.menuSortOrder as Number) || 0,
//         menuCategory: entry?.boatMetadata?.[0]?.menuCategory || 'none',
//         slug: entry?.slug!,
//         stats: entry?.stats?.map(
//           (stat) =>
//             ({
//               label: stat?.label!,
//               percentage: stat?.percentage! as Number,
//               text: stat?.text!,
//             } as Stat)
//         )!,
//         backgroundMedia: {
//           image: {
//             publicUrl: entry?.backgroundMedia?.[0]?.image?.[0]?.url!,
//           },
//           alt: entry?.backgroundMedia?.[0]?.alt,
//         },
//       }
//     }
//   )

//   const menuItemsClone = cloneDeep(menuItems)

//   const menuItemsAll = menuItemsClone?.map((item) => {
//     item.menuCategory = 'all'
//     return item
//   })

//   const menuItemsWithAll = menuItemsAll?.concat(menuItems)

//   const preparedMenuItems = pipe(
//     groupBy('menuCategory'),
//     mapValues(orderBy(['menuOrder'])(['asc']))
//   )(menuItemsWithAll) as Record<HeaderBoatMenuCategories, typeof menuItems>

//   return preparedMenuItems
// }

// export const categoriesToDisplay: Record<HeaderBoatMenuCategories, string> = {
//   all: 'All Boats',
//   performanceCenterConsole: 'Performance Center Console',
//   highPerformance: 'High Performance',
//   heritage: '',
//   none: '',
// }
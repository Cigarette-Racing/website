import { useStaticQuery, graphql } from 'gatsby'

export const useBackgroundsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query Backgrounds {
        craftAPI {
          backgrounds: globalSet(handle: "backgrounds") {
            ... on CraftAPI_backgrounds_GlobalSet {
              customizationSectionBackground {
                ... on CraftAPI_s3_Asset {
                  url
                }
              }
              discoverSectionBackground {
                ... on CraftAPI_s3_Asset {
                  url
                }
              }
              inquiryModalBackground {
                ... on CraftAPI_s3_Asset {
                  url
                }
              }
            }
          }
        }
      }
    `
  )
  return {
    customizationSection:
      (data.craftAPI.backgrounds?.customizationSectionBackground?.[0]
        ?.url as string) || '',
    discoverSection:
      (data.craftAPI.backgrounds?.discoverSectionBackground?.[0]
        ?.url as string) || '',
    inquiryModal:
      (data.craftAPI.backgrounds?.inquiryModalBackground?.[0]?.url as string) ||
      '',
  }
}

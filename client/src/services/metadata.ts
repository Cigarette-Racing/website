import { useStaticQuery, graphql } from 'gatsby'

export const useMetadataQuery = () => {
  const data = useStaticQuery<GatsbyTypes.ContactMetadataQuery>(
    graphql`
      query ContactMetadata {
        craftAPI {
          config: globalSet(handle: "configuration") {
            ... on CraftAPI_configuration_GlobalSet {
              emailAddresses {
                ... on CraftAPI_emailAddresses_BlockType {
                  careers
                  contact
                  support
                  inquiries
                }
              }
              address {
                ... on CraftAPI_address_BlockType {
                  city
                  state
                  street
                  zip
                }
              }
              phoneNumber {
                ... on CraftAPI_phoneNumber_BlockType {
                  raw
                  pretty
                }
              }
              socialLinks {
                ... on CraftAPI_socialLinks_BlockType {
                  instagram
                  facebook
                  youtube
                }
              }
            }
          }
        }
      }
    `
  )
  return {
    address: data.craftAPI.config.address[0],
    emailAddresses: data.craftAPI.config.emailAddresses[0],
    phoneNumber: data.craftAPI.config.phoneNumber[0],
    socialLinks: data.craftAPI.config.socialLinks[0],
  } as Record<string, Record<string, string>>
}

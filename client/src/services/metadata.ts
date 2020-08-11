import { useStaticQuery, graphql } from 'gatsby'

export const useMetadataQuery = () => {
  const data = useStaticQuery<GatsbyTypes.ContactMetadataQuery>(
    graphql`
      query ContactMetadata {
        site {
          siteMetadata {
            metadata {
              phoneNumber {
                raw
                pretty
              }
              address {
                street
                city
                state
                zip
              }
              email {
                support
                contact
              }
              social {
                youtube
                instagram
                facebook
              }
            }
          }
        }
      }
    `
  )
  return data.site?.siteMetadata?.metadata
}

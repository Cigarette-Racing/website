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
                inquiries
                support
                contact
                careers
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

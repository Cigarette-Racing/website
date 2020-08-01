import { useStaticQuery, graphql } from 'gatsby'

export const useInquiryImages = () => {
  const data = useStaticQuery<GatsbyTypes.InquiryImagesQuery>(graphql`
    query InquiryImages {
      background: file(relativePath: { eq: "discover-section-bg.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data
}

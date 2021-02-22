import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { PageProps, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'

const Underline = styled.span`
  display: inline-block;
  transform: translateY(4px);
  margin-right: 4px;
  width: 55px;
  height: 2px;
`

const LabsTemplate = (props: PageProps<GatsbyTypes.LabsPageQuery>) => {
  const {
    data: {
      craftAPI: { entries: labEntries },
    },
  } = props

  const firstLabEntry = labEntries.slice(0, 1)[0]
  const allButFirstLabEntries = labEntries.slice(1)

  return (
    <Layout>
      <GenericSection className="pt-48" theme="dark">
        <SEO title="Labs" slug={props.path} />
        <div className="px-4 max-w-screen-xl m-auto">
          <span className=" text-white text-8xl font-light tracking-normal leading-10 font-heading">
            <Underline className="bg-red" />
            labs
          </span>
          <PrimaryLab labEntry={firstLabEntry} />.
          {allButFirstLabEntries.map((labEntry: any) => {
            return <Lab labEntry={labEntry} />
          })}
        </div>
      </GenericSection>
    </Layout>
  )
}

const PrimaryLab = ({ labEntry }: any) => {
  return (
    <div>
      <Typography variant="h1">{labEntry.title}</Typography>
      <Typography variant="p1">{labEntry.articleExcerpt}</Typography>
      <img src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`} alt="" />
    </div>
  )
}

const Lab = ({ labEntry }: any) => {
  return (
    <div>
      <Typography variant="h2">{labEntry.title}</Typography>
      <Typography variant="p3">{labEntry.articleExcerpt}</Typography>
    </div>
  )
}

export const GenericSection: React.FC<{
  theme?: Theme
  className?: string
}> = ({ children, className, theme = 'light', ...rest }) => (
  <section
    className={clsx(
      'relative py-12 overflow-hidden',
      {
        'bg-black text-white': theme === 'dark',
      },
      className
    )}
    {...rest}
  >
    {children}
  </section>
)

export default LabsTemplate

export const query = graphql`
  query {
    craftAPI {
      entry(type: "landingPage") {
        ... on CraftAPI_labs_landingPage_Entry {
          articleExcerpt
          title
        }
      }
      entries(section: "labs") {
        slug
        title
        typeHandle
        ... on CraftAPI_labs_labs_Entry {
          articleExcerpt
          imageObject {
            ... on CraftAPI_imageObject_BlockType {
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { PageProps, graphql } from 'gatsby'
import Select, { components } from 'react-select'
import { ContentHeader } from '../atoms/content-header'
import { CaretDownIcon, CaretUpIcon, AngleIcon } from '../svgs/icons'
import { Layout } from '../components/layout'
import { Typography } from '../atoms/typography'
import SEO from '../components/seo'
import { ValueContainer } from 'react-select/src/components/containers'

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
      craftAPI: { entries: labEntries, entry: LandingPage },
    },
  } = props

  const firstLabEntry = labEntries.slice(0, 1)[0]
  const allButFirstLabEntries = labEntries.slice(1)

  return (
    <Layout>
      <GenericSection className="pt-48" theme="dark">
        <SEO title="Labs" slug={props.path} />
        <div className="px-4 max-w-screen-xl m-auto">
          <div className="tracking-wide lowercase text-white text-8xl font-light leading-10 font-heading mb-8">
            <Underline className="bg-red" />
            {LandingPage.title}
          </div>
          <Typography className="mb-24" variant="p3">
            {LandingPage.articleExcerpt}
          </Typography>
          <DropdownNav />
          <PrimaryLab labEntry={firstLabEntry} />
          {allButFirstLabEntries.map((labEntry: any) => {
            return <Lab key={`${labEntry.id}`} labEntry={labEntry} />
          })}
        </div>
      </GenericSection>
    </Layout>
  )
}

const PrimaryLab = ({ labEntry }: any) => {
  return (
    <div className="border-b border-solid border-gray-1 mb-5">
      <img
        className="sm:hidden"
        src={`${labEntry.imageObject[0].image[0].url}?q=30&w=1000`}
        alt=""
      />
      <div className="categories mt-10 mb-2">
        {labEntry.articleCategories.length > 1 && (
          <div className="flex items-center justify-center">
            <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
            {labEntry.articleCategories.map((category: any) => {
              return <Typography variant="e3">{category.title}</Typography>
            })}
          </div>
        )}
        {labEntry.articleCategories.length === 1 && (
          <div className="flex items-center justify-center">
            <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
            <Typography variant="e3">
              {labEntry.articleCategories[0].title}
            </Typography>
          </div>
        )}
      </div>
      <div className="text-center">
        <Typography className="mb-4" variant="h4">
          {labEntry.title}
        </Typography>
        <Typography className="mb-24" variant="p3">
          {labEntry.articleExcerpt}
        </Typography>
      </div>
      <img
        className="hidden sm:block"
        src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`}
        alt=""
      />
    </div>
  )
}

const Lab = ({ labEntry }: any) => {
  return (
    <div className="border-b border-solid border-gray-1 mb-5">
      <img
        className="sm:hidden"
        src={`${labEntry.imageObject[0].image[0].url}?q=30&w=1000`}
        alt=""
      />
      <Categories categories={labEntry.articleCategories} />
      <div className="text-center">
        <Typography className="mb-4" variant="h4">
          {labEntry.title}
        </Typography>
        <Typography className="mb-24" variant="p3">
          {labEntry.articleExcerpt}
        </Typography>
      </div>
      <img
        className="hidden sm:block"
        src={`${labEntry.imageObject[0].image[0].url}?q=30&w=2400`}
        alt=""
      />
    </div>
  )
}

const Categories = ({ categories = [] }) => {
  return (
    <div className="categories mt-10 mb-2">
      {categories.length > 1 && (
        <div className="flex items-center justify-center">
          <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
          {categories.map((category: any) => {
            return <Typography variant="e3">{category.title}</Typography>
          })}
        </div>
      )}
      {categories.length === 1 && (
        <div className="flex items-center justify-center">
          <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
          <Typography variant="e3">{categories[0].title}</Typography>
        </div>
      )}
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

const DropdownNav = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  return (
    <Select
      className="mb-12"
      options={options}
      placeholder={'EXPLORE LABS'}
      components={{
        ValueContainer: (props) => (
          <components.ValueContainer {...props}>
            <Typography variant="e2">{props.children}</Typography>
          </components.ValueContainer>
        ),
        DropdownIndicator: (props) => (
          <components.DropdownIndicator {...props}>
            <CaretDownIcon />
          </components.DropdownIndicator>
        ),
      }}
      styles={{
        placeholder: (base) => ({
          ...base,
          color: '#fff',
        }),
        control: (base) => ({
          ...base,
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid #fff',
          borderRadius: '40px',
        }),
        clearIndicator: () => ({
          display: 'none',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        indicatorsContainer: () => ({
          order: 1,
          padding: '0 5px 0 10px',
        }),
        dropdownIndicator: (base) => ({
          ...base,
          fontSize: '1rem',
          color: '#d12026',
        }),
        valueContainer: (base) => ({
          ...base,
          order: 2,
          padding: '10px 0',
          color: '#fff',
        }),
        singleValue: (base) => ({
          ...base,
          color: '#fff',
        }),
        menu: (base) => ({
          ...base,
          background: '#242424',
        }),
        option: (base, state) => ({
          ...base,
          background: 'transparent',
          color: '#fff',
          '&:hover': {
            color: '#000',
            background: '#D12026',
          },
        }),
      }}
    />
  )
}

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
      entries(section: "labs", hasDescendants: false) {
        id
        slug
        title
        typeHandle
        ... on CraftAPI_labs_labs_Entry {
          articleCategories {
            title
          }
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

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

const NewsArticlesTemplate = (
  props: PageProps<GatsbyTypes.newsArticlesPageQuery>
) => {
  const {
    data: {
      craftAPI: { entries: newsArticleEntries, entry: LandingPage },
    },
  } = props

  console.log(newsArticleEntries, 'wtf')
  const firstNewsArticleEntry = newsArticleEntries.slice(0, 1)[0]
  const allButFirstNewsArticleEntries = newsArticleEntries.slice(1)

  return (
    <Layout>
      <GenericSection className="pt-48">
        <SEO title="All News" slug={props.path} />
        <div className="tracking-wide text-gray-5 capitalize whitespace-no-wrap font-normal text-8xl leading-10 font-heading mb-8">
          {LandingPage.title}
        </div>
        <div className="px-4 max-w-screen-xl m-auto">
          <Typography className="mb-24" variant="p3">
            {LandingPage.articleExcerpt}
          </Typography>
          <DropdownNav />
          <FeaturedNewsArticle newsArticleEntry={firstNewsArticleEntry} />
          {allButFirstNewsArticleEntries.map((newsArticleEntry: any) => {
            return (
              <NewsArticle
                key={`${newsArticleEntry.id}`}
                newsArticleEntry={newsArticleEntry}
              />
            )
          })}
        </div>
      </GenericSection>
    </Layout>
  )
}

const FeaturedNewsArticle = ({ newsArticleEntry }: any) => {
  return (
    <div className="border-b border-solid border-gray-1 mb-5">
      {/* <img
          className="sm:hidden"
          src={`${newsArticleEntry?.imageObject?.[0]?.image?.[0]?.url}?q=30&w=1000`}
          alt=""
        /> */}
      {console.log(newsArticleEntry)}
      <div className="text-center">
        <Typography className="mb-4" variant="h4">
          {newsArticleEntry.title}
        </Typography>
        <Typography className="mb-24" variant="p3">
          {newsArticleEntry.articleExcerpt}
        </Typography>
      </div>
      <img
        className="hidden sm:block"
        // src={`${newsArticleEntry.imageObject[0].image[0].url}?q=30&w=2400`}
        alt=""
      />
    </div>
  )
}

const NewsArticle = ({ newsArticleEntry }: any) => {
  return (
    <div className="border-b border-solid border-gray-1 mb-5">
      {/* <img
        className="sm:hidden"
        src={`${newsArticleEntry.imageObject[0].image[0].url}?q=30&w=1000`}
        alt=""
      /> */}
      <Categories categories={newsArticleEntry.articleCategories} />
      <div className="text-center">
        <Typography className="mb-4" variant="h4">
          {newsArticleEntry.title}
        </Typography>
        <Typography className="mb-24" variant="p3">
          {newsArticleEntry.articleExcerpt}
        </Typography>
      </div>
      {/* <img
        className="hidden sm:block"
        src={`${newsArticleEntry.imageObject[0].image[0].url}?q=30&w=2400`}
        alt=""
      /> */}
    </div>
  )
}

const Categories = ({ categories = [] }) => {
  return (
    <div className="categories mt-10 mb-2">
      {categories.length > 1 && (
        <div className="flex items-center justify-center">
          <AngleIcon className="text-red" style={{ fontSize: '32px' }} />
          {categories.map((category: any, i) => {
            return (
              <Typography key={`${category.title}-${i}`} variant="e3">
                {category.title}
              </Typography>
            )
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
      placeholder={'EXPLORE STORIES'}
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
          color: '#000',
        }),
        control: (base) => ({
          ...base,
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid #e0e0e0',
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
          color: '#000',
        }),
        singleValue: (base) => ({
          ...base,
          color: '#000',
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

export default NewsArticlesTemplate

export const query = graphql`
  query {
    craftAPI {
      entries(type: "newsArticle") {
        ... on CraftAPI_newsArticles_newsArticle_Entry {
          id
          articleExcerpt
          title
          articleCategories {
            id
            title
          }
          articleTags {
            id
            title
          }
        }
      }
      entry(type: "newsArticles") {
        ... on CraftAPI_newsArticles_newsArticles_Entry {
          id
          title
        }
      }
    }
  }
`

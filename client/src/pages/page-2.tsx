// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'

type Valid = keyof HTMLElementTagNameMap

// import Layout from '../components/layout'
// import SEO from '../components/seo'

const SecondPage = (props: PageProps) => (
  // <Layout>
  //   <SEO title="Page two" />
  //   <h1>Hi from the second page</h1>
  //   <p>Welcome to page 2 ({props.path})</p>
  //   <Link to="/">Go back to the homepage</Link>
  // </Layout>
  <div>Hello world</div>
)

export default SecondPage

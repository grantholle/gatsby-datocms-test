import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <h1>{data.datoCmsHomePage.leadline}</h1>
    <p>{data.datoCmsHomePage.description}</p>
    <div>
      <img
        src={data.datoCmsHomePage.hero.url}
        alt="A default image"
      />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    datoCmsHomePage {
      description
      leadline
      hero {
        width
        height
        url
      }
    }
  }
`

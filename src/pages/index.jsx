import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h1>Hi Great Gatsby</h1>
    <p>Welcome to your new Gatsby site.</p>
    {
      data.allWorksYaml.edges.map(edge => {
        const work = edge.node
        return <div>
          <Link to={`/works/${work.slug}`}>
            {work.title} - {work.category} - {work.year}
          </Link>
        </div>
      })
    }
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to about page</Link>
  </Layout>
)

export const query = graphql`
    query {
      allWorksYaml {
        edges {
          node {
            title
            category
            year
            slug
          }
        }
      }
    }
  `

export default IndexPage

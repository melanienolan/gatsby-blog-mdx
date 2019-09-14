import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Section from "../components/Section"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`
const ArticleTemplate = ({ data: { mdx: article } }) => (
  <Layout>
    <Section>
      <h1>{article.frontmatter.title}</h1>
      <MDXRenderer>{article.body}</MDXRenderer>
      <Link to="/">&larr; Back to Home &hearts;</Link>
    </Section>
  </Layout>
)

export default ArticleTemplate

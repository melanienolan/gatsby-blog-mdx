import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

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
    <h1>{article.frontmatter.title}</h1>
    <MDXRenderer>{article.body}</MDXRenderer>
    <p></p>
    <Link to="/">&larr; Back to Home &hearts;</Link>
  </Layout>
)

export default ArticleTemplate

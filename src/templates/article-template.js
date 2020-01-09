import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Main from "../components/Main"
import Article from "../components/Article"

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
    <Main>
      <Article>
        <h1>{article.frontmatter.title}</h1>
        <MDXRenderer>{article.body}</MDXRenderer>
      </Article>
      <Link to="/">&larr; Back to Home &hearts;</Link>
    </Main>
  </Layout>
)

export default ArticleTemplate

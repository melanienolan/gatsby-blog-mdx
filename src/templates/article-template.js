import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import Main from "../components/Main"
import PageTitle from "../components/PageTitle"

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
const ArticleTemplate = ({ data: { mdx: article } }) => {
  return (
    <Layout>
      <Main>
        <article
          css={css`
            > p {
              margin-bottom: 20px;
            }
          `}
        >
          <PageTitle>{article.frontmatter.title}</PageTitle>
          <MDXRenderer>{article.body}</MDXRenderer>
          <Link to="/articles">&larr; Back to Articles</Link>
        </article>
      </Main>
    </Layout>
  )
}

export default ArticleTemplate

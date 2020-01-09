import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import Section from "../components/Section"
import ArticlePreview from "../components/ArticlePreview"
import useContent from "../hooks/useContent"

const ArticlesPage = () => {
  const content = useContent()

  return (
    <Layout>
      <Section page="Articles">
        <h1
          css={css`
            color: #ffffff;
          `}
        >
          Articles
        </h1>
        {content.map(article => (
          <ArticlePreview key={article.slug} article={article}></ArticlePreview>
        ))}
      </Section>
      <Link to="/">
        Go back to the homepage{" "}
        <span role="img" aria-label="sweet">
          🍬
        </span>{" "}
      </Link>
    </Layout>
  )
}

export default ArticlesPage

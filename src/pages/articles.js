import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import Main from "../components/Main"
import ArticlePreview from "../components/ArticlePreview"
import useContent from "../hooks/useContent"

const ArticlesPage = () => {
  const content = useContent()

  return (
    <Layout>
      <Main pageTitle="Articles">
        {content.map(article => (
          <ArticlePreview key={article.slug} article={article}></ArticlePreview>
        ))}
      </Main>
    </Layout>
  )
}

export default ArticlesPage

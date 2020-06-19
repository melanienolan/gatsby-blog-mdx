import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import ArticlePreview from "../components/ArticlePreview"
import PageTitle from "../components/PageTitle"
import useContent from "../hooks/useContent"

export default () => {
  const content = useContent()

  return (
    <Layout>
      <Main>
        <PageTitle>Articles</PageTitle>
        <ul>
          {content.map(article => (
            <li key={article.slug}>
              <ArticlePreview article={article}></ArticlePreview>
            </li>
          ))}
        </ul>
      </Main>
    </Layout>
  )
}

import React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import ArticlePreview from "../components/ArticlePreview"
import PageTitle from "../components/PageTitle"
import LinkToHome from "../components/LinkToHome"
import useContent from "../hooks/useContent"

const ArticlesPage = () => {
  const content = useContent()

  return (
    <Layout>
      <Main>
        <PageTitle>Articles</PageTitle>
        {content.map(article => (
          <ArticlePreview key={article.slug} article={article}></ArticlePreview>
        ))}
        <LinkToHome />
      </Main>
    </Layout>
  )
}

export default ArticlesPage

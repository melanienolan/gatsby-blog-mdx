import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Main from "../components/Main"
import ArticlePreview from "../components/ArticlePreview"
import useContent from "../hooks/useContent"

const ArticlesPage = () => {
  const content = useContent()

  return (
    <Layout>
      <Main page="Articles">
        {content.map(article => (
          <ArticlePreview key={article.slug} article={article}></ArticlePreview>
        ))}
      </Main>
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

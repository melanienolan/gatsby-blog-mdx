import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/Section"
import ArticlePreview from "../components/ArticlePreview"
import useContent from "../hooks/useContent"

const ArticlesPage = () => {
  const content = useContent()

  return (
    <Layout>
      Articles
      <Section>
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

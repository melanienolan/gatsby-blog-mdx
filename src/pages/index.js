import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ArticlePreview from "../components/ArticlePreview"
import useContent from "../hooks/useContent"
import Hero from "../components/Hero"

const IndexPage = () => {
  const content = useContent()

  return (
    <>
      <Hero></Hero>
      <Layout>
        <Link to="/about/">Go to about page &hearts;</Link>

        {content.map(article => (
          <ArticlePreview key={article.slug} article={article}></ArticlePreview>
        ))}
      </Layout>
    </>
  )
}

export default IndexPage

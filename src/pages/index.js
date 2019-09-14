import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import ArticlePreview from "../components/ArticlePreview"
import useContent from "../hooks/useContent"

const IndexPage = () => {
  const content = useContent()

  return (
    <>
      <Layout>
        <Section page="index">
          {content.map(article => (
            <ArticlePreview
              key={article.slug}
              article={article}
            ></ArticlePreview>
          ))}
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage

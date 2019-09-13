import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ArticlePreview from "../components/ArticlePreview"
import useContent from "../hooks/useContent"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const GradientTop = styled("div")`
  background-image: linear-gradient(to bottom, #ddbbffdd 2rem, #ddbbff00);
  height: 5vh;
`
const GradientBottom = styled("div")`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  height: 5vh;
`
const IndexPage = () => {
  const content = useContent()

  return (
    <>
      <Layout>
        <section
          css={css`
            width: 900px;
            max-width: 90vw;
            margin: 0 auto;
            height: 40vh;
            overflow: scroll;
            position: relative;
          `}
        >
          {/* <div
            css={css`
              position: absolute;
              top: 0;
              bottom: 0;
              background-image: linear-gradient(
                to bottom,
                #ddbbffdd 2rem,
                #00000000
              );
            `}
          > */}
          {content.map(article => (
            <ArticlePreview
              key={article.slug}
              article={article}
            ></ArticlePreview>
          ))}
          {/* </div> */}
        </section>
      </Layout>
    </>
  )
}

export default IndexPage

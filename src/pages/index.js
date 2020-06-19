import React from "react"
import { css, keyframes } from "@emotion/core"
import Layout from "../components/Layout"
import HeroImage from "../components/HeroImage"
import LeafIcon from "../components/LeafIcon"
import Main from "../components/Main"
import ArticlePreview from "../components/ArticlePreview"
import useContent from "../hooks/useContent"

export default () => {
  const contentLimit = 3
  const content = useContent().slice(0, contentLimit)

  const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `

  return (
    <Layout>
      <HeroImage>
        <div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              animation: ${rotate} 10s ease-in-out infinite;
            `}
          >
            <LeafIcon width="120" height="120" />
          </div>
          <h1
            css={css`
              color: #ffffff;
              margin-top: 20px;
            `}
          >
            My blog
          </h1>
        </div>
      </HeroImage>
      <Main>
        <h2
          css={css`
            text-align: center;
            margin: 40px 0;
          `}
        >
          Welcome to my blog!
        </h2>
        <h3
          css={css`
            margin-top: 40px;
            border-bottom: 2px solid #27495a;
          `}
        >
          Latest posts
        </h3>
        <ul>
          {content.map(article => {
            return (
              <li key={article.slug}>
                <ArticlePreview article={article} />
              </li>
            )
          })}
        </ul>
      </Main>
    </Layout>
  )
}

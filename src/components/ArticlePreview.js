import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Image from "gatsby-image"

const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
`

const ArticlePreview = ({ article }) => (
  <article
    css={css`
      display: flex;
      padding: 20px;
      margin: 5px 0;
      background-color: #ffffff;
      border-radius: 5px;
    `}
  >
    <Link
      to={article.slug}
      css={css`
        display: block;
        width: 100px;
        margin: 0;
      `}
    >
      <StyledImage fluid={article.image} alt={article.title} />
    </Link>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-left: 10px;
      `}
    >
      <h3
        css={css`
          margin: 0;
        `}
      >
        <Link to={article.slug}>{article.title}</Link>
      </h3>
      <p
        css={css`
          margin: 0;
          font-size: 1rem;
        `}
      >
        {article.excerpt}
      </p>
      <Link
        to={article.slug}
        css={css`
          margin: 0;
        `}
      >
        read this post &rarr;
      </Link>
    </div>
  </article>
)

export default ArticlePreview

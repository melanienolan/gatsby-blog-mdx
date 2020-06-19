import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const ArticlePreview = ({ article }) => (
  <Link to={`/articles/${article.slug}`}>
    <article
      css={css`
        display: flex;
        padding: 20px 0;
        margin: 5px 0;
      `}
    >
      <div
        css={css`
          width: 100px;
          min-width: 100px;
          height: 100px;
          border-radius: 5px;
          overflow: hidden;
        `}
      >
        <Img fluid={article.image} alt={article.title} />
      </div>
      <div
        css={css`
          margin-left: 20px;
        `}
      >
        <h3
          css={css`
            margin-bottom: 8px;
          `}
        >
          {article.title}
        </h3>
        <p
          css={css`
            margin: 0;
            font-size: 0.9rem;
          `}
        >
          {article.excerpt}
        </p>
      </div>
    </article>
  </Link>
)

export default ArticlePreview

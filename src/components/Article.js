import React from "react"
import { css } from "@emotion/core"

const Article = ({ children }) => (
  <article
    css={css`
      background-color: #ffffff;
      border-radius: 5px;
      padding: 40px;
    `}
  >
    {children}
  </article>
)

export default Article

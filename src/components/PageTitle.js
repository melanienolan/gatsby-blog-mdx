import React from "react"
import { css } from "@emotion/core"

const PageTitle = ({ children }) => (
  <h1
    css={css`
      color: #ffffff;
    `}
  >
    {children}
  </h1>
)

export default PageTitle

import React from "react"
import { css } from "@emotion/core"

const PageTitle = ({ children }) => (
  <h2
    css={css`
      border-bottom: 2px solid #27495a;
      margin: 60px 0;
    `}
  >
    {children}
  </h2>
)

export default PageTitle

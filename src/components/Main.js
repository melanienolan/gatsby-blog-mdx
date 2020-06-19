import React from "react"
import { css } from "@emotion/core"

const Main = ({ children }) => (
  <main
    css={css`
      width: 900px;
      max-width: 90vw;
      margin: 0 auto;
      flex-grow: 1;
    `}
  >
    {children}
  </main>
)

export default Main

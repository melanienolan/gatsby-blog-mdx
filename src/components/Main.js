import React from "react"
import { css } from "@emotion/core"

const Main = ({ children }) => (
  <main
    css={css`
      width: 900px;
      max-width: 90vw;
      margin: 0 auto;
      height: calc(80vh - 70px);
      padding: 25px;
      overflow: scroll;
      background-color: transparent;
    `}
  >
    {children}
  </main>
)

export default Main

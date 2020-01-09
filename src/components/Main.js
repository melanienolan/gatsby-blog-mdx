import React from "react"
import { css } from "@emotion/core"

const Main = ({ children, page = null }) => (
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
    <h1
      css={css`
        color: #ffffff;
      `}
    >
      {page}
    </h1>
    {children}
  </main>
)

export default Main

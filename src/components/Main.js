import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Main = ({ children, pageTitle = null }) => (
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
      {pageTitle}
    </h1>
    {children}
    <Link
      css={css`
        color: #ffffff;
      `}
      to="/"
    >
      &larr; Go back homepage{" "}
    </Link>
  </main>
)

export default Main

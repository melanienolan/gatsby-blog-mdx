import React from "react"
import { css } from "@emotion/core"

const Section = ({ children, page = null }) => (
  <section
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
  </section>
)

export default Section

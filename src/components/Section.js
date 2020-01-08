import React from "react"
import { css } from "@emotion/core"

const Section = ({ children }) => (
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
    {children}
  </section>
)

export default Section

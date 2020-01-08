import React from "react"
import { css } from "@emotion/core"

const Section = ({ children, page }) => (
  <section
    css={css`
      width: 900px;
      max-width: 90vw;
      margin: 0 auto;
      height: ${page === "index" ? "calc(80vh - 70px)" : "calc(90vh - 70px)"};
      padding: 25px;
      overflow: scroll;
      background-color: ${page === "index" ? "transparent" : "#ffffff"};
    `}
  >
    {children}
  </section>
)

export default Section

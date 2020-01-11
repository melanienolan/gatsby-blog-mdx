import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <footer
    css={css`
      width: 900px;
      max-width: 90vw;
      margin: 0 auto;
      color: #ffffff;
    `}
  >
    &copy; Mel Nolan
  </footer>
)

export default Footer

import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <footer
    css={css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 900px;
      max-width: 90vw;
      height: 50px;
      margin: 0 auto;
      color: #ffffff;
    `}
  >
    &copy; Mel Nolan
  </footer>
)

export default Footer

import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <footer
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      width: 900px;
      height: 50px;
      max-width: 90vw;
      margin: 0 auto;
    `}
  >
    &copy; Melanie Nolan
  </footer>
)

export default Footer

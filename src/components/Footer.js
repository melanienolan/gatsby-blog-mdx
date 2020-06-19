import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <footer
    css={css`
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    `}
  >
    <p
      css={css`
        font-size: 0.6rem;
        color: #a0aec0;
      `}
    >
      &copy; Melanie Nolan
    </p>
  </footer>
)

export default Footer

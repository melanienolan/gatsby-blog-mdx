import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const LinkToHome = () => (
  <Link
    css={css`
      color: #ffffff;
    `}
    to="/"
  >
    &larr; Go back homepage{" "}
  </Link>
)

export default LinkToHome

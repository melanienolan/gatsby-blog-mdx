import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { Global, css } from "@emotion/core"
import { TypographyStyle, GoogleFont } from "react-typography"
import typography from "../utils/typography"
import { Helmet } from "react-helmet"
import Background from "./Background"

import Header from "./Header"

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          *,
          html,
          body {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          * + * {
            // margin-top: 1.75rem;
          }

          a {
            text-decoration: none;
          }
        `}
      />
      <Helmet>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
      </Helmet>

      {/* <main
        css={css`
          margin: 0 auto 0 auto;
          width: 900px;
          max-width: 90vw;
        `}
      > */}
      <Background>
        <Header siteTitle={siteMetadata.title}></Header>
        {children}
        <footer>footer</footer>
      </Background>
      {/* </main> */}
    </>
  )
}

export default Layout

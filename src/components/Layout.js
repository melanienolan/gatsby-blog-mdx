import React from "react"
import { Helmet } from "react-helmet"
import { TypographyStyle, GoogleFont } from "react-typography"
import typography from "../utils/typography"
import { Global, css } from "@emotion/core"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Background from "./Background"
import Header from "./Header"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

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

            > div {
              margin-top: 0;
            }
          }

          a {
            color: #27495a;
            text-decoration: none;
          }

          h1,
          h2,
          h3 {
            color: #27495a;
            line-height: 1.5;
          }
          p {
            color: #766969;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
      </Helmet>

      <Background>
        <Header siteTitle={title}></Header>
        {children}
        <footer>footer</footer>
      </Background>
    </>
  )
}

export default Layout

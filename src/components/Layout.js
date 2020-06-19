import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Global
        styles={css`
          *,
          html,
          body {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Open Sans", sans-serif;

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
          li {
            list-style: none;
          }
        `}
      />

      <Header siteTitle={title}></Header>
      {children}
      <Footer />
    </div>
  )
}

export default Layout

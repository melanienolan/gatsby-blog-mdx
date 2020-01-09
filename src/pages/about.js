import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import Main from "../components/Main"

const About = () => (
  <Layout>
    <Main pageTitle="About"></Main>
    <Link to="/">
      Go back to the homepage{" "}
      <span role="img" aria-label="sweet">
        🍬
      </span>{" "}
    </Link>
  </Layout>
)

export default About

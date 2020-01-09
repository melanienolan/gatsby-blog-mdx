import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import Section from "../components/Section"

const About = () => (
  <Layout>
    <Section page="About"></Section>
    <Link to="/">
      Go back to the homepage{" "}
      <span role="img" aria-label="sweet">
        🍬
      </span>{" "}
    </Link>
  </Layout>
)

export default About

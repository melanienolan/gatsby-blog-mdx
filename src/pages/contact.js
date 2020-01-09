import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/Section"

const Contact = () => (
  <Layout>
    <Section page="Contact"></Section>
    <Link to="/">
      Go back to the homepage{" "}
      <span role="img" aria-label="sweet">
        🍬
      </span>{" "}
    </Link>
  </Layout>
)

export default Contact

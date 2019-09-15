import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const Contact = () => (
  <Layout>
    Contact
    <Link to="/">
      Go back to the homepage{" "}
      <span role="img" aria-label="sweet">
        🍬
      </span>{" "}
    </Link>
  </Layout>
)

export default Contact

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Main from "../components/Main"

const Contact = () => (
  <Layout>
    <Main page="Contact"></Main>
    <Link to="/">
      Go back to the homepage{" "}
      <span role="img" aria-label="sweet">
        🍬
      </span>{" "}
    </Link>
  </Layout>
)

export default Contact

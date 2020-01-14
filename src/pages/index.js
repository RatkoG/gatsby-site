import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Ratko, a front-end developer living in super cold Canada</h2>
      <p>
        Need a Developer ? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage

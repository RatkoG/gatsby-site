import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      <Link to="/">Head Home</Link>
    </p>
  </Layout>
)

export default NotFoundPage

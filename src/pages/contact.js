import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>Here is my info</p>
      <p>
        You can use my{" "}
        <a
          href={data.site.siteMetadata.social}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
    </Layout>
  )
}
export default ContactPage

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
//`
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedData(fromNow: true)
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title} </h1>
      <p> {props.data.contentfulBlogPost.publishedData}</p>
    </Layout>
  )
}
export default Blog

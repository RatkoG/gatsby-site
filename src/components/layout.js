/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

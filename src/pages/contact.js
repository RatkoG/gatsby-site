import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>Here is my info</p>
      <p>
        You can use my{" "}
        <a href="https://twitter.com/ratko_gj" target="_blank">
          Twitter
        </a>
      </p>
      <Footer />
    </div>
  )
}
export default ContactPage

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "../pages/styles.scss"
import Header from "./Header"

const Layout = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Layout

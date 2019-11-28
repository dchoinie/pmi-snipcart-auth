import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../pages/styles.scss"
import Header from "./header"

export function initNetlifyIdentity() {
  console.log("initNetlifyIdentity was called")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true

  document.body.appendChild(script)
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) netlifyIdentity.open()
  else {
    console.log("Netlify Identity Is Not Defined")
  }
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity()
  }

  render() {
    return <div></div>
  }
}

const Layout = () => {
  return (
    <div>
      <Header />
      <NetlifyIdentity />
      <h1>Layout</h1>
      <h2
        onClick={() => {
          openNetlifyModal()
        }}
      >
        Login
      </h2>
    </div>
  )
}

export default Layout

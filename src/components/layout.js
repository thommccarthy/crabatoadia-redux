import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "normalize.css"
import Header from "./header/header"
import "normalize.css"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

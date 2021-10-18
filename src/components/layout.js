import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as layoutStyles from "./layout.module.css"

import "normalize.css"
import Header from "./header/header"
import "normalize.css"
import Footer from "./footer/Footer"
import MobileNav from "./header/MobileNav"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MobileNav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

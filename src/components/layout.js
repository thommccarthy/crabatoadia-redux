import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as layoutStyles from "./layout.module.css"

import "normalize.css"
import Header from "./header/header"
import "normalize.css"
import Footer from "./footer/Footer"
import MobileNav from "./header/MobileNav"

const Layout = ({ children }) => {
  var docWidth = document.documentElement.offsetWidth

  ;[].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el)
    }
  })

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

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "normalize.css"
import Header from "./header/header"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout

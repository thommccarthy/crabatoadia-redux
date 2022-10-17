import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.scss"
import Header from "../components/header/header"
import "normalize.css"
import Footer from "../components/footer/Footer"
import MobileNav from "../components/header/MobileNav"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MobileNav />
      {children}
      <Footer />
    </>
  )
}

export default Layout

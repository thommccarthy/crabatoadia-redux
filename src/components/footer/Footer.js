import React from "react"
import BackToTop from "./BackToTop"
import ContactForm from "./ContactForm"
import * as footerStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer id="footer" className={footerStyles.wrapper}>
      <ContactForm />
      <BackToTop />
    </footer>
  )
}

export default Footer

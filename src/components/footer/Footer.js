import React from "react"
import BackToTop from "./BackToTop"
import ContactForm from "./ContactForm"
import * as footerStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <div id="footer" className={footerStyles.wrapper}>
      <ContactForm />
      <BackToTop />
    </div>
  )
}

export default Footer

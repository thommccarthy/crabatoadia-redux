import React from "react"
import ContactForm from "./ContactForm"
import * as footerStyles from "./Footer.module.css"

const Footer = () => {
  return (
    <div id="footer" className={footerStyles.wrapper}>
      <ContactForm />
    </div>
  )
}

export default Footer

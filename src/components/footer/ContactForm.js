import React from "react"
import * as contactFormStyles from "./ContactForm.module.css"

const ContactForm = () => {
  return (
    <div>
      <div className={contactFormStyles.bookingWrapper}>
        <div>
          <h4 className={contactFormStyles.bookingText}>
            FOR BOOKING OR GENERAL QUESTIONS AND COMMENTS
          </h4>
        </div>
      </div>
      {/* form grid */}
      <div className={contactFormStyles.formGrid}>
        <div className={contactFormStyles.formWrapper}>
          <form id="contact" className={contactFormStyles.formWrapper}>
            <label className={contactFormStyles.contactUs} for="name">
              Contact Us
            </label>
            <input type="text" id="name" name="name" placeholder="name*" />
            <input type="email" id="email" name="email" placeholder="email*" />
            <textarea type="text" placeholder="message*" />
          </form>
        </div>
        <span className={contactFormStyles.or}>-or-</span>
        <span className={contactFormStyles.emailUs}>
          email us at{" "}
          <span className={contactFormStyles.emailAddress}>
            crabatoadia@gmail.com
          </span>{" "}
        </span>
      </div>
    </div>
  )
}

export default ContactForm

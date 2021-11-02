import React from "react"
import * as contactFormStyles from "./ContactForm.module.css"

const ContactForm = () => {
  return (
    <div className={contactFormStyles.wrapper}>
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
          {/* form start */}
          <form
            id="contact"
            method="POST"
            data-netlify="true"
            className={contactFormStyles.formWrapper}
          >
            <label className={contactFormStyles.contactUs} for="name">
              Contact Us
            </label>
            <input type="text" id="name" name="name" placeholder="name*" />
            <input type="email" id="email" name="email" placeholder="email*" />
            <textarea type="text" placeholder="message*" />
            <button className={contactFormStyles.submitButton} type="submit">
              Submit
            </button>
          </form>
          {/* form end */}
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

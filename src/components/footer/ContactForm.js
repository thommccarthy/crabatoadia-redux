import React, { useState } from "react"
import * as contactFormStyles from "./ContactForm.module.css"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    }).catch(error => alert(error))
    resetForm()
    e.preventDefault()
  }

  return (
    <section className={contactFormStyles.wrapper}>
      <div
        className={contactFormStyles.bookingWrapper}
        data-sal="flip-up"
        data-sal-delay="200"
        data-sal-duration="600"
        data-sal-easing="easeInBack"
      >
        <div>
          <h2 className={contactFormStyles.bookingText}>
            FOR BOOKING OR GENERAL QUESTIONS AND COMMENTS
          </h2>
        </div>
      </div>
      {/* form grid */}
      <div className={contactFormStyles.formGrid}>
        <div className={contactFormStyles.formWrapper}>
          {/* form start */}
          <form
            id="contact"
            method="POST"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className={contactFormStyles.formWrapper}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact"></input>
            <h3 className={contactFormStyles.contactUs}>Contact Us</h3>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name*"
              onChange={handleChange}
              value={formState.name}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email*"
              onChange={handleChange}
              value={formState.email}
              required
            />
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="message*"
              onChange={handleChange}
              value={formState.message}
              required
            />
            <button className={contactFormStyles.submitButton} type="submit">
              Submit
            </button>
          </form>
          {/* form end */}
        </div>
        <span className={contactFormStyles.or}>-or-</span>
        <span
          data-sal="flip-left"
          data-sal-delay="200"
          data-sal-duration="600"
          data-sal-easing="easeInBack"
          className={contactFormStyles.emailUs}
        >
          email us at{" "}
          <a
            href="mailto:crabatoadia@gmail.com"
            className={contactFormStyles.emailAddress}
          >
            crabatoadia@gmail.com
          </a>{" "}
        </span>
      </div>
    </section>
  )
}

export default ContactForm

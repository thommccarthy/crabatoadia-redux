import React, { useState, useEffect } from "react"
import * as backToTopStyles from "./BackToTop.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import { IoIosArrowUp } from "react-icons/io"

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
  })

  return (
    <div>
      <div
        onClick={() => scrollTo("#header")}
        style={{ display: showScroll ? "block" : "none" }}
        className={backToTopStyles.arrowWrapper}
      >
        <IoIosArrowUp className={backToTopStyles.arrow} />
      </div>

      <div className={backToTopStyles.copyrightWrapper}>
        <p className={backToTopStyles.copyright}>2021 Crabatoadia</p>
        <div className={backToTopStyles.stampWrapper}></div>
      </div>
    </div>
  )
}

export default BackToTop

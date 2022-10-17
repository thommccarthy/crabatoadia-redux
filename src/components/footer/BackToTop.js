import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
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
    <div classname={backToTopStyles.wrapper}>
      <div
        onClick={() => scrollTo("#header")}
        style={{ display: showScroll ? "block" : "none" }}
        className={backToTopStyles.arrowWrapper}
      >
        <IoIosArrowUp className={backToTopStyles.arrow} />
      </div>
      <div style={{ background: `black`, marginTop: `5rem` }}>
        <div className={backToTopStyles.copyrightWrapper}>
          <p className={backToTopStyles.copyright}>2022 Crabatoadia</p>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              gap: `0.5rem`,
              color: `white`,
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/artists">Artists</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
          <div className={backToTopStyles.stampWrapper}></div>
        </div>
      </div>
    </div>
  )
}

export default BackToTop

import React from "react"
import * as backToTopStyles from "./BackToTop.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"

const BackToTop = () => {
  return (
    <div>
      <a
        onClick={() => scrollTo("#header")}
        className={backToTopStyles.backToTopButton}
      >
        <div className={backToTopStyles.arrowWrapper}>
          <StaticImage
            alt="White arrow pointing to top of browser."
            className={backToTopStyles.arrow}
            src="../../images/white-arrow-png-41963.png"
          />
        </div>
        <div className={backToTopStyles.copyrightWrapper}>
          <p className={backToTopStyles.copyright}>2021 Crabatoadia</p>
          <div className={backToTopStyles.stampWrapper}>
            <StaticImage
              alt=""
              className={backToTopStyles.stamp}
              src="../../images/crabatoad_stamp_inverted.png"
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export default BackToTop

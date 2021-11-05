import React from "react"
import * as backToTopStyles from "./BackToTop.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"

const BackToTop = () => {
  return (
    <div>
      {/* <p className={backToTopStyles.copyright}>copyright 2021 crabatoadia</p> */}
      <a
        onClick={() => scrollTo("#header")}
        className={backToTopStyles.backToTopButton}
      >
        <div className={backToTopStyles.arrowWrapper}>
          <StaticImage
            className={backToTopStyles.arrow}
            src="../../images/white-arrow-png-41963.png"
          />
        </div>
        <div className={backToTopStyles.copyrightWrapper}>
          <p className={backToTopStyles.copyright}>2021 Crabatoadia</p>
          <div className={backToTopStyles.stampWrapper}>
            <StaticImage
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

import React from "react"
import * as whatIsStyles from "./WhatIs.module.css"
import { StaticImage } from "gatsby-plugin-image"

const WhatIs = () => {
  return (
    <div
      data-sal="slide-right"
      data-sal-delay="100"
      data-sal-duration="600"
      data-sal-easing="easeInBack"
      className={whatIsStyles.wrapper}
    >
      <div className={whatIsStyles.headerWrapper}>
        <h2 className={whatIsStyles.header}>
          WHAT IS CRABATOADIA (crab-uh-toad-ee-uh)?
        </h2>
      </div>
      <div
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-duration="600"
        data-sal-easing="easeInBack"
        className={whatIsStyles.linesWrapper}
      >
        <div className={whatIsStyles.linesList}>
          <li className={whatIsStyles.lineBlack}></li>
          <li className={whatIsStyles.lineYellow}></li>
          <li className={whatIsStyles.lineBlack}></li>
        </div>
      </div>
      {/* bio */}
      <div className={whatIsStyles.bioWrapper}>
        <div className={whatIsStyles.sharkManWrapper}>
          <StaticImage
            alt="Man wearing a suit with a shark head"
            src="../../images/index/shark-man.jpg"
            className={whatIsStyles.sharkMan}
          />
        </div>
        <p className={whatIsStyles.bioText}>
          Crabatoadia is the joint endeavor of Thom McCarthy and Andrea Poulsen,
          providing a platform for presenting their creative musical projects.
          All recordings are produced and published through the label.
          Crabatoadia was founded in 2017 in Philadelphia, PA.
        </p>
      </div>
    </div>
  )
}

export default WhatIs

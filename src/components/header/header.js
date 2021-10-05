import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as headerStyles from "./header.module.css"
import { HiMenu } from "react-icons/hi"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <div className={headerStyles.linesWrapperWrapper}>
        <div className={headerStyles.linesWrapper}>
          <div className={headerStyles.lineBlack}></div>
          <div className={headerStyles.lineYellow}></div>
          <div className={headerStyles.lineBlack}></div>
        </div>
      </div>
      <div className={headerStyles.headerGrid}>
        <div>
          <StaticImage
            src="../../images/crabatoadia_stamp.png"
            className={headerStyles.logo}
            style={{
              display: `block`,
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          />
        </div>
        <div>
          <StaticImage
            src="../../images/crabatoad_stamp.jpg"
            className={headerStyles.crabatoad}
            style={{
              display: `block`,
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          />
        </div>
        {/* links */}
        <ul className={headerStyles.linksList}>
          <li>
            <Link className={headerStyles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/">
              Artists
            </Link>
          </li>
          <li>
            <a
              className={headerStyles.link}
              href="https://crabatoadia-store.square.site/"
              target="__blank"
            >
              Store
            </a>
          </li>
          <li>
            <Link className={headerStyles.link} to="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

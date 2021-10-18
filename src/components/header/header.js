import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as headerStyles from "./header.module.css"
import { HiMenu } from "react-icons/hi"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <div className={headerStyles.wrapper}>
      <div className={headerStyles.linesWrapperWrapper}>
        <div className={headerStyles.linesWrapper}>
          <div className={headerStyles.lineBlack}></div>
          <div className={headerStyles.lineYellow}></div>
          <div className={headerStyles.lineBlack}></div>
        </div>
      </div>
      <div className={headerStyles.headerGrid}>
        <div>
          <Link to="/">
            <StaticImage
              src="../../images/crabatoadia_stamp.png"
              className={headerStyles.logo}
              style={{
                display: `block`,
                marginLeft: `auto`,
                marginRight: `auto`,
              }}
            />
          </Link>
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
            <Link className={headerStyles.link} to="/artists">
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
            <a
              onClick={() => scrollTo("#footer")}
              className={headerStyles.link}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

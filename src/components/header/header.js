import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as headerStyles from "./header.module.css"
import { HiMenu } from "react-icons/hi"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <header id="header" className={headerStyles.wrapper}>
      <div aria-hidden="true" className={headerStyles.linesWrapperWrapper}>
        <div className={headerStyles.linesWrapper}>
          <div className={headerStyles.lineBlack}></div>
          <div className={headerStyles.lineYellow}></div>
          <div className={headerStyles.lineBlack}></div>
        </div>
      </div>
      <nav className={headerStyles.headerGrid}>
        <div>
          <Link to="/">
            <StaticImage
              alt="Crabatoadia Logo"
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
            alt="Crabatoadia Logo Illustration"
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
          <li className={headerStyles.linkWrapper}>
            <Link className={headerStyles.link} to="/">
              Home
            </Link>
          </li>
          <li className={headerStyles.linkWrapper}>
            <Link className={headerStyles.link} to="/artists">
              Artists
            </Link>
          </li>
          <li className={headerStyles.linkWrapper}>
            <Link className={headerStyles.link} to="/store">
              Store
            </Link>
          </li>
          <li className={headerStyles.linkWrapper}>
            <a
              onClick={() => scrollTo("#footer")}
              className={headerStyles.link}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

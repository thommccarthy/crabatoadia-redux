import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as headerStyles from "./header.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
          <AniLink swipe direction="left" entryOffset={80} to="/">
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
          </AniLink>
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
            <AniLink
              swipe
              direction="left"
              entryOffset={80}
              className={headerStyles.link}
              to="/"
            >
              Home
            </AniLink>
          </li>
          <li className={headerStyles.linkWrapper}>
            <AniLink
              swipe
              direction="left"
              entryOffset={80}
              className={headerStyles.link}
              to="/artists"
            >
              Artists
            </AniLink>
          </li>
          <li className={headerStyles.linkWrapper}>
            <AniLink
              swipe
              direction="left"
              entryOffset={80}
              className={headerStyles.link}
              to="/store"
            >
              Store
            </AniLink>
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

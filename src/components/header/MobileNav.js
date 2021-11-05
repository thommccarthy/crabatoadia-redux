import React, { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { BiMenu } from "react-icons/bi"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as mobileNavStyles from "./MobileNav.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const MobileNav = () => {
  const [showBurger, setShowBurger] = useState(true)

  const controlBurger = () => {
    if (window.scrollY > 100) {
      setShowBurger(false)
    } else {
      setShowBurger(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", controlBurger)
    return () => {
      window.removeEventListener("scroll", controlBurger)
    }
  }, [])

  const closeMenu = () => {
    document.getElementById("fullscreen-menu").style.top = "-100vh"
  }

  const openMenu = () => {
    document.getElementById("fullscreen-menu").style.top = "0"
  }

  return (
    <div>
      {showBurger && (
        <div className={mobileNavStyles.menuIconWrapper}>
          <BiMenu
            className={`${mobileNavStyles.menuIcon} `}
            onClick={openMenu}
          />
        </div>
      )}
      <nav className={mobileNavStyles.nav} id="fullscreen-menu">
        <IoMdClose className={mobileNavStyles.closeIcon} onClick={closeMenu} />
        <StaticImage
          className={mobileNavStyles.logo}
          src="../../images/logo_stamp.jpg"
          alt="crabatoadia logo"
          placeholder="blurred"
          style={{
            display: `block`,
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        />
        <ul className={mobileNavStyles.ul}>
          <Link onClick={closeMenu} className={mobileNavStyles.link} to="/">
            Home
          </Link>
          <Link
            onClick={closeMenu}
            className={mobileNavStyles.link}
            to="/artists"
          >
            Artists
          </Link>
          <Link
            onClick={closeMenu}
            className={mobileNavStyles.link}
            to="/store"
          >
            Store
          </Link>
          <a
            className={mobileNavStyles.link}
            onClick={() => {
              closeMenu()
              scrollTo("#footer")
            }}
          >
            Contact
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav

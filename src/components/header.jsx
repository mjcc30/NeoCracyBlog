import React, { useState } from "react"
import { Link } from "gatsby"
import {
  FaBars,
  FaTimes,
} from "react-icons/fa"

import style from "../style/global.css"

const Header = () => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(true)

  function toggleMenu() {
    setMenuCollapsed(!isMenuCollapsed)
  }

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <div className={style.title}>
          <Link to={"/"}>
            <h4>
              {process.env.SITE_TITLE}
            </h4>
          </Link>
        </div>
        <div className={style.menuButton}>
          {isMenuCollapsed ? (
            <FaBars size="30" onClick={toggleMenu} />
          ) : (
            <FaTimes size="30" onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div
        className={[
          style.list,
          isMenuCollapsed ? style.collapsedMenu : style.expandedMenu,
        ].join(" ")}
      >
        <ul>
          <li>
            <Link to={process.env.SITE_ARTICLES_PATH}>Articles</Link>
          </li>
          <li>
            <Link to={process.env.SITE_TAGS_PATH}>Catégories</Link>
          </li>
          <li>
            <Link to={process.env.SITE_CONTACT_PATH}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

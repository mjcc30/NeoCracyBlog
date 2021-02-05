import React, { useState } from "react"
import { Link } from "gatsby"
import {
  FaBars,
  FaTimes,
} from "react-icons/fa"
import style from "./header.module.less"

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
              Neocracy
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
            <Link to={"/articles"}>Articles</Link>
          </li>
          <li>
            <Link to={"/tags"}>Catégories</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

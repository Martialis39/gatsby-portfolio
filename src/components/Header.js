import React from "react"
import Face from "./Face"
import SingleColumn from "./SingleColumn"
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <SingleColumn>
        <div className={styles.inner}>
          <Face negative={true} />
          <p>MartPart</p>
          <nav className={styles.menu}>
            <ul>
              <li className={styles.menu_item}>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </SingleColumn>
    </header>
  )
}

export default Header

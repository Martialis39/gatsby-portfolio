import React from "react"
import styles from "./MainLayout.module.scss"

function MainLayout({ children }) {
  return <section className={styles.mainLayout}>{children}</section>
}

export default MainLayout

import React from "react"
import styles from "./SingleColumn.module.css"

function SingleColumn({ children }) {
  return <div className={styles.single_column}>{children}</div>
}

export default SingleColumn

import React from "react";
import styles from "./WithSidebar.module.css";

function WithSidebar({ sidebarContent, mainContent }) {
  return (
    <section className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.sidebar}>{sidebarContent}</div>
        <div className={styles.main}>{mainContent}</div>
      </div>
    </section>
  );
}

export default WithSidebar;

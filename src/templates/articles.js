import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/MainLayout"
import styles from "./articles.module.scss"
import SEO from "../components/SEO"

export default function Template(props) {
  const { pageContext } = props
  console.log("props is ", props)
  return (
    <>
      <SEO title={"Posts"} excerpt={"Adventures in the land of JavaScript!"} />
      <MainLayout>
        <div className={styles.articles}>
          <h1>
            Writing about<br></br>things
          </h1>
          <div>
            <ul>
              {pageContext.edges &&
                pageContext.edges.map(edge => {
                  return (
                    <li className={styles.item}>
                      <a href={edge.node.frontmatter.path}>
                        <div>
                          <div className={styles.header}>
                            <h2 className={styles.title}>
                              {edge.node.frontmatter.title}
                            </h2>
                          </div>
                          <p className={styles.excerpt}>{edge.node.excerpt}</p>
                          <p className={styles.date}>
                            {edge.node.frontmatter.date}
                          </p>
                        </div>
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className={styles.divider} />
        </div>
      </MainLayout>
    </>
  )
}

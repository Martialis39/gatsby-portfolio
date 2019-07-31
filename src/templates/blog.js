import React from "react"
import SingleColumn from "../components/SingleColumn"
import PageFrame from "../components/PageFrame"
import styles from "./blog.module.css"
import { Link } from "gatsby"

export default ({ pageContext: { posts } }) => {
  return (
    <PageFrame>
      <SingleColumn>
        <section className={styles.blog}>
          <header className={styles.header}>
            <h1>
              <span>Let's</span>
              <span>talk</span>
              <span className={styles.header__title}>JavaScript.</span>
            </h1>
            <h2>Latest</h2>
          </header>

          {posts.map((post, index) => {
            let day = post.date.split("/").slice(0, -1)[0]
            let month = post.date.split("/").slice(0, -1)[1]

            return (
              <article className={styles.article} key={index}>
                <Link to={`/blog/${post.slug}`}>
                  <div className={styles.article__flex}>
                    <div className={styles.article__date}>
                      <div className={styles.article__day}>{day}</div>
                      <div className={styles.article__month}>{month}</div>
                    </div>
                    <div className={styles.article__title}>
                      <h3>{post.title}</h3>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
          <article></article>
        </section>
      </SingleColumn>
    </PageFrame>
  )
}

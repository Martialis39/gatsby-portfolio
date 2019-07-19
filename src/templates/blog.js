import React from "react"
import SingleColumn from "../components/SingleColumn"
import Header from "../components/Header"
import Face from "../components/Face"
import styles from "./blog.module.css"

export default ({ pageContext: { posts } }) => {
  return (
    <SingleColumn>
      <section className={styles.blog}>
        <header className={styles.header}>
          <Face negative={true} customColor={"#ff69b470"} />
          <h1>Welcome to my blog.</h1>
          <h2>Here I discuss things JavaScript.</h2>
        </header>

        {posts.map((post, index) => {
          return (
            <article className={styles.article} key={index}>
              <a href={`https://martpart.ee/blog/${post.slug}`}>
                <h3>{post.title.rendered}</h3>
              </a>
            </article>
          )
        })}
        <article></article>
      </section>
    </SingleColumn>
  )
}

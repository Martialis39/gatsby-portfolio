import React from "react"
import SingleColumn from "../components/SingleColumn"
import styles from "./post.module.css"

function createMarkup(html) {
  return { __html: html }
}

export default ({ pageContext: { title, content, date, image } }) => {
  return (
    <section className={styles.post__main}>
      <SingleColumn>
        <article className={styles.post}>
          <header>
            <h1>
              {title.split(" ").map(word => (
                <span>{word} </span>
              ))}
            </h1>
            <p>{date}</p>
          </header>
          <div dangerouslySetInnerHTML={createMarkup(content)} />
          <footer className={styles.contact}>
            <h5>Get in touch</h5>
            <p>
              I am working on getting WordPress comments working with the API,
              in the meanwhile you can{" "}
              <a href="mailto:mart_lepanen@hotmail.com">email me.</a>
            </p>
          </footer>
        </article>
      </SingleColumn>
    </section>
  )
}

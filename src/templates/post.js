import React, { useEffect } from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/MainLayout"
import styles from "./post.module.scss"
import SEO from "../components/SEO"

let cb = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry)
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  })
}
const observer = new IntersectionObserver(cb, {
  root: document.body,
  rootMargin: "0px",
  threshold: 1.0,
})

export default function Template(props) {
  useEffect(() => {
    let target = document.querySelector("#content-start")
    observer.observe(target)
  }, [])
  const { markdownRemark } = props.data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const pageContext = props.pageContext
  return (
    <>
      <SEO title={frontmatter.title} excerpt={pageContext.excerpt} />
      <MainLayout>
        <div className={styles.nav}>Articles</div>
        <div className={styles.post}>
          <div
            id="content-start"
            className={styles.post__title}
            style={{ backgroundColor: pageContext.color }}
          >
            <h1>{frontmatter.title}</h1>
            <p className={styles.date}>{frontmatter.date}</p>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className={styles.divider} />
        </div>
      </MainLayout>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        tags
      }
    }
  }
`

import React from "react"
import SingleColumn from "../components/SingleColumn"
import PageFrame from "../components/PageFrame"
import styles from "./post.module.css"
import BlockContent from "../components/block-content/BlockContent"

function BlogPost(props) {
  const { rawBody, title, date } = props

  return (
    <article className={styles.post}>
      <h1>{title}</h1>
      <p>{date}</p>
      {rawBody && <BlockContent blocks={rawBody} />}
    </article>
  )
}

const BlogPostTemplate = props => {
  const post = props && props.pageContext
  console.log(post, " is data")
  return (
    <PageFrame title={post.title} pagePath={post.pagePath}>
      <section className={styles.post__main}>
        <SingleColumn>{post && <BlogPost {...post} />}</SingleColumn>
      </section>
    </PageFrame>
  )
}
export default BlogPostTemplate

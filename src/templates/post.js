import React from "react"
import SingleColumn from "../components/SingleColumn"
import SEO from "../components/SEO"
import styles from "./post.module.css"
import BlockContent from "../components/block-content/BlockContent"

import { ArticleDiv } from "../components/typographyStyles"

function BlogPost(props) {
  const { rawBody, title, date } = props

  return (
    <ArticleDiv className={styles.post}>
      <h1>{title}</h1>
      <p>{date}</p>
      {rawBody && <BlockContent blocks={rawBody} />}
    </ArticleDiv>
  )
}

const BlogPostTemplate = props => {
  const post = props && props.pageContext
  console.log(post, " is data")
  return (
    <SEO
      title={post.title}
      pagePath={post.pagePath}
      excerpt={post.excerpt ? post.excerpt : null}
    >
      <section className={styles.post__main}>
        <SingleColumn>{post && <BlogPost {...post} />}</SingleColumn>
      </section>
    </SEO>
  )
}
export default BlogPostTemplate

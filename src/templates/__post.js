import React from "react"
import SEO from "../components/SEO"
import BlockContent from "../components/block-content/BlockContent"
import Chips from "../components/Chips"
import MainLayout from "../components/MainLayout"
import { Link } from "gatsby"
import styles from "./post.module.scss"

function Main(props) {
  const { rawBody, nextPost, prevPost, categories, date, title } = props
  return (
    <>
      <h1>{title}</h1>
      <p className="date">{date}</p>
      {categories && <Chips items={categories} />}
      <div>
        <Link to="/blog">Back to blog</Link>
      </div>
      {rawBody && <BlockContent blocks={rawBody} />}
      <div className={styles.divider} />
      <div className={styles.pages}>
        {prevPost ? (
          <div className="prev">
            <p>Previous post:</p>
            <Link to={`/blog/${prevPost.slug}`}>{prevPost.title}</Link>
          </div>
        ) : (
          <p>This is the oldest post.</p>
        )}
        {nextPost ? (
          <div className="next">
            <p>Next post:</p>
            <Link to={`/blog/${nextPost.slug}`}>{nextPost.title}</Link>
          </div>
        ) : null}
      </div>
    </>
  )
}

const BlogPostTemplate = props => {
  const post = props && props.pageContext

  return (
    <SEO
      title={post.title}
      pagePath={post.pagePath}
      excerpt={post.excerpt ? post.excerpt : null}
    >
      <MainLayout>
        <Main
          mainImageUrl={post.mainImage ? post.mainImage.asset.url : null}
          rawBody={post.rawBody}
          nextPost={post.nextPost}
          prevPost={post.prevPost}
          categories={post.categories}
          title={post.title}
          date={post.date}
        />
      </MainLayout>
    </SEO>
  )
}
export default BlogPostTemplate

import React from "react"
import SEO from "../components/SEO"
import BlockContent from "../components/block-content/BlockContent"
import Chips from "../components/Chips"
import SidebarLayout from "../components/SidebarLayout"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkDiv = styled.div`
  .next a,
  .prev a {
    line-height: 1.9;
    font-size: 16px;
  }
  @media (min-width: 770px) {
    display: flex;
    justify-content: space-between;

    > * {
      margin: 0;
    }
  }

  > * {
    min-width: 0;
    flex: 1;
  }

  > *:not(:last-child) {
    margin-bottom: 15px;
  }
`

const Divider = styled.div`
  background: hotpink;
  height: 1px;
  width: 100%;
  margin: 20px 0;
  padding: 0;
`

function Sidebar(props) {
  const { categories, date, title } = props

  return (
    <>
      <h1>{title}</h1>
      <p className="date">{date}</p>
      {categories && <Chips items={categories} />}
      <div>
        <Link to="/blog">Back to blog</Link>
      </div>
    </>
  )
}

function Main(props) {
  const { rawBody, nextPost, prevPost } = props
  return (
    <>
      {rawBody && <BlockContent blocks={rawBody} />}
      <Divider />
      <LinkDiv>
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
      </LinkDiv>
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
      <SidebarLayout
        sidebarContent={
          <Sidebar
            categories={post.categories}
            title={post.title}
            date={post.date}
          />
        }
        mainContent={
          <Main
            mainImageUrl={post.mainImage ? post.mainImage.asset.url : null}
            rawBody={post.rawBody}
            nextPost={post.nextPost}
            prevPost={post.prevPost}
          />
        }
      />
    </SEO>
  )
}
export default BlogPostTemplate

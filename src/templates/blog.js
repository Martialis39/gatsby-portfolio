import React from "react"
import SingleColumn from "../components/SingleColumn"
import SEO from "../components/SEO"

import { Link } from "gatsby"
import { FloatingLink, ArticleListItem } from "./blogStyles"
import { StyledHeader } from "../components/typographyStyles"

export default ({ pageContext: { posts, pagePath } }) => {
  return (
    <SEO title="Blog" pagePath={pagePath}>
      <SingleColumn>
        <section>
          <StyledHeader>
            <FloatingLink>
              <Link to="/">Back home</Link>
            </FloatingLink>
            <h1>
              <span>Let's</span>
              <span>talk</span>
              <span className="offset">JavaScript.</span>
            </h1>
            <h2>Latest</h2>
          </StyledHeader>

          <ul>
            {posts.map((post, index) => {
              let day = post.date.split("/").slice(0, -1)[0]
              let month = post.date.split("/").slice(0, -1)[1]
              return (
                <ArticleListItem key={index}>
                  <Link to={`/blog/${post.slug}`}>
                    <div className="flex">
                      <div className="date">
                        <div className="day">{day}</div>
                        <div className="month">{month}</div>
                      </div>
                      <div className="title">
                        <h3>{post.title}</h3>
                      </div>
                    </div>
                  </Link>
                </ArticleListItem>
              )
            })}
          </ul>
        </section>
      </SingleColumn>
    </SEO>
  )
}

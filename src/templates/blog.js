import React from "react"
import SingleColumn from "../components/SingleColumn"
import SEO from "../components/SEO"

import { Link } from "gatsby"
import { FloatingLink } from "./blogStyles"
import { StyledHeader } from "../components/typographyStyles"

import Card from "../components/Card"

export default ({ pageContext: { posts, pagePath } }) => {
  return (
    <SEO title="Blog" pagePath={pagePath}>
      <SingleColumn>
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
            return (
              <Card
                key={index}
                slug={post.slug}
                title={post.title}
                img={post.image}
                excerpt={post.excerpt}
                contentType={"blog"}
              />
            )
          })}
        </ul>
      </SingleColumn>
    </SEO>
  )
}

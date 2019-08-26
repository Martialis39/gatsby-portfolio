import React from "react"
import SingleColumn from "../components/SingleColumn"
import SEO from "../components/SEO"
import Card from "../components/Card"

import { Link } from "gatsby"
import { Projects, FloatingLink } from "./projectStyles"

import { StyledHeader } from "../components/typographyStyles"

const heightParameter = "?h=300"

export default ({ pageContext: { projects, pagePath } }) => {
  return (
    <SEO title="Projects" pagePath={pagePath}>
      <SingleColumn>
        <StyledHeader style={{ position: "relative" }}>
          <FloatingLink>
            <Link to="/">Back home</Link>
          </FloatingLink>
          <h1>
            <span>Let's</span>
            <span>look at</span>
            <span className="offset">JavaScript.</span>
          </h1>

          <div></div>
        </StyledHeader>
        <Projects>
          {projects.map((project, index) => {
            return (
              <Card
                key={index}
                slug={project.slug}
                img={project.image + heightParameter}
                title={project.title}
                excerpt={project.excerpt}
                contentType={"projects"}
              />
            )
          })}
        </Projects>
      </SingleColumn>
    </SEO>
  )
}

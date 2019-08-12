import React, { useState } from "react"
import SingleColumn from "../components/SingleColumn"
import SEO from "../components/SEO"

import { Link } from "gatsby"
import { Projects, Header, ProjectItem, ProjectImage } from "./projectStyles"

const heightParameter = "?h=300"

export default ({ pageContext: { projects, pagePath } }) => {
  return (
    <SEO title="Projects" pagePath={pagePath}>
      <SingleColumn>
        <Header>
          <h1>Projects.</h1>
        </Header>
        <Projects>
          {projects.map((project, index) => {
            return (
              <ProjectItem key={index}>
                <ProjectImage img={project.image + heightParameter} />
                <div className="info">
                  <h3 className="title">{project.title}</h3>
                  <p>{project.excerpt}</p>
                </div>
                <Link className="link" to={`/projects/${project.slug}`}></Link>
              </ProjectItem>
            )
          })}
        </Projects>
      </SingleColumn>
    </SEO>
  )
}

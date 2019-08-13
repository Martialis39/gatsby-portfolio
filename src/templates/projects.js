import React, { useState } from "react"
import SingleColumn from "../components/SingleColumn"
import SEO from "../components/SEO"

import { Link } from "gatsby"
import {
  Projects,
  ProjectItem,
  ProjectImage,
  ProjectsTitle,
} from "./projectStyles"

const heightParameter = "?h=300"

export default ({ pageContext: { projects, pagePath } }) => {
  return (
    <SEO title="Projects" pagePath={pagePath}>
      <SingleColumn>
        <header>
          <ProjectsTitle>
            <span>Let's</span>
            <span>look at</span>
            <span className="title">JavaScript.</span>
          </ProjectsTitle>
        </header>
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

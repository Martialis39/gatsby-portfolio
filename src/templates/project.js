import React from "react"
import SEO from "../components/SEO"
import BlockContent from "../components/block-content/BlockContent"
import MainLayout from "../components/MainLayout"
import Chips from "../components/Chips"
import { Link } from "gatsby"

function Main(props) {
  const { title, deploymentUrl, sourceUrl, techonologies, rawBody } = props
  return (
    <>
      <h1>{title}</h1>
      {techonologies && <Chips items={techonologies} />}
      {deploymentUrl && (
        <a target="_blank" rel="noopener noreferrer" href={deploymentUrl}>
          Live demo
        </a>
      )}
      <br></br>
      {sourceUrl && (
        <a target="_blank" rel="noopener noreferrer" href={sourceUrl}>
          Source
        </a>
      )}
      <div>
        <Link to="/projects">Back to projects</Link>
      </div>
      <div>{rawBody ? <BlockContent blocks={rawBody} /> : null}</div>
    </>
  )
}

const ProjectTemplate = props => {
  const project = props && props.pageContext

  return (
    <SEO
      title={project.title}
      pagePath={project.pagePath}
      excerpt={project.excerpt ? project.excerpt : null}
    >
      <div>
        <MainLayout>
          <Main
            title={project.title}
            deploymentUrl={project.deploymentUrl}
            sourceUrl={project.sourceUrl}
            techonologies={project.techonologies}
            rawBody={project.rawBody}
          />
        </MainLayout>
      </div>
    </SEO>
  )
}
export default ProjectTemplate

import React from "react"
import SEO from "../components/SEO"
import BlockContent from "../components/block-content/BlockContent"
import SidebarLayout from "../components/SidebarLayout"
import { ArticleDiv } from "../components/typographyStyles"
import Chips from "../components/Chips"
import { Link } from "gatsby"

function Sidebar(props) {
  const { title, deploymentUrl, sourceUrl, techonologies } = props

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
    </>
  )
}

function Main(props) {
  const { rawBody } = props
  return (
    <ArticleDiv>
      {rawBody ? <BlockContent blocks={rawBody} /> : null}
    </ArticleDiv>
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
        <SidebarLayout
          sidebarContent={
            <Sidebar
              deploymentUrl={project.deploymentUrl}
              sourceUrl={project.sourceUrl}
              techonologies={project.techonologies}
              title={project.title}
            />
          }
          mainContent={
            <Main
              mainImageUrl={
                project.mainImage ? project.mainImage.asset.url : null
              }
              rawBody={project.rawBody}
            />
          }
        />
      </div>
    </SEO>
  )
}
export default ProjectTemplate

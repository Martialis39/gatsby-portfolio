import React from "react"
import SEO from "../components/SEO"
import BlockContent from "../components/block-content/BlockContent"
import styled from "styled-components"
import WithSidebar from "../components/WithSidebar"
import { ArticleDiv } from "../components/typographyStyles"

function Chips({ techonologies }) {
  const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: -10px;
    > * {
      margin: 10px;
    }
  `
  const StyledDiv = styled.div`
    background: hotpink;
    padding: 4px;
    border-radius: 4px;
    p {
      color: white;
      font-size: 14px;
    }
  `
  return (
    <Wrap>
      {techonologies.map(tech => {
        return (
          <StyledDiv>
            <p>{tech.title}</p>
          </StyledDiv>
        )
      })}
    </Wrap>
  )
}

function Sidebar(props) {
  const { title, deploymentUrl, sourceUrl, techonologies } = props
  console.log("Env variables are", process.env)
  return (
    <>
      <h1>{title}</h1>
      {techonologies && <Chips techonologies={techonologies} />}
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
    </>
  )
}

function Main(props) {
  const { mainImage, rawBody } = props
  return (
    <ArticleDiv>
      {rawBody ? <BlockContent blocks={rawBody} /> : null}
    </ArticleDiv>
  )
}

const ProjectTemplate = props => {
  const project = props && props.pageContext
  console.log(project)
  return (
    <SEO
      title={project.title}
      pagePath={project.pagePath}
      excerpt={project.excerpt ? project.excerpt : null}
    >
      <div>
        <WithSidebar
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

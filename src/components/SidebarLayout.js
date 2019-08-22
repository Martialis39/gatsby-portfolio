import React from "react"
import styled from "styled-components"

import { ArticleDiv } from "./typographyStyles"

const StyledSection = styled.section`
  display: block;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 136px;
  padding: 0px 20px;

  .mainContent {
    padding-bottom: 20px;
    margin: 0 auto;
  }
  .side {
    margin-bottom: 16px;

    .date {
      font-size: 16px;
      line-height: 1;
      margin-bottom: 8px;
    }

    a {
      position: relative;
      display: inline-block;

      font-size: 16px;
    }

    a:not(:last-child) {
      margin-bottom: 8px;
    }

    h1 {
      font-size: 40px;
      line-height: 1.1;

      margin-bottom: 20px;
    }
  }
`

function SidebarLayout({ sidebarContent, mainContent }) {
  return (
    <StyledSection>
      <div className="side">{sidebarContent}</div>
      <div className="mainContent">
        <ArticleDiv>{mainContent}</ArticleDiv>
      </div>
    </StyledSection>
  )
}

export default SidebarLayout

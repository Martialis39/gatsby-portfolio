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
      padding: 5px;
      margin-left: -5px;
      margin-top: -5px;
      font-size: 16px;
    }

    a:not(:last-child) {
      margin-bottom: 8px;
    }
    a:after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 35%;
      opacity: 0.2;
      bottom: 0;
      background-color: hotpink;
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

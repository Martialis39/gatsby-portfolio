import React from "react"
import styled from "styled-components"

import { ArticleDiv } from "./typographyStyles"

const StyledSection = styled.section`
  display: flex;
  max-width: 1408px;
  margin: 40px auto;
  padding: 0px 20px;
  flex-wrap: wrap;
  .mainContent {
    min-width: 0;
    padding-bottom: 20px;
  }
  .side {
    width: 100%;
    min-width: 0;

    a {
      position: relative;
      font-weight: 700;
      display: inline-block;
      padding: 5px;
      margin-left: -5px;
      margin-bottom: 20px;
      font-size: 20px;
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
      font-size: 36px;
      font-family: Rubik, sans-serif;
      font-weight: 700;
    }
  }
  @media (min-width: 820px) {
    .side {
      font-size: 50px;
      max-width: 18%;
      position: fixed;
      left: 20px;
      height: 100vh;
    }

    .mainContent {
      max-width: 62.2%;
      margin-right: 6.6%;
      margin-left: auto;
    }
  }
  @media (min-width: 1400px) {
    .side {
      margin: 0 13.3%;
    }

    .mainContent {
      max-width: 55%;
      margin-right: 13.3%;
    }
  }
`

function WithSidebar({ sidebarContent, mainContent }) {
  return (
    <StyledSection>
      <div className="side">{sidebarContent}</div>
      <div className="mainContent">
        <ArticleDiv>{mainContent}</ArticleDiv>
      </div>
    </StyledSection>
  )
}

export default WithSidebar

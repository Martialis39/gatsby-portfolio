import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  max-width: 1408px;
  margin: 20px auto;
  padding: 0px 20px;
  flex-wrap: wrap;
  .side {
    width: 100%;

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
      font-size: 50px;
      font-family: Rubik, sans-serif;
      font-weight: 700;
    }
  }
  @media (min-width: 768px) {
    .side {
      max-width: 18%;
    }

    .mainContent {
      max-width: 62.2%;
      margin: 0 6.6%;
    }
  }
  @media (min-width: 1400px) {
    .side {
      margin-right: 13.3%;
    }

    .mainContent {
      max-width: 55%;
      margin: 0;
    }
  }
`

function WithSidebar({ sidebarContent, mainContent }) {
  return (
    <StyledSection>
      <div className="side">{sidebarContent}</div>
      <div className="mainContent">{mainContent}</div>
    </StyledSection>
  )
}

export default WithSidebar

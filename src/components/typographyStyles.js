import styled from "styled-components"

export const StyledHeader = styled.header`
  position: relative;
  padding-top: 40px;
  h1 {
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 700;
    margin-bottom: 20px;
  }

  span {
    display: block;
    font-size: 32px;
    line-height: 0.8;
  }

  span.offset {
    font-size: 46px;
    margin-left: -10px;
  }

  @media (min-width: 840px) {
    padding-top: 80px;
    span {
      font-size: 56px;
    }
    span.offset {
      font-size: 74px;
      margin-left: -16px;
    }
  }
`

export const ArticleDiv = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 16px;
  }

  p > code {
    background-color: #fdf6e3;
    color: #657b83;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  p {
    font-family: "Raleway", sans-serif;
    margin: 16px 0;
  }

  figure {
    margin: 16px 0;
  }

  li {
    margin: 16px 0;
    margin-left: 16px;
    position: relative;
    :after {
      position: absolute;
      display: block;
      content: "";
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background-color: hotpink;
      top: 5px;
      left: -16px;
    }
  }

  @media (min-width: 800px) {
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 26px;
    }
  }
`

import styled from "styled-components"

export const ArticleDiv = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Rubik;
    margin: 16px 0;
  }

  figure {
    margin: 16px 0;
  }

  code {
    background-color: #fdf6e3;
    color: #657b83;
    padding: 2px;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
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

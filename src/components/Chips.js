import React from "react"
import styled from "styled-components"

function Chips({ items }) {
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
      {items.map(tech => {
        return (
          <StyledDiv>
            <p>{tech.title}</p>
          </StyledDiv>
        )
      })}
    </Wrap>
  )
}
export default Chips

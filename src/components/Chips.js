import React from "react"
import styled from "styled-components"

function Chips({ items }) {
  const Wrap = styled.div`
    p {
      color: black;
      font-size: 24px;
    }
  `
  return (
    <Wrap>
      <p>
        {items.map((tech, index) => (
          <span>
            {tech.title}
            {index !== items.length - 1 && " | "}
          </span>
        ))}
      </p>
    </Wrap>
  )
}
export default Chips

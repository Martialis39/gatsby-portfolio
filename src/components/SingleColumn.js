import React from "react"
import styles from "./SingleColumn.module.css"

import styled from "styled-components"

const StyledSection = styled.section`
  max-width: 920px;
  margin: 0 auto;
  padding: 40px 10px;
  height: 100%;
  @media (min-width: 600px) {
    padding: 20px;
  }
`

function SingleColumn({ children }) {
  return (
    <StyledSection className={styles.single_column}>{children}</StyledSection>
  )
}

export default SingleColumn

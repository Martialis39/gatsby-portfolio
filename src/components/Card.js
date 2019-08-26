import React, { useState, useCallback } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

export const CardItem = styled.article`
  display: flex;
  height: 280px;
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
  position: relative;
  margin: 0 auto;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;  
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.3);

  .title {
    padding: 10px;
    font-weight: 700;
    font-size: 28px;
  }

  .excerpt {
    padding: 0 10px;
  }

  @media (max-width: 600px){
    max-width: 100%;
    width:
    .info {
        transform: translateY(0);
      }
  }


  :hover {
      .info {
        transform: translateY(0);
      }
  }

  
  a {
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    border: none;

    &:hover {
      background: transparent;
    }
  }


  .info {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    pointer-events: none;
    position: absolute;
    bottom: 0;
    transform: translateY(${props => props.height + "px"});
    width: 100%;
    transition: all 200ms;
    

    @media (max-width: 600px) {
       transform: translateY(0);
    }
    
    p {
      font-size: 18px;
    }
  }
  }
`

export const CardImage = styled.div`
  height: 280px;
  width: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 8px;
  backface-visibility: hidden;
  transition: all 300ms;

  ${CardItem}:hover & {
    transform: scale(1.1);
  }
`

function Card({ slug, title, excerpt, img, contentType }) {
  const [height, setHeight] = useState(0)
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height)
    }
  }, [])

  return (
    <CardItem height={height}>
      <CardImage img={img} />
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="excerpt" ref={measuredRef}>
          {excerpt}
        </p>
      </div>
      <Link className="link" to={`/${contentType}/${slug}`}></Link>
    </CardItem>
  )
}

export default Card

import styled from "styled-components"
import { useSpring, animated } from "react-spring"

export const Projects = styled.div`
  position: relative;
`

export const Header = styled.div`
  h1 {
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (min-width: 1200px) {
      font-size: 56px;
    }
  }
`

export const ProjectItem = styled(animated.article)`
  display: flex;
  height: 280px;
  width: 450px;
  position: relative;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;  
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.3);

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

    :after {
      display: none;
    }
  }
  .title {
    font-family: "Rubik", sans-serif;
    font-weight: 700;
    font-size: 36px;
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
    transform: translateY(100%);
    width: 100%;
    transition: all 200ms;
    padding: 20px 10px;

    @media (max-width: 600px) {
       transform: translateY(0);
    }
    
    p {
      font-size: 18px;
    }
  }
  }
`

export const ProjectImage = styled(animated.div)`
  height: 280px;
  width: 450px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 8px;
  backface-visibility: hidden;
  transition: all 300ms;

  ${ProjectItem}:hover & {
    transform: scale(1.1);
  }
`

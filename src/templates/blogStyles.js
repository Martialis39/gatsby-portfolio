import styled from "styled-components"

export const FloatingLink = styled.div`
  margin-bottom: 20px;
  @media (min-width: 570px) {
    position: absolute;
    right: 0;
  }
`

export const ArticleListItem = styled.li`
  display: flex;
  position: relative;
  margin-bottom: 10px;

  h3 {
    font-weight: 500;
  }

  a {
    border: none;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .title {
    margin-left: 10px;
  }

  .date {
    flex: none;
    height: 50px;
    width: 50px;
    position: relative;
    border: 2px solid black;
    overflow: hidden;
  }

  .date:after {
    position: absolute;
    content: "";
    display: block;
    background: linear-gradient(black 50%, white 50%);
    height: 200%;
    width: 200%;
    left: -50%;
    top: -50%;
    transition: transform 200ms ease-in-out;
    transform: rotate(135deg);
  }

  &:hover .date:after {
    transform: rotate(-90deg);
  }

  &:hover .day {
    top: 50%;
    transform: translateY(-50%);
    color: white;
  }

  &:hover .month {
    bottom: 50%;
    transform: translateY(50%);
    color: black;
  }

  .day,
  .month {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1;
    transition: all 200ms ease-in-out;
  }

  .day {
    position: absolute;
    top: 5px;
    left: 3px;
    color: black;
  }

  .month {
    position: absolute;
    right: 3px;
    bottom: 5px;
    color: white;
  }
`

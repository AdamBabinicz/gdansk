import React from "react";
import arrow from "../img/2.svg";
import styled from "styled-components";

function AnimatedButton({ name }) {
  return (
    <AnimatedButtonStyled>
      {name}
      <img src={arrow} alt="..." />
    </AnimatedButtonStyled>
  );
}

const AnimatedButtonStyled = styled.button`
  background: var(--accent-pink);
  padding: 0.7rem 1.8rem;
  font-family: "Black Ops One", cursive;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  position: relative;
  transition: all 0.3s;

  @media screen and (max-width: 700px) {
    margin-top: 1.5rem;
    margin-bottom: 4rem;
  }

  img {
    width: 3rem;
    padding-left: 0.9rem;
    transition: all 0.3s;
  }

  &:hover {
    opacity: 0.7;
    transform: translateX(20px);
    color: var(--neutral-light);
    background: var(--dark-primary);

    img {
      padding-left: 1.4rem;
      transform: translateX(20px);
    }
  }
`;

export default AnimatedButton;

import React from "react";
import styled from "styled-components";
// import { Link as LinkS, animateScroll as scroll } from "react-scroll";

function PrimaryButton({ name }) {
  return (
    <>
      <ButtonStyled>{name}</ButtonStyled>
    </>
  );
}

const ButtonStyled = styled.button`
  background: var(--accent-pink);
  padding: 0.7rem 1.8rem;
  font-family: "Black Ops One", cursive;
  font-size: inherit;
  color: inherit;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  @media screen and (max-width: 700px) {
    display: none;
  }

  &:hover {
    opacity: 0.7;
    color: var(--neutral-light);
    background: var(--dark-primary);
  }
`;

export default PrimaryButton;

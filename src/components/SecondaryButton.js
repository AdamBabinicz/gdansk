import React from "react";
import styled from "styled-components";
import arrow from "../img/2.svg";

function SecondaryButton({ name }) {
  return (
    <Secondarybutton>
      {name}
      <img src={arrow} alt="..." />
    </Secondarybutton>
  );
}

const Secondarybutton = styled.button`
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
  transition: all 0.3s;

  img {
    width: 3rem;
    padding-left: 0.9rem;
    transition: all 0.3s;
  }

  &:hover {
    transform: translateX(20px);
    opacity: 0.7;
    color: var(--neutral-light);
    background: var(--dark-primary);

    img {
      padding-left: 1.4rem;
      transform: translateX(20px);
    }
  }
`;

export default SecondaryButton;

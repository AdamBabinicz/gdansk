import React, { useState } from "react";
import styled from "styled-components";
import plus from "../img/10.png";
import minus from "../img/11.png";
import { Fade } from "react-reveal";

function Question({ title, description }) {
  const [toggle, setToggle] = useState(false);
  const btnToggler = () => {
    setToggle(!toggle);
  };

  return (
    <Fade cascade>
      <QuestionStyled>
        <div className="q-con">
          <div className="toggle-title">
            <h4>{title}</h4>
            <button onClick={btnToggler}>
              {toggle ? (
                <img src={minus} alt="..." />
              ) : (
                <img src={plus} alt="..." />
              )}
            </button>
          </div>
          {toggle && <p>{description}</p>}
        </div>
      </QuestionStyled>
    </Fade>
  );
}

const QuestionStyled = styled.div`
  background: #fff;
  width: 80%;
  margin: 1rem auto;
  padding: 1.4rem 1rem;
  border-radius: 24px;
  box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
  transition: all 1s ease-in-out;
  p {
    transition: all 1s ease-in-out;
  }
  h4 {
    color: #16194f;
    font-family: "Tahoma", sans-serif;
    margin-bottom: 1rem;
    transition: all 1s ease-in-out;
  }
  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 1s ease-in-out;
    button {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      img {
        width: 1.5rem;
      }
    }
  }
`;

export default Question;

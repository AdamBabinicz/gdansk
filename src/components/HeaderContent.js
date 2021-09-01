import React, { useState } from "react";
import styled from "styled-components";
import Secondarybutton from "./SecondaryButton";
import Popup from "./Popup";
import Img from "../img/23.jpg";
import img from "../img/3.png";
import img1 from "../img/5.jpg";
import img2 from "../img/6.jpg";
import img3 from "../img/7.jpg";
import { Fade } from "react-reveal";

function HeaderContent() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  // const [buttonPopup1, setButtonPopup1] = useState(false);
  const [state] = useState({
    title: "Park Oliwski",
    img: Img,
    p0: "Początkiem dzisiejszego parku był przyklasztorny ogród założony przez cystersów. Prawdopodobnie był położony po wschodniej stronie starej siedziby opatów z XV wieku, dalej do Zatoki Gdańskiej rozciągał się nadmorski las, który rozcinał Potok Oliwski. Po wzniesieniu przez opata Franciszka Zaleskiego ...",
    em: "pl.wikipedia.org/wiki/Park_Oliwski",
  });

  return (
    <HeaderContentStyled>
      <Fade left cascade>
        <div className="left-content">
          <div className="left-text-container">
            <h1>Gdańsk - perła północy</h1>
            <p className="white">
              Jest to miasto o&nbsp;ponadtysiącletniej historii, którego
              tożsamość na&nbsp;przestrzeni wieków kształtowała się pod wpływem
              różnych kultur. Gdańsk był również największym miastem
              Rzeczypospolitej Obojga Narodów, miastem królewskim
              i&nbsp;hanzeatyckim, posiadał prawo do&nbsp;czynnego uczestnictwa
              w&nbsp;akcie wyboru króla, w&nbsp;XVI&nbsp;w. był najbogatszym
              w&nbsp;Rzeczypospolitej.
            </p>
            <div onClick={() => setButtonPopup(true)}>
              <Secondarybutton name={"Zobacz"} />
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3 style={{ fontSize: "15px" }}>{state.title}</h3>
              <br />
              <img src={state.img} alt="..." /> <br />
              <p style={{ fontSize: "14px" }}>{state.p0}</p>
              <em style={{ fontSize: "11px" }}>{state.em}</em>
              <br />
            </Popup>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="right-content">
          <img src={img} alt="..." className="ring" />
          <img src={img1} alt="..." className="ring1" />
          <img src={img2} alt="..." className="ring2" />
          <img src={img3} alt="..." className="ring3" />
        </div>
      </Fade>
    </HeaderContentStyled>
  );
}

const HeaderContentStyled = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  padding-top: 3rem;

  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;

    @media screen and (max-width: 700px) {
      padding: 1rem;
    }

    .left-text-container {
      /* background: rgba(0, 0, 0, 0.21); */
      padding: 2rem;

      h1 {
        font-family: "Tourney", cursive;
        font-weight: bold;
        font-size: 4rem;
        color: var(--neutral-light);
        text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21);

        @media screen and (max-width: 700px) {
          font-size: 3rem;
        }
      }
      .white {
        color: var(--neutral-light);
        padding: 1.4rem 0;
        font-family: "Tahoma", sans-serif;
        line-height: 1.8rem;

        /* @media screen and (max-width: 700px) {
          padding: 0 1rem;
        } */
      }
    }
  }

  .right-content {
    position: relative;

    .ring {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .ring1 {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      width: 13rem;
      /* transform: rotate(-20deg); */
      border: 4px solid var(--accent-pink);
      padding: 1rem;
      border-radius: 10px;
      animation: move 5s infinite;
      transition: all 0.4s ease-in-out;
    }
    .ring2 {
      position: absolute;
      bottom: 10%;
      right: 0;
      left: auto;
      width: 13rem;
      /* transform: rotate(20deg); */
      border: 4px solid var(--accent-pink);
      padding: 1rem;
      border-radius: 10px;
      animation: move1 8s infinite;
      transition: all 0.4s ease-in-out;
    }
    .ring3 {
      position: absolute;
      bottom: 25%;
      left: 0;
      width: 13rem;
      /* transform: rotate(-20deg); */
      border: 4px solid var(--accent-pink);
      padding: 1rem;
      border-radius: 10px;
      animation: move2 8s infinite;
      transition: all 0.4s ease-in-out;
    }
  }

  /* Header Animation */
  .ring1 {
    @keyframes move {
      0% {
        transform: translate(0, -30px) rotate(10deg) scale(1);
        opacity: 0.3;
      }
      50% {
        transform: translate(-20px, 30px) rotate(-10deg) scale(1.1);
        opacity: 1;
      }
      100% {
        transform: translate(0, -30px) rotate(10deg) scale(1);
        opacity: 0.3;
      }
    }
  }
  .ring2 {
    @keyframes move1 {
      0% {
        transform: translate(-20px, 30px) rotate(-10deg) scale(1.1);
        opacity: 0.3;
      }
      50% {
        transform: translate(0, -30px) rotate(10deg) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(-20px, 30px) rotate(-10deg) scale(1.1);
        opacity: 0.3;
      }
    }
  }
  .ring3 {
    @keyframes move2 {
      0% {
        transform: translate(10px, -20px) rotate(-13deg) scale(0.9);
        opacity: 1;
      }
      50% {
        transform: translate(-10px, 30px) rotate(5deg) scale(1.1);
        opacity: 0.6;
      }
      100% {
        transform: translate(10px, -20px) rotate(-13deg) scale(0.9);
        opacity: 1;
      }
    }
  }
`;

export default HeaderContent;

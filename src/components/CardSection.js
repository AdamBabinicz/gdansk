import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import img from "../img/9.jpg";

function CardSection() {
  return (
    <CardSectionStyled id="/poczatki">
      <InnerLayout>
        <div className="card-container">
          <div className="card-left">
            <h2 className="secondary-heading">Początki miasta</h2>
            <p>
              Pierwsza wzmianka o&nbsp;Gdańsku pochodzi ze&nbsp;spisanego po
              łacinie w&nbsp;999 w&nbsp;Żywocie świętego Wojciecha. Opisuje on
              wizytę biskupa Wojciecha na&nbsp;tym terenie wiosną 997 i&nbsp;tę
              datę często przyjmuje się umownie jako początek dziejów miasta,
              chociaż już w&nbsp;VII wieku była tu osada rybacka.
              W&nbsp;dokumencie tym Jan Kanapariusz nazwę Gdańska zapisał
              w&nbsp;zlatynizowanej formie urbe <b>Gyddanyzc</b>. Miejscowość
              pod zlatynizowaną nazwą <b>Gdanczk</b> wymieniona jest
              w&nbsp;łacińskim dokumencie wydanym w&nbsp;Lubiniu w&nbsp;1281
              roku sygnowanym przez księcia pomorskiego Mściwoja II.
            </p>
          </div>
          <div className="card-right">{/* <img src={img} alt="..." /> */}</div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  );
}

const CardSectionStyled = styled.section`
  .card-container {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(400px, auto));

    /* @media screen and (max-width: 845px) {
      grid-template-columns: repeat(1, 1fr);
    } */

    .card-left {
      padding-right: 3rem;

      @media screen and (max-width: 700px) {
        padding: 1rem;
      }
      p {
        padding: 1.4rem 0;
        line-height: 1.8rem;
      }
      .secondary-heading {
        font-size: 3rem;
        font-family: "Tourney", cursive;
        font-weight: bold;
        color: var(--dark-primary);
        line-height: 1.8rem;

        @media screen and (max-width: 700px) {
          font-size: 2rem;
        }
      }
    }
    .card-right {
      display: flex;
      justify-content: flex-end;

      @media screen and (max-width: 700px) {
        justify-content: center;
        img {
          max-width: 100%;
        }
      }
    }
  }
`;

export default CardSection;

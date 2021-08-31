import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Card from "./Card";
import card from "../img/18.jpg";
import card1 from "../img/19.jpg";
import card2 from "../img/20.jpg";
import active from "../img/19.jpg";
import inactive from "../img/20.jpg";
import check from "../img/21.jpg";
import checkDisabled from "../img/22.jpg";

function PaymentSection() {
  return (
    <PaymentStyled id="/amberif">
      <InnerLayout>
        <h3 className="small-heading">
          Amberif
          <span> 🔱 </span>
        </h3>
        <p className="head">
          największe na świecie międzynarodowe targi bursztynu i wyrobów
          bursztynowych w Gdańsku.
        </p>
        <h3 className="heading">
          Konkurs Amberif Design Award <sup>&nbsp; 2021'</sup>
        </h3>
        <div className="card-con">
          <Card
            account={"I"}
            amount={"nagroda"}
            text={"Praca Marcina Tymińskiego z Polski"}
            span={"Główna"}
            button={"🥇"}
            card={card}
            active={active}
            inactive={inactive}
            check={check}
            checkDis={checkDisabled}
            text1={"a"}
            text2={"b"}
            text3={"c"}
            text4={"d"}
            text5={"e"}
            text6={"f"}
            text7={"g"}
            text8={"h"}
          />
          <Card
            account={"II"}
            amount={"nagroda"}
            text={"Praca Helenie Lehtinen z Finlandii"}
            span={"Bursztynowa"}
            button={"🥈"}
            card={card1}
            active={active}
            inactive={inactive}
            check={check}
            checkDis={checkDisabled}
            text1={"a"}
            text2={"b"}
            text3={"c"}
            text4={"d"}
            text5={"e"}
            text6={"f"}
            text7={"g"}
            text8={"h"}
          />
          <Card
            account={"III"}
            amount={"nagroda"}
            text={"Praca Meng-Ju Wu z Tajwanu"}
            span={"Srebrna"}
            button={"🥉"}
            card={card2}
            active={active}
            inactive={inactive}
            check={check}
            checkDis={checkDisabled}
            text1={"a"}
            text2={"b"}
            text3={"c"}
            text4={"d"}
            text5={"e"}
            text6={"f"}
            text7={"g"}
            text8={"h"}
          />
        </div>
      </InnerLayout>
    </PaymentStyled>
  );
}

const PaymentStyled = styled.section`
  .card-con {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    grid-gap: 3rem;
    padding-top: 7.5rem;

    @media screen and (max-width: 570px) {
      padding-top: 3rem;
      row-gap: 2rem;
    }
  }
  .small-heading {
    font-family: "Tourney", cursive;
    font-weight: bold;
    font-size: 3rem;
    color: var(--dark-primary);
    line-height: 1.8rem;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 700px) {
      font-size: 2rem;
      margin-top: 3rem;
    }
    span {
      align-items: center;
      font-size: 1.4rem;
    }
    sup {
      font-size: 2rem;
    }
  }
  .head {
    margin-top: 1rem;
    text-align: center;
  }
  .heading {
    font-family: "Black Ops One", cursive;
    font-size: 2rem;
    color: var(--accent-pink);
    text-align: center;
    margin-top: 2rem;
  }
`;

export default PaymentSection;

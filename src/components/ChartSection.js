import React, { useState } from "react";
import { InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import ChartStats from "./ChartStats";
import img from "../img/5.png";
import AnimatedButton from "./AnimatedButton";
import Popup from "./Popup";
import Img from "../img/24.jpg";

function ChartSection() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  // const [buttonPopup1, setButtonPopup1] = useState(false);
  const [state] = useState({
    title: "Gdańsk, 1575",
    img: Img,
    p0: "Taki sposób tworzenia nazw grodów od rzek był w słowiańszczyźnie powszechny (por. Puck od Putnica, Mieńsk od Mienia, Pińsk od Pina i wiele innych). Jeśli zaś chodzi o nazwę Gdania, rdzeń gъd- oznaczał teren wilgotny, podmokły (por. Gdynia, Gacka ← gъdьska, Gdinj itp.), zaś szereg sufiksów -Vnьja jest dla ...",
    em: "pl.wikipedia.org/wiki/Gdańsk",
  });

  return (
    <ChartStyled id="/nazwa">
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name="sufiks" amount="-ьsk-" />
                <ChartStats name="rdzeń" amount="*-gьd" />
              </div>
              <img src={img} alt="..." />
            </div>
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">Nazwa miasta</h2>
            <p>
              Według najszerzej przyjętej (Brückner, Rospond, Rudnicki) pochodzi
              od rozlewiska w ujściu Wisły i ma słowiańskie pochodzenie.
              Utworzono ją poprzez dodanie sufiksu -ьsk- do prasłowiańskiego
              rdzenia *-gьd oznaczającego mokry, wilgotny. Według innej teorii
              nazwa ma się wywodzić od niezachowanej nazwy pobliskiej rzeki
              (prawdopodobnie Motławy), która dziś brzmiałaby Gdania.
            </p>
            <p>
              (Nazwa Motława pochodzi z języka pruskiego, przeniesionego w
              okolice Pruszcza Gdańskiego zza Wisły w drugiej połowie XIII w.).
              Formant -sk w jęz. polskim (także innych słowiańskich) był
              produktywny w nazwach topograficznych i dzierżawczych i stanowi
              cechę charakterystyczną polskich nazw miejscowych i
              przestrzennych. Oboczności tego formantu ...
            </p>
            <div onClick={() => setButtonPopup(true)}>
              <AnimatedButton name={"Czytaj więcej"} />
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
      </InnerLayout>
    </ChartStyled>
  );
}

const ChartStyled = styled.section`
  .chart-con {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));

    /* @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    } */

    .chart-left {
      width: 80%;

      @media screen and (max-width: 1347px) {
        width: 100%;
      }
      .stats {
        padding: 0 1rem;

        img {
          box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
          border-radius: 32px;
          background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.4),
              rgba(255, 255, 255, 0.7)
            ),
            rgb(108, 177, 255);
          width: 100%;

          @media screen and (max-width: 700px) {
            border-radius: 20px;
          }
        }
        .stats-money {
          display: flex;
          padding-bottom: 1.3rem;
          justify-content: space-between;
        }
      }
    }
    .chart-right {
      padding-right: 2rem;

      @media screen and (max-width: 700px) {
        padding: 1rem;
      }

      .secondary-heading {
        font-family: "Tourney", cursive;
        font-weight: bold;
        font-size: 3rem;
        color: var(--dark-primary);

        @media screen and (max-width: 700px) {
          font-size: 2rem;
        }
      }
      p {
        padding: 1.3rem 0;
      }
    }
  }
`;

export default ChartSection;

import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import lines from "../img/8.png";
import questions from "./questions";
import Question from "./Question";

function FAQSection() {
  return (
    <FaqStyled id="/ciekawostki">
      <InnerLayout>
        <h3 className="small-heading">
          Ciekawostki <span> o&nbsp;Gdańsku</span>
        </h3>
        <p className="c-para">
          W mieście jest wiele zabytków, z których należy wymienić m.in. ulicę
          Długą i Długi Targ tworzące Trakt Królewski, biegnący od Złotej Bramy
          do Zielonej Bramy. Przy Długim Targu jest Ratusz Głównego Miasta,
          najokazalsza i najcenniejsza budowla świecka dawnego Gdańska, a także
          Dwór Artusa i Fontanna Neptuna.
        </p>
        {/* <div className="lines">
          <img src={lines} alt="..." />
        </div> */}
        <div className="questions-con">
          {questions.map((q) => {
            return <Question key={q.id} {...q} />;
          })}
        </div>
      </InnerLayout>
    </FaqStyled>
  );
}

const FaqStyled = styled.section`
  background: url(${lines}) center/cover no-repeat fixed;
  width: 100%;
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
      margin-top: 2rem;
    }

    span {
      align-items: center;
      font-size: 1.4rem;
    }
  }
  .c-para {
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    width: 60%;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
  .questions-container {
    padding-top: 4rem;
  }
  .lines {
    position: absolute;
    left: 0;
    top: 650%;
    width: 100%;
    z-index: -1;

    img {
      width: 100%;
    }
  }
`;

export default FAQSection;

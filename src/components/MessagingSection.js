import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import bgCircles from "../img/7.png";
import img1 from "../img/9.png";
import avatar1 from "../img/16.jpg";
import img2 from "../img/8.png";
import { Fade } from "react-reveal";

function MessagingSection() {
  return (
    <MessageStyle id="/rozwoj">
      <InnerLayout>
        <div className="message-con">
          <div className="left-items">
            <h2 className="secondary-heading">Rozwój</h2>
            {/* <Fade bottom> */}
            <p className="m-para">
              Nie wiadomo gdzie istniała pierwsza umocniona osada zbudowana
              przez Piastów, ponieważ gród w widłach Motławy i Wisły zbudowano
              dopiero w latach 50.-60. XI wieku. Zajmował on przestrzeń około
              2,27 ha z szacowaną przez archeologów liczbą ok. 250 domów z 1000
              mieszkańców. W 997 roku w mieście przebywał w drodze do Prus
              święty Wojciech. W latach 60. XI wieku powstał u ujścia Motławy do
              Wisły gród obronny. Po zwycięskiej wojnie z Pomorzanami Bolesław
              III Krzywousty odzyskał dla Polski całe Pomorze Zachodnie i zdobył
              Pomorze Przednie. W latach 1217 i 1227 miały miejsce wyprawy
              pomorskie Leszka Białego i ustanowiono zwierzchność Polski nad
              Pomorzem Gdańskim. Po objęciu rządów na Pomorzu Gdańskim przez
              Świętopełka II, nastąpił okres uniezależnienia się regionu. W 1263
              miasto otrzymało prawa miejskie wzorowane na prawie lubeckim. W
              roku 1271 Brandenburczycy zajęli miasto. Mściwoj II dzięki pomocy
              Bolesława Pobożnego odzyskał miasto szturmem w 1272 roku. 15
              lutego 1282 w wyniku układu w Kępnie władca Wielkopolski, Przemysł
              II, uzyskał zwierzchnictwo nad Pomorzem Gdańskim.
            </p>
            {/* </Fade> */}
            <div className="images-con">
              <img src={avatar1} alt="..." className="image-1" />
              {/* <img src={} alt="..." className="image-2" />
              <img src={} alt="..." className="image-3" />
              <img src={} alt="..." className="image-4" />
              <img src={} alt="..." className="image-5" /> */}
              <p>Gdańsk, sierpień 2021'</p>
            </div>
            <img src={bgCircles} alt="..." className="bgCircle" />
          </div>
          <div className="right-items">
            <img src={img1} alt="..." className="fota" />
            <img src={img2} alt="..." className="bgFota" />
          </div>
        </div>
      </InnerLayout>
    </MessageStyle>
  );
}

const MessageStyle = styled.section`
  .message-con {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(400px, auto));

    @media screen and (max-width: 700px) {
      padding: 0 1rem;
    }

    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .left-items {
      position: relative;
      padding-right: 2rem;

      @media screen and (max-width: 700px) {
        padding: 0;
      }
      .secondary-heading {
        font-size: 3rem;
        font-family: "Tourney", cursive;
        font-weight: bold;
        color: var(--dark-primary);
        line-height: 1.8rem;

        @media screen and (max-width: 700px) {
          font-size: 2rem;
          /* padding: 1rem; */
        }
      }
      .m-para {
        padding: 1.3rem 0 2rem;

        /* @media screen and (max-width: 700px) {
          padding: 1rem;
        } */
      }
      .images-con {
        display: flex;

        @media screen and (max-width: 700px) {
          flex-direction: column;
        }

        .image-1 {
          max-width: 60.5%;

          @media screen and (max-width: 700px) {
            max-width: 100%;
            margin-bottom: 1rem;
          }
        }
        p {
          display: flex;
          align-items: flex-end;
          margin-left: 1rem;

          @media screen and (max-width: 700px) {
            justify-content: center;
            margin-bottom: 1rem;
          }
        }
      }
      .bgCircle {
        position: absolute;
        top: -10%;
        left: -10%;
        z-index: -1;
        width: 10rem;

        @media screen and (max-width: 700px) {
          top: -3%;
          left: 1%;
        }
      }
    }
    .right-items {
      position: relative;
      .fota {
        width: 100%;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4),
            rgba(255, 255, 255, 0.7)
          ),
          rgb(108, 177, 255);

        @media screen and (max-width: 700px) {
          width: 100%;
        }
      }
      .bgFota {
        position: absolute;
        bottom: 10%;
        right: -5%;
        z-index: -1;
        width: 10rem;

        @media screen and (max-width: 700px) {
          bottom: -4%;
        }
      }
    }
  }
`;

export default MessagingSection;

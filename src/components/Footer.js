import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import logo from "../img/12.png";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";

function Footer() {
  return (
    <FooterStyled>
      <InnerLayout>
        <div className="footer-con">
          <div className="logo-con">
            <Link
              to="/"
              smooth={true}
              offset={-70}
              duration={500}
              className="logo-items"
            >
              <img src={logo} alt="..." />
              <p>
                2021 - {new Date().getFullYear()}.<br />
                Gdańsk
              </p>
            </Link>
          </div>
          <ul className="button-nav">
            <div className="links1">
              <li>
                <a
                  href="//www.facebook.com/gdansk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
              {/* <li>
                <a href="#">Prasa</a>
              </li>
              <li>
                <a href="#">Fees</a>
              </li> */}
            </div>

            <div className="links2">
              <li>
                <a
                  href="//twitter.com/gdansk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterSquare />
                </a>
              </li>
              {/* <li>
                <a href="#">Przyłącza</a>
              </li>
              <li>
                <a href="#">Opłaty</a>
              </li> */}
            </div>
            <div className="links3">
              <li>
                <a
                  href="//pl.pinterest.com/gdansk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterestSquare />
                </a>
              </li>
              {/* <li>
                <a href="#">Polityka prywatności</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li> */}
            </div>
          </ul>
        </div>
      </InnerLayout>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  padding: 0 10rem;
  background: #dce2f0;

  @media screen and (max-width: 1347px) {
    padding: 5rem 7rem;
  }

  @media screen and (max-width: 1186px) {
    padding: 5rem;
  }

  @media screen and (max-width: 990px) {
    padding: 5rem 3rem;
  }

  @media screen and (max-width: 700p) {
    padding: 0;
  }

  .footer-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(300px, auto)); */

    @media screen and (max-width: 700px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .logo-con {
      display: flex;
      align-items: center;

      .logo-items {
        img {
          width: 6rem;
          margin-right: 2rem;
        }
      }
    }
    .button-nav {
      display: flex;
      justify-content: space-between;

      li {
        padding: 2rem 0;
        color: #16194f;
        font-family: "Tahoma", sans-serif;
        font-size: 3rem;

        @media screen and (max-width: 700px) {
          font-size: 2rem;
        }

        a {
          transition: all 0.3s;

          &:hover {
            color: var(--border-colour);
          }
        }
      }
    }
  }
`;

const Link = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4e8cff;
  font-size: 1.5rem;
  margin-right: 1.3rem;
  position: relative;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;

  @media screen and (max-width: 700px) {
    justify-content: space-between;
    background: green;
  }

  &:hover {
    color: #f54748;
    transition: 0.2s;
  }
  &.active {
    /* background: #f54748; */
    background: var(--lavender-secondary);
    transition: 0.5s;
    color: #fff;
    padding: 0.51rem 1rem;
  }
`;

export default Footer;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "../img/1.svg";
import { FaBars } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";

function Navigation({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 122) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const [buttonPopup, setButtonPopup] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    // <Fade top>
    <NavigationStyled scrollNav={scrollNav}>
      <Link to="/" smooth={true} offset={-70} duration={500} className="logo">
        <img src={logo} alt="..." />
      </Link>
      <div className="ic">
        <FaBars onClick={toggle} />
      </div>
      <ul>
        <li>
          <Link
            to="/"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Start
          </Link>
        </li>
        <li>
          <Link
            to="/poczatki"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Początki
          </Link>
        </li>
        <li>
          <Link
            to="/nazwa"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Nazwa
          </Link>
        </li>
        <li>
          <Link
            to="/rozwoj"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Rozwój
          </Link>
        </li>
        <li>
          <Link
            to="/amberif"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Amberif
          </Link>
        </li>
        <li>
          <Link
            to="/ciekawostki"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Ciekawostki
          </Link>
        </li>
      </ul>
      <Link
        to="/galeria"
        // activeClass="active"
        // spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <PrimaryButton name={"Galeria"} />
      </Link>
    </NavigationStyled>
    // </Fade>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;
  position: fixed;
  z-index: 1;

  .logo img {
    width: 3rem;
    cursor: pointer;
  }

  .ic {
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
      display: block;
      /* transform: translateX(500%); */
      color: #333;
      font-size: 2.4rem;
      /* text-align: right; */
      position: fixed;
      top: 1rem;
      right: 1rem;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 100;
    margin: 0 2rem;

    @media screen and (max-width: 900px) {
      display: none;
    }

    li a {
      font-family: "Black Ops One", cursive;
      color: var(--neutral-light);
      text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21);
    }
  }
`;

const Link = styled(LinkS)`
  display: flex;
  justify-content: center;
  color: #4e8cff;
  font-size: 1.5rem;
  align-items: center;
  margin-right: 1.3rem;
  position: relative;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
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

export default Navigation;

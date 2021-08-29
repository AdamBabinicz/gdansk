import React, { useState } from "react";
import styled from "styled-components";
import bg from "../img/1.jpg";
import HeaderContent from "./HeaderContent";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

function Header() {
  const smallScreen = window.screen.width <= 480 ? true : false;

  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <HeaderStyled id="/">
      <div className="header-content">
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <Navigation toggle={toggle} />
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  /* height: 136vh; */
  width: 100%;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(255, 255, 255, 0.7)
    ),
    url(${bg}) center/cover no-repeat fixed;

  @media screen and (max-width: 700px) {
    /* height: 270vh; */
  }

  .header-content {
    padding: 0 10rem;

    @media screen and (max-width: 1347px) {
      padding: 0 7rem;
    }

    @media screen and (max-width: 1186px) {
      padding: 0 5rem;
    }

    @media screen and (max-width: 990px) {
      padding: 0 3rem;
    }

    @media screen and (max-width: 990px) {
      padding: 1rem;
    }
  }
`;

export default Header;

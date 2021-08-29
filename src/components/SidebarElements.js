import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import back from "../img/4.jpg";

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;
  position: fixed;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
    url(${back}) center/cover no-repeat fixed;
  z-index: 9999;
  align-items: center;
  top: 0;
  right: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;
export const CloseIcon = styled(FaTimes)`
  color: var(--neutral-light);
`;
export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.3rem;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
export const SidebarWrap = styled.div`
  color: #fff;
  margin-top: 4rem;
`;
export const SidebarMenu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  display: grid;
  justify-content: center;
`;
export const SidebarLink = styled(LinkS)`
  padding: 1rem 3rem;
  font-size: 2rem;
  color: #4e8cff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  cursor: pointer;
  margin: 1rem 2rem;
  font-family: "Black Ops One", cursive;
  color: var(--neutral-light);
  text-shadow: 0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.21);

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: var(--accent-pink);
    background: var(--lavender-secondary);
    transition: 0.2s;
  }
`;

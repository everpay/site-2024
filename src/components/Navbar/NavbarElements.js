import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  position: sticky;
  top: 0;
  opacity: 0.9;
  border-color: transparent;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.85rem;
  display: flex;
  align-items: center;
  margin-left: 16px;
  font-weight: 700;
`;

export const Logo = styled.div`
  margin-right: 5px;
  margin-top: 1px;
`;

export const MobileIcon = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    color: #4c4d4d; 
    display: block;
    position: absolute;
    top: 15px;
    right: 10px;
    transform: translate(-100%, 60%);
    font-size: 1.25rem;
    cursor: pointer; 
    color: ${({ lightText }) => (lightText ? "#f7f7fa" : "#4c4d4d")};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-transform: uppercase;
  text-align: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  padding: 0 0.85rem;
  font-weight: 500;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  color: ${({ lightText }) => (lightText ? "#2b2b2b" : "#2b2b2b")};
  
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const Link = styled(LinkS)`
  display: flex;
  padding: 0 0.85rem;
  font-weight: 500;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  color: ${({ lightText }) => (lightText ? "#2b2b2b" : "#4c4d4d")};
  
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#fcfcfc" : "#fff")};
  border-radius: 50px;
  background: #2dbe60;
  padding: 12px 22px;
  margin-left: 5px;
  margin-right: 6px;
  white-space: nowrap;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  
  &:hover {
    transition: all 0.5s ease-in-out;
    background: #26a151;
    opacity: 0.9;
    color: #fcfcfc;
  }  

  &.active {
    color: #26a151;
  }
`;

export const NavBtnStart = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 2px;
  font-size: 0.8rem;
  cursor: pointer;
  color: "#2b2b2b";

  &:hover {
    transition: all 0.5s ease-in-out;
      color: #fff;
  }  

  &.active {
    color: #fff;
  }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 2px;
    top: 2px;
    font-size: 0.8rem;
    cursor: pointer;
    color: "#2b2b2b";

  &:hover {
    transition: all 0.5s ease-in-out;
      color: #fff;
  }  

  &.active {
    color: #fff;
  }
`;

export const NavBtnStartLink = styled(LinkR)`
  color: #2b2b2b;
  border-radius: 50px;
  border-color: rgba(0,0,0,.08);
  border-width: 1px !important;
  background-color: #fff;
  text-transform: uppercase;
  padding: 16px 25px;
  margin-left: 10px;
  white-space: nowrap;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease-in-out;
      background-color: #2f2e41;
      border-color: #2f2e41 !important;
      border-width: 2px;
      color: #fff;
  }  

  &.active {
    color: #fff;
  }
`;


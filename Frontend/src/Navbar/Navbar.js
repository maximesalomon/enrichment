import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import clearbitLogo from "./clearbit-logo.png";
import { TryEnrichmentForFreeBtn } from '../Buttons/Buttons';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinks>
        <Link to="/"><img src={clearbitLogo} alt="Clearbit Logo" height="42" width="42" /></Link>
        <NavbarCTAs>
          <LogIn>Log In</LogIn>
          <Link to="/free-tool"><TryEnrichmentForFreeBtn>Try Enrichment for Free</TryEnrichmentForFreeBtn></Link>
        </NavbarCTAs>
      </NavbarLinks>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.header`
  width: 100%;
  height: 82px;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #fcfdff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;

const NavbarLinks = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 22px 0;
  display: flex;
`;

const NavbarCTAs = styled.div`
    display: flex;
    margin-left: auto;
`;

const LogIn = styled.a`
    margin-top: 14px;
    color: #213757;
    font-size: 15px;
    font-weight: 500;
    flex-grow: 1;
    text-decoration: none;
    text-align: center;
    font-family: "Lato";
    padding-right: 10px;
    cursor: pointer;
`

export default Navbar;

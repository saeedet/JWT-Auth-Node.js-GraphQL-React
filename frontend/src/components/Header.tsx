import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <NavOptions>
        <Link to="/bye">Bye</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </NavOptions>
    </Container>
  );
};

export default Header;

// Styled components

const Container = styled.header`
  height: 70px;
  width: 100vw;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
  margin-left: 10px;
`;

const NavOptions = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: space-evenly;
  width: 200px;
`;

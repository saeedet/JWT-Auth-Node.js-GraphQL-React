import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setAccessToken } from "../accessToken";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

const Header: React.FC = () => {
  const { data, loading } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();
  const navigation = useNavigate();

  const logoutHandler = async () => {
    await logout();
    setAccessToken("");
    await client.resetStore();
    // navigation("/");
  };

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <NavOptions>
        {!loading && data && data.me ? (
          <>
            <div>Welcome {data.me.email}</div>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/bye">Request ID</Link>
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
  width: 100%;
`;

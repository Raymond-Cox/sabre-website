import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavContainer>
      <ListContainer>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/setup">Setup Guide</Link>
        </li>
        <li>
          <Link to="/commands">Command List</Link>
        </li>
      </ListContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 100%;
  padding: 0 10px;
  box-shadow: 1px 1px 10px var(--alt);
  background-color: var(--primary);
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  
  a {
    color: var(--medium-text);
    text-decoration: none;
    margin: 0 10px;
    padding: 10px;
    transition: color .3s;

    :hover {
      color: var(--high-text);
    }
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  margin-left: 20px;
  background-color: white;
  border: solid 0px;
  padding: 20px 0;
  border-bottom: 1px solid;

  nav {
    display: flex;
    gap: 10px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: #ff5e00;
  }

  &.active {
    color: #ff5e00;
  }
`;

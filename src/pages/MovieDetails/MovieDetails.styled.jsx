import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-left: 20px;
`;

export const Container = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;

  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #191d1e;

  &:hover {
    color: tomato;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-left: 20px;
  margin-top: 20px;
  border: none;
  background-color: #d4d4d4;
  color: #000000;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #a5a5a5;
  }
`;

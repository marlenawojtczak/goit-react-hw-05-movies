import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: #e74900;
    }
  }
`;

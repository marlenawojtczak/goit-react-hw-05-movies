import styled from 'styled-components';

export const HomeWrapper = styled.div`
  padding: 20px;
`;

export const TrendingList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TrendingItem = styled.li`
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: #e74900;
    }
  }
`;

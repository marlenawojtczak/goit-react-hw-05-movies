import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  align-items: center;
`;

export const CastItem = styled.li`
  text-align: center;
  list-style: none;
`;

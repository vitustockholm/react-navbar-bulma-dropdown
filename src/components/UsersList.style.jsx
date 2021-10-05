import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul`
  list-style: none;

  padding: 15px;
  border: 5px solid #eee;
  background-color: #fff;
`;

export const Loading = styled.p`
  padding: 15px;
  border: 5px solid #eee;
  background-color: #fff;
`;

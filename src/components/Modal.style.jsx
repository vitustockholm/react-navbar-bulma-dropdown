import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

export const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 15px;

  span {
    color: #fff;
    text-decoration: underline;
    font-size: 12px;

    &:hover {
      cursor: pointer;
      color: #ddd;
    }
  }
`;

export const ModalContent = styled.div`
  border: 5px solid #eee;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
`;

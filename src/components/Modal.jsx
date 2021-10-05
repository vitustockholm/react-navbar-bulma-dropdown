import PropTypes from 'prop-types';
import { Overlay, ModalWrapper, ModalClose, ModalContent } from './Modal.style';

const Modal = ({ action, children }) => {
  return (
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={action}>
        <ModalContent>
          <ModalClose>
            <span onClick={action}>Close</span>
          </ModalClose>
          <div>{children}</div>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;

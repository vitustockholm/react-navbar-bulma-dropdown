import PropTypes from 'prop-types';
import React from 'react';

import { Overlay, ModalWrapper, ModalClose, ModalContent } from './Modal.style';
// import 'bulma/css/bulma.css';
import Date from './Date';
import Button from '../forwardRefs/Button';

const Modal = ({
  action,
  children,
  titleModal,
  contextModal,
  brightness,
  disabled,
}) => {
  //
  return (
    <>
      <Overlay>
        {' '}
        <p>{brightness}-overlay-brightness level</p>
      </Overlay>
      <ModalWrapper onClick={action}>
        <ModalContent style={{ backgroundColor: `rgba(0,0,0, ${brightness})` }}>
          <ModalClose>
            <span onClick={action}>Close</span>
          </ModalClose>

          <div>
            <div class='card'>
              <header class='card-header'>
                <p class='card-header-title'>modaltitleprops: {titleModal} </p>
                <br />
                <p>{brightness}-overlay-brightness level</p>
                <button class='card-header-icon' aria-label='more options'>
                  <span class='icon'>
                    <i class='fas fa-angle-down' aria-hidden='true'></i>
                  </span>
                </button>
              </header>
              <div class='card-content'>
                <div class='content'>
                  modalContentProps:
                  {contextModal}
                  {children} <a href='/'>#responsive</a>
                  <Date />
                </div>
              </div>
              <footer class='card-footer'>
                <button class='button is-white' action={action}>
                  Close
                </button>
                <button class='button is-dark' action={action} disabled>
                  Close
                </button>
                <Button onClick={action} text='Save Changes'>
                  Save Changes action={action}
                </Button>
              </footer>
            </div>
          </div>
          {/* ////////////////////// */}
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

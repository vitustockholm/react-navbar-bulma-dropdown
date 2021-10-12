import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';

// import { Overlay, ModalWrapper, ModalClose, ModalContent } from './Modal.style';
// import 'bulma/css/bulma.css';
// import Date from './Date';
// import Button from '../forwardRefs/Button';

const Modal = ({
  action,
  children,
  titleModal,
  contextModal,
  brightness,
  disabled,
}) => {
  return (
    <>
      {/* <Overlay>
        {' '}
        <p>{brightness}-overlay-brightness level</p>
      </Overlay> */}
      {/* <ModalWrapper onClick={action}>
        <ModalContent style={{ backgroundColor: `rgba(0,0,0, ${brightness})` }}>
          <ModalClose>
            <span onClick={action}>Close</span>
          </ModalClose> */}

      <div className='navbar-dropdown'>
        <Link to='/about' className='navbar-item'>
          About
        </Link>
        <Link to='/jobs' className='navbar-item'>
          Jobs
        </Link>
        <Link to='/contacts' className='navbar-item'>
          Contact
        </Link>

        <Link to='/reports' className='navbar-item'>
          Report an issue
        </Link>
      </div>

      {/* ////////////////////// */}
      {/* </ModalContent>
      </ModalWrapper> */}
    </>
  );
};

Modal.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from './DashboardModal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal, children }) => {
  const overlayClickHandler = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const escKeyHandler = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', escKeyHandler);
    return () => {
      window.removeEventListener('keydown', escKeyHandler);
    };
  }, [onCloseModal]);

  return createPortal(
    <Overlay onClick={overlayClickHandler}>{children}</Overlay>,
    modalRoot
  );
};

export default Modal;

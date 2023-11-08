import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ContentContainer } from './HeaderOverlay.styled';

const modalRoot = document.querySelector('#modal-root');

const HeaderOverlay = ({ onCloseOverlay, children }) => {
  const overlayClickHandler = event => {
    if (event.currentTarget === event.target) {
      onCloseOverlay();
      console.log('onCloseOverlay()', onCloseOverlay());
    }
  };

  useEffect(() => {
    const escKeyHandler = event => {
      if (event.code === 'Escape') {
        onCloseOverlay();
      }
    };
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', escKeyHandler);
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', escKeyHandler);
    };
  }, [onCloseOverlay]);

  return createPortal(
    <Overlay onClick={overlayClickHandler}>
      <ContentContainer>{children}</ContentContainer>
    </Overlay>,
    modalRoot
  );
};

export default HeaderOverlay;

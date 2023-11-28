import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/Auth/authOperations';
import PropTypes from 'prop-types';

import HeaderOverlay from './HeaderOverlay';
import { ModalWrapper, Modal, Button } from './ProfileModal.styled';

import settingImg from '../../images/icons/setting-2.svg';
import logOutImg from '../../images/icons/logout.svg';

export default function ProfileModal({ onCloseModal }) {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <HeaderOverlay onCloseOverlay={onCloseModal}>
      <ModalWrapper>
        <Modal onClick={() => onCloseModal()}>
          <Link onClick={() => onCloseModal()} to={'/settings'}>
            <Button type="button">
              <img src={settingImg} alt="setting" width={16} />
              Setting
            </Button>
          </Link>
          <Link onClick={() => onCloseModal()} to={'/'}>
            <Button type="button" onClick={handleLogOut}>
              <img src={logOutImg} alt="log out" width={16} />
              Log out
            </Button>
          </Link>
        </Modal>
      </ModalWrapper>
    </HeaderOverlay>
  );
}

ProfileModal.propTypes = {
  onCloseOverlay: PropTypes.func.isRequired,
};
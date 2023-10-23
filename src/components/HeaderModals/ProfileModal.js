import React from "react";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/Auth/authOperations';

import { Overlay, ModalWrapper, Modal, Button } from "./ProfileModal.styled";

import settingImg from '../../images/icons/setting-2.svg';
import logOutImg from '../../images/icons/logout.svg';

const modalRoot = document.querySelector('#header-modal-profile')

export default function ProfileModal({ onCloseModal }) {
    const dispatch = useDispatch();

    const handleLogOut = () => dispatch(logOut());

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
        <Overlay onClick={onCloseModal()}>
            <ModalWrapper>
                <Modal onClick={onCloseModal()}>
                    <Link to={'/settings'}>
                        <Button type="button">
                            <img src={settingImg} alt="setting" width={16} />
                            Setting
                        </Button>
                    </Link>
                    <Link to={'/'}>
                        <Button type="button" onClick={handleLogOut}>
                            <img src={logOutImg} alt="log out" width={16} />
                            Log out
                        </Button>
                    </Link>
                </Modal>
            </ModalWrapper>
        </Overlay>,
        modalRoot
    )
}
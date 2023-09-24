import React from "react";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalWrapper, Modal, Option } from "./HeaderModalProfile.styled";

import setting from '../../../images/icons/setting-2.svg'
import logout from '../../../images/icons/logout.svg'

import { Link } from 'react-router-dom';

const modalRoot = document.querySelector('#header-modal-profile')

export default function ProfileModal({ onCloseModal }) {
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
                <Modal onClick={e => e.stopPropagation()}>
                    <Link to={'/settings'}>
                        <Option>
                            <img src={setting} alt="setting" width={16} />
                            Setting
                        </Option>
                    </Link>
                    <Link to={'/'}>
                        <Option>
                            <img src={logout} alt="log out" width={16} />
                            Log out
                        </Option>
                    </Link>
                </Modal>
            </ModalWrapper>
        </Overlay>,
        modalRoot
    )
}
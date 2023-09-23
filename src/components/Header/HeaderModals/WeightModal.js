import React from "react";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalWrapper, Modal, ModalTitle, ModalText, CloseBtn, DateContainer, DateText, DateDay, WeightForm, WeightFormInput, WeightFormBtn, CancelBtn } from "./HeaderModalWeight.styled";

import close from '../../../images/icons/close-circle.svg'

const modalRoot = document.querySelector('#header-modal-weight')

export default function WeightModal({ onCloseModal }) {
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

    function getCurrentDateFormatted() {
        const currentDate = new Date();

        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear();

        return `${day}.${month}.${year}`;
    }

    const formattedDate = getCurrentDateFormatted();

    return createPortal(
        <Overlay onClick={onCloseModal()}>
            <ModalWrapper>
                <CloseBtn onClick={onCloseModal()}>
                    <img src={close} alt="close" width={16} />
                </CloseBtn>
                <Modal onClick={e => e.stopPropagation()}>
                    <ModalTitle>Enter your current weight</ModalTitle>
                    <ModalText>You can record your weight once a day</ModalText>
                    <DateContainer>
                        <DateText>Today</DateText>
                        <DateDay>{formattedDate}</DateDay>
                    </DateContainer>
                    <WeightForm>
                        <WeightFormInput type="number" name="weight" placeholder="Enter your weight" autoComplete="off" />
                        <WeightFormBtn type="submit">Confirm</WeightFormBtn>
                    </WeightForm>
                </Modal>
                <CancelBtn onClick={onCloseModal()}>
                    Cancel
                </CancelBtn>
            </ModalWrapper>
        </Overlay>,
        modalRoot
    )
}
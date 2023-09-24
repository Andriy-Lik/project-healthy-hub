import React from "react";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalWrapper, Modal, ModalTitle, ModalText, ModalForm, ModalFormContainer, ModalLabel1, ModalInput1, ModalLabel2, ModalInput2, ModalLabel3, ModalInput3, ModalBtn, CloseBtn, CancelBtn } from "./HeaderModalTarget.styled";

import close from '../../../images/icons/close-circle.svg'


// import loseFatMen from '../../../images/icons/Lose-fat-image-men.svg'
// import loseFatGirl from '../../../images/icons/Lose-fat-image-girl.svg'
// import maintakeMen from '../../../images/icons/Maintake-image-men.svg'
// import maintakeGirl from '../../../images/icons/Maintake-image-girl.svg'
// import muscle from '../../../images/icons/Gain-muscle.svg'

const modalRoot = document.querySelector('#header-modal-goal')

export default function TargetModal({ onCloseModal }) {
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
                <CloseBtn onClick={onCloseModal()}>
                    <img src={close} alt="close" width={16} />
                </CloseBtn>
                <Modal onClick={e => e.stopPropagation()}>
                    <ModalTitle>Target selection</ModalTitle>
                    <ModalText>The service will adjust your calorie intake to your goal</ModalText>
                    <ModalForm>
                        <ModalFormContainer>
                            <ModalInput1 type="radio" name="goal" value="lose-fat" id="1" />
                            <ModalLabel1 for="1" id="11">
                                Lose fat
                            </ModalLabel1>
                        </ModalFormContainer>
                        <ModalFormContainer>
                            <ModalInput2 type="radio" name="goal" value="maintain" id="2" />
                            <ModalLabel2 for="2">
                                Maintain
                            </ModalLabel2>
                        </ModalFormContainer>
                        <ModalFormContainer>
                            <ModalInput3 type="radio" name="goal" value="gain-muscle" id="3" />
                            <ModalLabel3 for="3">
                                Gain Muscle
                            </ModalLabel3>
                        </ModalFormContainer>

                        <ModalBtn type="submit" value="Submit">Confirm</ModalBtn>
                    </ModalForm>
                </Modal>
                <CancelBtn onClick={onCloseModal()}>
                    Cancel
                </CancelBtn>
            </ModalWrapper>
        </Overlay>,
        modalRoot
    )
}
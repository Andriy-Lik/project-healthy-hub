import React from "react";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { setNewUserGoal } from '../../../redux/Auth/authSlice'
import { selectUser } from "../../../redux/Auth/authSelectors";

import { Overlay, ModalWrapper, Modal, ModalTitle, ModalText, ModalForm, ModalFormContainer, ModalLabel1Men, ModalInput1Men, ModalLabel2Men, ModalInput2Men, ModalLabel1Girl, ModalInput1Girl, ModalLabel2Girl, ModalInput2Girl, ModalLabel3, ModalInput3, ModalBtn, CloseBtn, CancelBtn } from "./HeaderModalTarget.styled";

import close from '../../../images/icons/close-circle.svg'


// import loseFatMen from '../../../images/icons/Lose-fat-image-men.svg'
// import loseFatGirl from '../../../images/icons/Lose-fat-image-girl.svg'
// import maintakeMen from '../../../images/icons/Maintake-image-men.svg'
// import maintakeGirl from '../../../images/icons/Maintake-image-girl.svg'
// import muscle from '../../../images/icons/Gain-muscle.svg'

const modalRoot = document.querySelector('#header-modal-goal')

export default function TargetModal({ onCloseModal }) {

    const dispatch = useDispatch();
    const [newGoal, setNewGoal] = useState('')

    const handleNewUserGoal = event => {
        event.preventDefault();
        dispatch(setNewUserGoal(newGoal));
        onCloseModal();
    };

    const handleInputChange = event => {
        const { value } = event.target;
        setNewGoal(value);
    }

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

    const user = useSelector(selectUser);
    const gender = user.gender ? user.gender : "male";

    return createPortal(
        <Overlay onClick={onCloseModal()}>
            <ModalWrapper>
                <CloseBtn onClick={onCloseModal()}>
                    <img src={close} alt="close" width={16} />
                </CloseBtn>
                <Modal onClick={e => e.stopPropagation()}>
                    <ModalTitle>Target selection</ModalTitle>
                    <ModalText>The service will adjust your calorie intake to your goal</ModalText>
                    {gender === "male" ?
                        <ModalForm onSubmit={handleNewUserGoal}>
                            <ModalFormContainer>
                                <ModalInput1Men type="radio" name="goal" value="Lose fat" id="1" onChange={handleInputChange} />
                                <ModalLabel1Men for="1" id="11">
                                    Lose fat
                                </ModalLabel1Men>
                            </ModalFormContainer>
                            <ModalFormContainer>
                                <ModalInput2Men type="radio" name="goal" value="Maintain" id="2" onChange={handleInputChange} />
                                <ModalLabel2Men for="2">
                                    Maintain
                                </ModalLabel2Men>
                            </ModalFormContainer>
                            <ModalFormContainer>
                                <ModalInput3 type="radio" name="goal" value="Gain Muscle" id="3" onChange={handleInputChange} />
                                <ModalLabel3 for="3">
                                    Gain Muscle
                                </ModalLabel3>
                            </ModalFormContainer>

                            <ModalBtn type="submit">Confirm</ModalBtn>
                        </ModalForm>
                        :
                        <ModalForm onSubmit={handleNewUserGoal}>
                            <ModalFormContainer>
                                <ModalInput1Girl type="radio" name="goal" value="Lose fat" id="1" onChange={handleInputChange} />
                                <ModalLabel1Girl for="1" id="11">
                                    Lose fat
                                </ModalLabel1Girl>
                            </ModalFormContainer>
                            <ModalFormContainer>
                                <ModalInput2Girl type="radio" name="goal" value="Maintain" id="2" onChange={handleInputChange} />
                                <ModalLabel2Girl for="2">
                                    Maintain
                                </ModalLabel2Girl>
                            </ModalFormContainer>
                            <ModalFormContainer>
                                <ModalInput3 type="radio" name="goal" value="Gain Muscle" id="3" onChange={handleInputChange} />
                                <ModalLabel3 for="3">
                                    Gain Muscle
                                </ModalLabel3>
                            </ModalFormContainer>

                            <ModalBtn type="submit">Confirm</ModalBtn>
                        </ModalForm>
                    }
                </Modal>
                <CancelBtn onClick={onCloseModal()}>
                    Cancel
                </CancelBtn>
            </ModalWrapper>
        </Overlay>,
        modalRoot
    )
}
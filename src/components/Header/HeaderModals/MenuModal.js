import React from "react";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useState } from 'react';

import { Overlay, ModalWrapper, Modal, CloseBtn, InfoOptions, InfoBlock, IconContainer, TextContainer, InfoBlockName, InfoBlockText, ArrowSvg, WeightKg, EditSvg } from "./HeaderModalMenu.styled";

// import setting from '../../../images/icons/setting-2.svg'
// import logout from '../../../images/icons/logout.svg'
import close from '../../../images/icons/close-circle.svg'

import waight from '../../../images/icons/Waight-image.svg'
import loseFatMen from '../../../images/icons/Lose-fat-image-men.svg'
import arrowRight from '../../../images/icons/arrow-right-open.svg'
import edit from '../../../images/icons/edit-2.svg'

import TargetModal from "./TargetModal";
import WeightModal from "./WeightModal";

const modalRoot = document.querySelector('#header-modal-menu')

export default function MenuModal({ onCloseModal }) {
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

    const [showModalTarget, setShowModalTarget] = useState(false);

    const toggleModalTarget = () => {
        setShowModalTarget(showModalTarget => !showModalTarget);
    };

    const [showModalWeight, setShowModalWeight] = useState(false);

    const toggleModalWeight = () => {
        setShowModalWeight(showModalWeight => !showModalWeight);
    };

    const toggleModalSwitchTarget = () => {
        onCloseModal()
        setShowModalTarget(showModalTarget => !showModalTarget);
    };

    const toggleModalSwitchWeight = () => {
        onCloseModal()
        setShowModalWeight(showModalWeight => !showModalWeight);
    };

    return createPortal(
        <Overlay onClick={onCloseModal()}>
            <ModalWrapper>
                <CloseBtn onClick={onCloseModal()}>
                    <img src={close} alt="close" width={16} />
                </CloseBtn>
                <InfoOptions>
                    <InfoBlock onClick={toggleModalSwitchTarget}>
                        <IconContainer>
                            <img src={loseFatMen} alt="current goal" width={28} />
                        </IconContainer>
                        <TextContainer>
                            <InfoBlockName>Goal</InfoBlockName>
                            <InfoBlockText>
                                {/* user.goal */}
                                Lose fat
                                <ArrowSvg src={arrowRight} alt="arrow right" />
                            </InfoBlockText>
                        </TextContainer>
                        {showModalTarget && (
                            <TargetModal onCloseModal={toggleModalTarget} />
                        )}
                    </InfoBlock>
                    <InfoBlock onClick={toggleModalSwitchWeight}>
                        <IconContainer>
                            <img src={waight} alt="weight" width={28} />
                        </IconContainer>
                        <TextContainer>
                            <InfoBlockName>Weight</InfoBlockName>
                            <InfoBlockText>
                                {/* user.weight */}
                                65
                                <WeightKg>kg</WeightKg>
                                <EditSvg src={edit} alt="edit" />
                            </InfoBlockText>
                        </TextContainer>
                        {showModalWeight && (
                            <WeightModal onCloseModal={toggleModalWeight} />
                        )}
                    </InfoBlock>
                </InfoOptions>
                <Modal onClick={e => e.stopPropagation()}>

                </Modal>
            </ModalWrapper>
        </Overlay >,
        modalRoot
    )
}
// import React from 'react';
import { useState } from 'react'; //useEffect,
import { useDispatch, useSelector } from 'react-redux';
// import { createPortal } from 'react-dom';

import { setNewUserGoal } from '../../redux/Auth/authSlice';
import { selectUser } from '../../redux/Auth/authSelectors';
// import HeaderOverlay from './HeaderOverlay';

import {
  //   Overlay,
  ModalWrapper,
  Modal,
  ModalTitle,
  ModalText,
  ModalForm,
  TargetImg,
  ImgBorder,
  TargetWrapper,
  TargetText,
  ModalBtn,
  CloseBtn,
  CancelBtn,
} from './TargetModal.styled';

import LoseFatMen from '../../images/icons/Lose-fat-image-men.svg';
import MaintakeMen from '../../images/icons/Maintake-image-men.svg';
import LoseFatGirl from '../../images/icons/Lose-fat-image-girl.svg';
import MaintakeGirl from '../../images/icons/Maintake-image-girl.svg';
import muscle from '../../images/icons/Gain-muscle.svg';
import close from '../../images/icons/close-circle.svg';

// const modalRoot = document.querySelector('#modal-root');

export default function TargetModal({ onCloseModal }) {
  const [newGoal, setNewGoal] = useState('');
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const userGender = user.gender;

  let loseFatIcon = userGender === 'Female' ? LoseFatGirl : LoseFatMen;
  let maintainIcon = userGender === 'Female' ? MaintakeGirl : MaintakeMen;
  let muscleIcon = muscle;

  const closeBtnHandler = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  //   useEffect(() => {
  //     const escKeyHandler = event => {
  //       if (event.code === 'Escape') {
  //         onCloseModal();
  //       }
  //     };
  //     window.addEventListener('keydown', escKeyHandler);
  //     return () => {
  //       window.removeEventListener('keydown', escKeyHandler);
  //     };
  //   }, [onCloseModal]);

  const handleGoalChange = goal => {
    setNewGoal(goal);
  };

  const handleNewUserGoal = event => {
    event.preventDefault();
    dispatch(setNewUserGoal(newGoal));
    onCloseModal();
  };

  let loseFatGoal = user.goal === 'Lose fat' ? 'true' : 'false';
  let maintainGoal = user.goal === 'Maintain' ? 'true' : 'false';
  let gainMuscleGoal = user.goal === 'Gain Muscle' ? 'true' : 'false';

  if (newGoal.length !== 0) {
    loseFatGoal = newGoal === 'Lose fat' ? 'true' : 'false';
    maintainGoal = newGoal === 'Maintain' ? 'true' : 'false';
    gainMuscleGoal = newGoal === 'Gain Muscle' ? 'true' : 'false';
  }

  return (
    <ModalWrapper>
      <CloseBtn>
        <img src={close} alt="close" width={16} onClick={closeBtnHandler} />
      </CloseBtn>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalTitle>Target selection</ModalTitle>
        <ModalText>
          The service will adjust your calorie intake to your goal
        </ModalText>
        <ModalForm onSubmit={handleNewUserGoal}>
          <ul>
            <TargetWrapper
              onClick={() => handleGoalChange('Lose fat')}
              active={loseFatGoal}
            >
              <ImgBorder>
                <TargetImg src={loseFatIcon} alt="Lose fat" />
              </ImgBorder>
              <TargetText>Lose fat</TargetText>
            </TargetWrapper>
            <TargetWrapper
              onClick={() => handleGoalChange('Maintain')}
              active={maintainGoal}
            >
              <ImgBorder>
                <TargetImg src={maintainIcon} alt="Maintain" />
              </ImgBorder>
              <TargetText>Maintain</TargetText>
            </TargetWrapper>
            <TargetWrapper
              onClick={() => handleGoalChange('Gain Muscle')}
              active={gainMuscleGoal}
            >
              <ImgBorder>
                <TargetImg src={muscleIcon} alt="Gain Muscle" />
              </ImgBorder>
              <TargetText>Gain Muscle</TargetText>
            </TargetWrapper>
          </ul>
          <ModalBtn type="submit">Confirm</ModalBtn>
        </ModalForm>
      </Modal>
      <CancelBtn onClick={onCloseModal()}>Cancel</CancelBtn>
    </ModalWrapper>
  );
}

/**
 * return createPortal(
    <Overlay onClick={overlayClickHandler}>
      <ModalWrapper>
        <CloseBtn onClick={onCloseModal()}>
          <img src={close} alt="close" width={16} />
        </CloseBtn>
        <Modal onClick={e => e.stopPropagation()}>
          <ModalTitle>Target selection</ModalTitle>
          <ModalText>
            The service will adjust your calorie intake to your goal
          </ModalText>
          <ModalForm onSubmit={handleNewUserGoal}>
            <ul>
              <TargetWrapper
                onClick={() => handleGoalChange('Lose fat')}
                active={loseFatGoal}
              >
                <ImgBorder>
                  <TargetImg src={loseFatIcon} alt="Lose fat" />
                </ImgBorder>
                <TargetText>Lose fat</TargetText>
              </TargetWrapper>
              <TargetWrapper
                onClick={() => handleGoalChange('Maintain')}
                active={maintainGoal}
              >
                <ImgBorder>
                  <TargetImg src={maintainIcon} alt="Maintain" />
                </ImgBorder>
                <TargetText>Maintain</TargetText>
              </TargetWrapper>
              <TargetWrapper
                onClick={() => handleGoalChange('Gain Muscle')}
                active={gainMuscleGoal}
              >
                <ImgBorder>
                  <TargetImg src={muscleIcon} alt="Gain Muscle" />
                </ImgBorder>
                <TargetText>Gain Muscle</TargetText>
              </TargetWrapper>
            </ul>
            <ModalBtn type="submit">Confirm</ModalBtn>
          </ModalForm>
        </Modal>
        <CancelBtn onClick={onCloseModal()}>Cancel</CancelBtn>
      </ModalWrapper>
    </Overlay>,
    modalRoot
  );
 */

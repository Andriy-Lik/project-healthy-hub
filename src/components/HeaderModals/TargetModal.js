// import React from 'react';
// import { useState } from 'react'; //useEffect,
import { useDispatch, useSelector } from 'react-redux';
// import { createPortal } from 'react-dom';

import { setNewUserGoal } from '../../redux/Auth/authSlice';
import { selectUser } from '../../redux/Auth/authSelectors';
// import { updateGoal } from '../../redux/Auth/authOperations';
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
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userGender = user.gender;
  let newGoal = '';

  console.log(user);

  let loseFatIcon = userGender === 'Female' ? LoseFatGirl : LoseFatMen;
  let maintainIcon = userGender === 'Female' ? MaintakeGirl : MaintakeMen;
  let muscleIcon = muscle;

  let loseFatGoal = user.goal === 'Lose fat' ? 'true' : 'false';
  let maintainGoal = user.goal === 'Maintain' ? 'true' : 'false';
  let gainMuscleGoal = user.goal === 'Gain muscle' ? 'true' : 'false';

  // const closeBtnHandler = event => {
  //   console.log(event);
  //   if (event.currentTarget === event.target) {
  //     onCloseModal();
  //   }
  // };

  const handleGoalChange = goal => {
    newGoal = goal;
  };

  console.log(newGoal);
  const handleNewUserGoal = event => {
    event.preventDefault();
    console.log('newGoal', newGoal);
    dispatch(setNewUserGoal(newGoal));
    onCloseModal();
  };

  if (newGoal.length !== 0) {
    loseFatGoal = newGoal === 'Lose fat' ? 'true' : 'false';
    maintainGoal = newGoal === 'Maintain' ? 'true' : 'false';
    gainMuscleGoal = newGoal === 'Gain Muscle' ? 'true' : 'false';
  }

  console.log('loseFatGoal', loseFatGoal);
  console.log('maintainGoal', maintainGoal);
  console.log('gainMuscleGoal', gainMuscleGoal);

  return (
    <ModalWrapper>
      <CloseBtn>
        <img
          src={close}
          alt="close"
          width={16}
          onClick={() => onCloseModal()}
        />
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
              <ImgBorder
              // style={{
              //   border: loseFatGoal
              //     ? '2px solid #B6C3FF'
              //     : '1px solid #B6B6B6',
              // }}
              >
                <TargetImg src={loseFatIcon} alt="Lose fat" />
              </ImgBorder>
              <TargetText
              // style={{
              //   color: loseFatGoal ? '#B6C3FF' : '#B6B6B6',
              // }}
              >
                Lose fat
              </TargetText>
            </TargetWrapper>
            <TargetWrapper
              onClick={() => handleGoalChange('Maintain')}
              active={maintainGoal}
            >
              <ImgBorder
              // style={{
              //   border: maintainGoal && '2px solid #B6C3FF',
              // }}
              >
                <TargetImg src={maintainIcon} alt="Maintain" />
              </ImgBorder>
              <TargetText
              // style={{
              //   color: maintainGoal && '#B6C3FF',
              // }}
              >
                Maintain
              </TargetText>
            </TargetWrapper>
            <TargetWrapper
              onClick={() => handleGoalChange('Gain muscle')}
              active={gainMuscleGoal}
            >
              <ImgBorder
              // style={{
              //   border: gainMuscleGoal && '2px solid #B6C3FF',
              // }}
              >
                <TargetImg src={muscleIcon} alt="Gain muscle" />
              </ImgBorder>
              <TargetText
              // style={{
              //   color: gainMuscleGoal && '#B6C3FF',
              // }}
              >
                Gain muscle
              </TargetText>
            </TargetWrapper>
          </ul>
          <ModalBtn type="submit">Confirm</ModalBtn>
        </ModalForm>
      </Modal>
      <CancelBtn onClick={() => onCloseModal()}>Cancel</CancelBtn>
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

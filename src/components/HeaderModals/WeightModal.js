import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { setNewUserWeight } from '../../redux/Auth/authSlice';
import HeaderOverlay from './HeaderOverlay';

import {
  ModalWrapper,
  Modal,
  ModalTitle,
  ModalText,
  CloseBtn,
  DateContainer,
  DateText,
  DateDay,
  WeightForm,
  WeightFormInput,
  WeightFormBtn,
  CancelBtn,
} from './WeightModal.styled';

import close from '../../images/icons/close-circle.svg';

export default function WeightModal({ onCloseModal }) {
  const [newWeight, setNewWeight] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { value } = event.target;
    setNewWeight(value);
  };

  const handleNewUserWeight = event => {
    event.preventDefault();
    dispatch(setNewUserWeight(newWeight));
    onCloseModal();
  };

  function getCurrentDateFormatted() {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}`;
  }

  const formattedDate = getCurrentDateFormatted();

  const closeBtnHandler = () => {
    console.log(onCloseModal());
    onCloseModal();
  };

  return (
    <HeaderOverlay onCloseOverlay={onCloseModal}>
      <ModalWrapper>
        <CloseBtn onClick={closeBtnHandler}>
          <img src={close} alt="close" width={16} onClick={closeBtnHandler} />
        </CloseBtn>
        <Modal onClick={e => e.stopPropagation()}>
          <ModalTitle>Enter your current weight</ModalTitle>
          <ModalText>You can record your weight once a day</ModalText>
          <DateContainer>
            <DateText>Today</DateText>
            <DateDay>{formattedDate}</DateDay>
          </DateContainer>
          <WeightForm onSubmit={handleNewUserWeight}>
            <WeightFormInput
              type="number"
              name="weight"
              placeholder="Enter your weight"
              autoComplete="off"
              onChange={handleInputChange}
              required
              autoFocus
            />
            <WeightFormBtn type="submit">Confirm</WeightFormBtn>
          </WeightForm>
        </Modal>
        <CancelBtn onClick={closeBtnHandler}>Cancel</CancelBtn>
      </ModalWrapper>
    </HeaderOverlay>
  );
}

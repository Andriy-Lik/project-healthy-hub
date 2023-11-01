import { useState } from 'react';
import edit from '../../images/diaryPageImages/edit-2.svg'

import {
  InfoWrap,
  Title,
  Value,
  CardWrap,
  CarbonohidratesWrap,
  ProteinWrap,
  FatWrap,
  TitleWrap,
  EditButton,
  Img,
} from './ElementOfFood.styled';
import RecordDiaryModal from 'components/Modals/RecordDiaryModal/RecordDiaryModal.jsx';

export const ElementOfFood = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { carbohydrate, protein, fat, mealName, mealType } = item;

  return (
    <CardWrap>
      <TitleWrap>
        <Title>{mealName}</Title>
      </TitleWrap>
        <InfoWrap>
          <CarbonohidratesWrap>
            <Value>{carbohydrate}</Value>
          </CarbonohidratesWrap>
          <ProteinWrap>
            <Value>{protein}</Value>
          </ProteinWrap>
          <FatWrap>
            <Value>{fat}</Value>
          </FatWrap>
          <EditButton onClick={toggleModal}><Img src={edit} alt="Edit"/>Edit</EditButton>
        </InfoWrap>


        {isModalOpen && (
        <RecordDiaryModal onClose={toggleModal} mealType={ mealType } item={ item }/>
      )}



    </CardWrap>
  );
};

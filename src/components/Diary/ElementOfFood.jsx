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
import UpdateMealModal from 'components/Modals/UpdateMealModal/UpdateMealModal';

export const ElementOfFood = ({ item, index }) => {
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleModalRecord = () => setIsRecordModalOpen(!isRecordModalOpen);
  const toggleModalEdit = () => setIsEditModalOpen(!isEditModalOpen);

  const { carbohydrate, protein, fat, mealName, mealType } = item;

  return (
    <CardWrap>
      <TitleWrap>
      {index + 1}
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
          <EditButton onClick={toggleModalEdit}><Img src={edit} alt="Edit"/>Edit</EditButton>
      </InfoWrap>
      {isEditModalOpen && (
        <UpdateMealModal onClose ={toggleModalEdit} mealType={ mealType}  item={ item } />
      )}
        {isRecordModalOpen && (
        <RecordDiaryModal onClose={toggleModalRecord} mealType={ mealType } item={ item }/>
      )}
    </CardWrap>
  );
};

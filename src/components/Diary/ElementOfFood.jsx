import { useState } from 'react';
import RecordDiaryModal from 'components/Modals/RecordDiaryModal/RecordDiaryModal.jsx';
import UpdateMealModal from 'components/Modals/UpdateMealModal/UpdateMealModal';

import edit from 'images/diaryPageImages/edit-2.svg'

import {
  Wrapper,
  SequenceNumber,
  AddFoodButton,
  Dish,
  Title,
  EditButton,
  Img,
  BlockInfo,
  Carbonohidrates,
  Protein,
  Fat,
} from './ElementOfFood.styled';


const ElementOfFood = ({ item, index, img }) => {
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleModalRecord = () => setIsRecordModalOpen(!isRecordModalOpen);
  const toggleModalEdit = () => setIsEditModalOpen(!isEditModalOpen);

  const { carbohydrate, protein, fat, mealName, mealType, showButton } = item;  

  return (
    <>
      {showButton
        ? (
          <Wrapper>
            <SequenceNumber>
              {index + 1}
            </SequenceNumber>
            <AddFoodButton onClick={toggleModalRecord}>
              + Record your meal
            </AddFoodButton>
            {isRecordModalOpen && (
              <RecordDiaryModal
                onClose={toggleModalRecord}
                image={img}
                mealType={mealType}
              />
            )}
          </Wrapper>
        ) : (
          <Wrapper>
            <SequenceNumber>
              {index + 1}
            </SequenceNumber>
            {mealType && (
              <Dish>                
                <Title>{mealName}</Title>
                <EditButton type="button" onClick={toggleModalEdit}><Img src={edit} alt="Edit" />Edit</EditButton>                
                <BlockInfo>
                  <Carbonohidrates>
                    <span>Carb.</span>
                    {carbohydrate}
                  </Carbonohidrates>
                  <Protein>
                    <span>Prot.</span>
                    {protein}
                  </Protein>
                  <Fat>
                    <span>Fat.</span>
                    {fat}
                  </Fat>
                </BlockInfo>                
              </Dish>
            )}
            {isEditModalOpen && (
              <UpdateMealModal onClose={toggleModalEdit} mealType={mealType} item={item} />
            )}
          </Wrapper>
        )}
    </>
  );
};

export default ElementOfFood;
import { useState } from 'react';

import {
  AddButton,
  InfoWrap,
  Title,
  Value,
  CardWrap,
  CarbonohidratesWrap,
  ProteinWrap,
  FatWrap,
  DiaryImage,
  TitleWrap
} from './DiaryItem.styled.js';

import RecordDiaryModal from 'components/Modals/RecordDiaryModal/RecordDiaryModal.jsx'

export const DiaryItem = ({ title, image, info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { carbonohidrates, protein, fat } = info;

  return (
    <CardWrap>
      <TitleWrap>
        <DiaryImage src={image} alt="Plate" />
        <Title>{title}</Title>
      </TitleWrap>
      {carbonohidrates !== 0 || protein !== 0 || fat !== 0 ? (
        <InfoWrap>
          <CarbonohidratesWrap>
            Carbonohidrates: <Value>{carbonohidrates}</Value>
          </CarbonohidratesWrap>
          <ProteinWrap>
            Protein: <Value>{protein}</Value>
          </ProteinWrap>
          <FatWrap>
            Fat: <Value>{fat}</Value>
          </FatWrap>
        </InfoWrap>
      ) : (
        <AddButton onClick={toggleModal}>+ Record your meal</AddButton>
      )}

      {isModalOpen && (
        <RecordDiaryModal onClose={toggleModal} image={ image } mealType={ title } />
      )}



    </CardWrap>
  );
};

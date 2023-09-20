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
} from './DiaryItem.styled.js';
import { TitleWrap } from './DiaryItem.styled.js';

export const DiaryItem = ({ title, image, info }) => {
  const { carbonohidrates, protein, fat } = info;

  const handleRecordMeal = () => {
    console.log('click record meal');
  };

  return (
    <CardWrap>
      <TitleWrap>
        <DiaryImage src={image} alt="Plate" />
        <Title>{title}</Title>
      </TitleWrap>
      {carbonohidrates !== 0 && protein !== 0 && fat !== 0 ? (
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
        <AddButton onClick={handleRecordMeal}>+ Record your meal</AddButton>
      )}
    </CardWrap>
  );
};

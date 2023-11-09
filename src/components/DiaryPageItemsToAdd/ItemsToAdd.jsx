import {
  Info,
  Value,
  Card,
  CarbonohidratesWrap,
  ProteinWrap,
  FatWrap,
} from '../DiaryPageItemsToAdd/ItemsToAdd.styled';

export const ItemToAdd = ({ info }) => {

  const { carbonohidrates, protein, fat } = info;

  return (
    <Card>
      {carbonohidrates !== 0 && protein !== 0 && fat !== 0 ? (
        <Info>
          <CarbonohidratesWrap>
            Carbonohidrates: <Value>{carbonohidrates}</Value>
          </CarbonohidratesWrap>
          <ProteinWrap>
            Protein: <Value>{protein}</Value>
          </ProteinWrap>
          <FatWrap>
            Fat: <Value>{fat}</Value>
          </FatWrap>
        </Info>
      ) : (
        <Info>
          <CarbonohidratesWrap>
            Carbonohidrates: <Value>0</Value>
          </CarbonohidratesWrap>
          <ProteinWrap>
            Protein: <Value>0</Value>
          </ProteinWrap>
          <FatWrap>
            Fat: <Value>0</Value>
          </FatWrap>
        </Info>
      )}
    </Card>
  );
};

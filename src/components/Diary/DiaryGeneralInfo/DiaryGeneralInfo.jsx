import {
  Info,
  Value,
  CarbonohidratesWrap,
  ProteinWrap,
  FatWrap,
} from './DiaryGeneralInfo.styled';

const DiaryGeneralInfo = ({ info }) => {

  const { carbonohidrates, protein, fat } = info;

  return (      
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
    
  );
};


export default DiaryGeneralInfo;

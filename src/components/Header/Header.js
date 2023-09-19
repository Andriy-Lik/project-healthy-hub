import { Container, Title, Info, InfoBlock, UserBlock, IconContainer, TextContainer, InfoBlockName, InfoBlockText, WeightKg, ArrowSvg, EditSvg, AvaImg, MenuSvg } from './Header.styled';

import waight from '../../images/icons/Waight-image.svg'
// import muscle from '../../images/icons/Gain-muscle.svg'
import loseFatMen from '../../images/icons/Lose-fat-image-men.svg'
// import loseFatGirl from '../../images/icons/Lose-fat-image-girl.svg'
// import maintakeMen from '../../images/icons/Maintake-image-men.svg'
// import maintakeGirl from '../../images/icons/Maintake-image-girl.svg'

import arrowDown from '../../images/icons/arrow-down.svg'
import edit from '../../images/icons/edit-2.svg'

import menu from '../../images/icons/menu.svg'

import ava from '../../images/avatar-7236095.png'

const Header = () => {
  // function genderType(gender) {

  //   if (gender === 'male') {
  //     const loseFat = loseFatMen
  //     const maintake = maintakeMen
  //   } else if (gender === 'female') {
  //     const loseFat = loseFatGirl
  //     const maintake = maintakeGirl
  //   }

  // }

  return (
    <Container>
      <Title>
        HealthyHub
        <MenuSvg src={menu} alt="menu" />
      </Title>
      <Info>
        <InfoBlock>
          <IconContainer>
            <img src={loseFatMen} alt="current gain" width={28} />
          </IconContainer>
          <TextContainer>
            <InfoBlockName>Goal</InfoBlockName>
            <InfoBlockText>
              {/* user.goal */}
              Lose fat
              <ArrowSvg src={arrowDown} alt="arrow down" />
            </InfoBlockText>
          </TextContainer>
        </InfoBlock>
        <InfoBlock>
          <IconContainer>
            <img src={waight} alt="weight" width={28} />
          </IconContainer>
          <TextContainer>
            <InfoBlockName>Weight</InfoBlockName>
            <InfoBlockText>
              {/* user.weight */}
              65
              <WeightKg>kg</WeightKg>
              <EditSvg src={edit} alt="edit" />
            </InfoBlockText>
          </TextContainer>
        </InfoBlock>
        <UserBlock>
          Konstantin
          {/* ava = user.avatarURL */}
          <AvaImg src={ava} alt="avatar" />
          <ArrowSvg src={arrowDown} alt="arrow down" />
        </UserBlock>
      </Info>
    </Container>
  );
};

export default Header;
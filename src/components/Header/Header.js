import { Container, Title, Info, InfoOptions, InfoBlock, UserBlock, IconContainer, TextContainer, InfoBlockName, InfoBlockText, WeightKg, ArrowSvg, EditSvg, AvaImg, Menu, MenuSvg, Unauthorized } from './Header.styled';

import waight from '../../images/icons/Waight-image.svg'
import loseFatMen from '../../images/icons/Lose-fat-image-men.svg'
// import loseFatGirl from '../../images/icons/Lose-fat-image-girl.svg'
// import maintakeMen from '../../images/icons/Maintake-image-men.svg'
// import maintakeGirl from '../../images/icons/Maintake-image-girl.svg'
// import muscle from '../../images/icons/Gain-muscle.svg'

import arrowDown from '../../images/icons/arrow-down.svg'
import edit from '../../images/icons/edit-2.svg'

import menu from '../../images/icons/menu.svg'
import menuOpened from '../../images/icons/menu-opened.svg'

import avatar from '../../images/icons/profile-circle.svg'

import TargetModal from './HeaderModals/TargetModal';
import WeightModal from './HeaderModals/WeightModal';
import ProfileModal from './HeaderModals/ProfileModal';
import MenuModal from './HeaderModals//MenuModal';

import {
  useState,
  // useSelector
} from 'react';
import { Link } from 'react-router-dom';

// import { selectIsLoggedIn } from "../../redux/Auth/authSelectors";

export default function Header() {
  // function genderType(gender) {

  //   if (gender === 'male') {
  //     const loseFat = loseFatMen
  //     const maintake = maintakeMen
  //   } else if (gender === 'female') {
  //     const loseFat = loseFatGirl
  //     const maintake = maintakeGirl
  //   }

  // }

  const [showModalTarget, setShowModalTarget] = useState(false);

  const toggleModalTarget = () => {
    setShowModalTarget(showModalTarget => !showModalTarget);
  };

  const [showModalWeight, setShowModalWeight] = useState(false);

  const toggleModalWeight = () => {
    setShowModalWeight(showModalWeight => !showModalWeight);
  };

  const [showModalProfile, setShowModalProfile] = useState(false);

  const toggleModalProfile = () => {
    setShowModalProfile(showModalProfile => !showModalProfile);
  };

  const [showModalMenu, setShowModalMenu] = useState(false);

  const toggleModalMenu = () => {
    setShowModalMenu(showModalMenu => !showModalMenu);
  };

  // const isLoggedIn = useSelector(selectIsLoggedIn)
  // console.log(isLoggedIn)
  const isLoggedIn = false


  return isLoggedIn ? (
    <Container>
      <Title>
        <Link to={'/'}>HealthyHub</Link>
        <Menu onClick={toggleModalMenu}>
          {showModalMenu ? <MenuSvg src={menuOpened} alt="menu" />
            : <MenuSvg src={menu} alt="menu" />}
          {showModalMenu && (
            <MenuModal onCloseModal={toggleModalMenu} />
          )}
        </Menu>
      </Title>
      <Info>
        <InfoOptions>
          <InfoBlock onClick={toggleModalTarget}>
            <IconContainer>
              <img src={loseFatMen} alt="current goal" width={28} />
            </IconContainer>
            <TextContainer>
              <InfoBlockName>Goal</InfoBlockName>
              <InfoBlockText>
                {/* user.goal */}
                Lose fat
                <ArrowSvg src={arrowDown} alt="arrow down" />
              </InfoBlockText>
            </TextContainer>
            {showModalTarget && (
              <TargetModal onCloseModal={toggleModalTarget} />
            )}
          </InfoBlock>
          <InfoBlock onClick={toggleModalWeight}>
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
            {showModalWeight && (
              <WeightModal onCloseModal={toggleModalWeight} />
            )}
          </InfoBlock>
        </InfoOptions>
        <UserBlock onClick={toggleModalProfile}>
          Konstantin
          {/* ava = user.avatarURL */}
          <AvaImg src={avatar} alt="avatar" />
          <ArrowSvg src={arrowDown} alt="arrow down" />
          {showModalProfile && (
            <ProfileModal onCloseModal={toggleModalProfile} />
          )}
        </UserBlock>
      </Info>
    </Container>
  ) : (
    <Container>
      <Title>
        <Link to={'/'}>HealthyHub</Link>
      </Title>
      <Unauthorized>
        <Link to={'/signin'}>Sign in</Link>
        <p> / </p>
        <Link to={'/signup'}>Sign up</Link>
        <img src={avatar} alt="weight" width={28} />
      </Unauthorized>
    </Container>
  )
};
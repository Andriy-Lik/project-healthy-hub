import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/Auth/authSelectors';

import {
  Container,
  Content,
  LogoBox,
  Info,
  InfoOptions,
  InfoBlock,
  UserBlock,
  IconContainer,
  TextContainer,
  InfoBlockName,
  InfoBlockText,
  WeightKg,
  ArrowSvg,
  EditSvg,
  AvaImg,
  MenuBox,
  MenuImg,
  Unauthorized,
  DefaultLink,
  ActiveLink,
} from './Header.styled';

import waight from '../../images/icons/Waight-image.svg';

import loseFatMen from '../../images/icons/Lose-fat-image-men.svg';
import loseFatGirl from '../../images/icons/Lose-fat-image-girl.svg';
import maintakeMen from '../../images/icons/Maintake-image-men.svg';
import maintakeGirl from '../../images/icons/Maintake-image-girl.svg';
import muscle from '../../images/icons/Gain-muscle.svg';

import arrowDown from '../../images/icons/arrow-down.svg';
import edit from '../../images/icons/edit-2.svg';
import menu from '../../images/icons/menu.svg';
import menuOpened from '../../images/icons/menu-opened.svg';
import avatar from '../../images/icons/profile-circle.svg';

import TargetModal from '../HeaderModals/TargetModal';
import WeightModal from '../HeaderModals/WeightModal';
import ProfileModal from '../HeaderModals/ProfileModal';
import MenuModal from '../HeaderModals/MenuModal';

export default function Header() {
  const [showModalTarget, setShowModalTarget] = useState(false);
  const [showModalWeight, setShowModalWeight] = useState(false);
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalMenu, setShowModalMenu] = useState(false);

  const location = useLocation();
  const [currentURL, setCurrentURL] = useState(location.pathname);

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  let goalIcon;

  switch (user.gender) {
    case 'Female':
      switch (user.goal) {
        case 'Lose fat':
          goalIcon = loseFatGirl;
          break;

        case 'Maintain':
          goalIcon = maintakeGirl;
          break;

        default:
          goalIcon = muscle;
      }
      break;

    case 'Male':
      switch (user.goal) {
        case 'Lose fat':
          goalIcon = loseFatMen;
          break;

        case 'Maintain':
          goalIcon = maintakeMen;
          break;

        default:
          goalIcon = muscle;
      }
      break;

    default:
      goalIcon = muscle;
  }

  const toggleModalTarget = () => {
    setShowModalTarget(showModalTarget => !showModalTarget);
  };

  const toggleModalWeight = () => {
    setShowModalWeight(showModalWeight => !showModalWeight);
  };

  const toggleModalProfile = () => {
    setShowModalProfile(showModalProfile => !showModalProfile);
  };

  const toggleModalMenu = () => {
    setShowModalMenu(showModalMenu => !showModalMenu);
  };

  useEffect(() => {
    // Update currentURL when the URL changes
    setCurrentURL(location.pathname);
  }, [location]);

  return isLoggedIn ? (
    <Container>
      <Content>
        <LogoBox>
          <Link to={'/main'}>HealthyHub</Link>
          <MenuBox onClick={toggleModalMenu}>
            {showModalMenu ? (
              <MenuImg src={menuOpened} alt="menu" />
            ) : (
              <MenuImg src={menu} alt="menu" />
            )}
            {showModalMenu && <MenuModal onCloseModal={toggleModalMenu} />}
          </MenuBox>
        </LogoBox>
        <Info>
          <InfoOptions>
            <InfoBlock onClick={toggleModalTarget}>
              <IconContainer>
                <img src={goalIcon} alt="current goal" width={28} />
              </IconContainer>
              <TextContainer>
                <InfoBlockName>Goal</InfoBlockName>
                <InfoBlockText>
                  {user.goal || 'No goal yet'}
                  <ArrowSvg
                    src={arrowDown}
                    alt="arrow down"
                    style={{
                      transform: showModalTarget
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    }}
                  />
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
                  {user.weight || 0}
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
            {user.name || 'User'}
            <AvaImg src={user.avatarURL || avatar} alt="avatar" />
            <ArrowSvg
              src={arrowDown}
              alt="arrow down"
              style={{
                transform: showModalProfile ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
            {showModalProfile && (
              <ProfileModal onCloseModal={toggleModalProfile} />
            )}
          </UserBlock>
        </Info>
      </Content>
    </Container>
  ) : (
    <Container>
      <Content>
        <LogoBox>
          <Link to={'/'}>HealthyHub</Link>
        </LogoBox>
        {currentURL.endsWith('/signin') ? (
          <Unauthorized>
            <ActiveLink to={'/signin'}>Sign in</ActiveLink>
            <p> / </p>
            <DefaultLink to={'/signup'}>Sign up</DefaultLink>
            <img src={avatar} alt="weight" width={28} />
          </Unauthorized>
        ) : currentURL.endsWith('/signup') ? (
          <Unauthorized>
            <DefaultLink to={'/signin'}>Sign in</DefaultLink>
            <p> / </p>
            <ActiveLink to={'/signup'}>Sign up</ActiveLink>
            <img src={avatar} alt="weight" width={28} />
          </Unauthorized>
        ) : (
          <Unauthorized>
            <DefaultLink to={'/signin'}>Sign in</DefaultLink>
            <p> / </p>
            <DefaultLink to={'/signup'}>Sign up</DefaultLink>
            <img src={avatar} alt="weight" width={28} />
          </Unauthorized>
        )}
      </Content>
    </Container>
  );
}

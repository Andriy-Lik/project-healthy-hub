import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/authSelectors';
import PropTypes from 'prop-types';

import HeaderOverlay from './HeaderOverlay';
import {
  ModalWrapper,
  CloseBtn,
  InfoOptions,
  InfoBlock,
  IconContainer,
  TextContainer,
  InfoBlockName,
  InfoBlockText,
  ArrowSvg,
  WeightKg,
  EditSvg,
} from './MenuModal.styled';

import close from '../../images/icons/close-circle.svg';
import waight from '../../images/icons/Waight-image.svg';

import loseFatMen from '../../images/icons/Lose-fat-image-men.svg';
import loseFatGirl from '../../images/icons/Lose-fat-image-girl.svg';
import maintakeMen from '../../images/icons/Maintake-image-men.svg';
import maintakeGirl from '../../images/icons/Maintake-image-girl.svg';
import muscle from '../../images/icons/Gain-muscle.svg';

import arrowRight from '../../images/icons/arrow-right-open.svg';
import edit from '../../images/icons/edit-2.svg';

import TargetModal from './TargetModal';
import WeightModal from './WeightModal';

export default function MenuModal({ onCloseModal }) {
  const [showModalTarget, setShowModalTarget] = useState(false);
  const [showModalWeight, setShowModalWeight] = useState(false);

  const user = useSelector(selectUser);

  let goalIcon;

  if (user.goal) {
    if (user.goal === 'Lose fat') {
      if (user.gender === 'female') {
        goalIcon = loseFatGirl;
      } else {
        goalIcon = loseFatMen;
      }
    } else if (user.goal === 'Maintain') {
      if (user.gender === 'female') {
        goalIcon = maintakeGirl;
      } else {
        goalIcon = maintakeMen;
      }
    } else if (user.goal === 'Gain Muscle') {
      goalIcon = muscle;
    } else {
      goalIcon = loseFatMen;
    }
  } else if (user.gender === 'female') {
    goalIcon = loseFatGirl;
  } else {
    goalIcon = loseFatMen;
  }

  const toggleModalTarget = () => {
    setShowModalTarget(showModalTarget => !showModalTarget);
  };

  const toggleModalWeight = () => {
    setShowModalWeight(showModalWeight => !showModalWeight);
  };

  const toggleModalSwitchTarget = () => {
    onCloseModal();
    setShowModalTarget(showModalTarget => !showModalTarget);
  };

  const toggleModalSwitchWeight = () => {
    onCloseModal();
    setShowModalWeight(showModalWeight => !showModalWeight);
  };

  const closeBtnHandler = () => {
    console.log(onCloseModal());
    onCloseModal();
  };

  return (
    <HeaderOverlay onCloseOverlay={onCloseModal}>
      <ModalWrapper>
        <CloseBtn onClick={closeBtnHandler}>
          <img src={close} alt="close" width={16} />
        </CloseBtn>
        <InfoOptions>
          <InfoBlock onClick={toggleModalSwitchTarget}>
            <IconContainer>
              <img src={goalIcon} alt="current goal" width={28} />
            </IconContainer>
            <TextContainer>
              <InfoBlockName>Goal</InfoBlockName>
              <InfoBlockText>
                {user.goal || 'No goal yet'}
                <ArrowSvg src={arrowRight} alt="arrow right" />
              </InfoBlockText>
            </TextContainer>
            {showModalTarget && (
              <TargetModal onCloseModal={toggleModalTarget} />
            )}
          </InfoBlock>
          <InfoBlock onClick={toggleModalSwitchWeight}>
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
      </ModalWrapper>
    </HeaderOverlay>
  );
}

MenuModal.propTypes = {
  onCloseOverlay: PropTypes.func.isRequired,
};

import { useState } from "react";

import {
  Wrapper,
  Title,
  InfoBox,
  Card,
  WaterTracker,
  CounterOfConsumedWaterInPercentage,
  Chart,
  CardText,
  CardTitle,
  CounterList,
  CounterOfConsumedWaterInMl,
  CounterOfWaterLeftToDrinkInMl,
  Btn
} from "./Water.styled";

import AddWater from "components/Modals/AddWater/addWater";

import img1 from "../../images/add.png";
import img2 from "../../images/add@2x.png";

const Water = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  let counter = "70%"; // має прийти з бекенду
  
  return (
    <Wrapper>
      <Title>Water</Title>
      <InfoBox>
        <Card>
          <WaterTracker>
            {/* лічильник спожитої води у відсотках*/}
            <CounterOfConsumedWaterInPercentage>{counter}</CounterOfConsumedWaterInPercentage>
            <Chart style={{height: `${counter}`}}/>
          </WaterTracker>
          <CardText>
            <CardTitle>Water consumption</CardTitle>
            <CounterList>
              {/* лічильник випитої води у мл */}
              <CounterOfConsumedWaterInMl>
                1050<span>ml</span>
              </CounterOfConsumedWaterInMl>
              {/* лічильник води, що залишилось випити у мл */}
              <CounterOfWaterLeftToDrinkInMl>
                <span>left:</span> 450 ml
              </CounterOfWaterLeftToDrinkInMl>
            </CounterList>
            {/* кнопка, що відкриває модальне вікно додати воду */}
            <Btn type="button" onClick={toggleModal}>
              <img
                // loading="lazy"
                srcSet={`${img1} 1x, ${img2} 2x`}
                width={16}
                height={16}
                src={img1}
                alt="Add"
              />              
              <p>Add water intake</p>
            </Btn>
          </CardText>
        </Card>
      </InfoBox>
      
      {isModalOpen && (
        <AddWater onClose={toggleModal} />
      )}
      
    </Wrapper>
  );
};

export default Water;
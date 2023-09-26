import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectStatsInfo } from "../../redux/Statistics/statisticsSelectors"
import { getStats } from "../../redux//Statistics/statisticsOperations";
import {calcPercent, calcRemainder} from "../../helpers/calculations"

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

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getStats('today')); 
  }, [dispatch]);
  
  const info = useSelector(selectStatsInfo);

  console.log("info: ", !Object.keys(info).length)

  const goal = 1500;
  let consumedWaterMl = 100;
  // let consumedWaterMl = info.water[0].water;



  let consumedWaterPercent = calcPercent(goal, consumedWaterMl) + "%";
  let leftToConsumeWater = calcRemainder(goal, consumedWaterMl);
  
  return (
    <Wrapper>
      <Title>Water</Title>
      <InfoBox>
        <Card>
          <WaterTracker>
            {/* лічильник спожитої води у відсотках*/}
            <CounterOfConsumedWaterInPercentage>{consumedWaterPercent}</CounterOfConsumedWaterInPercentage>
            <Chart style={{height: `${consumedWaterPercent}`}}/>
          </WaterTracker>
          <CardText>
            <CardTitle>Water consumption</CardTitle>
            <CounterList>
              {/* лічильник випитої води у мл */}
              <CounterOfConsumedWaterInMl>
                {!Object.keys(info).length ? 0 : 100 }
                <span>ml</span>
              </CounterOfConsumedWaterInMl>
              {/* лічильник води, що залишилось випити у мл */}
              <CounterOfWaterLeftToDrinkInMl>
                <span>left:</span> {leftToConsumeWater} ml
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
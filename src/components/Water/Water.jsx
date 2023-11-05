import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectStatsConsumedWaterPerDay} from "redux/Statistics/statisticsSelectors";
import { calcPercent, calcRemainder, calcSurplus } from "helpers/calculations";
import { WATER_GOAL } from "constants/constants";

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

import img1 from "images/add.png";
import img2 from "images/add@2x.png";

const Water = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const consumedWaterMl = useSelector(selectStatsConsumedWaterPerDay);
 
  const consumedWaterPercent = calcPercent(WATER_GOAL, consumedWaterMl) + "%";
  const leftToConsumeWater = calcRemainder(WATER_GOAL, consumedWaterMl);
  const excessConsumptionWater = calcSurplus(WATER_GOAL, consumedWaterMl);

  const warning = consumedWaterMl > WATER_GOAL;

  const notifyWarn = message => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      theme: 'dark',
      autoClose: 3000,
    });
  };

  setTimeout(() => { document.querySelector("#chart").style.height = consumedWaterPercent }, 0);

  if (warning) {
    notifyWarn(
      `Maximum water consumption. If you continue to consume, you will not reach your goal`
    );
  }
  
  return (
    <>
      <ToastContainer/>
      <Wrapper>
      <Title>Water</Title>
      <InfoBox>
        <Card>
          <WaterTracker>
            {/* лічильник спожитої води у відсотках*/}
            <CounterOfConsumedWaterInPercentage style={{color: `${warning && "#E74A3B"}`}}>{consumedWaterPercent}</CounterOfConsumedWaterInPercentage>
            <Chart id="chart" style={{height: 0, backgroundColor: `${warning && "#E74A3B"}`}} />
          </WaterTracker>
          <CardText>
            <CardTitle>Water consumption</CardTitle>
            <CounterList>
              {/* лічильник випитої води у мл */}
              <CounterOfConsumedWaterInMl>
                {/* {(consumedWaterMl > WATER_GOAL) ? WATER_GOAL : consumedWaterMl} */}
                {consumedWaterMl}
                <span>ml</span>
              </CounterOfConsumedWaterInMl>
              {/* лічильник води, що залишилось випити у мл */}
              <CounterOfWaterLeftToDrinkInMl style={{color: `${warning && "#E74A3B"}`}}>
                <span>{warning ? "excess:" : "left:"}</span> {warning ? excessConsumptionWater : leftToConsumeWater} ml
              </CounterOfWaterLeftToDrinkInMl>
            </CounterList>
            {/* кнопка, що відкриває модальне вікно додати воду */}
            <Btn type="button" onClick={toggleModal}>
              <img                
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
    </>
  );
};

export default Water;
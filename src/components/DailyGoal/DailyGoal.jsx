// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectStatsInfo } from "../../redux/Statistics/statisticsSelectors"

// import { getStats } from "../../redux//Statistics/statisticsOperations";

import { Wrapper, Title, InfoBox, Card, CardText, CardTitle, Counter } from "./DailyGoal.styled";

import img1 from "../../images/bubble.png";
import img2 from "../../images/bubble@2x.png";
import img3 from "../../images/bottle.png";
import img4 from "../../images/bottle@2x.png";


const calories = 1700;
const water = 1500;

const DailyGoal = () => {
  
  // const dispatch = useDispatch();
  // const info = useSelector(selectStatsInfo);
  
  // useEffect(() => {
  //   dispatch(getStats('today')); 
  // }, [dispatch]);



  return (
    <Wrapper>
      <Title>Daily goal</Title>
      <InfoBox>
        <Card>
          <img
            // loading="lazy"
            srcSet={`${img1} 1x, ${img2} 2x`}
            width={80}
            height={80}
            src={img1}
            alt="Bubbles"
          />
          <CardText>
            <CardTitle>Calories</CardTitle>
            <Counter>
              {calories}
            </Counter>
          </CardText>
        </Card>        
        <Card>
          <img
            // loading="lazy"
            srcSet={`${img3} 1x, ${img4} 2x`}
            width={80}
            height={80}
            src={img3}
            alt="Bottle"
          />
          <CardText>
            <CardTitle>Water</CardTitle>
            <Counter>
              {water}
              <span>ml</span>
            </Counter>
          </CardText>
        </Card>
            
      </InfoBox>

    </Wrapper>

  );

};

export default DailyGoal;
import { Wrapper, Title, InfoBox, Card, CardText, CardTitle, Counter } from "./DailyGoal.styled";

import img1 from "../../images/bubble.png";
import img2 from "../../images/bubble@2x.png";
import img3 from "../../images/bottle.png";
import img4 from "../../images/bottle@2x.png";

const DailyGoal = () => {
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
              1700
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
              1500<span>ml</span>
            </Counter>
          </CardText>
        </Card>
            
      </InfoBox>

    </Wrapper>

  );

};

export default DailyGoal;
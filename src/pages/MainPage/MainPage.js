import {
  Container,
  HeaderMainPage,
  TitlePage,
  Link,
  TrackerList,
  Tarker,
} from './MainPage.styled';

import DailyGoal from 'components/DailyGoal';
import Water from 'components/Water';
import Food from 'components/Food';

import img1 from '../../images/arrow-right.png';
import img2 from '../../images/arrow-right@2x.png';

const MainPage = () => {
  return (
    <Container>
      {/* Заговолок */}
      <HeaderMainPage>
        <TitlePage>Today</TitlePage>
        <Link>
          <p>On the way to the goal</p>
          <img
            srcSet={`${img1} 1x, ${img2} 2x`}
            width={16}
            height={16}
            src={img1}
            alt="Arrow right"
          />
        </Link>
      </HeaderMainPage>
      {/* Блоки, що показують трекери прийому їжі та води (Daily Goal, Water, Food)  */}
      <TrackerList>
        <Tarker>
          {/* блок Щоденна мета DailyGoal */}
          <DailyGoal />
        </Tarker>
        <Tarker>
          {/* блок Вода Water */}
          <Water />
        </Tarker>
        <Tarker>
          {/* блок Їжа Food */}
          <Food />
        </Tarker>
      </TrackerList>

      <div></div>
      {/* блок Щоденник Diary */}
      <div>
        <h3>Diary</h3>
        <button>See more</button>
      </div>

      {/* блок Рекомендована їжа RecommentedFood */}
      <div>
        <h3>Recommented food</h3>
      </div>
    </Container>
  );
};

export default MainPage;

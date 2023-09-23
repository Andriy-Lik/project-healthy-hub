import image from '../../images/Ketogenic.png'
import { Title, Img, Item, Container, Svg, Parag, List, ContainerTwo, ParagTwo, Background } from './RecommendedFoodPage.styled'
import food from './food.json';

export default function RecommendedFood(){
    return(
        <Background>
        <Title>Recommented food</Title>
        <ContainerTwo>
        <Img src={image} alt="Recommended food" />
          <List>
            {food.map(({img,name,amount, calories})=> {
              return(
                <Item>
                <Svg src={img} alt={name} />
                <div>
                <h2>{name}</h2>
                <Container>
                <Parag>{amount}</Parag>
                <ParagTwo>{calories}</ParagTwo>
                </Container>
                </div>
            </Item>
              )
            })}
            
          </List>
          </ContainerTwo>
        </Background>
    )
}
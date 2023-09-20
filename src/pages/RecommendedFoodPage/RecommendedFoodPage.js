import image from '../../images/Ketogenic.png'
import { Title, Img, Item, Container, Svg, Parag, List, ContainerTwo, ParagTwo } from './RecommendedFoodPage.styled'

export default function RecommendedFood({img,name,amount, calories}){
    return(
        <>
        <Title>Recommented food</Title>
        <ContainerTwo>
        <Img src={image} alt="Recommented food" />
          <List>
            <Item>
                <Svg>
                <use href={img}></use>
                </Svg>
                <div>
                <h2>{name}</h2>
                <Container>
                <Parag>{amount}</Parag>
                <ParagTwo>{calories}</ParagTwo>
                </Container>
                </div>
            </Item>
          </List>
          </ContainerTwo>
        </>
    )
}
import img from '../../images/Ketogenic.png'
import { Title, Img, Item, Container, Svg, Parag, List, ContainerTwo, ParagTwo } from './RecommendedFoodPage.styled'
export function RecommendedFood(){
    return(
        <>
        <Title>Recommented food</Title>
        <ContainerTwo>
        <Img src={img} alt="Recommented food" />
          <List>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Avocado</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>200 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Beans</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>123 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Nuts</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>500 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Broccoli</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>28 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Cheese</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>200 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Egg</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>123 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Banana</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>500 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Meat</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>128 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Shrimp</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>100 calories</ParagTwo>
                </Container>
                </div>
            </Item>
            <Item>
                <Svg>
                    <use></use>
                </Svg>
                <div>
                <h2>Steak</h2>
                <Container>
                <Parag>100 g</Parag>
                <ParagTwo>150 calories</ParagTwo>
                </Container>
                </div>
            </Item>
          </List>
          </ContainerTwo>
        </>
    )
}
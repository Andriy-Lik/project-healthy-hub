import img from '../../images/Ketogenic.png'
import { Title, Img, Item, Container, Svg, Parag, List, ContainerTwo } from './RecommendedFoodPage.styled'
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
                <p>200 calories</p>
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
                <p>123 calories</p>
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
                <p>500 calories</p>
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
                <p>28 calories</p>
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
                <p>200 calories</p>
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
                <p>123 calories</p>
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
                <p>500 calories</p>
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
                <p>128 calories</p>
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
                <p>100 calories</p>
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
                <p>150 calories</p>
                </Container>
                </div>
            </Item>
          </List>
          </ContainerTwo>
        </>
    )
}
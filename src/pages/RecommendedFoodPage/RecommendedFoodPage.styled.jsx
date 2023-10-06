import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Background = styled.div`
background-color: #050505;
width: 100%;
flex-direction: column;
display: flex;
`

export const BackLink = styled(NavLink)`
  display: flex;
  @media screen and (${props => props.theme.mq.mobile}) {
    margin-right: 8px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 16px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 24px;
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  color: ${p => p.theme.colors.white};
  margin-left: 34px;
`
export const Img = styled.img`
width: 300px;
height: 312px;
margin-top: 24px;
margin-right: 44px;
margin-left: 50px;
@media (min-width: 320px) and (max-width: 833px)  {
  width: 380px;
  height: 396px;
}
@media (min-width: 834px) and (max-width: 1639px)  {
  width: 436px;
  height: 460px;
}
`
export const Item = styled.li`
border-radius: 12px;
border: 1px solid black;
display: flex;
justify-content: flex-start;
align-items: center;
width: 300px;
height: 86px;
margin-right: 20px;
margin-bottom: 20px;
font-size: 12px;
background-color:${p => p.theme.colors.black2};
color:${p => p.theme.colors.white};

@media (min-width: 320px) and (max-width: 833px)  {
  width: 380px;
}
@media (min-width: 834px) and (max-width: 1439px)  {
  width: calc((100% - 60px) / 2);
  max-width: 328px;
}
`
export const Container = styled.div`
display: flex;
`
export const Svg = styled.img`
width: 46px;
height: 46px;
margin-left:24px;
margin-right:20px;
`
export const Parag = styled.p`
margin-right: 6px;
`
export const ParagTwo = styled.p`
color:${p => p.theme.colors.gray}
`

export const List = styled.ul`

@media (min-width: 320px) and (max-width: 1003px)  {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:24px;
}
@media (min-width: 834px) and (max-width: 1639px)  {
  display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
width: 800px;
}
`
export const ContainerTwo = styled.div`
display: flex;
justify-content: space-around;

@media (min-width: 320px) and (max-width: 1003px)  {
  display: flex;
  flex-direction: column;
  align-items: center;
}

`
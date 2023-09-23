import styled from 'styled-components';

export const Background = styled.div`
background-color: #050505;
width: 100%;
flex-direction: column;
display: flex;

`
export const Title = styled.h1`
  margin-top: 20px;
  color: ${p => p.theme.colors.white};
  margin-left: 34px;
`
export const Img = styled.img`
width: 436px;
height: 460px;
margin-top: 24px;
margin-right: 44px;
margin-left: 50px
`
export const Item = styled.li`
border-radius: 12px;
border: 1px solid black;
display: flex;
justify-content: flex-start;
align-items: center;
width: 270px;
height: 86px;
margin-right: 20px;
margin-bottom: 20px;
font-size: 12px;
background-color:${p => p.theme.colors.black2};
color:${p => p.theme.colors.white}
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
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
`
export const ContainerTwo = styled.div`
display: flex;
justify-content: space-around;
`
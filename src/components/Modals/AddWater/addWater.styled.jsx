import styled from 'styled-components';

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.2);
z-index: 1;
`
export const Modal = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    width: 338px;
    height: 280px;
    padding: 40px;
    background-color: ${p => p.theme.colors.black2};
    border-radius: 12px;
  
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;
`
export const Title = styled.h1`
  color:${p => p.theme.colors.white};
  text-align: center;
`
export const Label = styled.label`
color:${p => p.theme.colors.white};
padding-bottom: 13px;
`
export const Button = styled.button`
background-color: ${p => p.theme.colors.greenLite};
    border-radius: 12px;
    padding: 10px;
    color: ${p => p.theme.colors.black2};
    width: 212px;
    height: 36px;
    border:0;
    margin-top: 16px;
`
export const ButtonTwo = styled.button`
background-color: transparent;
    border-radius: 12px;
    padding: 10px;
    color: ${p => p.theme.colors.gray};
    width: 212px;
    height: 36px;
    border:0;
`

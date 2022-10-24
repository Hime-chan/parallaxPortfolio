import styled from "styled-components";

export const DivBody = styled.div`
    
    .DivScroll {
        height:100%; 
        width:100%;
        perspective: 1px;
        position:relative;
        overflow-x: hidden; 
        overflow-y:scroll;
        scroll-behavior: smooth;
        ::-webkit-scrollbar {width: 2vw;}
        ::-webkit-scrollbar-track {box-shadow: inset 0 0 10px red; border-radius: 2vw;background:${props =>props.theme.background1}; border:3px solid ${props =>props.theme.color1}; }
        ::-webkit-scrollbar-thumb {background: ${props =>props.theme.border2}; border-radius: 10px;}
        ::-webkit-scrollbar-thumb:hover {background: ${props =>props.theme.border3};}
    }
    background: black;
    position:absolute;
    top:1vmin;
    bottom:1vmin;
    right:1vmin;
    left:1vmin;
    display: block;
    border-radius:5vmin 20vmin;
    padding:3vmin;
    overflow-y:none;    
`


export const BodyContainer =  styled.div`
    height:100vh;
    font-size:1.2rem;
    width:100vw;
    position:relative;
    overflow: hidden;
    background: ${props =>props.theme.border1};
    background: linear-gradient(to right, ${props =>props.theme.border1} 0%, ${props =>props.theme.border2} 20%, ${props =>props.theme.border3} 50%, ${props =>props.theme.border2} 80%, ${props =>props.theme.border1} 100%);
`
export const Footer = styled.footer`
    height:12vh;
    text-align: center;
`

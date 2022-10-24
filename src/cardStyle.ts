import styled, { css } from "styled-components"

interface CardContainer {
    bolha?: boolean;
    height?: string;
    width?: string;
    top?: string;
    left?: string;

    borderColor?: string;
    color?:string;
}

export const CardContainer = styled.div<CardContainer>`
    height:${props=>props.height?props.height:"15vmax"};
    width:${props=>props.width?props.width:"15vmax"};
    top:${props=>props.top?props.top:"20vh"};
    left:${props=>props.left?props.left:"-70vh"};
    position:absolute;
    transform: translateZ(-2px) scale(3);
    z-index: 5;
    display:flex;
    overflow: hidden;
    
    ${(props) => {
        if (props.bolha) return css`
            background:url('umabolha.png') no-repeat;
            background-size: 100% 100%;
            border-radius:50%;
        `;
        else return css`
            box-shadow: 0px 0px 10px ${props=>props.theme.color1};
            border-radius: 10vmin;
        `;
    }}
`
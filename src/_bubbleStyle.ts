import styled from "styled-components"

export const BubbleContainer = styled.div`
    z-index: -1;
    perspective: 10px;
    transform-style: preserve-3d;
    height:fit-content;
    background: url('bolha1.png') repeat local;
    * {transform-style: preserve-3d;}
    
    .bubble1{
        ::before {
        content: "";
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 30%;
        background: url('bolha2.png') repeat local;
        opacity:0.7;
        transform: translateZ(1px) scale(1);
        z-index:-1;
        }

        z-index:-1;
        position: fixed;
        top: -50%; left: -50%;
        width: 200%; height: 100%;
        transform: translateZ(-2px) scale(2);
        z-index:-2;

        ::after {
            content: "";
            position: fixed;
            top: 10%; left: 20%;
            width: 70%; height: 43%;
            opacity: 0.7;
            background: url('bolha3.png') repeat local;
            background-position-x: 0%;    
            transform: translateZ(-3px) scale(3);  
            z-index:-3;          
        }  
    }
    
`


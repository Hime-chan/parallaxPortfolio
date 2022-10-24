import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const Test = styled.div`
    position:relative;
    overflow:hidden;
    top:0px;right:0px;left:0px;bottom:0px;
    .parbolha,.bolha1,.bolha2,.bolha3{position:absolute;top:0px;right:0px;left:0px;bottom:0px; min-height:100%; background-size:65%; background-repeat:repeat;}
    .bolha1{background-image:url("bolha1.png");background-position-x:-40vw;}
    .bolha2{background-image:url("bolha2.png");background-position-x:-50vw;}
    .bolha3{background-image:url("bolha3.png");background-position-x:-70vw;}
`
export function Bubble ({ children }: any) {
    
    return (
        <Test>
            <Parallax className="parbolha" speed={-80}><div className="bolha1"></div></Parallax>
            <Parallax className="parbolha" speed={-45}><div className="bolha2"></div></Parallax>
            <Parallax className="parbolha" speed={-10}><div className="bolha3"></div></Parallax>
            {children}
        </Test> 
    )
}

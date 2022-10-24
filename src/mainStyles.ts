import styled from "styled-components"

export const MainContainer = styled.div`
    font-family: ${props=> props.theme.font_H2};
    .lifetime{margin:10px 40%;}

`
export const TimelineContainer  = styled.div`
    margin:10px 0%;
    width:100%;
    p{
        font-family: ${props=> props.theme.font_text};
        text-indent: 2%;
        padding:0.8rem; 
    }
    h3 {
        font-family: ${props=> props.theme.font_H2}; 
        font-size:1.6rem;
        padding:2vh;
        box-shadow: 0px 0px 10px ${props=> props.theme.background1};
        width:120%;
    }

    @keyframes animacaoLifetime_outOdd {
        0% {margin:0px; opacity:1;box-shadow: 0px;border-right: 0px;} 
        100% {opacity:0.5;box-shadow: 20px 0px 100px ${props=> props.theme.border3};border-right: 20px solid ${props=> props.theme.border3};margin-left:-110vw;}}
        
    @keyframes animacaoLifetime_outEven {
        0% {margin:0px; opacity:1;box-shadow: 0px;border-right: 0px;} 
        100% {opacity:0.5;box-shadow: 20px 0px 100px ${props=> props.theme.border3};border-right: 20px solid ${props=> props.theme.border3};margin-left:110vw;}}

    @keyframes animacaoLifetime_inOdd {
        0% {opacity:0.5; box-shadow: 20px 0px 100px ${props=> props.theme.border3};border-right: 20px solid ${props=> props.theme.border3};margin-left:-110vw;} 
        100% {margin-left:0px; opacity:1;box-shadow: 0px;border-right: 0px;}}

    @keyframes animacaoLifetime_inEven {
        0% {opacity:0.5; box-shadow: 20px 0px 100px ${props=> props.theme.border3};border-right: 20px solid ${props=> props.theme.border3};margin-left:110vw;} 
        100% {margin-left:0px; opacity:1;box-shadow: 0px;border-right: 0px;}}
    
    .outOdd{animation: animacaoLifetime_outOdd 3s normal; margin-left:-110vw; opacity:0.5;box-shadow: 20px 0px 100px ${props=> props.theme.border3};border-right: 20px solid ${props=> props.theme.border3};}

    .outEven{animation: animacaoLifetime_outEven 3s normal; margin-left:110vw; opacity:0.5;box-shadow: 20px 0px 100px ${props=> props.theme.border3};border-right: 20px solid ${props=> props.theme.border3};}

    .inOdd{animation: animacaoLifetime_inOdd 3s normal; margin-left:0px; opacity:1;box-shadow: 0px;border-right: 0px;}
    .inEven{animation: animacaoLifetime_inEven 3s normal; margin-left:0px; opacity:1;box-shadow: 0px;border-right: 0px;}
        
    .lifetime1,.lifetime2,.lifetime3,.lifetime4{
        padding:2vh;
        overflow: hidden;
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        text-shadow: 3px 3px 10px ${props=> props.theme.background1};
        min-height:30vh;
        width:100%;
    };

    .lifetime1{
        border-top-right-radius: 20vh;
        background-color:${props=> props.theme.background3};
        background-image: url("ufal.png");
        background-position:10% 10%;
        background-size: 50%;
        * {color:${props=> props.theme.color5};}
        h3 {background-image: linear-gradient(to left,${props=> props.theme.background3}, ${props=> props.theme.border3});}
    }

    .lifetime2{
        background-color:${props=> props.theme.background6};
        background-image: url("info.png");
        background-position:20% 10%;
        background-size: 50%;
        * {color:${props=> props.theme.color6};}
        h3 {background-image: linear-gradient(to left,${props=> props.theme.color6}, ${props=> props.theme.background3});}
    }

    .lifetime3{
        background-color:${props=> props.theme.background5};
        background-image: url("math.png");
        background-position:0% 0%;
        background-size: 100%;
        * {color:${props=> props.theme.color3};}
        h3 {background-image: linear-gradient(to left,${props=> props.theme.background6}, ${props=> props.theme.background4});}
    }

    .lifetime4{
        background-color:${props=> props.theme.background2};
        background-image: url("react.png");
        background-position:10% 10%;
        background-size: 50%;
        color:${props=> props.theme.color1};
        h3 {background-image: linear-gradient(to left,${props=> props.theme.color4}, ${props=> props.theme.background3});}
        
    }

    .projectLinks{
        min-height:30vh;
    }
`

export const Great = styled.span`
    color:${props=> props.theme.color5};
    text-shadow:0px 0px 10px ${props=> props.theme.color3};
    font-weight: bold;
`

import styled from "styled-components"

export const HeaderContainer = styled.header`
    min-height:200px;
    text-shadow: 3px 3px 15px ${props => props.theme.border3};
    h1 {line-height:100px;}
    h1 span{
        margin-top:10px;
        margin-bottom:20px;
        padding-top:30px;
        font-size:3rem;
        font-family: ${props => props.theme.font_H1};
    }

    .h2{margin:0 10vw 2vw 10vw;
        text-align: left;
        font-family: ${props=> props.theme.font_H2};
        .content{
            span{font-size:1.8rem;display:inline;opacity:1; padding-bottom:0px; background:none}
            
            @keyframes animacaoH2_out {
                0% {opacity:1; padding-bottom:0px;background:none} 
                100% {opacity:0; padding-bottom:30px;background:${props=> props.theme.border3};}}
            @keyframes animacaoH2_in {
                0% {opacity:0; padding-bottom:30px;background:${props=> props.theme.border3};} 
                100% {opacity:1; padding-bottom:0px;background:none}}
            .out{animation: animacaoH2_out 3s normal; opacity:0; padding-bottom:30px;background:${props=> props.theme.border3};}
            .in {animation: animacaoH2_in 3s normal;opacity:1; padding-bottom:0px; background:none}
        }
    }  
`

export const TypingBar = styled.span`
    animation: blink 0.7s linear infinite;
    @keyframes blink {0% {opacity: 0;} 50% {opacity: 0.7;} 100% {opacity: 0;}}
`


import styled from "styled-components"

export const FooterContainer = styled.footer`
    overflow:hidden;
    display:block;
    padding-bottom:calc(180px + 45vw);
    
    *{
        color:${props=> props.theme.color1};
        transition: linear 1s;
    }

    h2 {font-family: ${props=> props.theme.font_H2};
        text-shadow:0px 0px 3px ${props=> props.theme.background3}; 
        width:100%;
        margin:calc(40px + 1vh);
        font-size:calc(20px + 1.2vw);
    }
    .tech {
        display:block;
        margin:0.3%;
        padding:0.5rem;
        border-radius:1vw;
        opacity:0.7;
        &:hover {
            box-shadow:0px 0px 20px ${props=> props.theme.background2};
            background:${props=> props.theme.color1};
            h3{
                color:${props=> props.theme.background3};
                background:${props=> props.theme.color1};
            }
            .alt{transition: linear 1s;
                display:block;
                height:fit-content;          
            } 
        }

        h3 {cursor:help;
            font-family: ${props=> props.theme.font_H2};
            text-align: center;
            line-height: calc(10px + 0.6vw);
            background:${props=> props.theme.background3};
            border-radius:1vw;
            color:${props=> props.theme.color1};
            text-shadow:0px 0px 3px ${props=> props.theme.background1};
            font-size:calc(20px + 1.2vw);
        }
        
        .alt{font-family: ${props=> props.theme.font_text};
            margin-top:1rem;
            background-color:${props=> props.theme.background1}; 
            border-radius:1vw;
            height:0px;
            display:none;
            padding:0.5vw;
            p{
                text-indent:calc(30px + 5vw);
                line-height:calc(24px + 1.5vw);
                text-align: justify;
                font-size:calc(18px + 1vw);                
            }
        }
    }

    .contatos{
        position:absolute;
        bottom:0px;
        width:99%;
        display:block;
        border-width: 10px;
        border-style: solid;
        border-image: linear-gradient(to bottom, ${props=> props.theme.color3},rgb(0,0,0,0)) 1 1;

        .link{
            display:inline-block; 
            margin:0.5%;
            width:23.5%;
            padding-bottom:23.5%;
            border-radius:2vw;
            opacity: 0.5;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 80%;
        }
        .link:hover{
            opacity:1;
            background-size: 100%;
        }
        .email{background-image:url(email.png);}
        .email:hover{background-image:url(email_selected.png);}
        .linkedin{background-image:url(linkedin.png);}
        .linkedin:hover{background-image:url(linkedin_selected.png);}
        .phone{background-image:url(phone.png);}
        .phone:hover{background-image:url(phone_selected.png);}
        .github{background-image:url(github.png);}
        .github:hover{background-image:url(github_selected.png);}
    }
`


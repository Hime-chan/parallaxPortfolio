import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{padding:0px; margin:0px;overflow: hidden;}
  html, * {padding:0px; margin:0px; position:relative;color:#FFFF77;}
  a {color: inherit; text-decoration:none; text-shadow:0px 0px 8px red;}
  a:hover{text-shadow:0px 0px 10px white;}
  div{box-sizing: border-box;}
`

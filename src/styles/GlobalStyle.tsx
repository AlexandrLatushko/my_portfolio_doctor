import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
    }
    a {
        text-decoration:none;
    }
    ul {
        list-style-type:none;
    }
`
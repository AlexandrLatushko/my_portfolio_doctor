import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

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
        color: ${theme.color.font};
        font-weight: 600;
        font-size: 20px;
    }

    h3 {
        margin-top: 40px;
        text-align: center;
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 23px;
    }

    p {
        font-weight: 500;
        font-size: 18px;
    }
    
    ul {
        list-style-type:none;
    }

    body {
        margin: 0;
        font-family:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.color.font};
        line-height: 1.2;

    }

    section:nth-of-type(odd) { //для всех четных секшанов будет приниматься такой цвет 
        background-color: ${theme.color.primaryBg};
    }

    section:nth-of-type(even) { //для всех нечетных секшанов будет приниматься такой цвет
        background-color: ${theme.color.secondaryBg};

    }

    section {
        padding: 140px;
    }


`
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
    }

    section:nth-of-type(odd) { //для всех четных секшанов будет приниматься такой цвет 
        background-color: ${theme.color.primaryBg};
    }

    section:nth-of-type(even) { //для всех нечетных секшанов будет приниматься такой цвет
        background-color: ${theme.color.secondaryBg};

    }

    



    button {
        
        border: none;
        background: ${theme.color.accent}; /* Используем background для градиента */
        color: ${theme.color.font}; /* Цвет текста кнопки из темы */
        padding: 15px 32px; /* Паддинг для кнопки */
        text-align: center; /* Выравнивание текста */
        text-decoration: none; /* Убираем подчеркивание */
        display: inline-block; /* Делаем кнопку inline-block */
        font-size: 16px; /* Размер текста */
        margin: 4px 2px; /* Отступы */
        cursor: pointer; /* Курсор при наведении */
        border-radius: 4px; /* Скругленные углы */
    }
`
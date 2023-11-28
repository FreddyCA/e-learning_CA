import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color--bgPrincipal: #1C1E53;
        --color--textPrimary: #FFFFFF;
        --color--btnPrimary: #FCD980;
        --color--textSecondary: #282938;
        --color--bgSecondary: #F5F5F5
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;

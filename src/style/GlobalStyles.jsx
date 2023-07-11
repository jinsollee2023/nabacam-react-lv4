import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

:root {
  --color-bg: #2B3467;
  --color-text: #FCFFE7;
  --color-accent: #EB455F;
  --color-box: #BAD7E9;
  --color-white: #FEFEFE;
}

@font-face {
    font-family: 'CookieRun-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
    font-family: 'CookieRun-Regular';
  }

  body {
    font-family: 'CookieRun-Regular';
    margin-top: 100px;


    }
`;

export default GlobalStyle;

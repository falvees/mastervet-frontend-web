import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1em Ubuntu, sans-serif;
  }
  button {
    cursor: pointer;
  }
  .noselect {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

}
.required-form {
  span {
    font-weight: 600;
    font-size:1em
  }
    font-size: .8em !important;
    color: #d60000;
    margin: 0 0 0 10px;
    padding: 0;
    font-weight: 500;
    text-align: left;
    margin-left: 10px !important;
}


@media only screen and (max-width: 960px) {
   button {
     /* font-size: 12px; */
   }
}
`;
export default GlobalStyle;

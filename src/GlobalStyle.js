import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --purple-primary: #554DDE;
  --accent-pink: #F44E77;
  --neutral-light: #F2F6FF;
  --lavender-secondary: #6A6D9E;
  --dark-primary: #16194F;
  --border-colour: #CAB6F1;
  --text-light: rgb(112, 112, 112);
  }
   * {
      margin:0;
      padding:0;
      list-style: none;
      box-sizing:border-box;
      text-decoration: none;
      }
   body {
      background: var(--neutral-light);
      font-size: 1.2rem;
      overflow-x: hidden;
      a {
         color: inherit;
         }
      p {
         color: var(--dark-primary);
         font-family: 'Tahoma', sans-serif;
      }   
   }
`;

export default GlobalStyle;

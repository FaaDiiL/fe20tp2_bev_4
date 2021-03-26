import { createGlobalStyle } from "styled-components";

// Default
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    margin-top: 50px;
  }
  :root {
    --headerFontColor: #571d85;
    --buttonHoverColor: #3f1363;
  }

  h1,h2,h3,h4,h5,h6{
    color: var(--headerFontColor);
  }
  button{
    background: var(--headerFontColor);
    color: white;
  }
  select{
    color:black;
    box-shadow: 1px 3px 5px var(--headerFontColor);
  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .accountMenu{
    background: var(--headerFontColor);
    
    h1, h3, h4{
      color:white;
      &:hover:not(h4):not(h1) {
        cursor: pointer;
        background-color: var(--buttonHoverColor); 
      }
    }
  }
  .chooseBank{
      color: black;
    }
  .header{
    box-shadow: 0 5px 20px -10px var(--buttonHoverColor);
  }
`;
// Swedbank
export const GlobalStyleSB = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
    max-width: 1200px;
  }

  :root {
    --headerFontColor: #f35b1c;
    --buttonHoverColor: #c64511;
  }

  h1,h2,h3,h4,h5,h6{
    color: var(--headerFontColor);
  }
  button{
    background: var(--headerFontColor);
    color: white;
  }
  select{
    color: black;
    box-shadow: 1px 3px 5px var(--headerFontColor); 
  }
  select option {
    color: black;
  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .accountMenu{
    background: var(--headerFontColor);
    
    h1, h3, h4{
      color:white;
      &:hover:not(h4):not(h1) {
        cursor: pointer;
        background-color: var(--buttonHoverColor); 
      }
    }
    .chooseBank{
      color: black;
    }
    .header{
      box-shadow: 0 5px 20px -10px var(--buttonHoverColor);
    }
  }
`;
// Länsförsäkringar

export const GlobalStyleLF = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    ${'' /* background-color: grey; */}

    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
    max-width: 1200px;
  }
    :root {
    --headerFontColor: #005aa0;
    --buttonHoverColor: #004982;
  }
  h1,h2,h3,h4,h5,h6{
    color: var(--headerFontColor);
  }
  button{
    background: var(--headerFontColor);
    color: white;
  }
  select{
    color:black;
    box-shadow: 1px 3px 5px var(--headerFontColor); 

  }
  select option {
    background: white;
    color: black;

  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .accountMenu{
    background: var(--headerFontColor);
    
    h1, h3, h4{
      color:white;
      &:hover:not(h4):not(h1) {
        cursor: pointer;
        background-color: var(--buttonHoverColor); 
      }
    }
  }
  .chooseBank{
      color: black;
    }
  .header{
    box-shadow: 0 5px 20px -10px var(--buttonHoverColor);
  }
`;

export default GlobalStyle;

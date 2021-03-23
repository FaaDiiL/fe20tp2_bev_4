import styled,{ createGlobalStyle } from "styled-components";

// Default
const GlobalStyle = createGlobalStyle`
:root {
  --headerFontColor: #571d85;
}

  h1,h2,h3,h4,h5,h6{
    color: var(--headerFontColor);
  }
  button{
    background: var(--headerFontColor);
    color: white;
  }
`;
// Swedbank
export const GlobalStyleSB = createGlobalStyle`
:root {
  --headerFontColor: #f35b1c;
}

  h1,h2,h3,h4,h5,h6{
    color: var(--headerFontColor);
  }
  button{
    background: var(--headerFontColor);
    color: white;
  }
  select{
    background: var(--headerFontColor);
  }
  select option {
    background: white;
    color: black;

  }
`;
// Länsförsäkringar

export const GlobalStyleLF = createGlobalStyle`
  :root {
  --headerFontColor: #005aa0;
}
  h1,h2,h3,h4,h5,h6{
    color: var(--headerFontColor);
  }
  input {
    color: black;
    border-bottom: 3px solid #571d85; 
  }
  button{
    background: var(--headerFontColor);
    color: white;
  }
  select{
    background: var(--headerFontColor);
  }
  select option {
    background: white;
    color: black;

  }
`;

export default GlobalStyle;

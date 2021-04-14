import { createGlobalStyle } from "styled-components";

// Default
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    margin-top: 150px;
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
    border: none;
  }

  .dashboard-add-btn{
    color: var(--headerFontColor);
    padding: 5px;
    color: white;
    border: none;
    &:hover{
      background-color:var(--headerFontColor);
    }
  }
  select{
    color:black;
    box-shadow: 1px 3px 5px #9e9e9e;
  }
  .dashboard-form input {
    margin-top: 15px;
    color: black;
    border-bottom: 3px solid var(--headerFontColor); 
  }
  .mainNav li{
    &:hover  {
      color: var(--headerFontColor);
    }
  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .accountMenu{
    background: var(--headerFontColor);
  }    
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

.footer { 
  box-shadow: 0 5px 30px -10px var(--buttonHoverColor);
}

.contact-form {
  background-color: var(--headerFontColor);
}

.contact-form-btn {
  background-color: var(--buttonHoverColor);
  &:hover{
    background-color:var(--buttonHoverColor);
  }

.window-view-height{
 min-height: 75vh;
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
    margin-top: 150px;
  }

  :root {
    --headerFontColor: #f35b1c;
    --buttonHoverColor: #c64511;
  }

  h1,h2,h3,h4,h5,h6{
    color: var(--headerFontColor);
  }
  button{
    background: var(--buttonHoverColor);
    color: white;
    border: none;
  }
  select{
    box-shadow: 1px 3px 5px #9e9e9e;
    color: black;
  }
  select option {
    color: black;
  }
  .dashboard-form input {
    margin-top: 15px;
    color: black;
    border-bottom: 3px solid var(--headerFontColor); 
  }
  .mainNav li{
    &:hover  {
      color: var(--headerFontColor);
    }
  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .accountMenu{
    background: var(--headerFontColor);
  }
    
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
  }
  .header{
    box-shadow: 0 5px 20px -10px var(--buttonHoverColor);
  }

  .footer { 
      box-shadow: 0 5px 30px -10px var(--buttonHoverColor);
  }


.dashboard-add-cur-btn { 
  &:hover{
    background-color:var(--headerFontColor);
  }
}


.dashboard-add-btn{
  color: var(--headerFontColor);
  padding: 5px;
  color: white;
  border: none;
  &:hover{
    background-color:var(--headerFontColor);
  }
}

.contact-form {
  background-color: var(--headerFontColor);
}
.contact-form-btn {
  background-color: var(--buttonHoverColor);
  &:hover{
    background-color:var(--buttonHoverColor);
  }
}

.window-view-height{
 min-height: 65vh;
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
    margin: 0 auto;
    margin-top: 150px;
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
    border: none;
  }
  select{
    color:black;
    box-shadow: 1px 3px 5px #9e9e9e;
  }
  select option {
    background: white;
    color: black;

  }
  .dashboard-form input {
    margin-top: 15px;
    color: black;
    border-bottom: 3px solid var(--headerFontColor); 
  }
  .mainNav li{
    &:hover  {
      color: var(--headerFontColor);
    }
  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .accountMenu{
    background: var(--headerFontColor);
  }

  .window-view-height{
    height: 65vh;
   
  }
    
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

    .footer { 
      box-shadow: 0 5px 30px -10px var(--buttonHoverColor);
  }
    

.dashboard-add-btn{
  color: var(--headerFontColor);
  padding: 5px;
  color: white;
  border: none;
  &:hover{
    background-color:var(--headerFontColor);
  }
}

.dashboard-add-cur-btn {  
  &:hover{
    background-color:var(--headerFontColor);
  } 
}

  .contact-form {
    background-color: var(--headerFontColor);
  }

  .contact-form-btn {
    background-color: var(--buttonHoverColor);
    &:hover{
      background-color:var(--buttonHoverColor);
    }
  }
  .window-view-height{
    min-height: 65vh;
   }
`;

export default GlobalStyle;

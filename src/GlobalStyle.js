import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto"
import "fontsource-montserrat"

// Default
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: "Montserrat";
    min-width: 325px;
    margin-top: 150px;
  }
  :root {
    --headerFontColor: #571d85;
    --buttonHoverColor: #571996f1;
  }
  
  h1,h2,h3,h4,h5,h6{
    color: var(--headerFontColor);
  }
  button{
    background: var(--headerFontColor);
    color: white;
    border: none;
    border-radius: 4px;
    font-family: 'roboto';

    &:hover{
      background-color: var(--buttonHoverColor);
      
    }
  }

  .dashboard-add-btn{
    color: var(--headerFontColor);
    padding: 5px;
    color: white;
    border: none;
    font-family: 'roboto';
    &:hover{
      background-color:var(--headerFontColor);
    }
  }
  select{
    color:black;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid var(--headerFontColor);
  }
  .dashboard-form input {
    margin-top: 15px;
    color: black;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid var(--headerFontColor); 
  }

  .text-currency-converter{ 
    background-color: var(--headerFontColor);
    color: white;
  }
  .curr-conv-arrow-btn{ 
    background: none;
    color: var(--headerFontColor);

    &:hover {
      color: var(--buttonHoverColor); 
    }
  }
  .mainNav li{
    &:hover  {
        color: white;
        background-color: #571d85;
    }
  }
  input {
    color: black;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid var(--headerFontColor)
  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .adminMenu{
    background: var(--headerFontColor);
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
  background-color: var(--headerFontColor);
  &:hover{
    background-color:var(--buttonHoverColor);
  }
}

.Error-page-infobox{
  background-color: var(--headerFontColor);
}

.window-view-height{
 min-height: 75vh;
}
.icon{
  background: var(--headerFontColor);
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
    font-family: roboto;

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
    border: none;
    border-radius: 4px;
    font-family: 'roboto';
    
    &:hover{
      background-color: var(--buttonHoverColor);
    }
  }
  .curr-conv-arrow-btn{ 
    background: none;
    color: var(--headerFontColor);
    
    &:hover {
      color: var(--buttonHoverColor) ; 
    }
  }

  select option {
    color: black;
  }

  .dashboard-form input {
    margin-top: 15px;
    color: black;
    border-bottom: 3px solid var(--headerFontColor); 
  }

.dashboard-form select {
    color: black;
    border-bottom: 3px solid var(--headerFontColor); 
  }

  .text-currency-converter{ 
    background-color: var(--headerFontColor);
    color: white;
      }


  .mainNav li{
    &:hover  {
      color: white;
      background-color: var(--headerFontColor);
    }
  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .adminMenu{
    background: var(--headerFontColor);
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

.dashboard-add-cur-btn { 
  &:hover{
    background-color:var(--buttonHoverColor);
  }
}

.dashboard-add-btn{
  color: var(--headerFontColor);
  padding: 5px;
  color: white;
  border: none;
  &:hover{
    background-color:var(--buttonHoverColor);
  }
}

.contact-form {
  background-color: var(--headerFontColor);
}
.contact-form-btn {
  background-color: var(--headerFontColor);
  &:hover{
    background-color:var(--buttonHoverColor);
  }
}

.Error-page-infobox{
  background-color: var(--headerFontColor);
}

.window-view-height{
 min-height: 65vh;
}

.icon{
  background: var(--headerFontColor);
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
    font-family: roboto;

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
    border-radius: 4px;
    font-family: 'roboto';
    
    &:hover{
      background-color: var(--buttonHoverColor);
    }
  }
  .curr-conv-arrow-btn{ 
    background: none;
    color: var(--headerFontColor);
    
    &:hover {
      color: var(--buttonHoverColor) ; 
    }
  }

  select option {
    color: black;
  }

  .dashboard-form input {
    margin-top: 15px;
    color: black;
    border-bottom: 3px solid var(--headerFontColor); 
  }

.dashboard-form select {
    color: black;
    border-bottom: 3px solid var(--headerFontColor); 
  }

  .text-currency-converter{ 
    background-color: var(--headerFontColor);
    color: white;
      }

  .mainNav li{
    &:hover  {
      color: white;
      background-color: var(--headerFontColor);
    }
  }
  .borderColor{
    border: 2px solid var(--headerFontColor);
  }
  .adminMenu{
    background: var(--headerFontColor);
  }
  .adminResetPassword{
    background: var(--headerFontColor);
    &:hover {
        cursor: pointer;
        background-color: var(--buttonHoverColor); 
      }
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

 

.dashboard-add-cur-btn { 
  &:hover{
    background-color:var(--buttonHoverColor);
  }
}

.dashboard-add-btn{
  color: var(--headerFontColor);
  padding: 5px;
  color: white;
  border: none;
  &:hover{
    background-color:var(--buttonHoverColor);
  }
}

.contact-form {
  background-color: var(--headerFontColor);
}
.contact-form-btn {
  background-color: var(--headerFontColor);
  &:hover{
    background-color:var(--buttonHoverColor);
  }
}

.Error-page-infobox{
  background-color: var(--headerFontColor);
}

.window-view-height{
 min-height: 65vh;
}

.icon{
  background: var(--headerFontColor);
}
`;

export default GlobalStyle;

import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
display: flex;
align-items: center; 
justify-content: center;
flex-direction: column;
margin: 0 auto;

margin-top: 100px;
padding: 50px;
width: 100%;


h1 { 
text-align: center;
display: block;

letter-spacing: 1.5px;
}

p {

     margin-top: 40px;
}
`;
function Contact (){
     return (
          <StyledContainer>
      <h1>Need anything? Contact us!</h1>
      
          </StyledContainer>
     )
}

export default Contact;

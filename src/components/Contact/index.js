import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
display: flex;
align-items: center; 
justify-content: center;
flex-direction: column;
margin: 0 auto;
box-shadow: 1px 3px 5px #571D85;
margin-top: 100px;
padding: 50px;
width: 100%;
background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));

h1 { 
text-align: center;
display: block;
color: white;
letter-spacing: 1.5px;
}

p {
     color: white;
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

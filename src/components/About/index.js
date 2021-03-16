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

display: block;
color: white;
letter-spacing: 1.5px;
}

p {
     color: white;
     margin-top: 40px;
     line-height: 1.5;
}
`;

function About (){
     return (
          <StyledContainer>
      <h1>About BEV</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra posuere leo, sed luctus est volutpat sed. Aliquam in turpis non libero efficitur vulputate cursus nec nisi. Fusce mattis, augue at faucibus malesuada, leo quam fermentum orci, vehicula volutpat dui orci a nunc. Sed accumsan quis neque a aliquet. Quisque efficitur, leo ut euismod tempus, ante lacus volutpat purus, a suscipit lectus velit eu lectus. Suspendisse eu dolor eu eros placerat dictum et bibendum risus. Nulla rutrum turpis tortor. Donec sapien erat, auctor non efficitur ac, dictum sit amet massa. Pellentesque tincidunt urna quis porta rhoncus. Sed vitae quam velit. Vivamus nec molestie neque, vel vestibulum ligula. Curabitur tristique, libero ultricies facilisis semper, ligula tellus mollis arcu, id ultrices magna erat et odio. Curabitur ligula elit, vestibulum sit amet maximus at, fermentum id nibh.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas fermentum erat sed leo scelerisque venenatis. Nam posuere efficitur porttitor. Ut egestas libero sit amet sapien feugiat, placerat ultrices eros facilisis. Vivamus dolor nibh, scelerisque sed tellus ut, rutrum egestas massa. Suspendisse ipsum elit, maximus sit amet eleifend eget, placerat ut lorem. Morbi at lacus faucibus, placerat lectus sed, viverra metus. Donec dapibus ante in purus iaculis pretium. Suspendisse eu mauris vitae risus finibus tempus et non orci. Suspendisse potenti. Pellentesque eget ultrices urna, quis pellentesque eros. Pellentesque convallis diam in dignissim eleifend. Aenean luctus bibendum diam. 

      </p>
          </StyledContainer>
     )
}

export default About;

import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  margin-top: 100px;
  padding: 50px;
  width: 100%;

  h2 {
    display: block;
    letter-spacing: 1.5px;
    font-size: 2.3em;
  }

  p {
    width: 70%;
    margin-top: 40px;
    line-height: 1.5;
    text-align: center;
  }
`;

function About() {
  return (
    <>
      <StyledContainer>
        <h2>About BEV</h2>
        <p>
        We are a currency management application, where you can create an account and convert currencies, store currency data in graphs and keep track of the different currency market fluctuations.
        </p>
      </StyledContainer>
    </>
  );
}

export default About;

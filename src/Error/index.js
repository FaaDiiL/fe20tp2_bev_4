import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
flex-flow: column-wrap;
margin-top: 100px;
`;

const Title = styled.h2`
color: black; 
text-align: center;
margin-top: 50px;
margin-bottom: 50px;
`;

const InfoBox = styled.div`
width: 50%;
padding: 10px 50px 10px 50px;
border-radius: 6px;
background-image: linear-gradient(rgba(194, 186, 175, 0.432), rgba(56, 54, 50, 0.623));
`;


const Error = () => {
    return (
        <Container>
            <InfoBox>
                <Title>You did something wrong. Page does not exist! </Title>
                <p>Try again!</p>
            </InfoBox>
        </Container>
    );
}

export default Error;

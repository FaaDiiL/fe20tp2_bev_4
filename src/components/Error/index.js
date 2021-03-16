import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
margin-top: 100px; 

`;

const Title = styled.h2`
color: black; 
text-align: center;
margin-top: 50px;
margin-bottom: 50px;
color: white;
`;

const InfoBox = styled.div`
min-height: 250px;
padding: 10px 50px 10px 50px;
border-radius: 6px;
width: 100%;
background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));

p{
    text-align: center;
    color: white;
}
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

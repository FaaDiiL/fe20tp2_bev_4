import styled from 'styled-components';
import { Switch, Route, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";



const Title = styled.h2`
color: black; 
text-align: center;
margin-top: 50px;
margin-bottom: 50px;
color: white;
`;

const InfoBox = styled.div`
display: flex;
justify-content: center; 
align-items: center;
flex-direction: column;
min-height: 250px;
padding: 10px 50px 10px 50px;
border-radius: 6px;
width: 100%;
background-image: linear-gradient(rgba(109, 84, 129, 0.829), rgb(96, 57, 128));

`;


const Error = () => {
    return (
        <>
        <Switch>
        <Route exact path={ROUTES.LANDING} />
      </Switch>

            <InfoBox>
                <Title>You did something wrong. Page does not exist! </Title>
                <Link
                  to={{
                    pathname: `${ROUTES.LANDING}`,
                  }}
                > 
                  Take me back
                </Link>
            </InfoBox>
        </>
    );
}

export default Error;

import styled from 'styled-components'
import PasswordChangeForm from '../PasswordChange'

const Title = styled.h3`
margin: 0 auto;
padding: 20px;
`;

function Password ()  {
    return ( 
<div>
            <Title>Change Password</Title>
            <PasswordChangeForm />
            </div>
     );
}
 
export default Password;


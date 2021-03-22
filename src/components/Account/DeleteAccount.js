import styled from 'styled-components'


const Container = styled.div`
display: block;

h3{
    margin: 20px;
}

button{
    margin: 20px;
    padding: 10px;
&:hover{
    cursor: pointer;
    text-decoration: underline;
}
}
`;


function DeleteAccount () {
    return ( 
             <Container>
        <h3>
          Delete Account
          </h3>
          <button>Delete account</button>
          </Container>
  );
}
 
export default DeleteAccount;
         
     
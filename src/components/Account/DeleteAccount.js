import styled from 'styled-components'
import { AuthUserContext, withAuthorization } from "../Session";
import "firebase/auth";
import "firebase/database";
import firebase from 'firebase'
import app from "firebase/app";


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

    

    function Delete() {
        let user = firebase.auth().currentUser;

        let userRef = app.database().ref(`users/${user.uid}`);
        userRef.remove() 
     
    
    user.delete()
    .catch(function(error) {
        alert("Error. It was too long ago since you logged in. Please log out, and then back in, and try deleting your account again")
      })  
    }

    return ( 
        <AuthUserContext.Consumer>
        {(authUser) => (
  
             <Container>
        <h3>
          Delete Account
          </h3>
          <button onClick={Delete}>Delete account</button>
          </Container>
    )}
    </AuthUserContext.Consumer>
  )};



  const condition = (authUser) => !!authUser;

  export default withAuthorization(condition)(DeleteAccount);
 

         
     